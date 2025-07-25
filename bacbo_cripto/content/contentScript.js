let estrategias = {
    galeAlternado: 0,
    galeAlternadoContagem: 0,
    galeVirtual: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    fichaEmpate: 0,
    empatePorcent: 0,
    vermelhoPorcentMaximo: 0,
    azulPorcentMaximo: 0,
    vermelhoPorcentMinimo: 0,
    azulPorcentMinimo: 0,
    vermelhoPorcentMaximoLimite: 0,
    azulPorcentMaximoLimite: 0,
    vermelhoPorcentMinimoLimite: 0,
    azulPorcentMinimoLimite: 0,
    surf: 0,
    stopGain: 1,
    stopLoss: 1,
    terminal: [],
    statusBot: 0,
    token: '',
    chat: ''
}

let contagemGaleVirtual = 0;
let aguardandoGaleVirtual = false;
let contagemLoss = 0;
let contagemWin = 0;
let contagemAlternacia = 0;
let terminalStorage = [];
let load = 0;
let display = false;
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
let porcentagemAzul = 0;
let porcentagemVermelho = 0;
let request = new XMLHttpRequest();
let messageId = 0;
let ultimaAposta = '';
let ultimaApostaEmpate = false;
let apostaGatilhoEncontrado = '';

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

function carregarTerminalStorage() {
    terminalStorage = [];

    if (!Array.isArray(estrategias.terminal)) return;

    for (let i = 0; i < estrategias.terminal.length; i++) {
        terminalStorage.push({
            id: i,
            gatilho: estrategias.terminal[i].gatilho,
            aposta: estrategias.terminal[i].aposta,
            gale: estrategias.terminal[i].gale,
            ciclo: 0,
            contagemPosLoss: 0,
            contagemPosGain: 0
        });
    }
}

