let estrategias = {
    gale: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    ficha: 0,
    fichaEmpate: 0,
    empatePorcent: 0,
    dragaoPorcentMaximo: 0,
    tigrePorcentMaximo: 0,
    dragaoPorcentMinimo: 0,
    tigrePorcentMinimo: 0,
    dragaoPorcentMaximoLimite: 0,
    tigrePorcentMaximoLimite: 0,
    dragaoPorcentMinimoLimite: 0,
    tigrePorcentMinimoLimite: 0,
    stopGain: 1,
    stopLoss: 1,
    posGain: 1,
    posLoss: 1,
    terminal: [],
    statusBot: 0,
    token: '',
    chat: ''
}

let contagemLoss = 0;
let contagemWin = 0;
let contagemPosLoss = 0;
let contagemPosGain = 0;
let load = 0;
let display = false;
let displayPercent = false;
let rodada = 0;
let historico = [];
let qtdHistAtual = 0;
let qtdHistAnotado = 0;
let gatilhoConfirmado = 0;
let liberadoApostar = false;
let liberadoDobrarAposta = false;
let cicloGale = 1;
let ajusteHistorico = 0;
let qtdEventos = 0;
let assertividade = 0;
let achouFicha = false;
let achouFichaEmpate = false;
let ociosidade = 0;
let liberarApostaOciosa = false;
let porcentagemTigre = 0;
let porcentagemDragao = 0;
let porcentagemEmpat = 0;
let request = new XMLHttpRequest();
let messageId = 0;

function enviarMsgTelegram(msg) {
    try {
        if (estrategias.token != undefined && estrategias.token != '' && estrategias.chat != undefined && estrategias.chat != '') {

            request.onreadystatechange = function () {
                if (request.readyState == XMLHttpRequest.DONE) {
                    messageId = JSON.parse(request.response).result.message_id;
                }
            }
            request.open("POST", `https://api.telegram.org/bot${estrategias.token}/sendMessage`, true);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify({ chat_id: estrategias.chat, text: msg }));

        }
    } catch (err) {
        atualizarHistorico('Erro na Api do Telegram - não enviou a mensagem');
    }

}

function atualizarHistorico(protocolo) {
    chrome.storage.local.get(["historico"], (res) => {

        let historico = [];
        if (res.historico == undefined) {
            historico = [];
        } else {
            historico = res.historico;
        }

        historico.unshift(protocolo);

        if (historico.length > 100) {
            historico.pop();
        }

        chrome.storage.local.set({
            historico,
        }, () => {
        });

    })
}

