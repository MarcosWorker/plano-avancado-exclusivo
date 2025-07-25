let elementos = {};

let estrategias = {
    tipoPosGain: 0,
    galeVirtual: 0,
    galeAlternado: 0,
    galeAlternadoContagem: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    ficha: 0,
    fichaEmpate: 0,
    empatePorcent: 0,
    casaPorcentMaximo: 0,
    casaPorcentMinimo: 0,
    visitantePorcentMaximo: 0,
    visitantePorcentMinimo: 0,
    casaPorcentMaximoLimite: 0,
    casaPorcentMinimoLimite: 0,
    visitantePorcentMaximoLimite: 0,
    visitantePorcentMinimoLimite: 0,
    surf: 0,
    esperarEmpate: 0,
    stopGain: 1,
    stopLoss: 1,
    gainTimer: 0,
    startTimer: 0,
    timer: 1,
    terminal: [],
    token: '',
    chat: ''
}

let terminal = [];
let contagemAlternacia = 0;
let contagemWin = 0;
let contagemLoss = 0;
let load = 0;
let display = false;
let rodada = 0;
let historico = [];
let historicoTotal = [];
let qtdHistAtual = 0;
let qtdHistAnotado = 0;
let gatilhoConfirmado = 0;
let liberadoApostar = false;
let liberadoDobrarAposta = false;
let liberarApostaOciosidade = false;
let cicloGaleVirtual = 2;
let fazerGaleVirtual = false;
let cicloGale = 1;
let qtdEventos = 0;
let assertividade = 0;
let addFicha = 0;
let achouFicha = false;
let achouFichaEmpate = false;
let ociosidade = 0;
let timer = 0;
let contagemGainTimer = 0;
let porcentagemCasa = 0;
let porcentagemVisitante = 0;
let request = new XMLHttpRequest();
let messageId = 0;
let apostaGatilhoEncontrado = '';
let ultimaApostaEmpate = false;
let valorAntesDeAposta = 0;
let valorDePerca = 0;
let valorDeGanho = 0;
let pararTudo = false;

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

function createCenterToast(message, time) {
    let toast = document.getElementById(elementos.e8);

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "center-toast";

        toast.style.visibility = "hidden";
        toast.style.minWidth = "300px";
        toast.style.margin = "0 auto";
        toast.style.backgroundColor = "#333333";
        toast.style.color = "#ffffff";
        toast.style.textAlign = "center";
        toast.style.borderRadius = "8px";
        toast.style.padding = "16px";
        toast.style.position = "fixed";
        toast.style.zIndex = "9999";
        toast.style.left = "50%";
        toast.style.top = "50%";
        toast.style.transform = "translate(-50%, -50%)";
        toast.style.fontSize = "17px";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s, visibility 0s 0.5s";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
    }, time);
}


function createToast(message, time) {
    let toast = document.getElementById(elementos.e9);

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "chrome-toast";

        toast.style.visibility = "hidden";
        toast.style.minWidth = "250px";
        toast.style.marginLeft = "-125px";
        toast.style.backgroundColor = "#ff0000";
        toast.style.color = "#ffff00";
        toast.style.textAlign = "center";
        toast.style.borderRadius = "8px";
        toast.style.padding = "16px";
        toast.style.position = "fixed";
        toast.style.zIndex = "9999";
        toast.style.left = "50%";
        toast.style.top = "30px";
        toast.style.fontSize = "17px";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s, visibility 0s 0.5s";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
    }, time);
}

