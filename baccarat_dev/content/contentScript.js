let estrategias = {
    timer: 0,
    timerGain: 0,
    stopGainMesas: 0,
    mesas: [],
    galeAlternado: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    ficha: 0,
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

let elementHist = '';
let elementos = {};

const tableNameMapping = [
    { lobbyName: "Speed Baccarat 1", tableName: "Bacará Rápido 1" },
    { lobbyName: "Speed Baccarat 2", tableName: "Bacará Rápido 2" },
    { lobbyName: "Speed Baccarat 3", tableName: "Bacará Rápido 3" },
    { lobbyName: "Speed Baccarat 5", tableName: "Bacará Rápido 5" },
    { lobbyName: "Speed Baccarat 6", tableName: "Bacará Rápido 6" },
    { lobbyName: "Speed Baccarat 7", tableName: "Bacará Rápido 7" },
    { lobbyName: "Speed Baccarat 8", tableName: "Bacará Rápido 8" },
    { lobbyName: "Speed Baccarat 9", tableName: "Bacará Rápido 9" },
    { lobbyName: "Speed Baccarat 10", tableName: "Bacará Rápido 10" },
    { lobbyName: "Speed Baccarat 11", tableName: "Bacará Rápido 11" },
    { lobbyName: "Speed Baccarat 12", tableName: "Bacará Rápido 12" },
    { lobbyName: "Speed Baccarat 13", tableName: "Bacará Rápido 13" },
    { lobbyName: "Speed Baccarat 14", tableName: "Bacará Rápido 14" },
    { lobbyName: "Speed Baccarat 15", tableName: "Bacará Rápido 15" },
    { lobbyName: "Speed Baccarat 16", tableName: "Bacará Rápido 16" },
    { lobbyName: "Speed Baccarat 17", tableName: "Bacará Rápido 17" },
    { lobbyName: "Baccarat 1", tableName: "Bacará 1" },
    { lobbyName: "Baccarat 2", tableName: "Bacará 2" },
    { lobbyName: "Baccarat 3", tableName: "Bacará 3" },
    { lobbyName: "Baccarat 5", tableName: "Bacará 5" },
    { lobbyName: "Baccarat 6", tableName: "Bacará 6" },
    { lobbyName: "Baccarat 7", tableName: "Bacará 7" },
    { lobbyName: "Baccarat 8", tableName: "Bacará 8" },
    { lobbyName: "Baccarat 9", tableName: "Bacará 9" },
];

let terminal = [];
let contagemRodada = 0;
let contagemLoss = 0;
let contagemWin = 0;
let contagemWinTimer = 0;
let contagemWinMesa = 0;
let contagemTimerSegundos = 0;
let contagemTimerMinutos = 0;
let ociosidadeLobby = 0;
let apostaAtual = '';
let mesa = '';
let load = 0;
let display = false;
let rodada = 0;
let historico = [];
let qtdHistAtual = 0;
let qtdHistAnotado = 0;
let gatilhoConfirmado = 0;
let liberadoApostar = false;
let liberadoDobrarAposta = false;
let qtdEventos = 0;
let assertividade = 0;
let achouFicha = false;
let achouFichaEmpate = false;
let ociosidade = 0;
let alertaOciosa = 0;
let liberarApostaOciosa = false;
let porcentagemAzul = 0;
let porcentagemVermelho = 0;
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
        atualizarProtocolo('Erro na Api do Telegram - não enviou a mensagem');
    }

}