async function carregarConfiguracao() {
    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao) {
        let checkData = await nkosud(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {
            let exclusivo = await lgiruets(checkData.usuario.id);
            if (exclusivo.nome_bot == 'bot_teste_editado') {
                let dataConfig = await alksjduew(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
                if (dataConfig.error) {
                    console.info('Erro ao obter as configurações ');
                } else {
                    estrategias = dataConfig;
                    const res = await getChromeStorage("status");
                    if (
                        res.status &&
                        Array.isArray(res.status.terminalStorage) &&
                        res.status.terminalStorage.length == 0
                    ) {
                        carregarTerminalStorage();
                    }

                }
            } else {
                console.info('Erro ao obter as configurações ');
            }
        } else if (checkData.error) {
            console.info('Erro ao obter as configurações ');
        }
    } else {
        console.info('Erro ao obter as configurações ');
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
        return;
    }

    let { x, y } = getElementPositionInsideIframe(element);

    try {
        const response = await enviarMensagem("trustedClick", { x, y });

        if (!response || !response.success) {
        } else {
        }
    } catch (error) {
    }
}

function getElementPositionInsideIframe(element) {
    if (!element) return null;

    let rect = element.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;

    let iframe = element.closest("iframe");
    if (iframe) {
        let iframeRect = iframe.getBoundingClientRect();
        x += iframeRect.left;
        y += iframeRect.top;
    }

    return { x, y };
}

async function clicarNoHistorico() {
    await click(document.getElementsByClassName('roads--26d42 whiteTheme--7b441 left--05943')[0]);
}

function defineCor(elemento) {

    if (elemento.parentElement.firstChild.attributes.fill.textContent === '#2F63DF') {
        return 'A';
    } else if (elemento.parentElement.firstChild.attributes.fill.textContent === '#D33B31') {
        return 'V';
    } else if (elemento.parentElement.firstChild.attributes.fill.textContent === '#CE922B') {
        return 'E';
    }

}

function porcentagemEmpateBacbo() {
    if (document.getElementsByClassName('part--6596e withAnimation--3a9a8')[1] != undefined) {
        return document.getElementsByClassName('part--6596e withAnimation--3a9a8')[1].textContent.slice(0, -1);
    } else {
        return '0';
    }

}

function porcentagemAzulBacbo() {
    if (document.getElementsByClassName('part--6596e withAnimation--3a9a8')[0] != undefined) {
        return document.getElementsByClassName('part--6596e withAnimation--3a9a8')[0].textContent.slice(0, -1);
    } else {
        return '0';
    }

}

function porcentagemVermelhoBacbo() {
    if (document.getElementsByClassName('part--6596e withAnimation--3a9a8')[2] != undefined) {
        return document.getElementsByClassName('part--6596e withAnimation--3a9a8')[2].textContent.slice(0, -1);
    } else {
        return '0';
    }

}

function listarHistorico() {
    ajusteHistorico = document.getElementsByClassName(`fourRoads--b6467`)[0].textContent.length;

    historico = [];
    let hist = document.getElementsByClassName(`derivedRoadsText--848c3`);
    for (let i = (hist.length - 1 - ajusteHistorico); i >= 0; i--) {
        let elemento = '';
        elemento = defineCor(document.getElementsByClassName(`derivedRoadsText--848c3`)[i]);
        historico.push(elemento.concat("", document.getElementsByClassName(`derivedRoadsText--848c3`)[i].textContent));
    }

}

function confirmarAposta() {
    listarHistorico();

    let confirmacao = false;
    porcentagemAzul = parseInt(porcentagemAzulBacbo());
    porcentagemVermelho = parseInt(porcentagemVermelhoBacbo());

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
                } else if (estrategias.terminal[i].gatilho[x] == 'AE' && (historico[x][0] == 'A' || historico[x][0] == 'E')) {
                    confirmacao = true;
                } else if (estrategias.terminal[i].gatilho[x] == 'VE' && (historico[x][0] == 'V' || historico[x][0] == 'E')) {
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

                if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'V' &&
                    porcentagemVermelho >= parseInt(estrategias.vermelhoPorcentMinimo) &&
                    porcentagemVermelho <= parseInt(estrategias.vermelhoPorcentMaximo) &&
                    porcentagemAzul >= parseInt(estrategias.azulPorcentMinimoLimite) &&
                    porcentagemAzul <= parseInt(estrategias.azulPorcentMaximoLimite)) {
                    confirmacao = true;
                    break;
                } else if (estrategias.terminal[gatilhoConfirmado].aposta[0] === 'A' &&
                    porcentagemAzul >= parseInt(estrategias.azulPorcentMinimo) &&
                    porcentagemAzul <= parseInt(estrategias.azulPorcentMaximo) &&
                    porcentagemVermelho >= parseInt(estrategias.vermelhoPorcentMinimoLimite) &&
                    porcentagemVermelho <= parseInt(estrategias.vermelhoPorcentMaximoLimite)) {
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

    return confirmacao;

}

function validarMensagemGaleVirtual() {
    if (parseInt(estrategias.galeVirtual) > 0 && parseInt(estrategias.galeVirtual) > contagemGaleVirtual) {
        return true;
    } else {
        return false;
    }
}

function fazerGaleVirtual() {
    if (parseInt(estrategias.galeVirtual) > 0 && parseInt(estrategias.galeVirtual) > contagemGaleVirtual) {
        aguardandoGaleVirtual = true;
        contagemGaleVirtual++;
        return true;
    } else {
        if (aguardandoGaleVirtual) {
            aguardandoGaleVirtual = false;
            cicloGale = 1;
        }
        return false;
    }
}

function calcularAssertividade(terminal) {

    let incEventos = 0;
    let incAcertos = 0;
    let gatilho = [];
    let historicoInverso = [];

    for (let i = terminal.gatilho.length - 1; i >= 0; i--) {
        gatilho.push(terminal.gatilho[i]);
    }

    for (let i = parseInt(estrategias.historico) - 1; i >= 0; i--) {
        if (historico[i] != null) {
            historicoInverso.push(historico[i]);
        }
    }

    let achouGatilho = false;

    for (let i = 0; i < historicoInverso.length; i++) {

        if ((gatilho.length + parseInt(estrategias.terminal[gatilhoConfirmado].gale)) >= (historicoInverso.length - i)) {
            break;
        }

        for (let x = 0; x < gatilho.length; x++) {
            if (gatilho[x] == 'N') {
                achouGatilho = true;
                i++;
            } else if (historicoInverso[i] == gatilho[x]) {
                achouGatilho = true;
                i++;
            } else if (gatilho[x].length == 1 && historicoInverso[i][0] == gatilho[x]) {
                achouGatilho = true;
                i++;
            } else if (gatilho[x] == 'AE' && (historicoInverso[i][0] == 'A' || historicoInverso[i][0] == 'E')) {
                achouGatilho = true;
                i++;
            } else if (gatilho[x] == 'VE' && (historicoInverso[i][0] == 'V' || historicoInverso[i][0] == 'E')) {
                achouGatilho = true;
                i++;
            } else {
                achouGatilho = false;
                if (x > 0) {
                    i--;
                }
                break;
            }
        }

        if (achouGatilho) {
            incEventos++;
            if (historicoInverso[i][0] == terminal.aposta[0]) {
                incAcertos++;
            } else if (historicoInverso[i][0] == 'E' && parseInt(estrategias.fichaEmpate) > 0) {
                incAcertos++;
            } else if (parseInt(estrategias.terminal[gatilhoConfirmado].gale) > 0) {
                i++;
                for (let z = 0; z < parseInt(estrategias.terminal[gatilhoConfirmado].gale); z++) {
                    if (historicoInverso[i][0] == terminal.aposta[0]) {
                        incAcertos++;
                        break;
                    } else {
                        i++;
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

    if (estrategias.terminal[gatilhoConfirmado].ficha == 1) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
                document.getElementsByClassName(`chip--29b81`)[i].textContent == '2.50') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 2) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 3) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '10') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 5) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 6) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 7) {
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

    if (parseInt(estrategias.fichaEmpate) == 1) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
                document.getElementsByClassName(`chip--29b81`)[i].textContent == '2.50') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 2) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 3) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '10') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 5) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 6) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 7) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2500') {
                await click(document.getElementsByClassName('chip--29b81')[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    }
}