async function carregarConfiguracao() {
    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao) {
        let checkData = await reger(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {
            let exclusivo = await wsifuw(checkData.usuario.id);
            if (exclusivo.nome_bot == 'bot_teste_editado') {
                let dataConfig = await ergerg(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
                if (dataConfig.error) {
                    console.info('Erro ao obter as configurações ');
                } else {
                    estrategias = dataConfig;
                    if (!terminal || terminal.length === 0) {
                        terminal = estrategias.terminal.map(obj => ({
                            ...obj,
                            contagemPosLoss: 0,
                            contagemPosGain: 0,
                            contagemGale: 0,
                            contagemCiclo: 0
                        }));
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

function porcentagemEmpateFS() {
    if (!historico || historico.length === 0) return 0;
    let historicoDefinido = [];
    for (let i = 0; i < parseInt(estrategias.historico); i++) {
        historicoDefinido.push(historico[i]);
    }
    let total = historicoDefinido.length;
    let count = historicoDefinido.filter(letra => letra === 'E').length;
    return Math.round((count / total) * 100);

}

function porcentagemCasaFS() {
    if (!historico || historico.length === 0) return 0;
    let historicoDefinido = [];
    for (let i = 0; i < parseInt(estrategias.historico); i++) {
        historicoDefinido.push(historico[i]);
    }
    let total = historicoDefinido.length;
    let count = historicoDefinido.filter(letra => letra === 'C').length;
    return Math.round((count / total) * 100);

}

function porcentagemVisitanteFS() {
    if (!historico || historico.length === 0) return 0;
    let historicoDefinido = [];
    for (let i = 0; i < parseInt(estrategias.historico); i++) {
        historicoDefinido.push(historico[i]);
    }
    let total = historicoDefinido.length;
    let count = historicoDefinido.filter(letra => letra === 'V').length;
    return Math.round((count / total) * 100);
}

function listarHistorico() {

    historico = [];
    let hist = document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`);
    for (let i = 0; i < hist.length; i++) {
        if (document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[i].textContent != '') {
            historico.push(traduzir(document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[i].textContent));
        }
    }

}

function proximaRodada() {
    let novoHistorico = [];
    let hist = document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`);
    for (let i = 0; i < hist.length; i++) {
        if (document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[i].textContent != '') {
            novoHistorico.push(traduzir(document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[i].textContent));
        }
    }

    if (saoListasDiferentes(novoHistorico, historico)) {
        listarHistorico();
        if (historicoTotal.length == 0) {
            historicoTotal = novoHistorico;
            if (historicoTotal.length >= estrategias.historico) {
                historicoTotal.pop();
                historicoTotal.unshift(novoHistorico[0]);
                return true;
            } else {
                historicoTotal.unshift(novoHistorico[0]);
                document.getElementById(elementos.e10).textContent = `BANCA R$ ${valorBanca()} HISTORICO ${estrategias.historico}`;
                return false;
            }
        } else {
            if (historicoTotal.length >= estrategias.historico) {
                historicoTotal.pop();
                historicoTotal.unshift(novoHistorico[0]);
                return true;
            } else {
                historicoTotal.unshift(novoHistorico[0]);
                document.getElementById(elementos.e10).textContent = `BANCA R$ ${valorBanca()} HISTORICO ${estrategias.historico}`;
                return false;
            }

        }
    } else {
        return false;
    }


}

function saoListasDiferentes(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return true;
    }
    return !lista1.every((elemento, indice) => elemento === lista2[indice]);
}

function traduzir(elemento) {
    if (elemento == 'D') {
        return 'E';
    } else if (elemento == 'H') {
        return 'C';
    } else if (elemento == 'A') {
        return 'V';
    } else {
        return elemento;
    }
}

function confirmarAposta() {
    let confirmacao = false;
    porcentagemCasa = parseInt(porcentagemCasaFS());
    porcentagemVisitante = parseInt(porcentagemVisitanteFS());

    for (let i = 0; i < terminal.length; i++) {

        for (let x = 0; x < terminal[i].gatilho.length; x++) {

            if (terminal[i].gatilho[x] == historicoTotal[x]) {
                confirmacao = true;
            } else if (terminal[i].gatilho[x] == 'N') {
                confirmacao = true;
            } else if (terminal[i].gatilho[x] == 'CE' && (historico[x] == 'C' || historico[x] == 'E')) {
                confirmacao = true;
            } else if (terminal[i].gatilho[x] == 'VE' && (historico[x] == 'V' || historico[x] == 'E')) {
                confirmacao = true;
            } else {
                confirmacao = false;
                break;
            }

        }
        if (confirmacao) {
            gatilhoConfirmado = i;
            calcularAssertividade(terminal[i]);
            if (parseInt(estrategias.eventoMinimo) <= parseInt(qtdEventos) &&
                parseInt(estrategias.eventoMaximo) >= parseInt(qtdEventos) &&
                parseInt(estrategias.iaMinimo) <= parseInt(assertividade) &&
                parseInt(estrategias.iaMaximo) >= parseInt(assertividade)) {

                if (terminal[gatilhoConfirmado].gatilho[0][0] == 'V' &&
                    porcentagemVisitante >= parseInt(estrategias.visitantePorcentMinimo) &&
                    porcentagemVisitante <= parseInt(estrategias.visitantePorcentMaximo) &&
                    porcentagemCasa >= parseInt(estrategias.casaPorcentMinimoLimite) &&
                    porcentagemCasa <= parseInt(estrategias.casaPorcentMaximoLimite)) {
                    confirmacao = true;
                    break;
                } else if (terminal[gatilhoConfirmado].gatilho[0][0] == 'C' &&
                    porcentagemCasa >= parseInt(estrategias.casaPorcentMinimo) &&
                    porcentagemCasa <= parseInt(estrategias.casaPorcentMaximo) &&
                    porcentagemVisitante >= parseInt(estrategias.visitantePorcentMinimoLimite) &&
                    porcentagemVisitante <= parseInt(estrategias.visitantePorcentMaximoLimite)) {
                    confirmacao = true;
                    break;
                } else if (terminal[gatilhoConfirmado].gatilho[0][0] == 'E') {
                    confirmacao = true;
                    break;
                } else if (terminal[gatilhoConfirmado].gatilho[0][0] == 'N') {
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

function calcularAssertividade(terminalParam) {

    let incEventos = 0;
    let incAcertos = 0;
    let gatilhoInverso = [terminalParam.gatilho];
    gatilhoInverso.reverse();

    let historicoInverso = [];
    for (let i = 0; i < parseInt(estrategias.historico); i++) {
        historicoInverso.push(historico[i]);
    }
    historicoInverso.reverse();

    for (let index = 0; index < parseInt(estrategias.historico); index++) {

        let achouGatilho = true;

        for (let indexGate = 0; indexGate < gatilhoInverso[0].length; indexGate++) {

            if (gatilhoInverso[0][indexGate] == historicoInverso[index]) {
                if (index + 1 < parseInt(estrategias.historico)) {
                    index++;
                } else {
                    achouGatilho = false;
                    break;
                }
            } else if (gatilhoInverso[0][indexGate] == 'N') {
                if (index + 1 < parseInt(estrategias.historico)) {
                    index++;
                } else {
                    achouGatilho = false;
                    break;
                }
            } else if (gatilhoInverso[indexGate] == 'CE' && (historicoInverso[index][0] == 'C' || historicoInverso[index][0] == 'E')) {
                if (index + 1 < parseInt(estrategias.historico)) {
                    index++;
                } else {
                    achouGatilho = false;
                    break;
                }
            } else if (gatilhoInverso[indexGate] == 'VE' && (historicoInverso[index][0] == 'V' || historicoInverso[index][0] == 'E')) {
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

        if (achouGatilho) {
            incEventos++
            for (let i = 0; i <= retornarValorGale(); i++) {

                if (terminalParam.aposta[0] == historicoInverso[index]) {
                    incAcertos++
                    break;
                } if (parseInt(estrategias.fichaEmpate) > 0 && historicoInverso[index] == 'E') {
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

function adicionarFicha() {
    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 1) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 2) {
        return 2;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 3) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 4) {
        return 4;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 5) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 6) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 7) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 8) {
        return 2;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 9) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 10) {
        return 4;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 11) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 12) {
        return 2;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 13) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 14) {
        return 4;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 15) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 16) {
        return 2;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 17) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 18) {
        return 1;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 19) {
        return 2;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 20) {
        return 3;
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 21) {
        return 4;
    }
}

function adicionarFichaEmpate() {
    if (parseInt(estrategias.fichaEmpate) == 1) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 2) {
        return 2;
    } else if (parseInt(estrategias.fichaEmpate) == 3) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 4) {
        return 4;
    } else if (parseInt(estrategias.fichaEmpate) == 5) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 6) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 7) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 8) {
        return 2;
    } else if (parseInt(estrategias.fichaEmpate) == 9) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 10) {
        return 4;
    } else if (parseInt(estrategias.fichaEmpate) == 11) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 12) {
        return 2;
    } else if (parseInt(estrategias.fichaEmpate) == 13) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 14) {
        return 4;
    } else if (parseInt(estrategias.fichaEmpate) == 15) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 16) {
        return 2;
    } else if (parseInt(estrategias.fichaEmpate) == 17) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 18) {
        return 1;
    } else if (parseInt(estrategias.fichaEmpate) == 19) {
        return 2;
    } else if (parseInt(estrategias.fichaEmpate) == 20) {
        return 3;
    } else if (parseInt(estrategias.fichaEmpate) == 21) {
        return 4;
    }
}

async function selecionaFicha() {

    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 1 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 2 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 3 ||
        parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '0,50') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 5 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 7) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 6 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 8 ||
        parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 9 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 10) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 11 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 12 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 13 ||
        parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 14) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 15 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 16 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 17) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    } else if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 18 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 19 || parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 20 ||
        parseInt(estrategias.terminal[gatilhoConfirmado].ficha) == 21) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFicha = true;
                break;
            }
        }
    }
}