function createToast(message, time) {
    let toast = document.getElementById(elementos.a);

    if (!toast) {
        toast = document.createElement(elementos.b);
        toast.id = elementos.a;

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

function atualizarProtocolo(registro) {
    chrome.storage.local.get(["protocolo"], (res) => {

        let protocolo = [];
        if (res.protocolo == undefined) {
            protocolo = [];
        } else {
            protocolo = res.protocolo;
        }

        protocolo.unshift(registro);

        if (protocolo.length > 100) {
            protocolo.pop();
        }

        chrome.storage.local.set({
            protocolo,
        }, () => {
        });

    })
}

function adicionarContagens(lista) {
    return lista.map(obj => ({
        ...obj,
        contagemGale: 0,
        contagemCiclo: 0,
        contagemPosLoss: 0,
        contagemPosGreen: 0,
        contagemPosGain: 0
    }));
}

async function carregarConfiguracao() {
    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao) {
        let checkData = await jadbha(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {

            let exclusivo = await poqwueiq(checkData.usuario.id);

            if (exclusivo.nome_bot == 'bot_teste_editado') {
                let dataConfig = await skdjfhs(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
                if (dataConfig.error) {
                    alert('Erro 1 ');
                } else {
                    estrategias = dataConfig;
                }

            } else {
                alert('Erro 2 ');
            }
        } else if (checkData.error) {
            alert('Erro 3 ');
        }
    } else {
        alert('Erro 4 ');
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

function isInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function click(x, y, tentativas = 0) {
    var el = document.elementFromPoint(x, y);

    // Se não encontrou o elemento, não faz nada
    if (!el) return;

    // Se não está visível, tenta novamente após 500ms (até 5 tentativas)
    if (!isInViewport(el) && tentativas < 5) {
        setTimeout(() => click(x, y, tentativas + 1), 500);
        return;
    }

    var evDown = new PointerEvent('pointerdown', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y,
        'clientX': x,
        'clientY': y,
        'pointerType': 'mouse',
        'isPrimary': true
    });

    var evUp = new PointerEvent('pointerup', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y,
        'clientX': x,
        'clientY': y,
        'pointerType': 'mouse',
        'isPrimary': true
    });

    var evClick = new PointerEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y,
        'clientX': x,
        'clientY': y,
        'pointerType': 'mouse',
        'isPrimary': true
    });

    Object.defineProperty(evDown, 'target', { value: el, enumerable: true });
    Object.defineProperty(evDown, 'srcElement', { value: el, enumerable: true });
    Object.defineProperty(evUp, 'target', { value: el, enumerable: true });
    Object.defineProperty(evUp, 'srcElement', { value: el, enumerable: true });
    Object.defineProperty(evClick, 'target', { value: el, enumerable: true });
    Object.defineProperty(evClick, 'srcElement', { value: el, enumerable: true });

    if (el.focus) el.focus();
    el.dispatchEvent(evDown);
    el.dispatchEvent(evUp);
    el.dispatchEvent(evClick);
}

function fecharBaccarat() {
    if (document.querySelector(elementos.h)) {
        document.querySelector(elementos.h).click();
    }
}

function clicarInatividade() {
    if (document.querySelector(elementos.p)) {
        document.querySelector(elementos.p).click();
    }
}

function buscarClasseHistoricoPorTexto(texto) {
    const spanAlvo = Array.from(document.querySelectorAll('span'))
        .find(span => span.textContent.trim() === texto);

    if (!spanAlvo) return null;

    const divPai = spanAlvo.closest('div[class]')?.parentElement?.closest('div[class]');

    return divPai ? divPai.className.split(' ')[0] : null;
}

function clicarNoHistorico() {
    click((Math.trunc(document.getElementsByClassName(elementHist)[0].getBoundingClientRect().x)
        + Math.trunc(document.getElementsByClassName(elementHist)[0].getBoundingClientRect().width / 2)),
        (Math.trunc(document.getElementsByClassName(elementHist)[0].getBoundingClientRect().y)
            + Math.trunc(document.getElementsByClassName(elementHist)[0].getBoundingClientRect().height / 2)));
}

function defineCor(elemento) {
    let cor = window.getComputedStyle(elemento.children[0]).backgroundColor;

    if (cor === 'rgb(45, 139, 232)') {
        return 'A';
    } else if (cor === 'rgb(234, 66, 66)') {
        return 'V';
    } else if (cor === 'rgb(79, 176, 84)') {
        return 'E';
    }

}

function calcularPorcentagem(prefixo) {
    let historicoPorcentagem = [];
    for (let i = parseInt(estrategias.historico) - 1; i >= 0; i--) {
        if (historico[i] != null) {
            historicoPorcentagem.push(historico[i]);
        } else {
            historicoPorcentagem.push('N');
        }
    }
    const total = historicoPorcentagem.length;
    const count = historicoPorcentagem.filter(item => item.startsWith(prefixo)).length;
    return ((count / total) * 100).toFixed(2);
}

function porcentagemAzulBaccarat() {
    return calcularPorcentagem('A');
}

function porcentagemVermelhoBaccarat() {
    return calcularPorcentagem('V');
}

function porcentagemEmpateBaccarat() {
    return calcularPorcentagem('E');
}

function getElementoNaSuaOrdem(posicaoDesejada) {
    const totalLinhas = 6;
    const totalColunas = 18;

    const coluna = Math.floor(posicaoDesejada / totalLinhas);
    const linha = posicaoDesejada % totalLinhas;

    const indexPadrao = linha * totalColunas + coluna;

    return document.getElementsByClassName(elementHist)[indexPadrao];
}

function tamanhoHistorico() {
    let tamanho = 0;
    for (let i = 0; i < 108; i++) {
        if (getElementoNaSuaOrdem(i).textContent != '') {
            tamanho++;
        } else {
            break;
        }
    }

    return tamanho;
}

function listarHistoricoConfig(lista) {
    if (!lista.length || parseInt(estrategias.historico) === 0) {
        return [];
    }
    const elementosSelecionados = lista.slice(-parseInt(estrategias.historico)).reverse();

    return elementosSelecionados;
}

function listarHistorico() {
    historico = [];
    let historicoSelecionado = [];
    if (historicoSelecionado.length == 0) {
        for (let i = 0; i < 108; i++) {
            let elemento = getElementoNaSuaOrdem(i);
            if (elemento.textContent == '') {
                break;
            }
            let cor = defineCor(elemento);
            if (cor.concat("", elemento.textContent).length > 1) {
                historicoSelecionado.push(cor.concat("", elemento.textContent));
            }
        }
    }

    historico = listarHistoricoConfig(historicoSelecionado);
}

function confirmarAposta() {
    listarHistorico();
    console.info('Historico', JSON.stringify(historico));
    let confirmacao = false;
    porcentagemAzul = parseInt(porcentagemAzulBaccarat());
    porcentagemVermelho = parseInt(porcentagemVermelhoBaccarat());

    for (let i = 0; i < estrategias.terminal.length; i++) {
        for (let x = 0; x < estrategias.terminal[i].gatilho.length; x++) {

            if (estrategias.terminal[i].gatilho[x].length == 1) {
                if (historico[x] && estrategias.terminal[i].gatilho[x] == historico[x][0]) {
                    confirmacao = true;
                } else if (estrategias.terminal[i].gatilho[x] == 'N') {
                    confirmacao = true;
                } else {
                    confirmacao = false;
                    break;
                }
            } else {
                if (historico[x] && estrategias.terminal[i].gatilho[x] == historico[x]) {
                    confirmacao = true;
                } else if (estrategias.terminal[i].gatilho[x] == 'N') {
                    confirmacao = true;
                } else if (historico[x] && estrategias.terminal[i].gatilho[x] == 'AE' && (historico[x][0] == 'A' || historico[x][0] == 'E')) {
                    confirmacao = true;
                } else if (historico[x] && estrategias.terminal[i].gatilho[x] == 'VE' && (historico[x][0] == 'V' || historico[x][0] == 'E')) {
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

        if ((gatilho.length + parseInt(analisarGale())) >= (historicoInverso.length - i)) {
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
                for (let z = 0; z < parseInt(estrategias.terminal[gatilhoConfirmado].gale.length); z++) {
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

function selecionaFicha() {
    if (terminal[gatilhoConfirmado].ficha == 1) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '0.2') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 2 || terminal[gatilhoConfirmado].ficha == 3 || terminal[gatilhoConfirmado].ficha == 4 || terminal[gatilhoConfirmado].ficha == 5) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '1') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 6 || terminal[gatilhoConfirmado].ficha == 7 || terminal[gatilhoConfirmado].ficha == 8 || terminal[gatilhoConfirmado].ficha == 9) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '5') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 10 || terminal[gatilhoConfirmado].ficha == 11 || terminal[gatilhoConfirmado].ficha == 12 || terminal[gatilhoConfirmado].ficha == 13) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '25') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 14 || terminal[gatilhoConfirmado].ficha == 15 || terminal[gatilhoConfirmado].ficha == 16) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '125') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 17 || terminal[gatilhoConfirmado].ficha == 18) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '500') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 19) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '1250') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    } else if (terminal[gatilhoConfirmado].ficha == 20) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '5K') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFicha = true;
                break;
            }
        }
    }
}