function safeClick(func, delay) {
    setTimeout(() => {
        requestAnimationFrame(func);
    }, delay);
}

function definirTextoCiclo() {
    const ciclo = terminalStorage[gatilhoConfirmado].ciclo;
    const gale = terminalStorage[gatilhoConfirmado].gale;
    if (ciclo === 0) {
        return ``;
    } else {
        cicloDaAposta = ciclo * gale + 1;
        return `CICLO ${ciclo * gale + 1}`;
    }
}

function definirValorCiclo() {
    const ciclo = terminalStorage[gatilhoConfirmado].ciclo;
    const gale = terminalStorage[gatilhoConfirmado].gale;
    if (ciclo === 0) {
        return 0;
    } else {
        cicloDaAposta = ciclo * gale + 1;
        return ciclo * gale + 1;
    }
}

async function apostar() {

    if (liberadoApostar && estrategias.terminal[gatilhoConfirmado].ficha > 0) {

        if (!fazerGaleVirtual()) {

            await selecionaFicha();

            if (apostaGatilhoEncontrado === 'V' && achouFicha && estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                await apostarVermelho();
            }

            if (apostaGatilhoEncontrado === 'A' && achouFicha && parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                await apostarAzul();
            }

            if (parseInt(estrategias.fichaEmpate) > 0 && parseInt(porcentagemEmpateBacbo()) >= parseInt(estrategias.empatePorcent) && estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                await selecionaFichaEmpate();
                if (achouFichaEmpate) {
                    await apostarEmpate();
                }
            }

            if (parseInt(estrategias.galeAlternado) == 0) {
                let cicloAtual = definirValorCiclo();

                for (let i = 0; i < cicloAtual; i++) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await repetirAposta();

                }
            }

        }
    }

    liberadoApostar = false;

    if (liberadoDobrarAposta) {

        let galeAtual = posicaoGaleAtual();

        if (!fazerGaleVirtual()) {

            if (estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                if (parseInt(estrategias.galeAlternado) == 1) {

                    if (galeAtual > 4) {
                        if (apostaGatilhoEncontrado === 'A') {

                            const numRepeticoes = galeAtual;

                            await apostarAzul();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        } else if (apostaGatilhoEncontrado === 'V') {

                            const numRepeticoes = galeAtual;

                            await apostarVermelho();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        }

                        if (ultimaApostaEmpate) {

                            const numRepeticoes = galeAtual;

                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();

                            }

                        }
                    } else {
                        await repetirAposta();
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }

                } else if (parseInt(estrategias.galeAlternado) == 2) {

                    if (galeInteligenteAposta1(galeAtual)) {
                        if (apostaGatilhoEncontrado === 'A') {

                            const numRepeticoes = galeAtual;

                            await apostarAzul();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        } else if (apostaGatilhoEncontrado === 'V') {

                            const numRepeticoes = galeAtual;

                            await apostarVermelho();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        }

                        if (ultimaApostaEmpate) {

                            const numRepeticoes = galeAtual;

                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();
                            }

                        }
                    } else {
                        await repetirAposta();
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }

                } else if (parseInt(estrategias.galeAlternado) == 3) {

                    if (galeInteligenteAposta2(galeAtual)) {
                        if (apostaGatilhoEncontrado === 'A') {

                            const numRepeticoes = galeAtual;

                            await apostarAzul();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        } else if (apostaGatilhoEncontrado === 'V') {

                            const numRepeticoes = galeAtual;

                            await apostarVermelho();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        }

                        if (ultimaApostaEmpate) {

                            const numRepeticoes = galeAtual;

                            for (let i = 0; i < numRepeticoes; i++) {
                                await apostarEmpate();
                            }
                        }
                    } else {
                        await repetirAposta();
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }

                } else if (parseInt(estrategias.galeAlternado) == 4) {

                    if (galeInteligenteAposta3(galeAtual)) {
                        if (apostaGatilhoEncontrado === 'A') {

                            const numRepeticoes = galeAtual;


                            await apostarAzul();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        } else if (apostaGatilhoEncontrado === 'V') {

                            const numRepeticoes = galeAtual;

                            await apostarVermelho();
                            for (let i = 0; i < numRepeticoes; i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await repetirAposta();
                            }

                        }

                        if (ultimaApostaEmpate) {

                            const numRepeticoes = galeAtual;

                            for (let i = 0; i < numRepeticoes; i++) {
                                await apostarEmpate();
                            }

                        }
                    } else {
                        await repetirAposta();
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }

                } else {
                    await repetirAposta();
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await repetirAposta();
                }

            }

        }
    }

    liberadoDobrarAposta = false;

    if (liberarApostaOciosa) {
        await apostarOcioso();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await desfazerAposta();
    }

    liberarApostaOciosa = false;

}