async function carregarConfiguracao() {
    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao) {
        let checkData = await oetwudgs(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {
            if (checkData.usuario.bot_dragon_tiger == 1) {
                let dataConfig = await pzvstdue(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_dragon_tiger');
                if (dataConfig.error) {
                    console.warn('Erro ao obter as configurações ');
                } else {
                    estrategias = dataConfig;
                }
            } else {
                console.warn('Erro ao obter as configurações ');
            }
        } else if (checkData.error) {
            console.warn('Erro ao obter as configurações ');
        }
    } else {
        console.warn('Erro ao obter as configurações ');
    }
}

function dataHora() {
    let date = new Date;
    let day = date.getDate();
    let mount = date.getMonth();
    let year = date.getFullYear();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    return `${day}/${(mount + 1)}/${year} - ${hour}:${minutes}:${seconds}`;
}

async function click(element) {
    if (!element) {
        console.info("❌ Elemento não encontrado!");
        return;
    }

    let { x, y } = getElementPositionInsideIframe(element);
    console.info(`📌 Clicando no elemento ajustado: X=${x}, Y=${y}`);

    try {
        const response = await enviarMensagem("trustedClick", { x, y });

        if (!response || !response.success) {
            console.info("❌ Erro ao simular o clique:", response);
        } else {
            console.info("✅ Clique realizado com sucesso!");
        }
    } catch (error) {
        console.info("❌ Erro inesperado ao executar o clique:", error);
    }
}

function getElementPositionInsideIframe(element) {
    if (!element) return null;

    // Obtém a posição relativa ao iframe
    let rect = element.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;

    // Ajusta com a posição do iframe na janela principal
    let iframe = element.closest("iframe");
    if (iframe) {
        let iframeRect = iframe.getBoundingClientRect();
        x += iframeRect.left;
        y += iframeRect.top;
    }

    return { x, y };
}

async function clicarNoHistorico() {
    await click(document.getElementsByClassName('roads--cc971')[0].children[0]);
}

function defineCor(elemento) {

    if (elemento.children[0].children[0].attributes.fill.textContent === 'rgb(255,194,27)') {
        return 'T';
    } else if (elemento.children[0].children[0].attributes.fill.textContent === 'rgb(241,36,36)') {
        return 'D';
    } else if (elemento.children[0].children[0].attributes.fill.textContent === 'rgb(21,146,82)') {
        return 'E';
    } else {
        return '';
    }

}

function qtdEmpate() {
    if (document.getElementsByClassName('count--f6a36')[3] != undefined) {
        return parseInt(document.getElementsByClassName('count--f6a36')[3].textContent);
    } else {
        return 0;
    }
}

function qtdTiger() {
    if (document.getElementsByClassName('count--f6a36')[2] != undefined) {
        return parseInt(document.getElementsByClassName('count--f6a36')[2].textContent);
    } else {
        return 0;
    }
}

function qtdDragon() {
    if (document.getElementsByClassName('count--f6a36')[1] != undefined) {
        return parseInt(document.getElementsByClassName('count--f6a36')[1].textContent);
    } else {
        return 0;
    }
}

function total() {
    return qtdEmpate() + qtdTiger() + qtdDragon();
}

function calcularPorcentagem(valor, total) {
    return ((valor / total) * 100).toFixed(2);
}

function porcentagemEmpate() {
    return calcularPorcentagem(qtdEmpate(), total());
}

function porcentagemTiger() {
    return calcularPorcentagem(qtdTiger(), total());
}

function porcentagemDragon() {
    return calcularPorcentagem(qtdDragon(), total());
}

function listarHistorico() {

    let gatilhosValidos = ['D2', 'T2', 'E2', 'D3', 'T3', 'E3',
        'D4', 'T4', 'E4', 'D5', 'T5', 'E5', 'D6', 'T6', 'E6', 'D7', 'T7', 'E7',
        'D8', 'T8', 'E8', 'D9', 'T9', 'E9', 'D10', 'T10', 'E10', 'DA', 'TA', 'EA',
        'DJ', 'TJ', 'EJ', 'DQ', 'TQ', 'EQ', 'DK', 'TK', 'EK'];

    historico = [];
    let hist = document.querySelectorAll('.roads--cc971 .svg--c8f9e');
    for (let i = (hist.length - 1); i >= 0; i--) {

        if (document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i].textContent !== undefined
            && document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i].textContent !== ''
            && document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i].textContent !== "") {

            let elemento = '';
            elemento = defineCor(document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i]);

            if (gatilhosValidos.includes(elemento.concat("", document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i].textContent))) {
                historico.push(elemento.concat("", document.querySelectorAll('.roads--cc971 .svg--c8f9e')[i].textContent));
            }

        }
    }
}