function selecionaFichaEmpate() {
    if (estrategias.fichaEmpate == 1) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '0.2') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 2 || estrategias.fichaEmpate == 3 || estrategias.fichaEmpate == 4 || estrategias.fichaEmpate == 5) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '1') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 6 || estrategias.fichaEmpate == 7 || estrategias.fichaEmpate == 8 || estrategias.fichaEmpate == 9) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '5') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 10 || estrategias.fichaEmpate == 11 || estrategias.fichaEmpate == 12 || estrategias.fichaEmpate == 13) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '25') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 14 || estrategias.fichaEmpate == 15 || estrategias.fichaEmpate == 16) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '125') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 17 || estrategias.fichaEmpate == 18) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '500') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 19) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '1250') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    } else if (estrategias.fichaEmpate == 20) {
        for (let i = 0; i < document.querySelector(elementos.k).children.length; i++) {
            if (document.querySelector(elementos.k).children[i].textContent == '5K') {
                click((Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().x)
                    + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().width / 2)),
                    (Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().y)
                        + Math.trunc(document.querySelector(elementos.k).children[i].getBoundingClientRect().height / 2)));
                achouFichaEmpate = true;
                break;
            }
        }
    }
}

function valorCiclo() {
    return terminal[gatilhoConfirmado].contagemCiclo > 0 ?
        parseInt(estrategias.terminal[gatilhoConfirmado].ciclo[terminal[gatilhoConfirmado].contagemCiclo - 1].multiplicadorCiclo) :
        1;
}

function valorCicloGale() {
    return terminal[gatilhoConfirmado].contagemCiclo > 0 ?
        parseInt(estrategias.terminal[gatilhoConfirmado].ciclo[terminal[gatilhoConfirmado].contagemCiclo - 1].galeMultiplicadores[terminal[gatilhoConfirmado].contagemGale - 1]) :
        parseInt(estrategias.terminal[gatilhoConfirmado].gale[terminal[gatilhoConfirmado].contagemGale - 1]);
}

function valorNumericoFicha() {
    if (estrategias.terminal[gatilhoConfirmado].ficha == 1) {
        return 0.20;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 2) {
        return 1;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 3) {
        return 2;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 4) {
        return 3;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 5) {
        return 4;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 6) {
        return 5;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 7) {
        return 10;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 8) {
        return 15;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 9) {
        return 20;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 10) {
        return 25;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 11) {
        return 50;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 12) {
        return 75;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 13) {
        return 100;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 14) {
        return 125;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 15) {
        return 250;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 16) {
        return 375;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 17) {
        return 500;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 18) {
        return 1000;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 19) {
        return 1250;
    } else if (estrategias.terminal[gatilhoConfirmado].ficha == 20) {
        return 5000;
    } else {
        return 0;
    }
}

function calcularLucroSoros() {
    let gales = parseInt(analisarGale());
    let primeiraAposta = valorNumericoFicha();
    let totalApostado = 0;

    for (let i = 0; i <= gales; i++) {
        if (i == 0) {
            totalApostado += primeiraAposta;
        } else {
            totalApostado += primeiraAposta * Math.pow(2, i);
        }
    }

    let lucroLiquido = Math.ceil(totalApostado);

    return lucroLiquido;
}

function calcularFichasParaAposta() {
    let lucro = calcularLucroSoros();
    let primeiraFicha = valorNumericoFicha();

    if (primeiraFicha <= 0) {
        return 0;
    }

    let fichasNecessarias = Math.ceil(lucro / primeiraFicha);

    return fichasNecessarias;
}

function apostarSoros() {
    if (liberadoApostar) {
        selecionaFicha();

        let qtdFichasParaApostar = 1;

        if (terminal[gatilhoConfirmado].contagemCiclo > 0) {
            qtdFichasParaApostar = calcularFichasParaAposta();
        }

        if (apostaAtual === 'V' && achouFicha && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
            for (let i = 0; i < qtdFichasParaApostar; i++) {
                setTimeout(apostarVermelho, 100);
            }
        }

        if (apostaAtual === 'A' && achouFicha && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
            for (let i = 0; i < qtdFichasParaApostar; i++) {
                setTimeout(apostarAzul, 100);
            }
        }

        if (parseInt(estrategias.fichaEmpate) > 0 && parseInt(porcentagemEmpateBaccarat()) >= parseInt(estrategias.empatePorcent) && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
            selecionaFichaEmpate();
            if (achouFichaEmpate) {
                for (let i = 0; i < qtdFichasParaApostar; i++) {
                    setTimeout(apostarEmpate, 100);
                }
            }
        }

    }

    liberadoApostar = false;

    if (liberadoDobrarAposta) {

        if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {

            selecionaFicha();

            let qtdFichasParaApostar = 1;

            if (terminal[gatilhoConfirmado].contagemCiclo > 0) {
                qtdFichasParaApostar = calcularFichasParaAposta();
            } else {
                qtdFichasParaApostar = terminal[gatilhoConfirmado].gale[terminal[gatilhoConfirmado].contagemGale - 1];
            }


            if (apostaAtual === 'V' && achouFicha && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                for (let i = 0; i < qtdFichasParaApostar; i++) {
                    setTimeout(apostarVermelho, 100);
                }
            }

            if (apostaAtual === 'A' && achouFicha && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                for (let i = 0; i < qtdFichasParaApostar; i++) {
                    setTimeout(apostarAzul, 100);
                }
            }

            if (parseInt(estrategias.fichaEmpate) > 0 && parseInt(porcentagemEmpateBaccarat()) >= parseInt(estrategias.empatePorcent) && parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                selecionaFichaEmpate();
                if (achouFichaEmpate) {
                    for (let i = 0; i < qtdFichasParaApostar; i++) {
                        setTimeout(apostarEmpate, 100);
                    }
                }
            }

        }

    }

    liberadoDobrarAposta = false;

    if (liberarApostaOciosa) {
        setTimeout(apostarAzul, 100);
        setTimeout(desfazerAposta, 100);
    }

    liberarApostaOciosa = false;

}