function galeInteligenteConfirmacao1() {
    if (posicaoGaleAtual() == 0 ||
        posicaoGaleAtual() == 1 ||
        posicaoGaleAtual() == 3 ||
        posicaoGaleAtual() == 4) {
        return true;
    } else {
        return false;
    }
}

function galeInteligenteAposta1(gale) {
    if (gale == 1 ||
        gale == 2 ||
        gale == 4 ||
        gale == 5) {
        return true;
    } else {
        return false;
    }
}

function galeInteligenteConfirmacao2() {
    if (posicaoGaleAtual() == 0 ||
        posicaoGaleAtual() == 2 ||
        posicaoGaleAtual() == 4 ||
        posicaoGaleAtual() == 5) {
        return true;
    } else {
        return false;
    }
}

function galeInteligenteAposta2(gale) {
    if (gale == 1 ||
        gale == 3 ||
        gale == 5 ||
        gale == 6) {
        return true;
    } else {
        return false;
    }
}

function galeInteligenteConfirmacao3() {
    if (posicaoGaleAtual() == 1 ||
        posicaoGaleAtual() == 2 ||
        posicaoGaleAtual() == 3 ||
        posicaoGaleAtual() == 4 ||
        posicaoGaleAtual() == 6 ||
        posicaoGaleAtual() == 7 ||
        posicaoGaleAtual() == 8 ||
        posicaoGaleAtual() == 9 ||
        posicaoGaleAtual() == 10 ||
        posicaoGaleAtual() == 11 ||
        posicaoGaleAtual() == 12) {
        return true;
    } else {
        return false;
    }
}

function galeInteligenteAposta3(gale) {
    if (gale == 2 ||
        gale == 3 ||
        gale == 4 ||
        gale == 5 ||
        gale == 7 ||
        gale == 8 ||
        gale == 9 ||
        gale == 10 ||
        gale == 11 ||
        gale == 12 ||
        gale == 13) {
        return true;
    } else {
        return false;
    }
}