async function selecionaFichaEmpate() {

    if (parseInt(estrategias.fichaEmpate) == 1 || parseInt(estrategias.fichaEmpate) == 2 || parseInt(estrategias.fichaEmpate) == 3 ||
        parseInt(estrategias.fichaEmpate) == 4) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '0,50') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 5 || parseInt(estrategias.fichaEmpate) == 7) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 6 || parseInt(estrategias.fichaEmpate) == 8 ||
        parseInt(estrategias.fichaEmpate) == 9 || parseInt(estrategias.fichaEmpate) == 10) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 11 || parseInt(estrategias.fichaEmpate) == 12 || parseInt(estrategias.fichaEmpate) == 13 ||
        parseInt(estrategias.fichaEmpate) == 14) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '25') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 15 || parseInt(estrategias.fichaEmpate) == 16 || parseInt(estrategias.fichaEmpate) == 17) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '125') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (parseInt(estrategias.fichaEmpate) == 18 || parseInt(estrategias.fichaEmpate) == 19 || parseInt(estrategias.fichaEmpate) == 20 ||
        parseInt(estrategias.fichaEmpate) == 21) {
        for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
            if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '500') {
                await click(document.getElementsByClassName(elementos.e1)[i]);
                achouFichaEmpate = true;
                break;
            }
        }
    }
}

function valorCiclo() {
    return terminal[gatilhoConfirmado].contagemCiclo > 0 ? terminal[gatilhoConfirmado].contagemCiclo + (retornarGaleAnterior() * terminal[gatilhoConfirmado].contagemCiclo) : 0;
}

function posicaoGaleAtual() {
    return ((cicloGale - 1) - (cicloGaleVirtual - 2)) <= 0 ? 0 : ((cicloGale - 1) - (cicloGaleVirtual - 2));
}

function retornarGaleAnterior() {
    if (terminal[gatilhoConfirmado].contagemCiclo == 1) {
        return parseInt(terminal[gatilhoConfirmado].gale);
    } else if (terminal[gatilhoConfirmado].contagemCiclo > 1) {
        return parseInt(terminal[gatilhoConfirmado].galesPorCiclo[terminal[gatilhoConfirmado].contagemCiclo - 2]);
    }
}

function retornarValorGale() {
    if (fazerPosLoss()) {
        return parseInt(terminal[gatilhoConfirmado].galesPorPosLoss[terminal[gatilhoConfirmado].contagemPosLoss - 1]);
    }

    return terminal[gatilhoConfirmado].contagemCiclo > 0 ? parseInt(terminal[gatilhoConfirmado].galesPorCiclo[terminal[gatilhoConfirmado].contagemCiclo - 1]) : parseInt(terminal[gatilhoConfirmado].gale);

}

function definirStopDePerca() {
    let valorDeBanca = valorBanca();
    if (valorAntesDeAposta > valorDeBanca && parseInt(estrategias.stopLoss) > 0) {
        valorDePerca = valorDePerca + (valorAntesDeAposta - valorDeBanca);
        if (parseFloat(estrategias.stopLoss) <= valorDePerca) {
            pararTudo = true;
            createToast(`STOP DE PERDA ATINGIDO! Banca: R$ ${valorDeBanca} - Perca: R$ ${valorDePerca}`, 10000);
        }
    }
}

function tirarDiferencaDeganho() {
    let valorDeBanca = valorBanca();
    if (valorAntesDeAposta < valorDeBanca) {
        valorDeGanho = (valorDeBanca - valorAntesDeAposta);
        if (valorDePerca > 0) {
            valorDePerca = (valorDePerca - valorDeGanho) > 0 ? (valorDePerca - valorDeGanho) : 0;
            createToast(`VALOR DE PERCA ATUALIZADO PARA  R$ ${valorDePerca}.00`, 10000);
        }
    }
}