function apostar() {
    if (liberadoApostar) {
        selecionaFicha();

        if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
            let qtdCliques = valorCiclo();

            if (apostaAtual === 'V' && achouFicha) {
                for (let i = 0; i < qtdCliques; i++) {
                    setTimeout(apostarVermelho, 100);
                }
            }

            if (apostaAtual === 'A' && achouFicha) {
                for (let i = 0; i < qtdCliques; i++) {
                    setTimeout(apostarAzul, 100);
                }
            }

            if (parseInt(estrategias.fichaEmpate) > 0 && parseInt(porcentagemEmpateBaccarat()) >= parseInt(estrategias.empatePorcent)) {
                selecionaFichaEmpate();
                if (achouFichaEmpate) {
                    for (let i = 0; i < qtdCliques; i++) {
                        setTimeout(apostarEmpate, 100);
                    }
                }
            }
        }


    }

    liberadoApostar = false;

    if (liberadoDobrarAposta) {
        selecionaFicha();

        if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
            let qtdCliques = valorCicloGale();

            if (apostaAtual === 'V' && achouFicha) {
                for (let i = 0; i < qtdCliques; i++) {
                    setTimeout(apostarVermelho, 100);
                }
            } else if (apostaAtual === 'A' && achouFicha) {
                for (let i = 0; i < qtdCliques; i++) {
                    setTimeout(apostarAzul, 100);
                }
            }

            if (parseInt(estrategias.fichaEmpate) > 0) {
                selecionaFichaEmpate();
                if (achouFichaEmpate) {
                    for (let i = 0; i < qtdCliques; i++) {
                        setTimeout(apostarEmpate, 100);
                    }
                }
            }

        }

    }

    liberadoDobrarAposta = false;

    if (liberarApostaOciosa) {
        setTimeout(apostarAzul, 1000);
        setTimeout(desfazerAposta, 1000);
    }

    liberarApostaOciosa = false;

}

function confirmarGreen(resultado) {
    if (apostaAtual == resultado[0]) {
        return true;
    } else if (parseInt(estrategias.fichaEmpate) > 0 && resultado[0] === 'E') {
        return true;
    } else {
        return false;
    }
}

function repetirAposta() {
    click((Math.trunc(document.querySelector(elementos.j).getBoundingClientRect().x)
        + Math.trunc(document.querySelector(elementos.j).getBoundingClientRect().width / 2)),
        (Math.trunc(document.querySelector(elementos.j).getBoundingClientRect().y)
            + Math.trunc(document.querySelector(elementos.j).getBoundingClientRect().height / 2)));
}

function formarValorFichaSelecionada() {
    if (terminal[gatilhoConfirmado].ficha == 1) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 2) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 3) {
        return 2;
    } else if (terminal[gatilhoConfirmado].ficha == 4) {
        return 3;
    } else if (terminal[gatilhoConfirmado].ficha == 5) {
        return 4;
    } else if (terminal[gatilhoConfirmado].ficha == 6) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 7) {
        return 2;
    } else if (terminal[gatilhoConfirmado].ficha == 8) {
        return 3;
    } else if (terminal[gatilhoConfirmado].ficha == 9) {
        return 4;
    } else if (terminal[gatilhoConfirmado].ficha == 10) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 11) {
        return 2;
    } else if (terminal[gatilhoConfirmado].ficha == 12) {
        return 3;
    } else if (terminal[gatilhoConfirmado].ficha == 13) {
        return 4;
    } else if (terminal[gatilhoConfirmado].ficha == 14) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 15) {
        return 2;
    } else if (terminal[gatilhoConfirmado].ficha == 16) {
        return 3;
    } else if (terminal[gatilhoConfirmado].ficha == 17) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 18) {
        return 2;
    } else if (terminal[gatilhoConfirmado].ficha == 19) {
        return 1;
    } else if (terminal[gatilhoConfirmado].ficha == 20) {
        return 1;
    }
}

function apostarVermelho() {
    let elementoFicha = document.getElementById(elementos.n);
    for (let i = 0; i < formarValorFichaSelecionada(); i++) {
        click((Math.trunc(elementoFicha.getBoundingClientRect().x)
            + Math.trunc(elementoFicha.getBoundingClientRect().width / 2)),
            (Math.trunc(elementoFicha.getBoundingClientRect().y)
                + Math.trunc(elementoFicha.getBoundingClientRect().height / 2)));
    }
}

function apostarAzul() {
    let elementoFicha = document.getElementById(elementos.l);
    for (let i = 0; i < formarValorFichaSelecionada(); i++) {
        click((Math.trunc(elementoFicha.getBoundingClientRect().x)
            + Math.trunc(elementoFicha.getBoundingClientRect().width / 2)),
            (Math.trunc(elementoFicha.getBoundingClientRect().y)
                + Math.trunc(elementoFicha.getBoundingClientRect().height / 2)));
    }
}

function apostarEmpate() {
    let elementoFicha = document.getElementById(elementos.m);
    for (let i = 0; i < formarValorFichaSelecionada(); i++) {
        click((Math.trunc(elementoFicha.getBoundingClientRect().x)
            + Math.trunc(elementoFicha.getBoundingClientRect().width / 2)),
            (Math.trunc(elementoFicha.getBoundingClientRect().y)
                + Math.trunc(elementoFicha.getBoundingClientRect().height / 2)));
    }
}

function desfazerAposta() {
    click((Math.trunc(document.querySelector(elementos.i).getBoundingClientRect().x)
        + Math.trunc(document.querySelector(elementos.i).getBoundingClientRect().width / 2)),
        (Math.trunc(document.querySelector(elementos.i).getBoundingClientRect().y)
            + Math.trunc(document.querySelector(elementos.i).getBoundingClientRect().height / 2)));
}