function confirmarGreen(resultado) {

    if (apostaGatilhoEncontrado == resultado[0]) {
        return true;
    } else if (parseInt(estrategias.fichaEmpate) > 0 && resultado[0] === 'E') {
        return true;
    } else if (parseInt(estrategias.fichaEmpate) == 0 && resultado[0] === 'E') {
        return false;
    } else if (apostaGatilhoEncontrado[0] == 'X') {
        apostaGatilhoEncontrado = apostaGatilhoEncontrado.slice(1);
        return false;
    } else {
        if (parseInt(estrategias.galeAlternado) == 1) {
            if (posicaoGaleAtual() >= 4) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'A') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'A';
                    }
                }
            }
        } else if (parseInt(estrategias.galeAlternado) == 2) {
            if (galeInteligenteConfirmacao1()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'A') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'A';
                    }
                }
            }
        } else if (parseInt(estrategias.galeAlternado) == 3) {
            if (galeInteligenteConfirmacao2()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'A') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'A';
                    }
                }
            }
        } else if (parseInt(estrategias.galeAlternado) == 4) {
            if (galeInteligenteConfirmacao3()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'A') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'A';
                    }
                }
            }
        }
        return false;
    }
}

async function repetirAposta() {
    await click(document.getElementsByClassName('iconLabelWrapper--8e144 left--60884')[1]);
}

async function apostarVermelho() {
    await click(document.getElementsByClassName('betSpot--52675 Banker--80884')[0]);
}

async function apostarAzul() {
    await click(document.getElementsByClassName('betSpot--52675 Player--4a71b')[0]);
}

async function apostarEmpate() {
    await click(document.getElementsByClassName('betSpot--52675 Tie--77c07')[0]);
}

async function desfazerAposta() {
    await click(document.getElementsByClassName('iconLabelWrapper--8e144 left--60884')[0]);
}

async function apostarOcioso() {
    await click(document.getElementsByClassName('betSpot--52675 Player--4a71b')[0]);
}

function valorBanca() {

    const textoLimpo = document.getElementsByClassName('amount--f8dd5')[0].outerText.replace(/[^\d,.\-]/g, '').trim();

    if (textoLimpo.includes(',') && textoLimpo.includes('.')) {
        return parseFloat(textoLimpo.replace(/\./g, '').replace(',', '.'));
    } else if (textoLimpo.includes(',')) {
        return parseFloat(textoLimpo.replace(',', '.'));
    } else {
        return parseFloat(textoLimpo);
    }

}

function definirStop() {
    if (valorBanca() >= parseInt(estrategias.stopGain) || valorBanca() <= parseInt(estrategias.stopLoss)) {
        return true;
    } else {
        return false;
    }
}