function confirmarAposta() {

    listarHistorico();

    let confirmacao = false;
    porcentagemTigre = porcentagemTiger();
    porcentagemDragao = porcentagemDragon();
    porcentagemEmpat = porcentagemEmpate();

    if (historico.length >= estrategias.historico) {
        for (let i = 0; i < estrategias.terminal.length; i++) {
            for (let x = 0; x < estrategias.terminal[i].gatilho.length; x++) {

                if (estrategias.terminal[i].gatilho[x].length == 1) {
                    if (estrategias.terminal[i].gatilho[x] == historico[x][0]) {
                        confirmacao = true;
                    } else if (estrategias.terminal[i].gatilho[x] == 'N') {
                        confirmacao = true;
                    } else {
                        confirmacao = false;
                        break;
                    }
                } else {
                    if (estrategias.terminal[i].gatilho[x] == historico[x]) {
                        confirmacao = true;
                    } else if (estrategias.terminal[i].gatilho[x] == 'N') {
                        confirmacao = true;
                    } else if (estrategias.terminal[i].gatilho[x] == 'DE' && (historico[x][0] == 'D' || historico[x][0] == 'E')) {
                        confirmacao = true;
                    } else if (estrategias.terminal[i].gatilho[x] == 'TE' && (historico[x][0] == 'T' || historico[x][0] == 'E')) {
                        confirmacao = true;
                    } else {
                        confirmacao = false;
                        break;
                    }
                }

            }
            if (confirmacao) {
                gatilhoConfirmado = i;
                calcularAssertividade(estrategias.terminal[i]);
                if (parseInt(estrategias.eventoMinimo) <= parseInt(qtdEventos) &&
                    parseInt(estrategias.eventoMaximo) >= parseInt(qtdEventos) &&
                    parseInt(estrategias.iaMinimo) <= parseInt(assertividade) &&
                    parseInt(estrategias.iaMaximo) >= parseInt(assertividade)) {

                    if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'D' &&
                        porcentagemDragao >= parseInt(estrategias.dragaoPorcentMinimo) &&
                        porcentagemDragao <= parseInt(estrategias.dragaoPorcentMaximo) &&
                        porcentagemTigre >= parseInt(estrategias.tigrePorcentMinimoLimite) &&
                        porcentagemTigre <= parseInt(estrategias.tigrePorcentMaximoLimite)) {
                        confirmacao = true;
                        break;
                    } else if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'T' &&
                        porcentagemTigre >= parseInt(estrategias.tigrePorcentMinimo) &&
                        porcentagemTigre <= parseInt(estrategias.tigrePorcentMaximo) &&
                        porcentagemDragao >= parseInt(estrategias.dragaoPorcentMinimoLimite) &&
                        porcentagemDragao <= parseInt(estrategias.dragaoPorcentMaximoLimite)) {
                        confirmacao = true;
                        break;
                    } else if (estrategias.terminal[gatilhoConfirmado].gatilho[0][0] == 'E') {
                        confirmacao = true;
                        break;
                    } else if (estrategias.terminal[gatilhoConfirmado].gatilho[0][0] == 'N') {
                        confirmacao = true;
                        break;
                    } else {
                        confirmacao = false;
                        break;
                    }

                } else {
                    confirmacao = false;
                    break;
                }
            }
        }
    }

    return confirmacao;
}

function calcularAssertividade(terminal) {
    let incEventos = 0;
    let incAcertos = 0;
    let gatilhoInverso = [terminal.gatilho[0]];
    gatilhoInverso.reverse();

    let historicoInverso = [];
    for (let i = 0; i < parseInt(estrategias.historico); i++) {
        historicoInverso.push(historico[i]);
    }
    historicoInverso.reverse();

    for (let index = 0; index < parseInt(estrategias.historico); index++) {

        let achouGatilho = true;

        for (let indexGate = 0; indexGate < gatilhoInverso.length; indexGate++) {
            if (gatilhoInverso[indexGate].length > 1) {
                if (gatilhoInverso[indexGate] == historicoInverso[index]) {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else if (gatilhoInverso[indexGate] == 'N') {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else if (gatilhoInverso[indexGate] == 'DE' && (historicoInverso[index][0] == 'D' || historicoInverso[index][0] == 'E')) {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else if (gatilhoInverso[indexGate] == 'TE' && (historicoInverso[index][0] == 'T' || historicoInverso[index][0] == 'E')) {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else {
                    achouGatilho = false;
                    break;
                }
            } else {
                if (gatilhoInverso[indexGate] == historicoInverso[index][0]) {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else if (gatilhoInverso[indexGate] == 'N') {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        achouGatilho = false;
                        break;
                    }
                } else {
                    achouGatilho = false;
                    break;
                }
            }

        }

        if (achouGatilho) {
            incEventos++
            for (let i = 0; i < parseInt(estrategias.gale); i++) {

                if (terminal.aposta[0] == historicoInverso[index][0]) {
                    incAcertos++
                    break;
                } if (parseInt(estrategias.fichaEmpate) > 0 && historicoInverso[index][0] == 'E') {
                    incAcertos++
                    break;
                } else {
                    if (index + 1 < parseInt(estrategias.historico)) {
                        index++;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    qtdEventos = incEventos;
    if (qtdEventos == 0) {
        assertividade = 0;
    } else {
        assertividade = Math.round((incAcertos / incEventos) * 100);
    }

}

async function selecionaFicha() {

    if (estrategias.ficha == 1) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
                document.getElementsByClassName(`chip--29b81`)[i].textContent == '2.50') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 2) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 3) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '10') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 5) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 6) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.ficha == 7) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    }
}

async function selecionaFichaEmpate() {

    if (estrategias.fichaEmpate == 1) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
                document.getElementsByClassName(`chip--29b81`)[i].textContent == '2.50') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 2) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 3) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '10') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 5) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 6) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 7) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    }
}