function valorBanca() {

    let valorString = document.querySelector(elementos.q).textContent.trim();

    if (valorString.includes(',') && valorString.includes('.')) {
        valorString = valorString.replace(/[^\d,.]/g, '')
            .replace('.', '')
            .replace(',', '.');
    } else if (valorString.includes(',')) {
        valorString = valorString.replace(/[^\d,]/g, '').replace(',', '.');
    } else {
        valorString = valorString.replace(/[^\d.]/g, '');
        const pontos = valorString.split('.').length - 1;
        if (pontos > 1) {
            valorString = valorString.replace(/\./g, '');
        }
    }

    let valorNumerico = parseFloat(valorString);
    return valorNumerico;

}

function fazerPosLoss() {
    if (terminal[gatilhoConfirmado].posLoss > 0) {
        if (terminal[gatilhoConfirmado].contagemPosLoss < terminal[gatilhoConfirmado].posLoss) {
            if (parseInt(estrategias.terminal[gatilhoConfirmado].cicloSequencial) == 0) {
                return true;
            } else if (parseInt(estrategias.terminal[gatilhoConfirmado].cicloSequencial) == 1) {
                if (terminal[gatilhoConfirmado].contagemCiclo > 0) {
                    return false;
                } else {
                    return true;
                }
            }

        } else {
            return false;
        }
    } else {
        return false;
    }
}