async function apostar() {

    if (liberadoApostar) {
        valorAntesDeAposta = valorBanca();
        let valorDoCiclo = valorCiclo();
        await selecionaFicha();
        console.info('valorDoCiclo: ' + valorDoCiclo);
        if (apostaGatilhoEncontrado === 'V' && achouFicha && parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {

            const numRepeticoes = adicionarFicha();

            for (let i = 0; i < numRepeticoes; i++) {
                await new Promise(resolve => setTimeout(resolve, 200));
                await apostarVisitante();
            }

            if (valorDoCiclo > 0) {
                for (let x = 0; x < valorDoCiclo; x++) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await repetirAposta();
                }
            }

        }

        if (apostaGatilhoEncontrado === 'C' && achouFicha && parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {

            const numRepeticoes = adicionarFicha();

            for (let i = 0; i < numRepeticoes; i++) {
                await new Promise(resolve => setTimeout(resolve, 200));
                await apostarCasa();
            }

            if (valorDoCiclo > 0) {
                for (let x = 0; x < valorDoCiclo; x++) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await repetirAposta();
                }
            }

        }

        if (parseInt(estrategias.fichaEmpate) > 0 && parseInt(porcentagemEmpateFS()) >= parseInt(estrategias.empatePorcent) && parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
            await selecionaFichaEmpate();
            if (achouFichaEmpate) {
                for (let i = 0; i < adicionarFichaEmpate(); i++) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await apostarEmpate();
                }

                if (valorDoCiclo > 0) {
                    for (let x = 0; x <= valorDoCiclo; x++) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }
                }
            }
        }

    }

    liberadoApostar = false;

    if (liberadoDobrarAposta) {
        let galeAtual = posicaoGaleAtual();
        let valorDoCiclo = valorCiclo();
        let ajusteGaleVirtual = estrategias.galeVirtual > 0 ? cicloGaleVirtual - 1 : 0;

        if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
            if (estrategias.galeAlternado == 1) {

                if (galeAtual > 2) {
                    if (apostaGatilhoEncontrado === 'C') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarCasa();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    } else if (apostaGatilhoEncontrado === 'V') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarVisitante();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }


                    }

                    if (ultimaApostaEmpate) {

                        const numRepeticoes = galeAtual;

                        for (let i = 0; i < numRepeticoes; i++) {
                            for (let i = 0; i < adicionarFichaEmpate(); i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();
                            }
                        }

                    }
                } else {
                    for (let i = 0; i < 2; i++) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }
                }

            } else if (estrategias.galeAlternado == 2) {

                if (galeInteligenteAposta1(galeAtual)) {
                    if (apostaGatilhoEncontrado === 'C') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarCasa();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    } else if (apostaGatilhoEncontrado === 'V') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarVisitante();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }


                    }

                    if (ultimaApostaEmpate) {

                        const numRepeticoes = galeAtual;

                        for (let i = 0; i < numRepeticoes; i++) {
                            for (let i = 0; i < adicionarFichaEmpate(); i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();
                            }
                        }


                    }
                } else {
                    for (let i = 0; i < 2; i++) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }
                }

            } else if (estrategias.galeAlternado == 3) {

                if (galeInteligenteAposta2(galeAtual)) {
                    if (apostaGatilhoEncontrado === 'C') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarCasa();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    } else if (apostaGatilhoEncontrado === 'V') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarVisitante();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    }

                    if (ultimaApostaEmpate) {

                        const numRepeticoes = galeAtual;

                        for (let i = 0; i < numRepeticoes; i++) {
                            for (let i = 0; i < adicionarFichaEmpate(); i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < 2; i++) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }
                }

            } else if (estrategias.galeAlternado == 4) {

                if (galeInteligenteAposta3(galeAtual)) {
                    if (apostaGatilhoEncontrado === 'C') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarCasa();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    } else if (apostaGatilhoEncontrado === 'V') {

                        const numRepeticoes = galeAtual + valorDoCiclo - ajusteGaleVirtual;

                        for (let i = 0; i < adicionarFicha(); i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await apostarVisitante();
                        }
                        for (let i = 0; i < numRepeticoes; i++) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                            await repetirAposta();
                        }

                    }

                    if (ultimaApostaEmpate) {

                        const numRepeticoes = galeAtual;

                        for (let i = 0; i < numRepeticoes; i++) {
                            for (let i = 0; i < adicionarFichaEmpate(); i++) {
                                await new Promise(resolve => setTimeout(resolve, 200));
                                await apostarEmpate();
                            }
                        }


                    }
                } else {
                    for (let i = 0; i < 2; i++) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                        await repetirAposta();
                    }
                }

            } else {
                for (let i = 0; i < 2; i++) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    await repetirAposta();
                }
            }
        }

    }

    liberadoDobrarAposta = false;

    if (liberarApostaOciosidade) {
        createCenterToast(`FAZENDO APOSTA OCIOSA COM FICHA MÍNIMA`, 3000);
        await apostarVisitanteFichaBaixa();
        ociosidade = 0;
    }

    liberarApostaOciosidade = false;

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
        if (estrategias.galeAlternado == 1) {
            if (posicaoGaleAtual() >= 2) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'C') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'C';
                    }
                }
            }
        } else if (estrategias.galeAlternado == 2) {
            if (galeInteligenteConfirmacao1()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'C') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'C';
                    }
                }
            }
        } else if (estrategias.galeAlternado == 3) {
            if (galeInteligenteConfirmacao2()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'C') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'C';
                    }
                }
            }
        } else if (estrategias.galeAlternado == 4) {
            if (galeInteligenteConfirmacao3()) {
                if (resultado[0] != 'E') {
                    if (apostaGatilhoEncontrado === 'C') {
                        apostaGatilhoEncontrado = 'V';
                    } else if (apostaGatilhoEncontrado === 'V') {
                        apostaGatilhoEncontrado = 'C';
                    }
                }
            }
        }
        return false;
    }
}

async function apostarVisitanteFichaBaixa() {
    for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
        if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '0,50' ||
            document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
            document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
            await click(document.getElementsByClassName(elementos.e1)[i]);
            break;
        }
    }
    await new Promise(resolve => setTimeout(resolve, 200));
    await click(document.getElementsByClassName(elementos.e2)[0]);
}

async function apostarCasaFichaBaixa() {
    for (let i = 0; i < document.getElementsByClassName(`chip--29b81`).length; i++) {
        if (document.getElementsByClassName(`chip--29b81`)[i].textContent == '0,50' ||
            document.getElementsByClassName(`chip--29b81`)[i].textContent == '2,50' ||
            document.getElementsByClassName(`chip--29b81`)[i].textContent == '5') {
            await click(document.getElementsByClassName(elementos.e1)[i]);
            break;
        }
    }
    await new Promise(resolve => setTimeout(resolve, 200));

    await click(document.getElementsByClassName(elementos.e3)[0]);
}

async function repetirAposta() {
    console.info('Repetindo Aposta');
    await click(document.getElementsByClassName(elementos.e4)[1]);
}

async function apostarVisitante() {
    console.info('Apostando Visitante');
    await click(document.getElementsByClassName(elementos.e2)[0]);
}

async function apostarCasa() {
    console.info('Apostando Casa');
    await click(document.getElementsByClassName(elementos.e3)[0]);
}

async function apostarEmpate() {
    console.info('Apostando Empate');
    await click(document.getElementsByClassName(elementos.e5)[0]);
}

async function desfazerAposta() {
    console.info('Desfazendo Aposta');
    await click(document.getElementsByClassName(elementos.e4)[0]);
}