async function apostar() {
    if (liberadoApostar) {
        await selecionaFicha();

        if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'D' && achouFicha && parseInt(estrategias.ficha) > 0) {
            await apostarDragao();
        }

        if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'T' && achouFicha && parseInt(estrategias.ficha) > 0) {
            await apostarTigre();
        }

        if (parseInt(estrategias.fichaEmpate) > 0 && porcentagemEmpate() >= parseInt(estrategias.empatePorcent) && parseInt(estrategias.ficha) > 0) {
            await selecionaFichaEmpate();
            if (achouFichaEmpate) {
                await apostarEmpate();
            }
        }

    }

    liberadoApostar = false;

    if (liberadoDobrarAposta) {
        if (parseInt(estrategias.ficha) > 0) {
            await repetirAposta();
            await new Promise(resolve => setTimeout(resolve, 200));
            await repetirAposta();
        }

    }

    liberadoDobrarAposta = false;

    if (liberarApostaOciosa) {
        await apostarTigre();
        await new Promise(resolve => setTimeout(resolve, 200));
        await desfazerAposta();
    }

    liberarApostaOciosa = false;

}

function confirmarGreen(resultado) {
    if (estrategias.terminal[gatilhoConfirmado].aposta == resultado[0]) {
        return true
    } else if (parseInt(estrategias.fichaEmpate) > 0 && resultado[0] === 'E') {
        return true
    } else {
        return false
    }
}

async function repetirAposta() {
    await click(document.getElementsByClassName('button--673ce sm--8ab3e roundingBoth--6d5e6 buttonRoot--715a7')[0]);
}

async function apostarDragao() {
    await click(document.getElementsByClassName('payout--c05ce isTabletDesktop--747ca isDesktop--434e9 smallLabels--0ae7c withStats--a0c3b')[2]);
}

async function apostarTigre() {
    await click(document.getElementsByClassName('payout--c05ce isTabletDesktop--747ca isDesktop--434e9 smallLabels--0ae7c withStats--a0c3b')[3]);
}

async function apostarEmpate() {
    await click(document.getElementsByClassName('payout--c05ce isTabletDesktop--747ca isDesktop--434e9 smallLabels--0ae7c withStats--a0c3b')[0]);
}

async function desfazerAposta() {
    await click(document.getElementsByClassName('button--673ce sm--8ab3e roundingBoth--6d5e6 buttonRoot--3bd4d')[0]);
}

function valorBanca() {

    let valorString = document.getElementsByClassName('amount--f8dd5')[0].textContent;

    if (valorString.includes(',')) {
        valorString = valorString.replace(/[^0-9,]/g, '').replace(',', '.');
    } else if (valorString.includes('.') && valorString.includes(',')) {
        valorString = valorString.replace(/[^\d.]/g, '').replace(',', '.').replace('.', '');
    } else if (valorString.includes('.')) {
        valorString = valorString.replace(/[^\d.]/g, '').replace('.', '');
    } else {
        valorString = valorString.replace(/[^\d.]/g, '').replace(',', '.');
    }

    let valorNumerico = parseFloat(valorString);
    return valorNumerico;

}