function fazerPosGreen() {
    if (terminal[gatilhoConfirmado].posGreen > 0) {
        if (terminal[gatilhoConfirmado].contagemPosGreen < terminal[gatilhoConfirmado].posGreen) {
            if (parseInt(estrategias.terminal[gatilhoConfirmado].cicloSequencial) == 0) {
                return true;
            } else if (parseInt(estrategias.terminal[gatilhoConfirmado].cicloSequencial) == 1) {
                if (terminal[gatilhoConfirmado].contagemCiclo > 0) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function verificarApostaAlternada() {
    if (estrategias.galeAlternado == 1 && terminal[gatilhoConfirmado].contagemGale > 2) {
        if (apostaAtual == 'A') {
            apostaAtual = 'V';
        } else if (apostaAtual == 'V') {
            apostaAtual = 'A';
        }
    }
}

function processarFicha(dados) {
    const dadosModificados = { ...dados };
    dadosModificados.ficha = valorFicha(dados.ficha);
    return dadosModificados;
}

function valorFicha(index) {
    if (index == 1) {
        return 'R$ 0.20';
    } else if (index == 2) {
        return 'R$ 1';
    } else if (index == 3) {
        return 'R$ 2';
    } else if (index == 4) {
        return 'R$ 3';
    } else if (index == 5) {
        return 'R$ 4';
    } else if (index == 6) {
        return 'R$ 5';
    } else if (index == 7) {
        return 'R$ 10';
    } else if (index == 8) {
        return 'R$ 15';
    } else if (index == 9) {
        return 'R$ 20';
    } else if (index == 10) {
        return 'R$ 25';
    } else if (index == 11) {
        return 'R$ 50';
    } else if (index == 12) {
        return 'R$ 75';
    } else if (index == 13) {
        return 'R$ 100';
    } else if (index == 14) {
        return 'R$ 125';
    } else if (index == 15) {
        return 'R$ 250';
    } else if (index == 16) {
        return 'R$ 375';
    } else if (index == 17) {
        return 'R$ 500';
    } else if (index == 18) {
        return 'R$ 1K';
    } else if (index == 19) {
        return 'R$ 1250';
    } else if (index == 20) {
        return 'R$ 5K';
    } else {
        return 'Simulação';
    }
}

function analisarBaccarat() {
    if (!display) {
        const parentElement = document.querySelector(elementos.r);
        if (parentElement) {
            const novoSpan = document.createElement(elementos.s);
            novoSpan.textContent = 'AUTO BOT BACCARAT - ANALISANDO DADOS PARA IA';
            novoSpan.id = elementos.t;
            novoSpan.style.fontSize = 'x-large';
            novoSpan.style.fontWeight = 'bold';
            novoSpan.style.color = 'black';
            novoSpan.style.backgroundColor = 'white';
            novoSpan.style.padding = '10px 20px';
            novoSpan.style.borderRadius = '5px';
            novoSpan.style.marginBottom = '10px';
            novoSpan.style.display = 'block';
            novoSpan.style.textAlign = 'center';
            parentElement.parentNode.insertBefore(novoSpan, parentElement);
            const novoSpanMenor = document.createElement(elementos.s);
            novoSpanMenor.textContent = 'Calculando porcentagens';
            novoSpanMenor.id = elementos.u;
            novoSpanMenor.style.fontSize = 'large';
            novoSpanMenor.style.fontWeight = 'bold';
            novoSpanMenor.style.color = 'black';
            novoSpanMenor.style.backgroundColor = 'white';
            novoSpanMenor.style.padding = '5px 15px';
            novoSpanMenor.style.borderRadius = '5px';
            novoSpanMenor.style.marginTop = '10px';
            novoSpanMenor.style.display = 'block';
            novoSpanMenor.style.textAlign = 'center';
            novoSpanMenor.style.marginBottom = '10px';
            parentElement.parentNode.insertBefore(novoSpanMenor, parentElement.nextSibling);

        }
        display = true;
    }

    if (document.getElementsByClassName(elementHist)[0] != undefined &&
        isNaN(document.getElementsByClassName(elementHist)[0].textContent)) {
        clicarNoHistorico();
    }

    qtdHistAtual = tamanhoHistorico();

    if (liberarApostaOciosa) {

        document.getElementById(elementos.t).textContent = 'APOSTANDO E CANCELANDO PRA MANTER ATIVIDADE NA MESA';

    } else if (rodada == 0 && document.getElementsByClassName(elementHist)[0] != undefined && !isNaN(document.getElementsByClassName(elementHist)[0].textContent)) {
        document.getElementById(elementos.t).textContent = `BANCA R$ ${valorBanca()}  AGUARDANDO RODADA`;
        qtdHistAnotado = qtdHistAtual;
        rodada++;

    } else if (rodada == 1 && qtdHistAnotado != qtdHistAtual) {

        if (confirmarAposta()) {
            apostaAtual = estrategias.terminal[gatilhoConfirmado].aposta[0];

            if (fazerPosLoss()) {
                contagemRodada++;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS LOSS: ${apostaAtual}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS LOSS ${apostaAtual} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
            } else if (fazerPosGreen()) {
                contagemRodada++;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS GREEN ${apostaAtual}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS GREEN ${apostaAtual} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
            } else {
                if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                    liberadoApostar = true;
                    contagemRodada = 0;
                    enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                    document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                } else {
                    enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA ${apostaAtual}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
                    document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA ${apostaAtual} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                    document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
                }
            }

            qtdHistAnotado = qtdHistAtual;
            rodada++;
        } else {

            document.getElementById(elementos.t).textContent = 'ESTRATEGIA NÃO CONFIRMADA NESSA RODADA';
            document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
            qtdHistAnotado = qtdHistAtual;
            rodada = 0;
            contagemRodada++;
            if (contagemRodada > 10) {
                salvarDados();
                fecharBaccarat();
            }
        }

    } else if (rodada > 1 && qtdHistAnotado != qtdHistAtual) {

        listarHistorico();

        if (estrategias.terminal[gatilhoConfirmado] != undefined &&
            estrategias.terminal[gatilhoConfirmado].soros != undefined &&
            parseInt(estrategias.terminal[gatilhoConfirmado].soros) == 0) {
            analisarMartinGale();
        } else {
            analisarSorosGale();
        }
    }

    if (document.querySelector(elementos.v) != null) {
        apostar();
    }


}

function analisarGale() {
    if (terminal[gatilhoConfirmado].contagemCiclo > 0) {
        return estrategias.terminal[gatilhoConfirmado].ciclo[terminal[gatilhoConfirmado].contagemCiclo - 1].galeMultiplicadores.length;
    } else {
        return estrategias.terminal[gatilhoConfirmado].gale.length;
    }
}

function analisarMartinGale() {
    if (confirmarGreen(historico[0])) {
        terminal[gatilhoConfirmado].contagemPosGain++;
        if (fazerPosLoss()) {
            terminal[gatilhoConfirmado].contagemPosGain = 0;
            terminal[gatilhoConfirmado].contagemPosLoss = 0;
            enviarMsgTelegram(`🟩GREEN FAKE🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟩GREEN FAKE🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'GREEN FAKE';
            if (contagemRodada > 10) {
                terminal[gatilhoConfirmado].contagemGale = 0;
                salvarDados();
                fecharBaccarat();
            }
        } else if (fazerPosGreen()) {
            if (terminal[gatilhoConfirmado].posGreen > 0) {
                terminal[gatilhoConfirmado].contagemPosGreen++;
            }
            enviarMsgTelegram(`🟩GREEN FAKE🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟩GREEN FAKE🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'GREEN FAKE';
            if (contagemRodada > 10) {
                terminal[gatilhoConfirmado].contagemGale = 0;
                salvarDados();
                fecharBaccarat();
            }
        } else {
            terminal[gatilhoConfirmado].contagemCiclo = 0;
            contagemWin++;
            contagemWinTimer++;
            contagemWinMesa++;
            if (parseInt(terminal[gatilhoConfirmado].posGain) <= terminal[gatilhoConfirmado].contagemPosGain) {
                terminal[gatilhoConfirmado].contagemPosGain = 0;
                terminal[gatilhoConfirmado].contagemPosLoss = 0;
            }
            enviarMsgTelegram(`🟩GREEN🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟩GREEN🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'GREEN';
        }

        terminal[gatilhoConfirmado].contagemGale = 0;
        estrategias.surf == 1 ? rodada = 1 : rodada = 0;
    } else if (analisarGale() > (rodada - 2)) {
        terminal[gatilhoConfirmado].contagemGale++;
        verificarApostaAlternada();
        qtdHistAnotado = qtdHistAtual;
        rodada++;
        if (fazerPosLoss()) {
            contagemRodada++;
            document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS LOSS ${apostaAtual} GALE ${terminal[gatilhoConfirmado].contagemGale} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
            enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS LOSS ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
        } else if (fazerPosGreen()) {
            contagemRodada++;
            document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS GREEN ${apostaAtual} GALE ${terminal[gatilhoConfirmado].contagemGale} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
            enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} POS GREEN ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            document.getElementById(elementos.u).textContent = `Azul: ${porcentagemAzul}% - Vermelho: ${porcentagemVermelho}% - Empate: ${porcentagemEmpateBaccarat()}% Ociosidade ${contagemRodada} IA:${assertividade}% ${qtdEventos} EVENTOS`;
        } else {
            if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                liberadoDobrarAposta = true;
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual} GALE ${terminal[gatilhoConfirmado].contagemGale} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            } else {
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA EM ${apostaAtual} GALE CICLO ${terminal[gatilhoConfirmado].contagemCiclo} ${terminal[gatilhoConfirmado].contagemGale}`;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA EM ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            }
        }

    } else {

        if (fazerPosLoss()) {
            if (terminal[gatilhoConfirmado].posLoss > 0) {
                terminal[gatilhoConfirmado].contagemPosLoss++;
            }
            enviarMsgTelegram(`🟥RED FAKE🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟥RED FAKE🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'RED FAKE';
            if (contagemRodada > 10) {
                terminal[gatilhoConfirmado].contagemGale = 0;
                salvarDados();
                fecharBaccarat();
            }
        } else if (fazerPosGreen()) {
            terminal[gatilhoConfirmado].contagemPosGain = 0;
            terminal[gatilhoConfirmado].contagemPosGreen = 0;
            enviarMsgTelegram(`🟥RED FAKE🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟥RED FAKE🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'RED FAKE';
            if (contagemRodada > 10) {
                terminal[gatilhoConfirmado].contagemGale = 0;
                salvarDados();
                fecharBaccarat();
            }
        } else {
            terminal[gatilhoConfirmado].contagemPosGain = 0;
            terminal[gatilhoConfirmado].contagemPosGreen = 0;
            terminal[gatilhoConfirmado].contagemPosLoss = 0;
            if (terminal[gatilhoConfirmado].ciclo.length > 0 && terminal[gatilhoConfirmado].ciclo.length > terminal[gatilhoConfirmado].contagemCiclo) {
                terminal[gatilhoConfirmado].contagemCiclo++;
            } else {
                terminal[gatilhoConfirmado].contagemCiclo = 0;
            }
            contagemLoss++;
            enviarMsgTelegram(`🟥RED🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟥RED🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'RED';
        }

        terminal[gatilhoConfirmado].contagemGale = 0;
        estrategias.surf == 1 ? rodada = 1 : rodada = 0;
    }
}

function analisarSorosGale() {
    if (confirmarGreen(historico[0])) {

        if (analisarGale() > (rodada - 2)) {

            terminal[gatilhoConfirmado].contagemGale++;
            verificarApostaAlternada();
            qtdHistAnotado = qtdHistAtual;
            rodada++;

            if (parseInt(terminal[gatilhoConfirmado].ficha) > 0) {
                liberadoDobrarAposta = true;
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual} GALE ${terminal[gatilhoConfirmado].contagemGale} CICLO ${terminal[gatilhoConfirmado].contagemCiclo}`;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} APOSTANDO ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            } else {
                document.getElementById(elementos.t).textContent = `GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA EM ${apostaAtual} GALE CICLO ${terminal[gatilhoConfirmado].contagemCiclo} ${terminal[gatilhoConfirmado].contagemGale}`;
                enviarMsgTelegram(`GATILHO: ${JSON.stringify(estrategias.terminal[gatilhoConfirmado].gatilho)} SIMULANDO APOSTA EM ${apostaAtual}\nGALE ${terminal[gatilhoConfirmado].contagemGale}\nCICLO ${terminal[gatilhoConfirmado].contagemCiclo}\nIA:${assertividade}%\n${qtdEventos} EVENTOS`);
            }

        } else {

            contagemWin++;
            contagemWinTimer++;
            contagemWinMesa++;
            enviarMsgTelegram(`🟩GREEN🟩\n${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
            atualizarProtocolo(`🟩GREEN🟩 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
            document.getElementById(elementos.t).textContent = 'GREEN';

            terminal[gatilhoConfirmado].contagemGale = 0;
            estrategias.surf == 1 ? rodada = 1 : rodada = 0;

            if (terminal[gatilhoConfirmado].ciclo.length > 0 && terminal[gatilhoConfirmado].ciclo.length > terminal[gatilhoConfirmado].contagemCiclo) {
                terminal[gatilhoConfirmado].contagemCiclo++;
            } else {
                terminal[gatilhoConfirmado].contagemCiclo = 0;
            }
        }

    } else {

        contagemLoss++;
        enviarMsgTelegram(`🟥RED🟥 ${dataHora()}\nGALE ${rodada - 2}\n${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))}\nPORCENTAGEM AZUL : ${porcentagemAzul}%\nPORCENTAGEM VERMELHO : ${porcentagemVermelho}%\nRESULTADO : ${historico[0]}\nIA:${assertividade}%\n${qtdEventos} EVENTOS\n\nBANCA R$ ${valorBanca()}`);
        atualizarProtocolo(`🟥RED🟥 ${dataHora()} : GALE ${rodada - 2} ${JSON.stringify(processarFicha(estrategias.terminal[gatilhoConfirmado]))} PORCENTAGEM AZUL : ${porcentagemAzul}% PORCENTAGEM VERMELHO : ${porcentagemVermelho}% RESULTADO : ${historico[0]}`);
        document.getElementById(elementos.t).textContent = 'RED';

        terminal[gatilhoConfirmado].contagemCiclo = 0;
        terminal[gatilhoConfirmado].contagemGale = 0;
        estrategias.surf == 1 ? rodada = 1 : rodada = 0;

    }
}

function sairMesaTimer() {
    if (parseInt(estrategias.timer) > 0) {
        if (parseInt(estrategias.timerGain) <= contagemWinTimer) {
            salvarDados();
            fecharBaccarat();
        }
    }
}

function contarTimer() {
    if (parseInt(estrategias.timer) > 0) {
        if (parseInt(estrategias.timerGain) <= contagemWinTimer) {
            contagemTimerSegundos = contagemTimerSegundos + 3;
            if (contagemTimerSegundos >= 60) {
                contagemTimerSegundos = 0;
                contagemTimerMinutos++;
            }

            if (contagemTimerMinutos >= parseInt(estrategias.timer)) {
                contagemTimerSegundos = 0;
                contagemTimerMinutos = 0;
                contagemWinTimer = 0;
                salvarDados();
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function validarMesas(mesa) {
    const match = tableNameMapping.find((entry) => entry.lobbyName === mesa || entry.tableName === mesa);

    return match ? estrategias.mesas.includes(match.lobbyName) || estrategias.mesas.includes(match.tableName) : false;
}

function validarMesa(mesa, mesaConfig) {
    const match = tableNameMapping.find((entry) => entry.lobbyName === mesa || entry.tableName === mesa);

    return match ? mesaConfig == match.lobbyName || mesaConfig == match.tableName : false;
}

async function trocarMesa() {
    if (estrategias.mesas.length > 0) {

        let dados = await recuperarDados();

        if (dados == undefined || dados.mesa == undefined || !validarMesas(dados.mesa) || !validarMesas(mesa)) {
            mesa = estrategias.mesas[0];
            salvarDados();
            fecharBaccarat();
        } else if (contagemWinMesa >= parseInt(estrategias.stopGainMesas)) {
            contagemWinMesa = 0;
            definirProximaMesa();
        }
    }
}

function definirProximaMesa() {
    for (let i = 0; i < estrategias.mesas.length; i++) {
        if (validarMesa(mesa, estrategias.mesas[i])) {
            if (estrategias.mesas[i + 1] != undefined) {
                mesa = estrategias.mesas[i + 1];
                salvarDados();
                fecharBaccarat();
                break;
            } else {
                mesa = estrategias.mesas[0];
                salvarDados();
                fecharBaccarat();
                break;
            }
        }
    }
}

function fecharPagamentosLimites() {
    if (document.querySelector(elementos.g)) {
        document.querySelector(elementos.g).click();
    }
}

setInterval(async () => {
    try {

        if (Object.keys(elementos).length === 0) {

            let retornoChrome = await getChromeStorage("liberacao");

            if (retornoChrome.liberacao) {
                let checkData = await jadbha(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
                if (checkData.usuario) {
                    let res = await sakjnda(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'jdhbwjw');
                    if (res.error) {
                        alert('Erro 5');
                    } else {
                        elementos = res;
                    }
                } else if (checkData.error) {
                    alert('Erro 6 ');
                }
            }

        } else {
            fecharPagamentosLimites();

            if (buscarClasseHistoricoPorTexto("E") != null) {
                elementHist = buscarClasseHistoricoPorTexto("E");
            } else if (buscarClasseHistoricoPorTexto("J") != null) {
                elementHist = buscarClasseHistoricoPorTexto("J");
            } else if (buscarClasseHistoricoPorTexto("B") != null) {
                elementHist = buscarClasseHistoricoPorTexto("B");
            }

            if (document.getElementsByClassName(elementHist)[0] != undefined) {

                mesa = document.querySelector(elementos.x).outerText.split('\n')[0];

                if (load == 0) {
                    let dataMesa = await recuperarDados();
                    if (dataMesa == undefined || dataMesa.mesa == undefined) {
                        await carregarConfiguracao();
                        load = 1;
                        terminal = adicionarContagens(estrategias.terminal);
                    } else {
                        await carregarConfiguracao();
                        carregarDados(dataMesa);
                        load = 1;
                    }
                }

                ociosidade++;
                alertaOciosa++;
                if (alertaOciosa > 5) {
                    clicarInatividade();
                    alertaOciosa = 0;
                }

                if (ociosidade > 300 && rodada === 0) {
                    liberarApostaOciosa = true;
                    ociosidade = 0;
                }

                sairMesaTimer();
                trocarMesa();

                if (document.getElementById(elementos.t)) {
                    let bancaAtual = valorBanca();
                    if (bancaAtual <= parseFloat(estrategias.stopLoss) || bancaAtual >= parseFloat(estrategias.stopGain)) {
                        document.getElementById(elementos.t).textContent = 'STOP';
                    } else {
                        analisarBaccarat();
                    }
                } else {
                    analisarBaccarat();
                }
            }

            if (document.querySelectorAll(elementos.w).length > 1) {
                let dataMesa = await recuperarDados();
                await carregarConfiguracao();

                if (dataMesa != undefined && dataMesa.mesa != undefined && dataMesa.mesa != '' && mesa == '') {
                    carregarDados(dataMesa);
                    createToast(`CARREGANDO DADOS NO LOBBY`, 2000);
                } else {
                    ociosidadeLobby++;

                    if (ociosidadeLobby >= 100) {
                        salvarDados();
                        createToast(`procurando mesa : ${mesa}`, 2000);
                        let list = document.querySelectorAll(elementos.w);
                        for (let i = 0; i < list.length; i++) {
                            list[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                            if (validarMesa(mesa, list[i].textContent)) {
                                list[i].click();
                                break;
                            }
                        }
                    } else {
                        if (contarTimer()) {
                            createToast(`timer: ${contagemTimerMinutos}:${contagemTimerSegundos}`, 2000);
                        } else {
                            createToast(`procurando mesa : ${mesa}`, 2000);
                            let list = document.querySelectorAll(elementos.w);
                            for (let i = 0; i < list.length; i++) {
                                list[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                                if (validarMesa(mesa, list[i].textContent)) {
                                    list[i].click();
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.info(err);
    }
}, 3000);

function reset() {
    window.location.reload(true);
}

chrome.storage.onChanged.addListener(async (changes, areaName, namespace) => {
    if (areaName === 'local') {
        if (changes.hasOwnProperty('data')) {
            if (document.getElementsByClassName(elementHist)[0] != undefined) {

                let dataMesa = await recuperarDados();

                if (dataMesa == undefined || dataMesa.mesa == undefined) {
                    await carregarConfiguracao();
                    terminal = adicionarContagens(estrategias.terminal);
                } else {
                    await carregarConfiguracao();
                    carregarDados(dataMesa);
                }
            }
        }
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

async function jadbha(email, senha) {
    const response = await enviarMensagem('jadbha', { email, senha });
    return response;
}

async function skdjfhs(email, senha, id, bot) {
    const response = await enviarMensagem('skdjfhs', { email, senha, id, bot });
    return response;
}

async function sakjnda(email, senha, id, bot) {
    const response = await enviarMensagem('sakjnda', { email, senha, id, bot });
    return response;
}

async function poqwueiq(id) {
    const response = await enviarMensagem('poqwueiq', { id });
    return response;
}

async function salvarDados() {
    const dataContentScript = {
        terminal: terminal,
        contagemLoss: contagemLoss,
        contagemWin: contagemWin,
        contagemWinMesa: contagemWinMesa,
        contagemWinTimer: contagemWinTimer,
        contagemTimerMinutos: contagemTimerMinutos,
        contagemTimerSegundos: contagemTimerSegundos,
        mesa: mesa
    }
    await salvarStorage(dataContentScript);
}

async function recuperarDados() {
    const response = await getChromeStorage('dataContentScript');
    return response.dataContentScript;
}

function carregarDados(data) {
    if (data != undefined) {
        terminal = data.terminal;
        contagemLoss = data.contagemLoss;
        contagemWin = data.contagemWin;
        contagemWinMesa = data.contagemWinMesa;
        contagemWinTimer = data.contagemWinTimer;
        contagemTimerMinutos = data.contagemTimerMinutos;
        contagemTimerSegundos = data.contagemTimerSegundos;
        mesa = data.mesa;
    }
}

async function salvarStorage(dataContentScript) {
    chrome.storage.local.set({ dataContentScript });
}