function valorBanca() {

    let valorString = document.getElementsByClassName(elementos.e6)[0].textContent;

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
    if (terminal[gatilhoConfirmado].posLoss > 0) {
        if (terminal[gatilhoConfirmado].contagemPosLoss < terminal[gatilhoConfirmado].posLoss) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function fazerPosGainGreen() {
    if (parseInt(terminal[gatilhoConfirmado].posGain) <= terminal[gatilhoConfirmado].contagemPosGain) {
        terminal[gatilhoConfirmado].contagemPosGain = 0;
        terminal[gatilhoConfirmado].contagemPosLoss = 0;
    }
}

function fazerPosGainRed() {
    if (estrategias.tipoPosGain == 1) {
        terminal[gatilhoConfirmado].contagemPosGain = 0;
        terminal[gatilhoConfirmado].contagemPosLoss = 0;
    } else if (estrategias.tipoPosGain == 2) {
        terminal[gatilhoConfirmado].contagemPosGain = 0;
    }
}

function valorFicha(index) {

    if (index == 1) {
        return `R$ 0.50`;
    } else if (index == 2) {
        return `R$ 1`;
    } else if (index == 3) {
        return `R$ 1.50`;
    } else if (index == 4) {
        return `R$ 2`;
    } else if (index == 5) {
        return `R$ 2.50`;
    } else if (index == 6) {
        return `R$ 5`;
    } else if (index == 7) {
        return `R$ 7.50`;
    } else if (index == 8) {
        return `R$ 10`;
    } else if (index == 9) {
        return `R$ 15`;
    } else if (index == 10) {
        return `R$ 20`;
    } else if (index == 11) {
        return `R$ 25`;
    } else if (index == 12) {
        return `R$ 50`;
    } else if (index == 13) {
        return `R$ 75`;
    } else if (index == 14) {
        return `R$ 100`;
    } else if (index == 15) {
        return `R$ 125`;
    } else if (index == 16) {
        return `R$ 250`;
    } else if (index == 17) {
        return `R$ 375`;
    } else if (index == 18) {
        return `R$ 500`;
    } else if (index == 19) {
        return `R$ 1000`;
    } else if (index == 20) {
        return `R$ 1500`;
    } else if (index == 21) {
        return `R$ 2000`;
    } else {
        return `Simulação`;
    }
}

function valorNumericoFicha(index, multi) {
    switch (index) {
        case 1: return parseFloat(multi) * 0.50;
        case 2: return parseFloat(multi) * 1;
        case 3: return parseFloat(multi) * 1.50;
        case 4: return parseFloat(multi) * 2;
        case 5: return parseFloat(multi) * 2.50;
        case 6: return parseFloat(multi) * 5;
        case 7: return parseFloat(multi) * 7.50;
        case 8: return parseFloat(multi) * 10;
        case 9: return parseFloat(multi) * 15;
        case 10: return parseFloat(multi) * 20;
        case 11: return parseFloat(multi) * 25;
        case 12: return parseFloat(multi) * 50;
        case 13: return parseFloat(multi) * 75;
        case 14: return parseFloat(multi) * 100;
        case 15: return parseFloat(multi) * 125;
        case 16: return parseFloat(multi) * 250;
        case 17: return parseFloat(multi) * 375;
        case 18: return parseFloat(multi) * 500;
        case 19: return parseFloat(multi) * 1000;
        case 20: return parseFloat(multi) * 1500;
        case 21: return parseFloat(multi) * 2000;
        default: return 0;
    }
}

function mensagemTelegramDadosGerais() {
    return (
        `⚡️ *GATILHO*: ${JSON.stringify(terminal[gatilhoConfirmado].gatilho)}\n` +
        `🎯 *APOSTA*: ${JSON.stringify(terminal[gatilhoConfirmado].aposta)}\n` +
        `💰 *FICHA*: ${valorFicha(terminal[gatilhoConfirmado].ficha)}\n` +
        `🔁 *GALE*: ${JSON.stringify(terminal[gatilhoConfirmado].gale)}\n` +
        `🔄 *CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].ciclo)}\n` +
        `🔢 *GALE POR CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorCiclo)}\n` +
        `❌ *POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].posLoss)}\n` +
        `🔢 *GALE POR POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorPosLoss)}\n` +
        `✅ *POS GAIN*: ${JSON.stringify(terminal[gatilhoConfirmado].posGain)}\n\n` +
        `📊 *ASSERTIVIDADE*: ${assertividade}%\n` +
        `📅 *EVENTOS*: ${qtdEventos}\n\n` +
        `🏠 *% CASA*: ${porcentagemCasaFS()}%\n` +
        `🛫 *% VISITANTE*: ${porcentagemVisitanteFS()}%\n` +
        `⚖️ *% EMPATE*: ${porcentagemEmpateFS()}%\n\n` +
        `🏦 *VALOR DE BANCA*: R$ ${valorBanca()}\n`
    );
}

function mensagemTelegramGale(resultado, galeAtual, cicloAtual) {
    return (`🎯 *APOSTA*: ${JSON.stringify(terminal[gatilhoConfirmado].aposta)}\n` +
        `⚡️ *GATILHO*: ${JSON.stringify(terminal[gatilhoConfirmado].gatilho)}\n` +
        `⚡️ *ULTIMO RESULTADO*: ${resultado}\n` +
        `🔁 *GALE*: ${galeAtual}\n` +
        `🔄 *CICLO*: ${cicloAtual}\n` +
        `💰 *VALOR DA APOSTA*: ${valorNumericoFicha(terminal[gatilhoConfirmado].ficha, ciclo > 0 ? ciclo * galeAtual : galeAtual)}\n` +
        `📊 *ASSERTIVIDADE*: ${assertividade}%\n`
    );
}

function mensagemTelegramGreen() {
    return (
        `✅✅✅✅✅✅✅✅✅✅✅✅ *GREEN*: \n` +
        `⚡️ *GATILHO*: ${JSON.stringify(terminal[gatilhoConfirmado].gatilho)}\n` +
        `🎯 *APOSTA*: ${JSON.stringify(terminal[gatilhoConfirmado].aposta)}\n` +
        `💰 *FICHA*: ${valorFicha(terminal[gatilhoConfirmado].ficha)}\n` +
        `🔁 *GALE*: ${JSON.stringify(terminal[gatilhoConfirmado].gale)}\n` +
        `🔄 *CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].ciclo)}\n` +
        `🔢 *GALE POR CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorCiclo)}\n` +
        `❌ *POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].posLoss)}\n` +
        `🔢 *GALE POR POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorPosLoss)}\n` +
        `✅ *POS GAIN*: ${JSON.stringify(terminal[gatilhoConfirmado].posGain)}\n\n` +
        `📊 *ASSERTIVIDADE*: ${assertividade}%\n` +
        `📅 *EVENTOS*: ${qtdEventos}\n\n` +
        `🏠 *% CASA*: ${porcentagemCasaFS()}%\n` +
        `🛫 *% VISITANTE*: ${porcentagemVisitanteFS()}%\n` +
        `⚖️ *% EMPATE*: ${porcentagemEmpateFS()}%\n\n` +
        `🏦 *VALOR DE BANCA*: R$ ${valorBanca()}\n`
    );
}

function mensagemTelegramDadosRed() {
    return (
        `❌❌❌❌❌❌❌❌❌❌❌❌ *RED*: \n` +
        `⚡️ *GATILHO*: ${JSON.stringify(terminal[gatilhoConfirmado].gatilho)}\n` +
        `🎯 *APOSTA*: ${JSON.stringify(terminal[gatilhoConfirmado].aposta)}\n` +
        `💰 *FICHA*: ${valorFicha(terminal[gatilhoConfirmado].ficha)}\n` +
        `🔁 *GALE*: ${JSON.stringify(terminal[gatilhoConfirmado].gale)}\n` +
        `🔄 *CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].ciclo)}\n` +
        `🔢 *GALE POR CICLO*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorCiclo)}\n` +
        `❌ *POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].posLoss)}\n` +
        `🔢 *GALE POR POS LOSS*: ${JSON.stringify(terminal[gatilhoConfirmado].galesPorPosLoss)}\n` +
        `✅ *POS GAIN*: ${JSON.stringify(terminal[gatilhoConfirmado].posGain)}\n\n` +
        `📊 *ASSERTIVIDADE*: ${assertividade}%\n` +
        `📅 *EVENTOS*: ${qtdEventos}\n\n` +
        `🏠 *% CASA*: ${porcentagemCasaFS()}%\n` +
        `🛫 *% VISITANTE*: ${porcentagemVisitanteFS()}%\n` +
        `⚖️ *% EMPATE*: ${porcentagemEmpateFS()}%\n\n` +
        `🏦 *VALOR DE BANCA*: R$ ${valorBanca()}\n`
    );
}

function fazerSurf() {
    rodada = 1;
    if (confirmarAposta()) {

        apostaGatilhoEncontrado = terminal[gatilhoConfirmado].aposta[0];

        if (parseInt(estrategias.galeVirtual) > 0) {
            fazerGaleVirtual = true;
            if (fazerPosLoss()) {
                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                    enviarMsgTelegram(`POS LOSS VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `POS LOSS VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                }
            } else {
                liberadoApostar = false;
                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                    enviarMsgTelegram(`APOSTANDO VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `APOSTANDO VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                }
            }
        } else {
            if (fazerPosLoss()) {
                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                    enviarMsgTelegram(`POS LOSS \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                }
            } else {
                liberadoApostar = true;
                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                    ociosidade = 0;
                    enviarMsgTelegram(`APOSTANDO \n${mensagemTelegramDadosGerais()}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}`);
                    document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS / CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                } else {
                    enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramDadosGerais()}`);
                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                }
            }
        }

        rodada++;
    } else {
        document.getElementById(elementos.e10).textContent = 'ESTRATEGIA NÃO CONFIRMADA NESSA RODADA';
        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
        rodada = 0;
    }
}