function fazerPosLoss() {
    if (terminalStorage[gatilhoConfirmado].ciclo > 0) {
        terminalStorage[gatilhoConfirmado].contagemPosLoss = 0;
        terminalStorage[gatilhoConfirmado].contagemPosGain = 0;
        return false;
    }

    if (parseInt(estrategias.terminal[gatilhoConfirmado].posLoss) > 0) {
        if (terminalStorage[gatilhoConfirmado].contagemPosLoss < parseInt(estrategias.terminal[gatilhoConfirmado].posLoss)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function posicaoGaleAtual() {
    return (cicloGale - 1) <= 0 ? 0 : (cicloGale - 1);
}

async function analisarBacbo() {
    if (!display) {
        const parentElement = document.querySelector('.content--5212b');
        if (parentElement) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = 'AUTO BOT BACBO';
            novoSpan.id = 'bacbo';
            novoSpan.style.fontSize = 'medium';
            parentElement.appendChild(novoSpan);
        }
        display = true;
    }

    if (isNaN(document.getElementsByClassName(`derivedRoadsText--848c3`)[0].textContent)) {
        clicarNoHistorico();
    }

    if (document.getElementsByClassName(`derivedRoadsText--848c3`)) {
        qtdHistAtual = document.getElementsByClassName(`derivedRoadsText--848c3`).length - document.getElementsByClassName(`fourRoads--b6467`)[0].textContent.length;
    }


    if (liberarApostaOciosa) {

        document.getElementById('bacbo').textContent = `APOSTANDO E CANCELANDO PRA MANTER ATIVIDADE NA MESA`;

    } else if (rodada == 0 && !isNaN(document.getElementsByClassName(`derivedRoadsText--848c3`)[0].textContent)) {
        document.getElementById('bacbo').textContent = `BANCA R$ ${valorBanca()}  AGUARDANDO RODADA`;
        qtdHistAnotado = qtdHistAtual;
        rodada++;

    } else if (rodada == 1 && qtdHistAnotado != qtdHistAtual) {

        if (confirmarAposta()) {

            apostaGatilhoEncontrado = estrategias.terminal[gatilhoConfirmado].aposta[0];

            if (fazerPosLoss()) {
                if (estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                    enviarMsgTelegram(`POS LOSS ${apostaGatilhoEncontrado}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('bacbo').textContent = `POS LOSS ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA ${apostaGatilhoEncontrado}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById('bacbo').textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                }
            } else {
                liberadoApostar = true;

                if (validarMensagemGaleVirtual()) {
                    enviarMsgTelegram(`FAZENDO APOSTA VIRTUAL ${apostaGatilhoEncontrado}`);
                    document.getElementById('bacbo').textContent = `FAZENDO APOSTA VIRTUAL ${apostaGatilhoEncontrado}`;
                } else {
                    if (estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                        enviarMsgTelegram(`APOSTANDO ${apostaGatilhoEncontrado}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                        document.getElementById('bacbo').textContent = `APOSTANDO ${apostaGatilhoEncontrado} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    } else {
                        enviarMsgTelegram(`SIMULANDO APOSTA ${apostaGatilhoEncontrado}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                        document.getElementById('bacbo').textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    }
                }

            }

            qtdHistAnotado = qtdHistAtual;
            rodada++;
        } else {
            document.getElementById('bacbo').textContent = 'ESTRATEGIA NÃO CONFIRMADA NESSA RODADA';
            qtdHistAnotado = qtdHistAtual;
            rodada = 0;
        }

    } else if (rodada > 1 && qtdHistAnotado != qtdHistAtual) {

        listarHistorico();

        if (confirmarGreen(historico[0])) {

            terminalStorage[gatilhoConfirmado].contagemPosGain++;
            if (fazerPosLoss()) {
                terminalStorage[gatilhoConfirmado].contagemPosGain = 0;
                terminalStorage[gatilhoConfirmado].contagemPosLoss = 0;
                enviarMsgTelegram(`🟩GREEN FAKE🟩\n${dataHora()}\nGALE ${posicaoGaleAtual()}\n${definirTextoCiclo()}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟩GREEN FAKE🟩 ${dataHora()} : GALE ${posicaoGaleAtual()} :${definirTextoCiclo()} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('bacbo').textContent = 'GREEN FAKE';
            } else {
                contagemWin++;

                if (parseInt(estrategias.galeAlternadoContagem) > 0) {
                    contagemAlternacia++;
                    if (contagemAlternacia > parseInt(estrategias.galeAlternadoContagem)) {
                        let currentValue = parseInt(estrategias.galeAlternado);
                        if (currentValue == 1) {
                            estrategias.galeAlternado = "2";
                        } else if (currentValue == 2) {
                            estrategias.galeAlternado = "3";
                        } else if (currentValue == 3) {
                            estrategias.galeAlternado = "4";
                        } else if (currentValue == 4) {
                            estrategias.galeAlternado = "1";
                        }
                        contagemAlternacia = 0;
                    }
                }

                if (parseInt(estrategias.terminal[gatilhoConfirmado].posGain) <= terminalStorage[gatilhoConfirmado].contagemPosGain) {
                    terminalStorage[gatilhoConfirmado].contagemPosGain = 0;
                    terminalStorage[gatilhoConfirmado].contagemPosLoss = 0;
                }
                enviarMsgTelegram(`🟩GREEN🟩\n${dataHora()}\nGALE ${posicaoGaleAtual()}\n${definirTextoCiclo()}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟩GREEN🟩 ${dataHora()} : GALE ${posicaoGaleAtual()} :${definirTextoCiclo()} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('bacbo').textContent = 'GREEN';
                terminalStorage[gatilhoConfirmado].ciclo = 0;
            }

            aguardandoGaleVirtual = false;
            contagemGaleVirtual = 0;
            liberadoApostar = false;
            liberadoDobrarAposta = false;
            cicloGale = 1;
            ultimaAposta = '';
            ultimaApostaEmpate = false;
            parseInt(estrategias.surf) == 1 ? rodada = 1 : rodada = 0;
            await salvarStatus();

        } else if (fazerGale()) {

            if (historico[0][0] == 'E') {
                if (apostaGatilhoEncontrado.length == 1) {
                    apostaGatilhoEncontrado = 'X' + apostaGatilhoEncontrado;
                }
                qtdHistAnotado = qtdHistAtual;
                document.getElementById('bacbo').textContent = 'AGUARDANDO SEQUENCIA DE EMPATE TERMINAR';
            } else {

                if (fazerPosLoss()) {
                    if (estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                        document.getElementById('bacbo').textContent = `POS LOSS ${apostaGatilhoEncontrado} GALE ${rodada - 1} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        enviarMsgTelegram(`POS LOSS ${apostaGatilhoEncontrado}\nGALE ${rodada - 1}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    } else {
                        document.getElementById('bacbo').textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${rodada - 1} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        enviarMsgTelegram(`SIMULANDO APOSTA EM ${apostaGatilhoEncontrado}\nGALE ${rodada - 1}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    }

                    cicloGale++;
                    qtdHistAnotado = qtdHistAtual;
                    rodada++;
                } else {
                    if (validarMensagemGaleVirtual()) {
                        enviarMsgTelegram(`FAZENDO GALE VIRTUAL ${apostaGatilhoEncontrado}`);
                        document.getElementById('bacbo').textContent = `FAZENDO GALE VIRTUAL ${apostaGatilhoEncontrado}`;
                    } else {
                        if (estrategias.terminal[gatilhoConfirmado].ficha > 0) {
                            document.getElementById('bacbo').textContent = `APOSTANDO ${apostaGatilhoEncontrado} ${rodada - 1 == 0 ? `` : `GALE ${rodada - 1}`} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`APOSTANDO ${apostaGatilhoEncontrado}\n${rodada - 1 == 0 ? `` : `GALE ${rodada - 1}`}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                        } else {
                            document.getElementById('bacbo').textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} ${rodada - 1 == 0 ? `` : `GALE ${rodada - 1}`} ${definirTextoCiclo()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`SIMULANDO APOSTA EM ${apostaGatilhoEncontrado}\n${rodada - 1 == 0 ? `` : `GALE ${rodada - 1}`}\n${definirTextoCiclo()}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                        }
                        aguardandoGaleVirtual ? liberadoApostar = true : liberadoDobrarAposta = true;
                        rodada++;
                    }
                    cicloGale++;
                    qtdHistAnotado = qtdHistAtual;
                }

            }
        } else {
            if (fazerPosLoss()) {
                enviarMsgTelegram(`🟥RED FAKE🟥 ${dataHora()}\nGALE ${posicaoGaleAtual()}\n${definirTextoCiclo()}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟥RED FAKE🟥 ${dataHora()} : GALE ${posicaoGaleAtual()} :${definirTextoCiclo()} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('bacbo').textContent = 'RED FAKE';
            } else {
                contagemLoss++;
                terminalStorage[gatilhoConfirmado].contagemPosGain = 0;
                terminalStorage[gatilhoConfirmado].contagemPosLoss = 0;
                enviarMsgTelegram(`🟥RED🟥 ${dataHora()}\nGALE ${posicaoGaleAtual()}\n${definirTextoCiclo()}\n${JSON.stringify(estrategias.terminal[gatilhoConfirmado])}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
                atualizarHistorico(`🟥RED🟥 ${dataHora()} : GALE ${posicaoGaleAtual()} :${definirTextoCiclo()} ${JSON.stringify(estrategias.terminal[gatilhoConfirmado])} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]} IA:${assertividade}% ${qtdEventos} EVENTOS`);
                document.getElementById('bacbo').textContent = 'RED';
                definirCiclo();
            }

            if (parseInt(estrategias.terminal[gatilhoConfirmado].posLoss) > 0) {
                terminalStorage[gatilhoConfirmado].contagemPosLoss++;
            }

            aguardandoGaleVirtual = false;
            contagemGaleVirtual = 0;
            liberadoApostar = false;
            liberadoDobrarAposta = false;
            cicloGale = 1;
            ultimaAposta = '';
            ultimaApostaEmpate = false;
            parseInt(estrategias.surf) == 1 ? rodada = 1 : rodada = 0;
            await salvarStatus();
        }

    }

    if (document.getElementsByClassName(`wrapper--8b249`).length > 0) {
        await apostar();
    }

}

function fazerGale() {
    if (terminalStorage[gatilhoConfirmado].ciclo == 0) {
        return parseInt(estrategias.terminal[gatilhoConfirmado].gale) > (rodada - 2);
    } else {
        let pathCicloGale = terminalStorage[gatilhoConfirmado].ciclo - 1;
        return parseInt(estrategias.terminal[gatilhoConfirmado].galesPorCiclo[pathCicloGale]) > (rodada - 2);
    }

}

function definirCiclo() {
    if (estrategias.terminal[gatilhoConfirmado].ciclo > 0 && terminalStorage[gatilhoConfirmado].ciclo < estrategias.terminal[gatilhoConfirmado].ciclo) {
        terminalStorage[gatilhoConfirmado].ciclo++;
    } else {
        terminalStorage[gatilhoConfirmado].ciclo = 0;
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

        if (document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3] != undefined) {
            await click(document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3]);
        }

        if (load == 0) {
            await carregarConfiguracao();
            const res = await getChromeStorage("status");
            if (
                res.status &&
                Array.isArray(res.status.terminalStorage) &&
                res.status.terminalStorage.length > 0
            ) {
                await carregarStatus();
            }
            load = 1;
        }

        if (document.getElementsByClassName(`label--b0fd0`).length > 0) {
            reset();
        }

        ociosidade++

        if (ociosidade > 40 && rodada === 0 && document.getElementsByClassName(`derivedRoadsText--848c3`)[0] != undefined) {
            liberarApostaOciosa = true;
            ociosidade = 0;
        }

        if (document.getElementById('bacbo')) {
            if (definirStop()) {
                document.getElementById('bacbo').textContent = 'STOP';
            } else if (document.getElementsByClassName(`derivedRoadsText--848c3`)[0] != undefined) {
                await analisarBacbo();
            }
        } else if (document.getElementsByClassName(`derivedRoadsText--848c3`)[0] != undefined) {
            await analisarBacbo();
        }

    } catch (err) {
        console.info(err);
    }

}, 3000);

function reset() {
    window.location.reload(true);
}

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

chrome.storage.onChanged.addListener(async (changes, areaName, namespace) => {
    if (areaName === 'local') {
        if (changes.hasOwnProperty('data')) {

            if (document.getElementsByClassName(`derivedRoadsText--848c3`)[0] != undefined) {
                await carregarConfiguracao();
            }

        }
    }
});

async function enviarMensagem(action, data) {
    return await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action, ...data }, response => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

async function getChromeStorage(key) {
    return await new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
}

async function nkosud(email, senha) {
    const response = await enviarMensagem('nkosud', { email, senha });
    return response;
}

async function alksjduew(email, senha, id, bot) {
    const response = await enviarMensagem('alksjduew', { email, senha, id, bot });
    return response;
}

async function lgiruets(id) {
    const response = await enviarMensagem('lgiruets', { id });
    return response;
}

async function salvarStatus() {
    let status = { terminalStorage: terminalStorage, win: contagemWin, loss: contagemLoss };
    chrome.storage.local.set({ status });
}

async function carregarStatus() {
    let res = await getChromeStorage("status");
    let storageArray = Array.isArray(res.status?.terminalStorage) ? res.status.terminalStorage : [];
    terminalStorage = estrategias.terminal.map((item, i) => {
        return storageArray[i] ? {
            ...storageArray[i],
            gatilho: item.gatilho,
            aposta: item.aposta,
            gale: item.gale
        } : {
            id: i,
            gatilho: item.gatilho,
            aposta: item.aposta,
            gale: item.gale,
            ciclo: 0,
            contagemPosLoss: 0,
            contagemPosGain: 0
        };
    });
    contagemWin = res.status?.win || 0;
    contagemLoss = res.status?.loss || 0;
}