function fazerPosLoss() {
    if (estrategias.posLoss > 0) {
        if (contagemPosLoss < estrategias.posLoss) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isAlphanumericString(str) {
    return /[0-9]/.test(str);
}

async function analisarDragonTiger() {
    if (!display) {
        const parentElement = document.querySelector('.content--5212b');
        if (parentElement) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = 'AUTO BOT DRAGON TIGER';
            novoSpan.id = 'dragon-tiger';
            novoSpan.style.fontSize = 'medium';
            parentElement.appendChild(novoSpan);
        }
        display = true;
    }

    if (!displayPercent) {
        const parentElement = document.getElementsByClassName('content--5212b')[1];
        if (parentElement) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
            novoSpan.id = 'dragon-tiger-percent';
            novoSpan.style.fontSize = 'medium';
            parentElement.appendChild(novoSpan);
        }
        displayPercent = true;
    }

    if (!isAlphanumericString(document.getElementsByClassName(`beadRoad--7008e`)[0].textContent.substring(1))) {
        clicarNoHistorico();
    }

    if (document.querySelectorAll('.roads--cc971 .svg--c8f9e')) {
        qtdHistAtual = document.querySelectorAll('.roads--cc971 .svg--c8f9e').length;
    }

    if (liberarApostaOciosa) {

        document.getElementById('dragon-tiger').textContent = `APOSTANDO E CANCELANDO PRA MANTER ATIVIDADE NA MESA`;
        document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;

    } else if (rodada == 0 && isAlphanumericString(document.getElementsByClassName(`beadRoad--7008e`)[0].textContent.substring(1))) {
        document.getElementById('dragon-tiger').textContent = `BANCA R$ ${valorBanca()}  AGUARDANDO RODADA`;
        qtdHistAnotado = qtdHistAtual;
        rodada++;

    } else if (rodada == 1 && qtdHistAnotado != qtdHistAtual) {

        if (confirmarAposta()) {

            if (fazerPosLoss()) {
                if (parseInt(estrategias.ficha) > 0) {
                    enviarMsgTelegram(`POS LOSS ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('dragon-tiger').textContent = `POS LOSS ${estrategias.terminal[gatilhoConfirmado].aposta[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('dragon-tiger').textContent = `SIMULANDO APOSTA ${estrategias.terminal[gatilhoConfirmado].aposta[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                }
            } else {
                liberadoApostar = true;
                if (parseInt(estrategias.ficha) > 0) {
                    enviarMsgTelegram(`APOSTANDO ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('dragon-tiger').textContent = `APOSTANDO ${estrategias.terminal[gatilhoConfirmado].aposta[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('dragon-tiger').textContent = `SIMULANDO APOSTA ${estrategias.terminal[gatilhoConfirmado].aposta[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                }
            }

            qtdHistAnotado = qtdHistAtual;
            rodada++;
        } else {
            document.getElementById('dragon-tiger').textContent = 'ESTRATEGIA NÃO CONFIRMADA NESSA RODADA';
            qtdHistAnotado = qtdHistAtual;
            rodada = 0;
        }

    } else if (rodada > 1 && qtdHistAnotado != qtdHistAtual) {

        listarHistorico();

        if (confirmarGreen(historico[0])) {

            contagemPosGain++;
            if (fazerPosLoss()) {
                contagemPosGain = 0;
                enviarMsgTelegram(`🟩GREEN FAKE🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM TIGRE : ${porcentagemTigre}%\nPORCENTAGEM DRAGÃO : ${porcentagemDragao}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟩GREEN FAKE🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM TIGRE : ${porcentagemTigre}% PORCENTAGEM DRAGÃO : ${porcentagemDragao}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('dragon-tiger').textContent = 'GREEN FAKE';
            } else {
                contagemWin++;
                if (parseInt(estrategias.posGain) <= contagemPosGain) {
                    contagemPosGain = 0;
                    contagemPosLoss = 0;
                }
                enviarMsgTelegram(`🟩GREEN🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM TIGRE : ${porcentagemTigre}%\nPORCENTAGEM DRAGÃO : ${porcentagemDragao}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟩GREEN🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM TIGRE : ${porcentagemTigre}% PORCENTAGEM DRAGÃO : ${porcentagemDragao}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('dragon-tiger').textContent = 'GREEN';
            }

            cicloGale = 1;
            rodada = 0;
            salvarStatus();
        } else if (estrategias.gale > (rodada - 2)) {

            if (fazerPosLoss()) {
                if (parseInt(estrategias.ficha) > 0) {
                    document.getElementById('dragon-tiger').textContent = `POS LOSS ${estrategias.terminal[gatilhoConfirmado].aposta[0]} GALE ${rodada - 1} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                    enviarMsgTelegram(`POS LOSS ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nGALE ${rodada - 1}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                } else {
                    document.getElementById('dragon-tiger').textContent = `SIMULANDO APOSTA EM ${estrategias.terminal[gatilhoConfirmado].aposta[0]} GALE ${rodada - 1} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                    enviarMsgTelegram(`SIMULANDO APOSTA EM ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nGALE ${rodada - 1}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                }

                cicloGale++;
                qtdHistAnotado = qtdHistAtual;
                rodada++;
            } else {
                if (parseInt(estrategias.ficha) > 0) {
                    document.getElementById('dragon-tiger').textContent = `APOSTANDO ${estrategias.terminal[gatilhoConfirmado].aposta[0]} GALE ${rodada - 1} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                    enviarMsgTelegram(`APOSTANDO ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nGALE ${rodada - 1}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                } else {
                    document.getElementById('dragon-tiger').textContent = `SIMULANDO APOSTA EM ${estrategias.terminal[gatilhoConfirmado].aposta[0]} GALE ${rodada - 1} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById('dragon-tiger-percent').textContent = `Tiger: ${porcentagemTigre}% Dragon: ${porcentagemDragao}% Empate: ${porcentagemEmpat}% `;
                    enviarMsgTelegram(`SIMULANDO APOSTA EM ${estrategias.terminal[gatilhoConfirmado].aposta[0]}\nGALE ${rodada - 1}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                }

                cicloGale++;
                liberadoDobrarAposta = true;
                qtdHistAnotado = qtdHistAtual;
                rodada++;
            }

        } else {

            if (fazerPosLoss()) {
                enviarMsgTelegram(`🟥RED FAKE🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM TIGRE : ${porcentagemTigre}%\nPORCENTAGEM DRAGÃO : ${porcentagemDragao}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟥RED FAKE🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM TIGRE : ${porcentagemTigre}% PORCENTAGEM DRAGÃO : ${porcentagemDragao}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('dragon-tiger').textContent = 'RED FAKE';
            } else {
                contagemLoss++;
                enviarMsgTelegram(`🟥RED🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM TIGRE : ${porcentagemTigre}%\nPORCENTAGEM DRAGÃO : ${porcentagemDragao}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟥RED🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM TIGRE : ${porcentagemTigre}% PORCENTAGEM DRAGÃO : ${porcentagemDragao}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('dragon-tiger').textContent = 'RED';
            }

            if (estrategias.posLoss > 0) {
                contagemPosLoss++;
            }


            cicloGale = 1;
            rodada = 0;
            salvarStatus();
        }

    }

    if (document.getElementsByClassName(`wrapper--8b249`).length > 0) {
        await apostar();
    }

}

async function fecharTutorial() {
    if (document.getElementsByClassName(`close--ed249`).length > 0) {
        await click(document.getElementsByClassName('close--ed249')[0]);
    }
}

setInterval(async () => {
    try {

        fecharTutorial();

        if (load == 0) {
            carregarConfiguracao();
            carregarStatus();
            load = 1;
        }

        if (document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3] != undefined) {
            await click(document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3]);
        }

        ociosidade++

        if (ociosidade > 40 && rodada === 0 && document.querySelectorAll('.roads--cc971 .svg--c8f9e')[0] != undefined) {
            liberarApostaOciosa = true;
            ociosidade = 0;
        }

        if (document.getElementById('dragon-tiger')) {
            if (contagemLoss >= estrategias.stopLoss || contagemWin >= estrategias.stopGain) {
                document.getElementById('dragon-tiger').textContent = 'STOP';
            } else if (document.querySelectorAll('.roads--cc971 .svg--c8f9e')[0] != undefined) {
                await analisarDragonTiger();
            }
        } else if (document.querySelectorAll('.roads--cc971 .svg--c8f9e')[0] != undefined) {
            await analisarDragonTiger();
        }

    } catch (err) {
        console.info(err);
    }

}, 5000);

function reset() {
    window.location.reload(true);
}

chrome.storage.onChanged.addListener((changes, areaName, namespace) => {
    if (areaName === 'local') {
        if (changes.hasOwnProperty('data')) {

            if (document.querySelectorAll('.roads--cc971 .svg--c8f9e')[0] != undefined) {
                carregarConfiguracao();
            }

        }
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openLink") {
        window.open(window.frames[0].frameElement.getAttribute("src"));
        sendResponse({
            type: "result",
            status: "sucess",
            data: "ok",
            req: request,
        });
    }
});

function enviarMensagem(action, data) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action, ...data }, response => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

function getChromeStorage(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
}

async function oetwudgs(email, senha) {
    const response = await enviarMensagem('oetwudgs', { email, senha });
    return response;
}

async function pzvstdue(email, senha, id, bot) {
    const response = await enviarMensagem('pzvstdue', { email, senha, id, bot });
    return response;
}

function salvarStatus() {
    let status = { posloss: contagemPosLoss, posgain: contagemPosGain, win: contagemWin, loss: contagemLoss };
    chrome.storage.local.set({ status });
}

async function carregarStatus() {
    let res = await getChromeStorage("status");
    contagemPosGain = res.status.posgain;
    contagemPosLoss = res.status.posloss;
    contagemWin = res.status.win;
    contagemLoss = res.status.loss;
}