async function analisaFutebolStudio() {
    criarDysplay();

    if (rodada == 0) {
        document.getElementById(elementos.e10).textContent = `BANCA R$ ${valorBanca()} HISTORICO ${estrategias.historico}`;
        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
        rodada++;
        listarHistorico();
    } else if (rodada == 1 && proximaRodada()) {
        if (confirmarAposta()) {

            apostaGatilhoEncontrado = terminal[gatilhoConfirmado].aposta[0];

            if (parseInt(estrategias.galeVirtual) > 0) {
                fazerGaleVirtual = true;
                if (fazerPosLoss()) {
                    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                        enviarMsgTelegram(`POS LOSS VIRTUAL\n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `POS LOSS VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    } else {
                        enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    }
                } else {
                    liberadoApostar = false;
                    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                        enviarMsgTelegram(`APOSTANDO VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `APOSTANDO VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    } else {
                        enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    }
                }
            } else {
                if (fazerPosLoss()) {
                    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                        enviarMsgTelegram(`POS LOSS \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    } else {
                        enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    }
                } else {
                    liberadoApostar = true;
                    if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                        ociosidade = 0;
                        enviarMsgTelegram(`APOSTANDO ${apostaGatilhoEncontrado}\n${terminal[gatilhoConfirmado].contagemCiclo > 0 ? `CICLO ${terminal[gatilhoConfirmado].contagemCiclo}` : ''}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                        document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} ${terminal[gatilhoConfirmado].contagemCiclo > 0 ? `CICLO ${terminal[gatilhoConfirmado].contagemCiclo}` : ''} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    } else {
                        enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramDadosGerais()}`);
                        document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA ${apostaGatilhoEncontrado} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                        document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                    }
                }
            }

            rodada++;
        } else {
            document.getElementById(elementos.e10).textContent = 'ESTRATEGIA NÃO CONFIRMADA NESSA RODADA';
            document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
            rodada = 0;
        }
    } else if (rodada > 1 && proximaRodada()) {
        if (confirmarGreen(historicoTotal[0])) {
            if (fazerGaleVirtual) {
                terminal[gatilhoConfirmado].contagemPosGain++;
                if (fazerPosLoss()) {
                    terminal[gatilhoConfirmado].contagemPosGain = 0;
                    terminal[gatilhoConfirmado].contagemPosLoss = 0;
                    enviarMsgTelegram(`${mensagemTelegramGreen()}`);
                    atualizarHistorico(`🟩GREEN FAKE🟩 ${dataHora()} : GALE VIRTUAL ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'GREEN FAKE';
                } else {
                    fazerPosGainGreen();
                    enviarMsgTelegram(`${mensagemTelegramGreen()}`);
                    atualizarHistorico(`🟩GREEN🟩 ${dataHora()} : GALE VIRTUAL ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'GREEN VIRTUAL';
                }

                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                cicloGale = 1;
                rodada = 0;
                apostaGatilhoEncontrado = '';
                ultimaApostaEmpate = false;
                fazerGaleVirtual = false;
                cicloGaleVirtual = 2;
                parseInt(estrategias.surf) == 1 ? fazerSurf() : rodada = 0;
                salvarStatus();
            } else {
                terminal[gatilhoConfirmado].contagemPosGain++;
                if (fazerPosLoss()) {
                    terminal[gatilhoConfirmado].contagemPosGain = 0;
                    terminal[gatilhoConfirmado].contagemPosLoss = 0;
                    enviarMsgTelegram(`${mensagemTelegramGreen()}`);
                    atualizarHistorico(`🟩GREEN FAKE🟩 ${dataHora()} : GALE ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'GREEN FAKE';
                } else {
                    terminal[gatilhoConfirmado].contagemCiclo = 0;
                    contagemWin++;
                    contagemGainTimer++;
                    tirarDiferencaDeganho();

                    if (estrategias.galeAlternadoContagem > 0) {
                        contagemAlternacia++;
                        if (contagemAlternacia > estrategias.galeAlternadoContagem) {
                            if (estrategias.galeAlternado == 1) {
                                estrategias.galeAlternado = 2;
                            } else if (estrategias.galeAlternado == 2) {
                                estrategias.galeAlternado = 3;
                            } else if (estrategias.galeAlternado == 3) {
                                estrategias.galeAlternado = 4;
                            } else if (estrategias.galeAlternado == 4) {
                                estrategias.galeAlternado = 1;
                            }
                            contagemAlternacia = 0;
                        }
                    }

                    fazerPosGainGreen();
                    enviarMsgTelegram(`${mensagemTelegramGreen()}`);
                    atualizarHistorico(`🟩GREEN🟩 ${dataHora()} : GALE ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'GREEN';
                }
                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                cicloGale = 1;
                rodada = 0;
                apostaGatilhoEncontrado = '';
                ultimaApostaEmpate = false;
                fazerGaleVirtual = false;
                cicloGaleVirtual = 2;
                parseInt(estrategias.surf) == 1 ? fazerSurf() : rodada = 0;
                salvarStatus();
            }

        } else if (retornarValorGale() > (rodada - 2)) {
            if (estrategias.esperarEmpate == 1) {
                if (historicoTotal[0] == 'E') {
                    if (apostaGatilhoEncontrado.length == 1) {
                        apostaGatilhoEncontrado = 'X' + apostaGatilhoEncontrado;
                    }
                    qtdHistAnotado = qtdHistAtual;
                    document.getElementById(elementos.e10).textContent = 'AGUARDANDO SEQUENCIA DE EMPATE TERMINAR';
                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                } else {
                    if (parseInt(estrategias.galeVirtual) > 0 && fazerGaleVirtual) {
                        if (cicloGaleVirtual > parseInt(estrategias.galeVirtual)) {
                            fazerGaleVirtual = false;
                            if (fazerPosLoss()) {
                                cicloGale++;
                                qtdHistAnotado = qtdHistAtual;
                                rodada++;
                                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                    document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                } else {
                                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`SIMULANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                }

                            } else {
                                cicloGale++;
                                cicloGaleVirtual == (parseInt(estrategias.galeVirtual) + 1) ? liberadoApostar = true : liberadoDobrarAposta = true;
                                qtdHistAnotado = qtdHistAtual;
                                rodada++;
                                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                    document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`APOSTANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                } else {
                                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`SIMULANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                }
                            }
                        } else {
                            cicloGaleVirtual++;
                            if (fazerPosLoss()) {
                                cicloGale++;
                                qtdHistAnotado = qtdHistAtual;
                                rodada++;
                                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                    document.getElementById(elementos.e10).textContent = `POS LOSS VIRTUAL ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                } else {
                                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                }

                            } else {
                                cicloGale++;
                                liberadoDobrarAposta = false;
                                qtdHistAnotado = qtdHistAtual;
                                rodada++;
                                if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                    document.getElementById(elementos.e10).textContent = `APOSTANDO VIRTUAL ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`APOSTANDO VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                } else {
                                    document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                    enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                    document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                                }
                            }
                        }

                    } else {
                        if (fazerPosLoss()) {
                            cicloGale++;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }

                        } else {
                            cicloGale++;
                            liberadoDobrarAposta = true;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`APOSTANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE CICLO ${terminal[gatilhoConfirmado].contagemCiclo} ${posicaoGaleAtual()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }
                        }
                    }
                }
            } else {
                if (parseInt(estrategias.galeVirtual) > 0 && fazerGaleVirtual) {
                    if (cicloGaleVirtual > parseInt(estrategias.galeVirtual)) {
                        fazerGaleVirtual = false;
                        if (fazerPosLoss()) {
                            cicloGale++;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }

                        } else {
                            cicloGale++;
                            cicloGaleVirtual == (parseInt(estrategias.galeVirtual) + 1) ? liberadoApostar = true : liberadoDobrarAposta = true;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`APOSTANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }
                        }
                    } else {
                        cicloGaleVirtual++;
                        if (fazerPosLoss()) {
                            cicloGale++;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `POS LOSS VIRTUAL ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }

                        } else {
                            cicloGale++;
                            liberadoDobrarAposta = false;
                            qtdHistAnotado = qtdHistAtual;
                            rodada++;
                            if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                                document.getElementById(elementos.e10).textContent = `APOSTANDO VIRTUAL ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`APOSTANDO VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            } else {
                                document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA VIRTUAL EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                                enviarMsgTelegram(`SIMULANDO APOSTA VIRTUAL \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                            }
                        }
                    }

                } else {
                    if (fazerPosLoss()) {
                        cicloGale++;
                        qtdHistAnotado = qtdHistAtual;
                        rodada++;
                        if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                            document.getElementById(elementos.e10).textContent = `POS LOSS ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`POS LOSS \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                            document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                        } else {
                            document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`SIMULANDO APOSTA EM \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                            document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                        }

                    } else {
                        cicloGale++;
                        liberadoDobrarAposta = true;
                        qtdHistAnotado = qtdHistAtual;
                        rodada++;
                        if (parseInt(estrategias.terminal[gatilhoConfirmado].ficha) > 0) {
                            document.getElementById(elementos.e10).textContent = `APOSTANDO ${apostaGatilhoEncontrado} GALE ${posicaoGaleAtual()} CICLO ${terminal[gatilhoConfirmado].contagemCiclo} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`APOSTANDO \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                            document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                        } else {
                            document.getElementById(elementos.e10).textContent = `SIMULANDO APOSTA EM ${apostaGatilhoEncontrado} GALE CICLO ${terminal[gatilhoConfirmado].contagemCiclo} ${posicaoGaleAtual()} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                            enviarMsgTelegram(`SIMULANDO APOSTA EM \n${mensagemTelegramGale(historicoTotal[0], posicaoGaleAtual(), terminal[gatilhoConfirmado].contagemCiclo)}`);
                            document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                        }
                    }
                }
            }
        } else {
            if (fazerGaleVirtual) {
                if (fazerPosLoss()) {
                    terminal[gatilhoConfirmado].contagemPosLoss++;
                    enviarMsgTelegram(`${mensagemTelegramDadosRed()}`);
                    atualizarHistorico(`🟥RED FAKE🟥 ${dataHora()} : GALE ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'RED FAKE';
                } else {
                    enviarMsgTelegram(`${mensagemTelegramDadosRed()}`);
                    atualizarHistorico(`🟥RED VIRTUAL🟥 ${dataHora()} : GALE VIRTUAL ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'RED VIRTUAL';
                    fazerPosGainRed();
                }

                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                cicloGale = 1;
                rodada = 0;
                apostaGatilhoEncontrado = '';
                fazerGaleVirtual = false;
                cicloGaleVirtual = 2;
                ultimaApostaEmpate = false;
                parseInt(estrategias.surf) == 1 ? fazerSurf() : rodada = 0;
                salvarStatus();
            } else {
                if (fazerPosLoss()) {
                    terminal[gatilhoConfirmado].contagemPosLoss++;
                    enviarMsgTelegram(`${mensagemTelegramDadosRed()}`);
                    atualizarHistorico(`🟥RED FAKE🟥 ${dataHora()} : GALE ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'RED FAKE';
                } else {
                    if (terminal[gatilhoConfirmado].ciclo > 0 && terminal[gatilhoConfirmado].ciclo > terminal[gatilhoConfirmado].contagemCiclo) {
                        terminal[gatilhoConfirmado].contagemCiclo++;
                    } else {
                        terminal[gatilhoConfirmado].contagemCiclo = 0;
                    }
                    contagemLoss++;
                    definirStopDePerca();
                    enviarMsgTelegram(`${mensagemTelegramDadosRed()}`);
                    atualizarHistorico(`🟥RED🟥 ${dataHora()} : GALE ${posicaoGaleAtual()} ${JSON.stringify(terminal[gatilhoConfirmado])} PORCENTAGEM CASA : ${porcentagemCasa}% PORCENTAGEM VISITANTE : ${porcentagemVisitante}% RESULTADO : ${historicoTotal[0]} IA:${assertividade}% ${qtdEventos} EVENTOS / BANCA : R$ ${valorBanca()}`);
                    document.getElementById(elementos.e10).textContent = 'RED';
                    fazerPosGainRed();
                }

                document.getElementById(elementos.e11).textContent = `CASA : ${porcentagemCasaFS()}% VISITANTE : ${porcentagemVisitanteFS()}% EMPATE : ${porcentagemEmpateFS()}%`;
                cicloGale = 1;
                rodada = 0;
                apostaGatilhoEncontrado = '';
                fazerGaleVirtual = false;
                cicloGaleVirtual = 2;
                ultimaApostaEmpate = false;
                parseInt(estrategias.surf) == 1 ? fazerSurf() : rodada = 0;
                salvarStatus();
            }
        }
    }

    if (document.getElementsByClassName(`wrapper--8b249`).length > 0) {
        await apostar();
    }

}

function liberarTimer() {
    if (parseInt(estrategias.startTimer) == 0 && parseInt(estrategias.gainTimer) > 0) {
        if (contagemGainTimer == 0) {
            if (timer / 20 > parseInt(estrategias.timer)) {
                return false;
            } else {
                return true;
            }
        } else if (contagemGainTimer >= parseInt(estrategias.gainTimer)) {
            contagemGainTimer = 0;
            return true;
        } else {
            return false;
        }
    } else if (parseInt(estrategias.startTimer) == 1 && parseInt(estrategias.gainTimer) > 0) {
        if (contagemGainTimer >= parseInt(estrategias.gainTimer)) {
            if (timer / 20 > parseInt(estrategias.timer)) {
                contagemGainTimer = 0;
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {

    }
}

async function fecharTutorial() {
    if (document.getElementsByClassName(`close--ed249`).length > 0) {
        await click(document.getElementsByClassName(elementos.e7)[0]);
    }
}

function criarDysplay() {
    if (!display) {
        let parentElement = document.querySelector(elementos.e12);
        if (parentElement) {
            let novoSpan = document.createElement('span');
            novoSpan.textContent = 'AUTO BOT FUTEBOL STUDIO';
            novoSpan.id = 'futebol-studio';
            novoSpan.style.fontSize = 'medium';
            parentElement.appendChild(novoSpan);
        }

        let parentElementPorcent = document.querySelector(elementos.e13);
        if (parentElementPorcent) {
            let novoSpan = document.createElement('span');
            novoSpan.textContent = 'PORCENTAGEM';
            novoSpan.id = 'futebol-studio-porcent';
            novoSpan.style.fontSize = 'medium';
            parentElementPorcent.appendChild(novoSpan);
        }
        display = true;
    }
}

function definirStop() {
    if (valorBanca() >= parseInt(estrategias.stopGain)) {
        return true;
    } else {
        return false;
    }
}

setInterval(async () => {
    try {

        if (Object.keys(elementos).length === 0) {
            let retornoChrome = await getChromeStorage("liberacao");

            if (retornoChrome.liberacao) {
                let checkData = await reger(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
                if (checkData.usuario) {
                    let res = await bvmvb(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'ckmcksjhe');
                    if (res.error) {
                        alert('Erro 5');
                    } else {
                        elementos = res;
                    }
                } else if (checkData.error) {
                    console.info('Erro6');
                }
            } else {
                console.info('Erro7');
            }

        } else {

            fecharTutorial();

            if (document.baseURI.includes('2yehmpp4.612qggbq')) {
                if (document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[5] != undefined) {
                    await click(document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[5]);
                }
            } else if (document.baseURI.includes('kto-bet-br.evo-games')) {
                if (document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[4] != undefined) {
                    await click(document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[4]);
                }
            } else {
                if (document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3] != undefined) {
                    await click(document.getElementsByClassName(`roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b`)[3]);
                }
            }

            if (document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[0] != undefined) {

                if (load == 0) {
                    await carregarConfiguracao();
                    await carregarStatus();
                    load = 1;
                }

                ociosidade++;
                if (ociosidade > 250 && rodada == 0) {
                    liberarApostaOciosidade = true;
                    ociosidade = 0;
                } else if (ociosidade > 250 && apostaGatilhoEncontrado == '') {
                    liberarApostaOciosidade = true;
                }


                if (document.getElementById(elementos.e10)) {
                    if (definirStop() || pararTudo) {
                        document.getElementById(elementos.e10).textContent = 'STOP';
                    } else {
                        if (liberarTimer()) {
                            const totalSeconds = timer * 3;
                            const minutes = Math.floor(totalSeconds / 60);
                            const seconds = totalSeconds % 60;
                            createToast(`CONTAGEM DO TIMER : ${minutes} min e ${seconds} seg`, 2500);
                            timer++;
                        } else {
                            await analisaFutebolStudio();
                        }
                    }
                } else {
                    if (liberarTimer()) {
                        const totalSeconds = timer * 3;
                        const minutes = Math.floor(totalSeconds / 60);
                        const seconds = totalSeconds % 60;
                        createToast(`CONTAGEM DO TIMER : ${minutes} min e ${seconds} seg`, 2500);
                        timer++;
                    } else {
                        if (definirStop() || pararTudo) {
                            document.getElementById(elementos.e10).textContent = 'STOP';
                        } else {
                            await analisaFutebolStudio();
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.info(err);
    }

}, 4000);

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

chrome.storage.onChanged.addListener((changes, areaName, namespace) => {
    if (areaName === 'local') {
        if (changes.hasOwnProperty('data')) {

            if (document.getElementsByClassName(`historyItem--47528 isDesktop--626a0 largeMobileIcon--7bcc0`)[0] != undefined) {
                carregarConfiguracao();
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

async function bvmvb(email, senha, id, bot) {
    const response = await enviarMensagem('bvmvb', { email, senha, id, bot });
    return response;
}

async function reger(email, senha) {
    const response = await enviarMensagem('reger', { email, senha });
    return response;
}

async function ergerg(email, senha, id, bot) {
    const response = await enviarMensagem('ergerg', { email, senha, id, bot });
    return response;
}

async function wsifuw(id) {
    const response = await enviarMensagem('wsifuw', { id });
    return response;
}

function salvarStatus() {
    let status = { win: contagemWin, loss: contagemLoss };
    chrome.storage.local.set({ status });
}

async function carregarStatus() {
    let res = await getChromeStorage("status");
    contagemLoss = res.status.loss;
    contagemWin = res.status.win;
}