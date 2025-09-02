let elementos = {};

let configuracaoAtual = null;
let fluxoInterval = 0;
let contagemWinTimer = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let jogadasLobby = [];
let roletasLobby = [];
let listaCarrossel = [];
let roletaAtualCarrossel = '';
let visaoLobby = 0;
let roleta = {};
let sequenciaAtual = [];
let rodada = 0;
let aposta = [];
let chaveAposta = false;
let galeIA = 0;
let estrategiaIAmsg = '';
let galeAtual = 0;
let contagemAcertos = 0;
let contagemErros = 0;
let contagemConfirmacaoSolo = 0;
let valorAntesDeAposta = 0;
let valorDePerca = 0;
let pararTudo = false;

const accountPanel = '.account-panel';

const primeiraDuzia = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
];
const segundaDuzia = [
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
];
const terceiraDuzia = [
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
];
const primeiraColuna = [
    "1",
    "4",
    "7",
    "10",
    "13",
    "16",
    "19",
    "22",
    "25",
    "28",
    "31",
    "34",
];
const segundaColuna = [
    "2",
    "5",
    "8",
    "11",
    "14",
    "17",
    "20",
    "23",
    "26",
    "29",
    "32",
    "35",
];
const terceiraColuna = [
    "3",
    "6",
    "9",
    "12",
    "15",
    "18",
    "21",
    "24",
    "27",
    "30",
    "33",
    "36",
];
const numerosVermelhos = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "12",
    "14",
    "16",
    "18",
    "19",
    "21",
    "23",
    "25",
    "27",
    "30",
    "32",
    "34",
    "36",
];
const numerosPretos = [
    "2",
    "4",
    "6",
    "8",
    "10",
    "11",
    "13",
    "15",
    "17",
    "20",
    "22",
    "24",
    "26",
    "28",
    "29",
    "31",
    "33",
    "35",
];
const numerosPares = [
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
    "26",
    "28",
    "30",
    "32",
    "34",
    "36",
];
const numerosImpares = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "21",
    "23",
    "25",
    "27",
    "29",
    "31",
    "33",
    "35",
];
const numerosBaixos = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
];
const numerosAltos = [
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
];
const terminal0 = ["0", "10", "20", "30"];
const terminal1 = ["1", "11", "21", "31"];
const terminal2 = ["2", "12", "22", "32"];
const terminal3 = ["3", "13", "23", "33"];
const terminal4 = ["4", "14", "24", "34"];
const terminal5 = ["5", "15", "25", "35"];
const terminal6 = ["6", "16", "26", "36"];
const terminal7 = ["7", "17", "27"];
const terminal8 = ["8", "18", "28"];
const terminal9 = ["9", "19", "29"];
const X1 = ["0", "1"];
const X2 = ["0", "2"];
const X3 = ["1", "2"];
const X4 = ["0", "3"];
const X5 = ["2", "3"];
const X6 = ["1", "4"];
const X7 = ["2", "5"];
const X8 = ["4", "5"];
const X9 = ["3", "6"];
const X10 = ["5", "6"];
const X11 = ["4", "7"];
const X12 = ["5", "8"];
const X13 = ["7", "8"];
const X14 = ["6", "9"];
const X15 = ["8", "9"];
const X16 = ["7", "10"];
const X17 = ["8", "11"];
const X18 = ["10", "11"];
const X19 = ["9", "12"];
const X20 = ["11", "12"];
const X21 = ["10", "13"];
const X22 = ["11", "14"];
const X23 = ["13", "14"];
const X24 = ["12", "15"];
const X25 = ["14", "15"];
const X26 = ["13", "16"];
const X27 = ["14", "17"];
const X28 = ["16", "17"];
const X29 = ["15", "18"];
const X30 = ["17", "18"];
const X31 = ["16", "19"];
const X32 = ["17", "20"];
const X33 = ["19", "20"];
const X34 = ["18", "21"];
const X35 = ["20", "21"];
const X36 = ["19", "22"];
const X37 = ["20", "23"];
const X38 = ["22", "23"];
const X39 = ["21", "24"];
const X40 = ["23", "24"];
const X41 = ["22", "25"];
const X42 = ["23", "26"];
const X43 = ["25", "26"];
const X44 = ["24", "27"];
const X45 = ["26", "27"];
const X46 = ["25", "28"];
const X47 = ["26", "29"];
const X48 = ["28", "29"];
const X49 = ["27", "30"];
const X50 = ["29", "30"];
const X51 = ["28", "31"];
const X52 = ["29", "32"];
const X53 = ["31", "32"];
const X54 = ["30", "33"];
const X55 = ["32", "33"];
const X56 = ["31", "34"];
const X57 = ["32", "35"];
const X58 = ["34", "35"];
const X59 = ["33", "36"];
const X60 = ["35", "36"];
const L1 = ["1", "2", "3"];
const L2 = ["0", "1", "2"];
const L3 = ["0", "2", "3"];
const L4 = ["4", "5", "6"];
const L5 = ["7", "8", "9"];
const L6 = ["10", "11", "12"];
const L7 = ["13", "14", "15"];
const L8 = ["16", "17", "18"];
const L9 = ["19", "20", "21"];
const L10 = ["22", "23", "24"];
const L11 = ["25", "26", "27"];
const L12 = ["28", "29", "30"];
const L13 = ["31", "32", "33"];
const L14 = ["34", "35", "36"];
const Q1 = ["0", "1", "2", "3"];
const Q2 = ["1", "2", "4", "5"];
const Q3 = ["2", "3", "5", "6"];
const Q4 = ["4", "5", "7", "8"];
const Q5 = ["5", "6", "8", "9"];
const Q6 = ["7", "8", "10", "11"];
const Q7 = ["8", "9", "11", "12"];
const Q8 = ["10", "11", "13", "14"];
const Q9 = ["11", "12", "14", "15"];
const Q10 = ["13", "14", "16", "17"];
const Q11 = ["14", "15", "17", "18"];
const Q12 = ["16", "17", "19", "20"];
const Q13 = ["17", "18", "20", "21"];
const Q14 = ["19", "20", "22", "23"];
const Q15 = ["20", "21", "23", "24"];
const Q16 = ["22", "23", "25", "26"];
const Q17 = ["23", "24", "26", "27"];
const Q18 = ["25", "26", "28", "29"];
const Q19 = ["26", "27", "29", "30"];
const Q20 = ["28", "29", "31", "32"];
const Q21 = ["29", "30", "32", "33"];
const Q22 = ["31", "32", "34", "35"];
const Q23 = ["32", "33", "35", "36"];
const R1 = ["1", "2", "3", "4", "5", "6"];
const R2 = ["4", "5", "6", "7", "8", "9"];
const R3 = ["7", "8", "9", "10", "11", "12"];
const R4 = ["10", "11", "12", "13", "14", "15"];
const R5 = ["13", "14", "15", "16", "17", "18"];
const R6 = ["16", "17", "18", "19", "20", "21"];
const R7 = ["19", "20", "21", "22", "23", "24"];
const R8 = ["22", "23", "24", "25", "26", "27"];
const R9 = ["25", "26", "27", "28", "29", "30"];
const R10 = ["28", "29", "30", "31", "32", "33"];
const R11 = ["31", "32", "33", "34", "35", "36"];

const fichaMap = {
    1: "0.1",
    2: "0.2",
    3: "0.5",
    4: "1",
    5: "2.5",
    6: "5",
    7: "10",
    8: "15",
    9: "20",
    10: "25",
    11: "50",
    12: "100",
    13: "125",
    14: "500",
    15: "2000",
    16: "2500",
    17: "5000",
    18: "25000"
};

let request = new XMLHttpRequest();
let messageId = 0;

function a(msg) {
    try {
        if (
            configuracaoAtual.telegram.token != undefined &&
            configuracaoAtual.telegram.token != "" &&
            configuracaoAtual.telegram.chatId != undefined &&
            configuracaoAtual.telegram.chatId != ""
        ) {
            request.onreadystatechange = function () {
                if (request.readyState == XMLHttpRequest.DONE) {
                    messageId = JSON.parse(request.response).result.message_id;
                }
            };
            request.open(
                "POST",
                `https://api.telegram.org/bot${configuracaoAtual.telegram.token}/sendMessage`,
                true
            );
            request.setRequestHeader(
                "Content-Type",
                "application/json;charset=UTF-8"
            );
            request.send(JSON.stringify({ chat_id: configuracaoAtual.telegram.chatId, text: msg }));
        }
    } catch (err) {
        atualizarHistorico("Erro na Api do Telegram - não enviou a mensagem");
    }
}

function b() {
    try {
        if (
            configuracaoAtual.telegram.token != undefined &&
            configuracaoAtual.telegram.token != "" &&
            configuracaoAtual.telegram.chatId != undefined &&
            configuracaoAtual.telegram.chatId != ""
        ) {
            request.open(
                "POST",
                `https://api.telegram.org/bot${configuracaoAtual.telegram.token}/deleteMessage`,
                true
            );
            request.setRequestHeader(
                "Content-Type",
                "application/json;charset=UTF-8"
            );
            request.send(
                JSON.stringify({ chat_id: configuracaoAtual.telegram.chatId, message_id: messageId })
            );
        }
    } catch (err) {
        atualizarHistorico("Erro na Api do Telegram - não apagou a mensagem");
    }
}

function c(novaEntrada) {
    chrome.storage.local.get(["protocolo"], (res) => {
        let protocolo = res.protocolo || [];

        protocolo.unshift(novaEntrada);

        if (protocolo.length > 100) {
            protocolo.pop();
        }

        chrome.storage.local.set({ protocolo }, () => { });
    });
}

function d() {
    const date = new Date();
    const day = date.getDate();
    const mount = date.getMonth();
    const year = date.getFullYear();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    return `${day}/${mount + 1}/${year} - ${hour}:${minutes}:${seconds}`;
}

function e(message, time = 3000) {
    let toast = document.getElementById(elementos.e42);

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "chrome-toast";

        toast.style.position = "fixed";
        toast.style.top = "20px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.minWidth = "280px";
        toast.style.padding = "14px 20px";
        toast.style.borderRadius = "8px";
        toast.style.textAlign = "center";
        toast.style.fontSize = "16px";
        toast.style.fontWeight = "bold";
        toast.style.color = "#0ff";
        toast.style.background = "rgba(10, 10, 10, 0.9)";
        toast.style.boxShadow = "0 0 15px #0ff";
        toast.style.border = "2px solid rgba(0, 255, 255, 0.5)";
        toast.style.letterSpacing = "1px";
        toast.style.textTransform = "uppercase";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
        toast.style.transition = "opacity 0.5s ease-in-out, visibility 0s 0.5s";

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

async function f() {
    const usuario = await j();
    if (!usuario || !usuario.email || !usuario.senha) {
        await l();
        return;
    }

    const { email, senha, id } = usuario;

    try {
        let res = await i(email, senha, id, 'skdjfhgs');
        if (res.error) {
            alert('Erro');
        } else {
            elementos = res;
        }
    } catch (error) {

    }

    try {
        const statusCheck = await h(email, senha);

        if (!statusCheck || !statusCheck.usuario) {
            await l();
            return;
        }
    } catch (error) {
        return;
    }
    try {
        const bot = "bot_teste_editado";
        configuracaoAtual = await k(email, senha, id, bot);

        if (!configuracaoAtual) {
            alert("erro");
            return;
        }

    } catch (error) {
        alert("Erro");
        return;
    }

};

async function g(historico, perfil) {
    const usuario = await j();
    if (!usuario || !usuario.email || !usuario.senha) {
        await l();
        return;
    }
    const { email, senha } = usuario;
    const response = await m('vpqetsra', { historico, email, senha, perfil });
    return response;
}

async function h(email, senha) {
    const response = await m('reger', { email, senha });
    return response;
}

async function i(email, senha, id, bot) {
    const response = await m('bvmvb', { email, senha, id, bot });
    return response;
}

async function j() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("userStatus", (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.userStatus || null);
            }
        });
    });
}

async function k(email, senha, id, bot) {
    const response = await m('ergerg', { email, senha, id, bot });
    return response;
}

async function l() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ userStatus: { status: false } }, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve();
            }
        });
    });
}

function m(action, data) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action, ...data }, (response) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

function n() {
    if (document.getElementsByClassName(elementos.e1)[1] != undefined && document.getElementsByClassName(elementos.e2)[0] != undefined) {
        document.getElementsByClassName(elementos.e1)[1].click();
    }
}

function o() {
    const classes = [
        'balance__value deposit-bar__balance-value--c65y_',
        'balance__value ',
    ];

    let valorNumerico = null;

    for (const className of classes) {
        const elemento = document.getElementsByClassName(className)[0];
        if (elemento) {
            let texto = elemento.textContent.replace(/[^\d.,]/g, "");
            texto = texto.replace(/,/g, "");
            valorNumerico = parseFloat(texto);
            break;
        }
    }

    return valorNumerico !== null ? valorNumerico : null;
}

function p() {
    if (parseFloat(configuracaoAtual.stop.win) <= o()) {
        return true;
    } else {
        return false;
    }
}

function q() {
    if (configuracaoAtual.timer.tempoOcioso > 0) {
        if (parseFloat(configuracaoAtual.timer.numGreens) == contagemWinTimer) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function r() {
    if (document.getElementsByClassName(elementos.e3).length == 1) {
        document.getElementsByClassName(elementos.e3)[0].children[0].click();
    }

    if (document.getElementsByClassName(elementos.e4).length == 1) {
        if (document.getElementsByClassName(elementos.e4)[0] != undefined) {
            bj(Math.trunc(document.getElementsByClassName(elementos.e4)[0].getBoundingClientRect().x) +
                Math.trunc(document.getElementsByClassName(elementos.e4)[0].getBoundingClientRect().width / 2),
                Math.trunc(document.getElementsByClassName(elementos.e4)[0].getBoundingClientRect().y) +
                Math.trunc(document.getElementsByClassName(elementos.e4)[0].getBoundingClientRect().height / 2));
        }
    }

    if (document.getElementsByClassName(elementos.e3).length == 1) {
        document.getElementsByClassName(elementos.e3)[0].click();
    }

    if (document.getElementsByClassName(elementos.e5).length == 1) {
        document.getElementsByClassName(elementos.e5)[0].click();
    }

    if (document.getElementsByClassName(elementos.e6).length > 0) {
        document.getElementsByClassName(elementos.e6)[0].click();
    }

    if (document.getElementsByClassName(elementos.e7).length > 0) {
        document.getElementsByClassName(elementos.e7)[0].click();
    }

    if (document.getElementsByClassName(elementos.e8).length == 1) {
        document.getElementsByClassName(elementos.e8)[0].click();
    }

    if (document.getElementsByClassName(elementos.e9).length == 1) {
        document.getElementsByClassName(elementos.e9)[0].click();
    }

}

function s() {
    if (document.getElementsByClassName(elementos.e10).length > 1) {
        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);
        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }
        v(`MODO STOP ATIVADO`, 1);

        if (fluxoInterval > 350 && document.getElementsByClassName(elementos.e10).length > 1) {
            fluxoInterval = 0;
            document.getElementsByClassName(elementos.e11)[5].click();
        }
    } else {
        t();
    }
}

function t() {
    if (document.getElementsByClassName(elementos.e12)[0] != undefined &&
        document.getElementsByClassName(elementos.e12)[0].children[0] != undefined) {
        bj(Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().x) +
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().width / 2),
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().y) +
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().height / 2));
    }
}

function u() {
    if (configuracaoAtual.surf.ativo) {
        rodada = 1;
    } else {
        rodada = 0;
    }
}

function v(texto, tela) {
    if (tela == 1) {
        let textoDisplay = document.getElementById(elementos.e43);
        textoDisplay.textContent = `${texto}`;
    } else if (tela == 2) {
        let textoDisplay = document.getElementById(elementos.e44);
        textoDisplay.textContent = `${texto}`;
    }
}

function w() {
    if (document.getElementsByClassName(elementos.e10).length > 1) {
        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);
        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        if (fluxoInterval > 350 && document.getElementsByClassName(elementos.e10).length > 1) {
            fluxoInterval = 0;
            document.getElementsByClassName(elementos.e11)[5].click();
        }

        contadorSegundos = contadorSegundos + 4;
        if (contadorSegundos >= 60) {
            contadorMinutos++;
            contadorSegundos = contadorSegundos - 60;
        }

        if (contadorMinutos >= parseInt(configuracaoAtual.timer.tempoOcioso)) {
            contagemWinTimer = 0;
            contadorSegundos = 0;
            contadorMinutos = 0;
        }

        v(`MODO TIMER ATIVADO  ${contadorMinutos.toString().padStart(2, '0')}:${contadorSegundos.toString().padStart(2, '0')}`, 1);

    } else {
        t();
    }
}

function x() {

    if (configuracaoAtual.modoIA.ativo) {
        z();
        return;
    }

    if (configuracaoAtual.quentesFrios.numerosQuentes ||
        configuracaoAtual.quentesFrios.numerosFrios ||
        configuracaoAtual.quentesFrios.terminaisQuentes ||
        configuracaoAtual.quentesFrios.terminaisFrios
    ) {

        if ((configuracaoAtual.modoSolo && configuracaoAtual.roletaSolo !== '') || (configuracaoAtual.modoCarrossel && configuracaoAtual.roletas.length > 0)) {
            aa();
        } else {
            t();
            e('VOCÊ PRECISA SELECIONAR MODO CARROSEL (COM SUAS ROLETAS) OU MODO SOLO (COM SUA ROLETA) PARA USAR O MODO QUENTES/FRIOS', 3000);
        }

    } else if (configuracaoAtual.modoSolo) {
        if (configuracaoAtual.modoCarrossel) {
            ab();
        } else {
            ac();
        }
    } else if (configuracaoAtual.modoCarrossel) {
        ab();
    } else {
        ad();
    }
}

function y(numero) {
    if (configuracaoAtual.colorRace.ativo) {
        jb(numero, configuracaoAtual.colorRace.historico);
    }

}

async function z() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (listaCarrossel.length == 0) {
            t();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = as();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[3].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            bt();
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;
            if (rodada == 0) {
                rodada++;
                v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (await bs()) {
                    rodada++;
                    chaveAposta = true;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        ah();
                        roletaAtualCarrossel = '';
                        t();
                    } else {
                        rodada = 1;
                        v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (ap(aposta, sequenciaAtual[0])) {
                    v(`GANHOU`, 2);
                    ca();
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                } else if (galeIA > galeAtual) {
                    chaveAposta = true;
                    galeAtual++;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    wyz();
                    v(`PERDEU`, 2);
                    ch();
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        v(`MODO IA - MONITORANDO`, 1);

        bi();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        bf(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && ae(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function aa() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (configuracaoAtual.modoCarrossel && listaCarrossel.length == 0) {
            t();
            return;
        } else if (configuracaoAtual.modoSolo && document.getElementsByClassName(elementos.e13)[0].outerText != configuracaoAtual.roletaSolo) {
            t();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = as();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[3].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            bv();
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                rodada++;
                v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (av()) {
                    rodada++;
                    chaveAposta = true;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    e('FREQUENCIA NÃO FOI VALIDADA'),
                        contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        ah();
                        if (configuracaoAtual.modoCarrossel) {
                            listaCarrossel = listaCarrossel.filter(item => item !== roletaAtualCarrossel);
                        }
                        t();
                    } else {
                        rodada = 1;
                        v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (ap(aposta, sequenciaAtual[0])) {
                    v(`GANHOU`, 2);
                    bz();
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                } else if (ai()) {
                    chaveAposta = true;
                    galeAtual++;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    wyz();
                    v(`PERDEU`, 2);
                    cg();
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        v(`MODO QUENTES/FRIOS - MONITORANDO`, 1);

        bi();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        configuracaoAtual.modoCarrossel ? bf(qtdRoletas) : bg(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (configuracaoAtual.modoCarrossel && roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (configuracaoAtual.modoCarrossel && roletasLobby[i] != undefined && ae(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && configuracaoAtual.modoSolo && configuracaoAtual.roletaSolo == roletasLobby[i].nome) {
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

        }
    }
}

async function ab() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (listaCarrossel.length == 0) {
            t();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = as();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[3].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            bu();
        } else {
            if (rodada > 0) {
                af(roleta.nome);
            }
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                rodada++;
                v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (bc(sequenciaAtual) && al()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = ak();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            e('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            ah();
                            u();
                            return;
                        }
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        ah();
                        listaCarrossel = listaCarrossel.filter(item => item !== roletaAtualCarrossel);
                        t();
                    } else {
                        rodada = 1;
                        v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (ap(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await cq();
                    v(`GANHOU`, 2);
                    cb(contagemStorage);
                    cc(contagemStorage);
                    cd(contagemStorage);
                    cf(contagemStorage);
                    ce(contagemStorage);
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                } else if (aj()) {
                    chaveAposta = true;
                    galeAtual++;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await cq();
                    wyz();
                    v(`PERDEU`, 2);
                    ci(contagemStorage);
                    cj(contagemStorage);
                    ck(contagemStorage);
                    cm(contagemStorage);
                    cl(contagemStorage);
                    ah();
                    roletaAtualCarrossel = '';
                    t();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        v(`MODO CARROSSEL - MONITORANDO`, 1);

        bi();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        bf(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && ae(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function ac() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (document.getElementsByClassName(elementos.e13)[0].outerText != configuracaoAtual.roletaSolo) {
            t();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = as();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[3].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            bu();
        } else {
            if (rodada > 0) {
                af(roleta.nome);
            }
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                rodada++;
                v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (bc(sequenciaAtual) && al()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = ak();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            e('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            ah();
                            u();
                            return;
                        }
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        ah();
                        t();
                    } else {
                        rodada = 1;
                        v(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (ap(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await cq();
                    v(`GANHOU`, 2);
                    cb(contagemStorage);
                    cc(contagemStorage);
                    cd(contagemStorage);
                    cf(contagemStorage);
                    ce(contagemStorage);
                    ah();
                    u();
                } else if (aj()) {
                    chaveAposta = true;
                    galeAtual++;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await cq();
                    wyz();
                    v(`PERDEU`, 2);
                    ci(contagemStorage);
                    cj(contagemStorage);
                    ck(contagemStorage);
                    cm(contagemStorage);
                    cl(contagemStorage);
                    ah();
                    u();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        v(`MODO SOLO - MONITORANDO`, 1);

        bi();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        bg(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {
            if (roletasLobby[i] != undefined && configuracaoAtual.roletaSolo == roletasLobby[i].nome) {
                document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function ad() {
    if (document.getElementsByClassName(elementos.e10).length > 1) {
        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        v(`MODO LOBBY - MONITORANDO`, 1);

        bi();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        bf(qtdRoletas);
        for (let i = 0; i < roletasLobby.length; i++) {
            if (roletasLobby[i] != undefined && configuracaoAtual.roletas.includes(roletasLobby[i].nome) && bd(roletasLobby[i].sequencia)) {
                if (configuracaoAtual.congruencia.ativo && jogadasLobby.length >= configuracaoAtual.congruencia.numGatilhos) {
                    document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                    break;
                } else if (!configuracaoAtual.congruencia.ativo && jogadasLobby.length == 1) {
                    document.getElementsByClassName(elementos.e10)[be(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                    break;
                }
            }
        }

    } else if (document.getElementsByClassName(elementos.e13).length > 0) {

        if (jogadasLobby.length == 0) {
            t();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = as();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[3].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            bu();
        } else {
            if (rodada > 0) {
                af(roleta.nome);
            }
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                let primeirosJogadas = jogadasLobby[0].sequencia.slice(0, 5);
                let primeirosRoleta = roleta.sequencia.slice(0, 5);

                if (JSON.stringify(primeirosJogadas) !== JSON.stringify(primeirosRoleta)) {
                    e('⚠️ DELAY NO SINCRONISMO ⚠️');
                    ah();
                    t();
                    return;
                }
                rodada++;
                v(`CONFIRMANDO ${ag()}`, 2);
                a(`AGUARDANDO CONFIRMAÇÃO DE ${ag()}\n${roleta.nome}`);
            } else if (rodada == 1) {
                if (ar(sequenciaAtual[0]) && al()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = ak();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            b();
                            e('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            ah();
                            t();
                            return;
                        }
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await jd();
                        y(sequenciaAtual[0]);
                    }
                } else {
                    b();
                    ah();
                    t();
                    return;
                }
            } else if (rodada > 1) {

                if (ap(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await cq();
                    v(`GANHOU`, 2);
                    cb(contagemStorage);
                    cc(contagemStorage);
                    cd(contagemStorage);
                    cf(contagemStorage);
                    ce(contagemStorage);
                    ah();
                    t();
                } else if (aj()) {
                    chaveAposta = true;
                    galeAtual++;
                    await jd();
                    y(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await cq();
                    wyz();
                    v(`PERDEU`, 2);
                    ci(contagemStorage);
                    cj(contagemStorage);
                    ck(contagemStorage);
                    cm(contagemStorage);
                    cl(contagemStorage);
                    ah();
                    t();
                }
            }

        }

    }
}

function ae(nomeRoleta) {

    if (configuracaoAtual.roletas.length == listaCarrossel.length) {
        listaCarrossel = [];
        listaCarrossel.push(nomeRoleta);
        return true;
    }

    if (listaCarrossel.includes(nomeRoleta)) {
        return false;
    } else {
        listaCarrossel.push(nomeRoleta);
        return true;
    }
}

function af(nomeRoleta) {
    configuracaoAtual.grupos.forEach((grupo, grupoIndex) => {
        grupo.jogadas.forEach((jogada, jogadaIndex) => {

            let eventosAssertividade = am(aq(configuracaoAtual.congruencia.ativo ? configuracaoAtual.congruencia.historico : jogada.historico),
                jogada.gatilho.split(' '),
                jogada.aposta.split(' '),
                configuracaoAtual.congruencia.ativo ? configuracaoAtual.congruencia.gale.quantidade : jogada.gale.quantidade);

            chrome.runtime.sendMessage({
                action: 'updateAnalise',
                data: {
                    grupoIndex,
                    jogadaIndex,
                    valor: `${nomeRoleta} Evt: ${eventosAssertividade.eventos} Assert: ${eventosAssertividade.assertividade}%`
                }
            });
        });
    });

}

function ag() {
    return jogadasLobby.map(jogada => jogada.gatilho.split(' ')[0]);
}

function ah() {
    contagemConfirmacaoSolo = 0;
    galeAtual = 0;
    aposta = [];
    rodada = 0;
    roleta = {};
    sequenciaAtual = [];
    jogadasLobby = [];
    visaoLobby = 0;
}

function ai() {
    if (configuracaoAtual.quentesFrios.numerosQuentes) {
        return configuracaoAtual.quentesFrios.galeNumQuentes.quantidade > galeAtual ? true : false;
    }

    if (configuracaoAtual.quentesFrios.numerosFrios) {
        return configuracaoAtual.quentesFrios.galeNumFrios.quantidade > galeAtual ? true : false;
    }

    if (configuracaoAtual.quentesFrios.terminaisQuentes) {
        return configuracaoAtual.quentesFrios.galeTermQuentes.quantidade > galeAtual ? true : false;
    }

    if (configuracaoAtual.quentesFrios.terminaisFrios) {
        return configuracaoAtual.quentesFrios.galeTermFrios.quantidade > galeAtual ? true : false;
    }
}

function aj() {
    if (configuracaoAtual.congruencia.ativo) {
        return configuracaoAtual.congruencia.gale.quantidade > galeAtual ? true : false;
    } else {
        return jogadasLobby[0].gale.quantidade > galeAtual ? true : false;
    }
}

function ak() {

    let listasApostas = jogadasLobby.map(jogada => new Set(jogada.aposta.split(' ')));

    let numerosComuns = [...listasApostas[0]];

    numerosComuns = numerosComuns.filter(num =>
        listasApostas.every(aposta => aposta.has(num))
    );

    return numerosComuns;
}

function al() {
    for (let i = jogadasLobby.length - 1; i >= 0; i--) {
        let eventosAssertividade = am(aq(jogadasLobby[i].historico), jogadasLobby[i].gatilho.split(' '), jogadasLobby[i].aposta.split(' '), jogadasLobby[i].gale.quantidade);

        if (configuracaoAtual.congruencia.ativo) {
            if (eventosAssertividade.eventos < configuracaoAtual.congruencia.eventosMin ||
                eventosAssertividade.eventos > configuracaoAtual.congruencia.eventosMax ||
                eventosAssertividade.assertividade < configuracaoAtual.congruencia.assertividadeMin ||
                eventosAssertividade.assertividade > configuracaoAtual.congruencia.assertividadeMax
            ) {
                jogadasLobby.splice(i, 1);
            }
        } else {
            if (eventosAssertividade.eventos < jogadasLobby[i].eventosMin ||
                eventosAssertividade.eventos > jogadasLobby[i].eventosMax ||
                eventosAssertividade.assertividade < jogadasLobby[i].assertividadeMin ||
                eventosAssertividade.assertividade > jogadasLobby[i].assertividadeMax
            ) {
                jogadasLobby.splice(i, 1);
            }
        }
    }

    if (configuracaoAtual.congruencia.ativo) {
        if (jogadasLobby.length > configuracaoAtual.congruencia.numGatilhos) {
            while (jogadasLobby.length > configuracaoAtual.congruencia.numGatilhos) {
                jogadasLobby.pop();
            }
            return true;
        } else if (configuracaoAtual.congruencia.numGatilhos == jogadasLobby.length) {
            return true;
        } else {
            e('⚠️ ASSERTIVIDADE NÃO CONFIRMADA ⚠️');
            return false;
        }
    } else {
        if (jogadasLobby.length == 1) {
            return true;
        } else {
            e('⚠️ ASSERTIVIDADE NÃO CONFIRMADA ⚠️');
            return false;
        }
    }
}

function am(historico, gatilho, aposta, qtdGale) {

    let eventos = 0;
    let eventosGreen = 0;
    let validouEstrategia = false;
    let incrementoGatilho = 0;

    for (let i = 0; i < historico.length; i++) {
        incrementoGatilho = i;
        for (let x = gatilho.length - 1; x >= 0; x--) {
            if (parseInt(gatilho[x]) == parseInt(historico[incrementoGatilho])) {
                validouEstrategia = true;
                incrementoGatilho++;
            } else if (an(gatilho[x], historico[incrementoGatilho])) {
                validouEstrategia = true;
                incrementoGatilho++;
            } else {
                validouEstrategia = false;
                break;
            }
        }

        if (validouEstrategia) {
            if (
                ao(
                    aposta,
                    qtdGale,
                    historico[i + 2],
                    historico[i + 3],
                    historico[i + 4],
                    historico[i + 5],
                    historico[i + 6],
                    historico[i + 7],
                    historico[i + 8],
                    historico[i + 9],
                    historico[i + 10],
                    historico[i + 11],
                    historico[i + 12]
                )
            ) {
                eventosGreen++;
                eventos++;
            } else {
                eventos++;
            }

            i = parseInt(qtdGale) + parseInt(i) + parseInt(gatilho.length);
        }
    }

    return { eventos: eventos, assertividade: eventos == 0 ? 0 : (eventosGreen / eventos) * 100 };

}

function an(legenda, numero) {
    let retorno = false;
    configuracaoAtual.legendas.forEach((item) => {
        if (item.legenda === legenda && item.numeros.includes(parseInt(numero))) {
            retorno = true;
            return;
        }
    });
    return retorno;
}

function ao(aposta, gale, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    if (gale == 0) {
        return ap(aposta, n1);
    } else if (gale == 1) {
        if (ap(aposta, n1) || ap(aposta, n2)) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 2) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 3) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 4) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 5) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 6) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6) ||
            ap(aposta, n7)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 7) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6) ||
            ap(aposta, n7) ||
            ap(aposta, n8)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 8) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6) ||
            ap(aposta, n7) ||
            ap(aposta, n8) ||
            ap(aposta, n9)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 9) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6) ||
            ap(aposta, n7) ||
            ap(aposta, n8) ||
            ap(aposta, n9) ||
            ap(aposta, n10)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 10) {
        if (
            ap(aposta, n1) ||
            ap(aposta, n2) ||
            ap(aposta, n3) ||
            ap(aposta, n4) ||
            ap(aposta, n5) ||
            ap(aposta, n6) ||
            ap(aposta, n7) ||
            ap(aposta, n8) ||
            ap(aposta, n9) ||
            ap(aposta, n10) ||
            ap(aposta, n11)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

function ap(aposta, rodada) {

    for (let i = 0; i < aposta.length; i++) {
        if (aposta[i] == rodada) {
            return true;
        } else if (rodada == "0" && configuracaoAtual.cobrirZero.ativo) {
            return true;
        } else if (aposta[i] == "D1" && primeiraDuzia.includes(rodada)) {
            return true;
        } else if (aposta[i] == "D2" && segundaDuzia.includes(rodada)) {
            return true;
        } else if (aposta[i] == "D3" && terceiraDuzia.includes(rodada)) {
            return true;
        } else if (aposta[i] == "C1" && primeiraColuna.includes(rodada)) {
            return true;
        } else if (aposta[i] == "C2" && segundaColuna.includes(rodada)) {
            return true;
        } else if (aposta[i] == "C3" && terceiraColuna.includes(rodada)) {
            return true;
        } else if (aposta[i] == "H" && numerosAltos.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L" && numerosBaixos.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R" && numerosVermelhos.includes(rodada)) {
            return true;
        } else if (aposta[i] == "B" && numerosPretos.includes(rodada)) {
            return true;
        } else if (aposta[i] == "O" && numerosImpares.includes(rodada)) {
            return true;
        } else if (aposta[i] == "P" && numerosPares.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T0" && terminal0.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T1" && terminal1.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T2" && terminal2.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T3" && terminal3.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T4" && terminal4.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T5" && terminal5.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T6" && terminal6.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T7" && terminal7.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T8" && terminal8.includes(rodada)) {
            return true;
        } else if (aposta[i] == "T9" && terminal9.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X1" && X1.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X2" && X2.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X3" && X3.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X4" && X4.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X5" && X5.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X6" && X6.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X7" && X7.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X8" && X8.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X9" && X9.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X10" && X10.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X11" && X11.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X12" && X12.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X13" && X13.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X14" && X14.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X15" && X15.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X16" && X16.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X17" && X17.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X18" && X18.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X19" && X19.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X20" && X20.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X21" && X21.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X22" && X22.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X23" && X23.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X24" && X24.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X25" && X25.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X26" && X26.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X27" && X27.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X28" && X28.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X29" && X29.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X30" && X30.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X31" && X31.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X32" && X32.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X33" && X33.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X34" && X34.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X35" && X35.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X36" && X36.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X37" && X37.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X38" && X38.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X39" && X39.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X40" && X40.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X41" && X41.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X42" && X42.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X43" && X43.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X44" && X44.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X45" && X45.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X46" && X46.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X47" && X47.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X48" && X48.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X49" && X49.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X50" && X50.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X51" && X51.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X52" && X52.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X53" && X53.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X54" && X54.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X55" && X55.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X56" && X56.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X57" && X57.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X58" && X58.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X59" && X59.includes(rodada)) {
            return true;
        } else if (aposta[i] == "X60" && X60.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L1" && L1.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L2" && L2.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L3" && L3.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L4" && L4.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L5" && L5.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L6" && L6.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L7" && L7.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L8" && L8.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L9" && L9.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L10" && L10.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L11" && L11.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L12" && L12.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L13" && L13.includes(rodada)) {
            return true;
        } else if (aposta[i] == "L14" && L14.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q1" && Q1.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q2" && Q2.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q3" && Q3.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q4" && Q4.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q5" && Q5.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q6" && Q6.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q7" && Q7.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q8" && Q8.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q9" && Q9.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q10" && Q10.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q11" && Q11.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q12" && Q12.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q13" && Q13.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q14" && Q14.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q15" && Q15.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q16" && Q16.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q17" && Q17.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q18" && Q18.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q19" && Q19.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q20" && Q20.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q21" && Q21.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q22" && Q22.includes(rodada)) {
            return true;
        } else if (aposta[i] == "Q23" && Q23.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R1" && R1.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R2" && R2.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R3" && R3.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R4" && R4.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R5" && R5.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R6" && R6.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R7" && R7.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R8" && R8.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R9" && R9.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R10" && R10.includes(rodada)) {
            return true;
        } else if (aposta[i] == "R11" && R11.includes(rodada)) {
            return true;
        } else {
            continue;
        }
    }

    return false;
}

function aq(range) {
    let numerosChamados = [];

    if (document.getElementsByClassName(elementos.e15).length > 500) {
        for (let i = (range + 12); i > 12; i--) {
            if (document.getElementsByClassName(elementos.e15)[i]) {
                if (document.getElementsByClassName(elementos.e15)[i].outerText.split("\n").length > 1) {
                    numerosChamados.push(document.getElementsByClassName(elementos.e15)[i].outerText.split("\n")[0]);
                } else {
                    numerosChamados.push(document.getElementsByClassName(elementos.e15)[i].outerText);
                }
            }
        }
    }

    return numerosChamados;
}

function aqi(range) {
    let numerosChamados = [];

    if (document.getElementsByClassName(elementos.e15).length > 500) {
        for (let i = (range + 12); i > 11; i--) {
            if (document.getElementsByClassName(elementos.e15)[i]) {
                if (document.getElementsByClassName(elementos.e15)[i].outerText.split("\n").length > 1) {
                    numerosChamados.push(document.getElementsByClassName(elementos.e15)[i].outerText.split("\n")[0]);
                } else {
                    numerosChamados.push(document.getElementsByClassName(elementos.e15)[i].outerText);
                }
            }
        }
    }

    return numerosChamados;
}

function ar(numero) {
    for (let i = jogadasLobby.length - 1; i >= 0; i--) {
        let gatilhoJogada = jogadasLobby[i].gatilho.split(' ');

        if (/^\d+$/.test(gatilhoJogada[0])) {
            if (gatilhoJogada[0] !== numero.toString()) {
                jogadasLobby.splice(i, 1);
            }
        } else {
            if (!an(gatilhoJogada[0], numero)) {
                jogadasLobby.splice(i, 1);
            }
        }
    }

    if (configuracaoAtual.congruencia.ativo) {
        let retorno = configuracaoAtual.congruencia.numGatilhos <= jogadasLobby.length;
        if (!retorno) {
            e('⚠️ ULTIMO GATILHO NÃO CONFIRMADO ⚠️');
        }
        return retorno;
    } else {
        let retorno = jogadasLobby.length == 1;
        if (!retorno) {
            e('⚠️ ULTIMO GATILHO NÃO CONFIRMADO ⚠️');
        }
        return retorno;
    }

}

function as() {
    roleta = {};
    nomeRoleta = document.getElementsByClassName(elementos.e13)[0].outerText;
    sequenciaRoleta = document.getElementsByClassName(elementos.e21)[0].outerText;
    let listaSequenciaOld = sequenciaRoleta.split("\n");
    let sizesequencia = listaSequenciaOld.length;
    let listaSequenciaNew = [];
    for (let i = 0; i < sizesequencia; i++) {
        if (listaSequenciaOld[i].charAt(0) != "x") {
            listaSequenciaNew.push(listaSequenciaOld[i]);
        }
    }
    roleta = { nome: nomeRoleta, sequencia: listaSequenciaNew };
    return roleta;
}

function at(numero, quantidadeVizinhos) {

    const sequenciaRoleta = [
        "0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36",
        "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9",
        "22", "18", "29", "7", "28", "12", "35", "3", "26"
    ];

    const indiceNumero = sequenciaRoleta.indexOf(numero.toString());

    if (indiceNumero === -1) {
        return [];
    }

    const vizinhos = [];

    for (let i = 1; i <= quantidadeVizinhos; i++) {
        const indiceEsquerda = (indiceNumero - i + sequenciaRoleta.length) % sequenciaRoleta.length;
        vizinhos.unshift(sequenciaRoleta[indiceEsquerda]);
    }

    vizinhos.push(sequenciaRoleta[indiceNumero]);

    for (let i = 1; i <= quantidadeVizinhos; i++) {
        const indiceDireita = (indiceNumero + i) % sequenciaRoleta.length;
        vizinhos.push(sequenciaRoleta[indiceDireita]);
    }

    return vizinhos;
}

function au(terminal, quantidadeVizinhos) {
    const sequenciaRoleta = [
        "0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36",
        "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9",
        "22", "18", "29", "7", "28", "12", "35", "3", "26"
    ];

    const numerosTerminal = sequenciaRoleta.filter(numero => numero.endsWith(terminal.toString()));

    const numerosComVizinhos = [];

    numerosTerminal.forEach(numero => {
        const indiceNumero = sequenciaRoleta.indexOf(numero);

        for (let i = 1; i <= quantidadeVizinhos; i++) {
            const indiceEsquerda = (indiceNumero - i + sequenciaRoleta.length) % sequenciaRoleta.length;
            numerosComVizinhos.push(sequenciaRoleta[indiceEsquerda]);
        }

        numerosComVizinhos.push(numero);

        for (let i = 1; i <= quantidadeVizinhos; i++) {
            const indiceDireita = (indiceNumero + i) % sequenciaRoleta.length;
            numerosComVizinhos.push(sequenciaRoleta[indiceDireita]);
        }
    });

    const numerosUnicos = [...new Set(numerosComVizinhos)];

    return numerosUnicos;
}

function av() {

    let numerosAposta = [];

    if (configuracaoAtual.quentesFrios.numerosQuentes) {
        let historico = aq(configuracaoAtual.quentesFrios.qtdHistoricoNumQuentes);
        let numQuentes = ax(historico);
        let validouFrequencia = true;
        let numerosQuentesValidos = [];

        for (let i = 0; i < configuracaoAtual.quentesFrios.qtdApostaNumQuentes; i++) {
            if (numQuentes[i].frequencia >= configuracaoAtual.quentesFrios.qtdEventosNumQuentes) {
                numerosQuentesValidos.push(numQuentes[i].numero);
                continue;
            } else {
                validouFrequencia = false;
                break;
            }
        }

        if (validouFrequencia) {

            for (let i = 0; i < numerosQuentesValidos.length; i++) {
                let vizinhos = at(numerosQuentesValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosNumQuentes);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }

    }

    if (configuracaoAtual.quentesFrios.numerosFrios) {
        let historico = aq(configuracaoAtual.quentesFrios.qtdHistoricoNumFrios);
        let numFrios = ay(historico);

        let validouFrequencia = true;
        let numerosFriosValidos = [];

        for (let i = 0; i < configuracaoAtual.quentesFrios.qtdApostaNumFrios; i++) {
            if (numFrios[i].frequencia <= configuracaoAtual.quentesFrios.qtdEventosNumFrios) {
                numerosFriosValidos.push(numFrios[i].numero);
                continue;
            } else {
                validouFrequencia = false;
                break;
            }
        }

        if (validouFrequencia) {

            for (let i = 0; i < numerosFriosValidos.length; i++) {
                let vizinhos = at(numerosFriosValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosNumFrios);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }

    if (configuracaoAtual.quentesFrios.terminaisQuentes) {
        let historico = aq(configuracaoAtual.quentesFrios.qtdHistoricoTermQuentes);
        let termQuentes = az(historico);

        let validouFrequencia = true;
        let terminaisQuentesValidos = [];

        for (let i = 0; i < configuracaoAtual.quentesFrios.qtdApostaTermQuentes; i++) {
            if (termQuentes[i].frequencia >= configuracaoAtual.quentesFrios.qtdEventosTermQuentes) {
                terminaisQuentesValidos.push(termQuentes[i].terminal);
                continue;
            } else {
                validouFrequencia = false;
                break;
            }
        }

        if (validouFrequencia) {

            for (let i = 0; i < terminaisQuentesValidos.length; i++) {
                let vizinhos = au(terminaisQuentesValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosTermQuentes);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }

    if (configuracaoAtual.quentesFrios.terminaisFrios) {
        let historico = aq(configuracaoAtual.quentesFrios.qtdHistoricoTermFrios);
        let termFrios = ba(historico);

        let validouFrequencia = true;
        let terminaisFriosValidos = [];

        for (let i = 0; i < configuracaoAtual.quentesFrios.qtdApostaTermFrios; i++) {
            if (termFrios[i].frequencia <= configuracaoAtual.quentesFrios.qtdEventosTermFrios) {
                terminaisFriosValidos.push(termFrios[i].terminal);
                continue;
            } else {
                validouFrequencia = false;
                break;
            }
        }

        if (validouFrequencia) {

            for (let i = 0; i < terminaisFriosValidos.length; i++) {
                let vizinhos = au(terminaisFriosValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosTermFrios);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }
    aposta = aw(numerosAposta);
    return aposta.length > 0 ? true : false;

}

function aw(lista) {
    const valoresUnicos = new Set(lista);

    return Array.from(valoresUnicos);
}

function ax(historico) {
    const frequencia = {};

    historico.forEach(numero => {
        if (frequencia[numero]) {
            frequencia[numero]++;
        } else {
            frequencia[numero] = 1;
        }
    });

    const listaFrequencia = Object.keys(frequencia).map(numero => ({
        numero: numero,
        frequencia: frequencia[numero]
    }));

    listaFrequencia.sort((a, b) => b.frequencia - a.frequencia);

    return listaFrequencia;
}

function ay(historico) {
    const frequencia = {};

    historico.forEach(numero => {
        if (frequencia[numero]) {
            frequencia[numero]++;
        } else {
            frequencia[numero] = 1;
        }
    });

    const listaFrequencia = Object.keys(frequencia).map(numero => ({
        numero: numero,
        frequencia: frequencia[numero]
    }));

    listaFrequencia.sort((a, b) => a.frequencia - b.frequencia);

    return listaFrequencia;
}

function az(historico) {
    const frequencia = {};

    historico.forEach(numero => {
        const terminal = numero.slice(-1);
        if (frequencia[terminal]) {
            frequencia[terminal]++;
        } else {
            frequencia[terminal] = 1;
        }
    });

    const listaFrequencia = Object.keys(frequencia).map(terminal => ({
        terminal: terminal,
        frequencia: frequencia[terminal]
    }));

    listaFrequencia.sort((a, b) => b.frequencia - a.frequencia);

    return listaFrequencia;
}

function ba(historico) {
    const frequencia = {};

    historico.forEach(numero => {
        const terminal = numero.slice(-1);
        if (frequencia[terminal]) {
            frequencia[terminal]++;
        } else {
            frequencia[terminal] = 1;
        }
    });

    const listaFrequencia = Object.keys(frequencia).map(terminal => ({
        terminal: terminal,
        frequencia: frequencia[terminal]
    }));

    listaFrequencia.sort((a, b) => a.frequencia - b.frequencia);

    return listaFrequencia;
}

function bc(sequencia) {
    jogadasLobby = [];

    function bb(legendaEsperada, numeroSequencia) {

        if (parseInt(legendaEsperada) == parseInt(numeroSequencia)) {
            return true;
        }

        numeroSequencia = parseInt(numeroSequencia);

        let legendaEncontrada = configuracaoAtual.legendas.find(legenda => legenda.legenda === legendaEsperada);

        if (!legendaEncontrada) {
            return false;
        }

        if (legendaEncontrada.numeros.includes(numeroSequencia)) {
            return true;
        }

        return false;
    }

    let gruposValidos = configuracaoAtual.grupos.filter(grupo =>
        grupo.jogadas.some(jogada => jogada.status === true)
    );

    for (const grupo of gruposValidos) {

        for (const jogada of grupo.jogadas) {
            if (!jogada.status) continue;

            let gatilhoArray = jogada.gatilho.split(' ');
            if (gatilhoArray.length > sequencia.length) continue;

            let valido = true;

            for (let j = 0; j < gatilhoArray.length; j++) {
                let legendaEsperada = gatilhoArray[j];
                let numeroSequencia = sequencia[j];
                if (!bb(legendaEsperada, numeroSequencia)) {
                    valido = false;
                    break;
                }
            }

            if (valido) {

                let jogadaValidada = { ...jogada, grupo: grupo.nome, sequencia: sequencia };

                if (!configuracaoAtual.congruencia.ativo) {
                    jogadasLobby = [jogadaValidada];
                    return true;
                } else {
                    jogadasLobby.push(jogadaValidada);
                    break;
                }
            }
        }
    }

    return jogadasLobby.length > 0;
}

function bd(sequencia) {
    jogadasLobby = [];

    function bb(legendaEsperada, numeroSequencia) {

        if (parseInt(legendaEsperada) == parseInt(numeroSequencia)) {
            return true;
        }

        numeroSequencia = parseInt(numeroSequencia);

        let legendaEncontrada = configuracaoAtual.legendas.find(legenda => legenda.legenda === legendaEsperada);

        if (!legendaEncontrada) {
            return false;
        }

        if (legendaEncontrada.numeros.includes(numeroSequencia)) {
            return true;
        }

        return false;
    }

    let gruposValidos = configuracaoAtual.grupos.filter(grupo =>
        grupo.jogadas.some(jogada => jogada.status === true)
    );

    for (const grupo of gruposValidos) {

        for (const jogada of grupo.jogadas) {
            if (!jogada.status) continue;

            let gatilhoArray = jogada.gatilho.split(' ');
            if (gatilhoArray.length > sequencia.length) continue;

            let valido = true;

            for (let j = 1; j < gatilhoArray.length; j++) {
                let legendaEsperada = gatilhoArray[j];
                let numeroSequencia = sequencia[j - 1];
                if (!bb(legendaEsperada, numeroSequencia)) {
                    valido = false;
                    break;
                }
            }

            if (valido) {

                let jogadaValidada = { ...jogada, grupo: grupo.nome, sequencia: sequencia };

                if (!configuracaoAtual.congruencia.ativo) {
                    jogadasLobby = [jogadaValidada];
                    return true;
                } else {
                    jogadasLobby.push(jogadaValidada);
                    break;
                }
            }
        }
    }

    return jogadasLobby.length > 0;
}

function be(qtd, nome) {
    const items = document.getElementsByClassName(elementos.e10);

    for (let i = 0; i < qtd; i++) {
        const item = items[i];
        if (!item) continue;

        const nameElement = item.getElementsByClassName("table-footer__name--p7sxG")[0];
        if (nameElement && nameElement.outerText === nome) {
            return i;
        }
    }

    return null;
}

function bf(qtd) {
    bh();

    const items = document.getElementsByClassName(elementos.e10);

    for (let i = 0; i < qtd; i++) {
        const item = items[i];
        if (!item) continue;

        const nameElement = item.getElementsByClassName("table-footer__name--p7sxG")[0];
        const nomeRoleta = nameElement ? nameElement.outerText : "roleta-bonus";

        const historyElement = item.getElementsByClassName("roulette-history--k1il_ roulette-history_lobby--LjsI9")[0];
        const sequenciaRoleta = historyElement ? historyElement.outerText : [];

        if (sequenciaRoleta.length !== 0 && configuracaoAtual.roletas.includes(nomeRoleta)) {
            const listaSequenciaOld = sequenciaRoleta.split("\n");
            const listaSequenciaNew = listaSequenciaOld.filter((seq) => seq.charAt(0) !== "x");

            const roletaExistente = roletasLobby.find((obj) => obj.nome === nomeRoleta);

            if (!roletaExistente) {
                roletasLobby.push({
                    nome: nomeRoleta,
                    sequencia: listaSequenciaNew,
                    lobby: listaSequenciaNew,
                });
            } else {
                if (JSON.stringify(listaSequenciaNew) !== JSON.stringify(roletaExistente.lobby)) {
                    roletaExistente.lobby = listaSequenciaNew;
                    roletaExistente.sequencia.unshift(listaSequenciaNew[0]);

                    if (roletaExistente.sequencia.length > 40) {
                        roletaExistente.sequencia.pop();
                    }
                }
            }
        }
    }
}

function bg(qtd) {
    bh();

    const items = document.getElementsByClassName(elementos.e10);

    for (let i = 0; i < qtd; i++) {
        const item = items[i];
        if (!item) continue;

        const nameElement = item.getElementsByClassName("table-footer__name--p7sxG")[0];
        const nomeRoleta = nameElement ? nameElement.outerText : "roleta-bonus";

        const historyElement = item.getElementsByClassName("roulette-history--k1il_ roulette-history_lobby--LjsI9")[0];
        const sequenciaRoleta = historyElement ? historyElement.outerText : [];

        if (sequenciaRoleta.length !== 0 && configuracaoAtual.roletaSolo == nomeRoleta) {
            const listaSequenciaOld = sequenciaRoleta.split("\n");
            const listaSequenciaNew = listaSequenciaOld.filter((seq) => seq.charAt(0) !== "x");

            const roletaExistente = roletasLobby.find((obj) => obj.nome === nomeRoleta);

            if (!roletaExistente) {
                roletasLobby.push({
                    nome: nomeRoleta,
                    sequencia: listaSequenciaNew,
                    lobby: listaSequenciaNew,
                });
            } else {
                if (JSON.stringify(listaSequenciaNew) !== JSON.stringify(roletaExistente.lobby)) {
                    roletaExistente.lobby = listaSequenciaNew;
                    roletaExistente.sequencia.unshift(listaSequenciaNew[0]);

                    if (roletaExistente.sequencia.length > 40) {
                        roletaExistente.sequencia.pop();
                    }
                }
            }
        }
    }
}

function bh() {
    const items = document.getElementsByClassName(elementos.e10);
    const step = 10;

    if (items.length > visaoLobby * step) {
        items[visaoLobby * step].scrollIntoView();
        visaoLobby++;
    } else {
        visaoLobby = 0;
    }
}

function bi() {
    let itemA = document.getElementsByClassName(elementos.e22);
    let itemB = document.getElementsByClassName(elementos.e23);
    if (itemA.length > 0) {
        for (let i = 0; i < itemA.length; i++) {
            if (itemA[i].outerText == "ROULETTE" || itemA[i].outerText == "ROLETA") {
                itemA[i].click();
                break;
            }
        }
    } else if (itemB.length > 0) {
        for (let i = 0; i < itemB.length; i++) {
            if (itemB[i].outerText == "ROULETTE" || itemB[i].outerText == "ROLETA") {
                itemB[i].click();
                break;
            }
        }
    }
}

function bj(x, y) {
    const evDown = new MouseEvent(`mousedown`, {
        view: window,
        bubbles: true,
        cancelable: true,
        screenX: x,
        screenY: y,
    });
    const evUp = new MouseEvent(`mouseup`, {
        view: window,
        bubbles: true,
        cancelable: true,
        screenX: x,
        screenY: y,
    });
    const evClick = new MouseEvent(`click`, {
        view: window,
        bubbles: true,
        cancelable: true,
        screenX: x,
        screenY: y,
    });
    const el = document.elementFromPoint(x, y);
    el.dispatchEvent(evDown);
    el.dispatchEvent(evUp);
    el.dispatchEvent(evClick);
}

function bk() {
    let valorConfig = configuracaoAtual.modoIA.ficha;

    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        a(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue;

        let valorTexto = textoElemento.textContent.trim().replace(',', '.');

        let valorNumerico = parseFloat(valorTexto);

        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                e(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                a(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            bj(x, y);
            return true;
        }
    }

    e(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    a(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function bl() {
    let valorConfig = 0;

    if (configuracaoAtual.congruencia.ativo) {
        valorConfig = configuracaoAtual.congruencia.ficha;
    } else {
        valorConfig = jogadasLobby[0].ficha;
    }

    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        e(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        a(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue;

        let valorTexto = textoElemento.textContent.trim().replace(',', '.');

        let valorNumerico = parseFloat(valorTexto);

        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                e(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                a(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            bj(x, y);
            return true;
        }
    }

    e(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    a(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function bm() {
    let valorConfig = 0;

    valorConfig = configuracaoAtual.quentesFrios.ficha;

    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        e(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        a(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue;

        let valorTexto = textoElemento.textContent.trim().replace(',', '.');

        let valorNumerico = parseFloat(valorTexto);

        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                e(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                a(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            bj(x, y);
            return true;
        }
    }

    e(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    a(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function bn() {
    let valorConfig = configuracaoAtual.cobrirZero.ficha;

    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        e(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        a(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue;

        let valorTexto = textoElemento.textContent.trim().replace(',', '.');

        let valorNumerico = parseFloat(valorTexto);

        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                e(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                a(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            bj(x, y);
            return true;
        }
    }

    e(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    a(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);

    return false;
}

function bo() {
    if (galeAtual > 0) {
        if (configuracaoAtual.congruencia.ativo) {
            return configuracaoAtual.congruencia.gale.multiplicador[galeAtual - 1];
        } else {
            return jogadasLobby[0].gale.multiplicador[galeAtual - 1];
        }
    } else {
        return 1;
    }
}

function bp() {
    if (galeAtual > 0) {
        if (configuracaoAtual.quentesFrios.numerosQuentes) {
            return configuracaoAtual.quentesFrios.galeNumQuentes.multiplicador[galeAtual - 1];
        }

        if (configuracaoAtual.quentesFrios.numerosFrios) {
            return configuracaoAtual.quentesFrios.galeNumFrios.multiplicador[galeAtual - 1];
        }

        if (configuracaoAtual.quentesFrios.terminaisQuentes) {
            return configuracaoAtual.quentesFrios.galeTermQuentes.multiplicador[galeAtual - 1];
        }

        if (configuracaoAtual.quentesFrios.terminaisFrios) {
            return configuracaoAtual.quentesFrios.galeTermFrios.multiplicador[galeAtual - 1];
        }
    } else {
        return 1;
    }
}

function bq(contagemCiclo) {
    if (contagemCiclo > 0) {
        if (galeAtual == 0) {
            if (configuracaoAtual.congruencia.ativo) {
                return configuracaoAtual.congruencia.ciclos[contagemCiclo - 1].multiplicador;
            } else {
                return jogadasLobby[0].ciclos[contagemCiclo - 1].multiplicador;
            }
        } else if (galeAtual > 0) {
            if (configuracaoAtual.congruencia.ativo) {
                return configuracaoAtual.congruencia.ciclos[contagemCiclo - 1].gales[galeAtual - 1];
            } else {
                return jogadasLobby[0].ciclos[contagemCiclo - 1].gales[galeAtual - 1];
            }
        }
    } else {
        return 1;
    }
}

function br() {
    if (configuracaoAtual.cobrirZero.ativo) {
        if (!bn()) {
            t();
            ah();
            return;
        }
        cy();
    }
}

async function bs() {
    let hist = aqi(500);
    const historicoIA = hist.reverse();
    let res = await g(historicoIA, configuracaoAtual.modoIA.perfil);
    aposta = [];
    if (res.numeros && res.numeros.length > 1) {
        aposta = res.numeros;
        galeIA = res.gale;
        estrategiaIAmsg = res.estrategia;
        e(res.mensagem, 15000);
    } else {
        e(res.mensagem, 10000);
        return false;
    }
    return aposta.length > 0 ? true : false;
}

function wyz() {
    if (valorAntesDeAposta > o() && parseInt(configuracaoAtual.stop.loss) > 0) {
        valorDePerca = valorDePerca + (valorAntesDeAposta - o());
        if (parseFloat(configuracaoAtual.stop.loss) <= valorDePerca) {
            pararTudo = true;
            e(`STOP DE PERDA ATINGIDO! Banca: R$ ${o()} - Perca: R$ ${valorDePerca}`, 10000);
        }
    }
}

async function bt() {
    if (chaveAposta && aposta.length > 0) {

        let simular = false;

        configuracaoAtual.modoIA.ficha == 0 ? simular = true : simular = false;

        if (!bk() && !simular) {
            t();
            ah();
            return;
        }

        by(aposta, (galeAtual));

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = o();
            }
            if (aposta.length > 15 && galeAtual > 0) {
                for (let i = 0; i < aposta.length; i++) {
                    for (let x = 0; x < galeAtual * 3; x++) {
                        switch (aposta[i]) {
                            case "0": cy(); break;
                            case "1": dl(); break;
                            case "2": dm(); break;
                            case "3": dn(); break;
                            case "4": dp(); break;
                            case "5": dq(); break;
                            case "6": dr(); break;
                            case "7": ds(); break;
                            case "8": dt(); break;
                            case "9": du(); break;
                            case "10": dv(); break;
                            case "11": dw(); break;
                            case "12": dx(); break;
                            case "13": dy(); break;
                            case "14": dz(); break;
                            case "15": ea(); break;
                            case "16": eb(); break;
                            case "17": ec(); break;
                            case "18": ed(); break;
                            case "19": ee(); break;
                            case "20": ef(); break;
                            case "21": eg(); break;
                            case "22": eh(); break;
                            case "23": ei(); break;
                            case "24": ej(); break;
                            case "25": ek(); break;
                            case "26": el(); break;
                            case "27": em(); break;
                            case "28": en(); break;
                            case "29": eo(); break;
                            case "30": ep(); break;
                            case "31": eq(); break;
                            case "32": er(); break;
                            case "33": es(); break;
                            case "34": et(); break;
                            case "35": eu(); break;
                            case "36": ev(); break;
                        }
                    }
                }
            } else {
                for (let i = 0; i < aposta.length; i++) {
                    switch (aposta[i]) {
                        case "0": cy(); break;
                        case "1": dl(); break;
                        case "2": dm(); break;
                        case "3": dn(); break;
                        case "4": dp(); break;
                        case "5": dq(); break;
                        case "6": dr(); break;
                        case "7": ds(); break;
                        case "8": dt(); break;
                        case "9": du(); break;
                        case "10": dv(); break;
                        case "11": dw(); break;
                        case "12": dx(); break;
                        case "13": dy(); break;
                        case "14": dz(); break;
                        case "15": ea(); break;
                        case "16": eb(); break;
                        case "17": ec(); break;
                        case "18": ed(); break;
                        case "19": ee(); break;
                        case "20": ef(); break;
                        case "21": eg(); break;
                        case "22": eh(); break;
                        case "23": ei(); break;
                        case "24": ej(); break;
                        case "25": ek(); break;
                        case "26": el(); break;
                        case "27": em(); break;
                        case "28": en(); break;
                        case "29": eo(); break;
                        case "30": ep(); break;
                        case "31": eq(); break;
                        case "32": er(); break;
                        case "33": es(); break;
                        case "34": et(); break;
                        case "35": eu(); break;
                        case "36": ev(); break;
                    }
                }
            }
        }
    }

    chaveAposta = false;
}

async function bu() {
    if (chaveAposta && aposta.length > 0) {

        let contagemStorage = await cq();
        let repeticaoCiclo = bq(contagemStorage.contagemCiclo);
        let multiplicadorGale = bo();

        if (cp(contagemStorage.contagemLossVirtual)) {
            v(`LOSS VIRTUAL ${contagemStorage.contagemLossVirtual} APOSTA ${aposta} GALE ${galeAtual} CICLO ${contagemStorage.contagemCiclo}`, 2);
            a(`${roleta.nome}\nLOSS VIRTUAL ${contagemStorage.contagemLossVirtual}\n${aposta}\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}`);
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            v(`POS GREEN ${contagemStorage.contagemPosGreen} APOSTA ${aposta} GALE ${galeAtual} CICLO ${contagemStorage.contagemCiclo}`, 2);
            a(`${roleta.nome}\nPOS GREEN  ${contagemStorage.contagemPosGreen}\n${aposta}\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}`);
            return;
        }

        let simular = false;

        if (configuracaoAtual.congruencia.ativo) {
            configuracaoAtual.congruencia.ficha == 0 ? simular = true : simular = false;
        } else {
            jogadasLobby[0].ficha == 0 ? simular = true : simular = false;
        }

        if (!bl() && !simular) {
            t();
            ah();
            return;
        }

        bx(aposta, (galeAtual), contagemStorage.contagemCiclo);

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = o();
            }
            for (let i = 0; i < aposta.length; i++) {
                for (let j = 0; j < (multiplicadorGale) * (repeticaoCiclo); j++) {
                    switch (aposta[i]) {
                        case "D1": cz(); break;
                        case "D2": da(); break;
                        case "D3": db(); break;
                        case "C1": dc(); break;
                        case "C2": dd(); break;
                        case "C3": de(); break;
                        case "H": df(); break;
                        case "L": dg(); break;
                        case "R": dh(); break;
                        case "B": di(); break;
                        case "P": dj(); break;
                        case "O": dk(); break;
                        case "T1": dl(); dw(); eg(); eq(); break;
                        case "T2": dm(); dx(); eh(); er(); break;
                        case "T3": dn(); dy(); ei(); es(); break;
                        case "T4": dp(); dz(); ej(); et(); break;
                        case "T5": dq(); ea(); ek(); eu(); break;
                        case "T6": dr(); eb(); el(); ev(); break;
                        case "T7": ds(); ec(); em(); break;
                        case "T8": dt(); ed(); en(); break;
                        case "T9": du(); ee(); eo(); break;
                        case "T0": cy(); dv(); ef(); ep(); break;
                        case "0": cy(); break;
                        case "1": dl(); break;
                        case "2": dm(); break;
                        case "3": dn(); break;
                        case "4": dp(); break;
                        case "5": dq(); break;
                        case "6": dr(); break;
                        case "7": ds(); break;
                        case "8": dt(); break;
                        case "9": du(); break;
                        case "10": dv(); break;
                        case "11": dw(); break;
                        case "12": dx(); break;
                        case "13": dy(); break;
                        case "14": dz(); break;
                        case "15": ea(); break;
                        case "16": eb(); break;
                        case "17": ec(); break;
                        case "18": ed(); break;
                        case "19": ee(); break;
                        case "20": ef(); break;
                        case "21": eg(); break;
                        case "22": eh(); break;
                        case "23": ei(); break;
                        case "24": ej(); break;
                        case "25": ek(); break;
                        case "26": el(); break;
                        case "27": em(); break;
                        case "28": en(); break;
                        case "29": eo(); break;
                        case "30": ep(); break;
                        case "31": eq(); break;
                        case "32": er(); break;
                        case "33": es(); break;
                        case "34": et(); break;
                        case "35": eu(); break;
                        case "36": ev(); break;
                        case "X1": ew(); break;
                        case "X2": ex(); break;
                        case "X3": ey(); break;
                        case "X4": ez(); break;
                        case "X5": fa(); break;
                        case "X6": fb(); break;
                        case "X7": fc(); break;
                        case "X8": fd(); break;
                        case "X9": fe(); break;
                        case "X10": ff(); break;
                        case "X11": fg(); break;
                        case "X12": fh(); break;
                        case "X13": fi(); break;
                        case "X14": fj(); break;
                        case "X15": fk(); break;
                        case "X16": fl(); break;
                        case "X17": fm(); break;
                        case "X18": fn(); break;
                        case "X19": fo(); break;
                        case "X20": fp(); break;
                        case "X21": fq(); break;
                        case "X22": fr(); break;
                        case "X23": fs(); break;
                        case "X24": ft(); break;
                        case "X25": fu(); break;
                        case "X26": fv(); break;
                        case "X27": fw(); break;
                        case "X28": fx(); break;
                        case "X29": fy(); break;
                        case "X30": fz(); break;
                        case "X31": ga(); break;
                        case "X32": gb(); break;
                        case "X33": gc(); break;
                        case "X34": gd(); break;
                        case "X35": ge(); break;
                        case "X36": gf(); break;
                        case "X37": gg(); break;
                        case "X38": gh(); break;
                        case "X39": gi(); break;
                        case "X40": gj(); break;
                        case "X41": gk(); break;
                        case "X42": gl(); break;
                        case "X43": gm(); break;
                        case "X44": gn(); break;
                        case "X45": go(); break;
                        case "X46": gp(); break;
                        case "X47": gq(); break;
                        case "X48": gr(); break;
                        case "X49": gs(); break;
                        case "X50": gt(); break;
                        case "X51": gu(); break;
                        case "X52": gv(); break;
                        case "X53": gw(); break;
                        case "X54": gx(); break;
                        case "X55": gy(); break;
                        case "X56": gz(); break;
                        case "X57": ha(); break;
                        case "X58": hb(); break;
                        case "X59": hc(); break;
                        case "X60": hd(); break;
                        case "L1": he(); break;
                        case "L2": hf(); break;
                        case "L3": hg(); break;
                        case "L4": hh(); break;
                        case "L5": hi(); break;
                        case "L6": hj(); break;
                        case "L7": hk(); break;
                        case "L8": hl(); break;
                        case "L9": hm(); break;
                        case "L10": hn(); break;
                        case "L11": ho(); break;
                        case "L12": hp(); break;
                        case "L13": hq(); break;
                        case "L14": hr(); break;
                        case "Q1": hs(); break;
                        case "Q2": ht(); break;
                        case "Q3": hu(); break;
                        case "Q4": hv(); break;
                        case "Q5": hw(); break;
                        case "Q6": hx(); break;
                        case "Q7": hy(); break;
                        case "Q8": hz(); break;
                        case "Q9": ia(); break;
                        case "Q10": ib(); break;
                        case "Q11": ic(); break;
                        case "Q12": id(); break;
                        case "Q13": ie(); break;
                        case "Q14": ig(); break;
                        case "Q15": ih(); break;
                        case "Q16": ii(); break;
                        case "Q17": ij(); break;
                        case "Q18": ik(); break;
                        case "Q19": il(); break;
                        case "Q20": im(); break;
                        case "Q21": io(); break;
                        case "Q22": ip(); break;
                        case "Q23": iq(); break;
                    }
                }
            }

            br();
        }

    }

    chaveAposta = false;
}

async function bv() {
    if (chaveAposta && aposta.length > 0) {

        let multiplicadorGale = bp();

        let simular = false;

        configuracaoAtual.quentesFrios.ficha == 0 ? simular = true : simular = false;

        if (!bm() && !simular) {
            t();
            ah();
            return;
        }

        bw(aposta, galeAtual);

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = o();
            }
            for (let i = 0; i < aposta.length; i++) {
                for (let j = 0; j < (multiplicadorGale); j++) {
                    switch (aposta[i]) {
                        case "0": cy(); break;
                        case "1": dl(); break;
                        case "2": dm(); break;
                        case "3": dn(); break;
                        case "4": dp(); break;
                        case "5": dq(); break;
                        case "6": dr(); break;
                        case "7": ds(); break;
                        case "8": dt(); break;
                        case "9": du(); break;
                        case "10": dv(); break;
                        case "11": dw(); break;
                        case "12": dx(); break;
                        case "13": dy(); break;
                        case "14": dz(); break;
                        case "15": ea(); break;
                        case "16": eb(); break;
                        case "17": ec(); break;
                        case "18": ed(); break;
                        case "19": ee(); break;
                        case "20": ef(); break;
                        case "21": eg(); break;
                        case "22": eh(); break;
                        case "23": ei(); break;
                        case "24": ej(); break;
                        case "25": ek(); break;
                        case "26": el(); break;
                        case "27": em(); break;
                        case "28": en(); break;
                        case "29": eo(); break;
                        case "30": ep(); break;
                        case "31": eq(); break;
                        case "32": er(); break;
                        case "33": es(); break;
                        case "34": et(); break;
                        case "35": eu(); break;
                        case "36": ev(); break;
                    }
                }
            }
            br();
        }
    }
    chaveAposta = false;
}

function bw(aposta, gale) {
    a(`${roleta.nome}\n${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}`);
    v(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale}`, 2);
}

function bx(aposta, gale, contagemCiclo) {
    if (configuracaoAtual.congruencia.ativo) {
        a(`${roleta.nome}\n${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}\nCICLO ${contagemCiclo}`);
        v(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale} CICLO ${contagemCiclo}`, 2);
    } else {
        a(`${roleta.nome}\n${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}\nCICLO ${contagemCiclo}`);
        v(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale} CICLO ${contagemCiclo}`, 2);
    }
}

function by(aposta, gale) {
    a(`${roleta.nome}\n${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}`);
    v(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale}`, 2);
}

async function bz() {
    contagemAcertos++;
    a(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    c(`${d()} - ${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function ca() {
    contagemAcertos++;
    a(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    c(`${d()} - ${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
}

async function cb(contagemStorage) {

    if (cp(contagemStorage.contagemLossVirtual)) {
        a(`GANHOU NO LOSS VIRTUAL\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - GANHOU NO LOSS VIRTUAL - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }

    if (co(contagemStorage.contagemPosGreen)) {
        a(`GANHOU NO POS GREEN\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - GANHOU NO POS GREEN - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }
    contagemAcertos++;
    if (configuracaoAtual.congruencia.ativo) {
        a(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - ${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    } else {
        a(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - ${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    }
}

async function cc(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.ciclos > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }
        await cr(0, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);

    } else if (jogadasLobby[0].ciclos > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }
        await cu(jogadasLobby[0], 0, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    }
}

async function cd(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.pauseWin > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemPauseWin = contagemStorage.contagemPauseWin + 1;

        if (novaContagemPauseWin > configuracaoAtual.congruencia.pauseWin) {
            await cr(0, 0, 0, 0);

        } else {
            await cr(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, novaContagemPauseWin);
        }

    } else if (jogadasLobby[0].pauseWin > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemPauseWin = contagemStorage.contagemPauseWin + 1;

        if (novaContagemPauseWin > jogadasLobby[0].pauseWin) {
            await cu(jogadasLobby[0], 0, 0, 0, 0);
        } else {
            await cu(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, novaContagemPauseWin);
        }
    }
}

async function ce(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.lossVirtual > 0) {
        await cr(contagemStorage.contagemCiclo, 0, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    } else if (jogadasLobby[0].lossVirtual > 0) {
        await cu(jogadasLobby[0], contagemStorage.contagemCiclo, 0, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    }
}

async function cf(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.posGreen > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            let novaContagemPosGreen = contagemStorage.posGreen + 1;
            await cr(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, novaContagemPosGreen, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].posGreen > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            let novaContagemPosGreen = contagemStorage.posGreen + 1;
            await cu(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, novaContagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function cg() {
    contagemErros++;
    a(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    c(`${d()} - ${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function ch() {
    contagemErros++;
    a(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    c(`${d()} - ${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function ci(contagemStorage) {

    if (cp(contagemStorage.contagemLossVirtual)) {
        a(`PERDEU NO LOSS VIRTUAL\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - PERDEU NO LOSS VIRTUAL - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }

    if (co(contagemStorage.contagemPosGreen)) {
        a(`PERDEU NO POS GREEN\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - PERDEU NO POS GREEN - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }
    contagemErros++;
    if (configuracaoAtual.congruencia.ativo) {
        a(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - ${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    } else {
        a(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        c(`${d()} - ${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    }
}

async function cj(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.ciclos.length > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemCiclo = contagemStorage.contagemCiclo + 1;

        if (novaContagemCiclo > configuracaoAtual.congruencia.ciclos) {
            await cr(0, 0, 0, 0);

        } else {
            await cr(novaContagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].ciclos.length > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemCiclo = contagemStorage.contagemCiclo + 1;

        if (novaContagemCiclo > configuracaoAtual.ciclos) {
            await cu(jogadasLobby[0], 0, 0, 0, 0);

        } else {
            await cu(jogadasLobby[0], novaContagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function ck(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.pauseWin > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        await cr(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, 0);

    } else if (jogadasLobby[0].pauseWin > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            return;
        }

        await cu(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, 0);
    }
}

async function cl(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.lossVirtual > 0) {
        if (cp(contagemStorage.contagemLossVirtual)) {
            let novaContagemLossVirtual = contagemStorage.contagemLossVirtual + 1;
            await cr(contagemStorage.contagemCiclo, novaContagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    } else if (jogadasLobby[0].lossVirtual > 0) {
        if (cp(contagemStorage.contagemLossVirtual)) {
            let novaContagemLossVirtual = contagemStorage.contagemLossVirtual + 1;
            await cu(jogadasLobby[0], contagemStorage.contagemCiclo, novaContagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function cm(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.posGreen > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            await cr(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, 0, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].posGreen > 0) {

        if (cp(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (co(contagemStorage.contagemPosGreen)) {
            await cu(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, 0, contagemStorage.contagemPauseWin);
        }
    }
}

function cn(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.pauseWin ? true : false;
    } else {
        return contagem < jogadasLobby[0].pauseWin ? true : false;
    }
}

function co(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.posGreen ? true : false;
    } else {
        return contagem < jogadasLobby[0].posGreen ? true : false;
    }
}

function cp(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.lossVirtual ? true : false;
    } else {
        return contagem < jogadasLobby[0].lossVirtual ? true : false;
    }
}

async function cq() {
    if (configuracaoAtual.congruencia.ativo) {
        return await cs().then(congruencia => {
            return congruencia;
        });
    } else {
        return await cv(jogadasLobby[0].id).then(jogada => {
            return jogada;
        }).catch(error => {
            return null;
        });
    }
}

async function cr(contagemCiclo, contagemLossVirtual, contagemPosGreen, contagemPauseWin) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("congruenciaSalva", (result) => {
            let congruenciaSalva = result.congruenciaSalva || null;

            if (!congruenciaSalva) {
                congruenciaSalva = {
                    contagemCiclo: contagemCiclo,
                    contagemLossVirtual: contagemLossVirtual,
                    contagemPosGreen: contagemPosGreen,
                    contagemPauseWin: contagemPauseWin
                };
            } else {
                congruenciaSalva.contagemCiclo = contagemCiclo;
                congruenciaSalva.contagemLossVirtual = contagemLossVirtual;
                congruenciaSalva.contagemPosGreen = contagemPosGreen;
                congruenciaSalva.contagemPauseWin = contagemPauseWin;
            }

            chrome.storage.local.set({ congruenciaSalva }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(congruenciaSalva);
                }
            });
        });
    });
}

async function cs() {
    return new Promise((resolve) => {
        chrome.storage.local.get("congruenciaSalva", async (result) => {
            const congruencia = result.congruenciaSalva || [];

            if (congruencia) {
                resolve(congruencia);
            } else {
                const novaCongruencia = await cr(0, 0, 0, 0);
                resolve(novaCongruencia);
            }
        });
    });
}

async function ct() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove("congruenciaSalva", () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(true);
            }
        });
    });
}

async function cu(jogadaOriginal, contagemCiclo, contagemLossVirtual, contagemPosGreen, contagemPauseWin) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("jogadasSalvas", (result) => {
            let jogadasSalvas = result.jogadasSalvas || [];

            const index = jogadasSalvas.findIndex(j => j.id === jogadaOriginal.id);

            if (index === -1) {
                const novaJogada = {
                    id: jogadaOriginal.id,
                    gatilho: jogadaOriginal.gatilho,
                    aposta: jogadaOriginal.aposta,
                    contagemCiclo,
                    contagemLossVirtual,
                    contagemPosGreen,
                    contagemPauseWin
                };

                jogadasSalvas.push(novaJogada);
            } else {
                jogadasSalvas[index].contagemCiclo = contagemCiclo;
                jogadasSalvas[index].contagemLossVirtual = contagemLossVirtual;
                jogadasSalvas[index].contagemPosGreen = contagemPosGreen;
                jogadasSalvas[index].contagemPauseWin = contagemPauseWin;
            }

            chrome.storage.local.set({ jogadasSalvas }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(jogadasSalvas);
                }
            });
        });
    });
}

async function cv(jogadaId) {
    return new Promise((resolve) => {
        chrome.storage.local.get("jogadasSalvas", async (result) => {
            const jogadas = result.jogadasSalvas || [];
            const jogada = jogadas.find(j => j.id === jogadaId);

            if (jogada) {
                resolve(jogada);
            } else {
                const novaJogada = await cu({ id: jogadaId, gatilho: "", aposta: "" }, 0, 0, 0, 0);
                resolve(novaJogada);
            }
        });
    });
}

async function cw(jogadaId) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("jogadasSalvas", (result) => {
            let jogadas = result.jogadasSalvas || [];

            const novaLista = jogadas.filter(j => j.id !== jogadaId);

            if (novaLista.length === jogadas.length) {
                return reject("Jogada não encontrada.");
            }

            chrome.storage.local.set({ jogadasSalvas: novaLista }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(true);
                }
            });
        });
    });
}

async function cx() {
    return new Promise((resolve) => {
        chrome.storage.local.get("jogadasSalvas", (result) => {
            resolve(result.jogadasSalvas || []);
        });
    });
}

f();

setInterval(() => {
    try {
        n();
        r();
        if (p() || pararTudo) {
            s();
        } else {
            if (q()) {
                w();
            } else {
                x();
            }
        }

    } catch (err) {
        alert(err);
    }
}, 4000);



function cy() {
    if (document.getElementsByClassName(elementos.e25).length > 1) {
        if (document.getElementsByClassName(elementos.e13)[0].outerText == "Ruleta Betano en Español" || document.getElementsByClassName(elementos.e13)[0].outerText == "American Roulette") {
            bj(Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().x) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().width / 2),
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().y) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().height / 2));

        } else {
            bj(Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().x) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().width / 2),
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().y) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().height / 2));
        }
    }
}

function cz() {
    if (
        document.getElementsByClassName(elementos.e26).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e26
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e26
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e26
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e26
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            ) +
            2
        );
    }
}

function da() {
    if (
        document.getElementsByClassName(elementos.e27).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e27
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e27
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e27
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e27
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            ) +
            2
        );
    }
}

function db() {
    if (
        document.getElementsByClassName(elementos.e28).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e28
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e28
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e28
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e28
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            ) +
            2
        );
    }
}

function dc() {
    if (
        document.getElementsByClassName(elementos.e29).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e29
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e29
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e29
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e29
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dd() {
    if (
        document.getElementsByClassName(elementos.e30).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e30
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e30
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e30
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e30
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function de() {
    if (
        document.getElementsByClassName(elementos.e31).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e31
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e31
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e31
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e31
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function df() {
    if (
        document.getElementsByClassName(elementos.e32).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e32
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e32
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e32
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e32
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dg() {
    if (
        document.getElementsByClassName(elementos.e33).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e33
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e33
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e33
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e33
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dh() {
    if (
        document.getElementsByClassName(elementos.e34).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e34
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e34
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e34
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e34
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function di() {
    if (
        document.getElementsByClassName(elementos.e35).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e35
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e35
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e35
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e35
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dj() {
    if (
        document.getElementsByClassName(elementos.e36).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e36
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e36
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e36
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e36
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dk() {
    if (
        document.getElementsByClassName(elementos.e37).length == 1
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e37
                    )[0]
                    .children[1].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e37
                    )[0]
                    .children[1].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e37
                    )[0]
                    .children[1].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e37
                    )[0]
                    .children[1].getBoundingClientRect().height / 2
            )
        );
    }
}

function dl() {
    if (
        document.getElementsByClassName(elementos.e38)[18].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[18].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[18]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dm() {
    if (
        document.getElementsByClassName(elementos.e39)[18].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[18].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[18]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dn() {
    if (
        document.getElementsByClassName(elementos.e38)[19].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[19].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[19]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dp() {
    if (
        document.getElementsByClassName(elementos.e39)[19].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[19].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[19]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dq() {
    if (
        document.getElementsByClassName(elementos.e38)[20].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[20].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[20]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dr() {
    if (
        document.getElementsByClassName(elementos.e39)[20].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[20].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[20]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ds() {
    if (
        document.getElementsByClassName(elementos.e38)[21].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[21].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[21]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dt() {
    if (
        document.getElementsByClassName(elementos.e39)[21].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[21].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[21]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function du() {
    if (
        document.getElementsByClassName(elementos.e38)[22].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[22].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[22]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dv() {
    if (
        document.getElementsByClassName(elementos.e39)[22].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[22].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[22]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dw() {
    if (
        document.getElementsByClassName(elementos.e39)[23].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[23].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[23]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dx() {
    if (
        document.getElementsByClassName(elementos.e38)[23].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[23].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[23]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dy() {
    if (
        document.getElementsByClassName(elementos.e39)[24].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[24].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[24]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function dz() {
    if (
        document.getElementsByClassName(elementos.e38)[24].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[24].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[24]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ea() {
    if (
        document.getElementsByClassName(elementos.e39)[25].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[25].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[25]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eb() {
    if (
        document.getElementsByClassName(elementos.e38)[25].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[25].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[25]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ec() {
    if (
        document.getElementsByClassName(elementos.e39)[26].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[26].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[26]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ed() {
    if (
        document.getElementsByClassName(elementos.e38)[26].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[26].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[26]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ee() {
    if (
        document.getElementsByClassName(elementos.e38)[27].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[27].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[27]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ef() {
    if (
        document.getElementsByClassName(elementos.e39)[27].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[27].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[27]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eg() {
    if (
        document.getElementsByClassName(elementos.e38)[28].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[28].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[28]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eh() {
    if (
        document.getElementsByClassName(elementos.e39)[28].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[28].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[28]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ei() {
    if (
        document.getElementsByClassName(elementos.e38)[29].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[29].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[29]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ej() {
    if (
        document.getElementsByClassName(elementos.e39)[29].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[29].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[29]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ek() {
    if (
        document.getElementsByClassName(elementos.e38)[30].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[30].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[30]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function el() {
    if (
        document.getElementsByClassName(elementos.e39)[30].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[30].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[30]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function em() {
    if (
        document.getElementsByClassName(elementos.e38)[31].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[31].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[31]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function en() {
    if (
        document.getElementsByClassName(elementos.e39)[31].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[31].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[31]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eo() {
    if (
        document.getElementsByClassName(elementos.e39)[32].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[32].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[32]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ep() {
    if (
        document.getElementsByClassName(elementos.e38)[32].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[32].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[32]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eq() {
    if (
        document.getElementsByClassName(elementos.e39)[33].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[33].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[33]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function er() {
    if (
        document.getElementsByClassName(elementos.e38)[33].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[33].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[33]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function es() {
    if (
        document.getElementsByClassName(elementos.e39)[34].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[34].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[34]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function et() {
    if (
        document.getElementsByClassName(elementos.e38)[34].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[34].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[34]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function eu() {
    if (
        document.getElementsByClassName(elementos.e39)[35].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e39)[35].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e39
                    )[35]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ev() {
    if (
        document.getElementsByClassName(elementos.e38)[35].children[3] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[3].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[3].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[3].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[3].getBoundingClientRect().height / 2
            )
        );
    } else if (
        document.getElementsByClassName(elementos.e38)[35].children[2] != undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[2].getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[2].getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[2].getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(
                        elementos.e38
                    )[35]
                    .children[2].getBoundingClientRect().height / 2
            )
        );
    }
}

function ew() {
    if (
        document.getElementsByClassName(elementos.e40)[0] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[0]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[0]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[0]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[0]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ex() {
    if (
        document.getElementsByClassName(elementos.e40)[3] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[3]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[3]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[3]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[3]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ey() {
    if (
        document.getElementsByClassName(elementos.e40)[4] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[4]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[4]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[4]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[4]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ez() {
    if (
        document.getElementsByClassName(elementos.e40)[6] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[6]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[6]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[6]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[6]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fa() {
    if (
        document.getElementsByClassName(elementos.e40)[7] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[7]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[7]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[7]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[7]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fb() {
    if (
        document.getElementsByClassName(elementos.e40)[9] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[9]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[9]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[9]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[9]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fc() {
    if (
        document.getElementsByClassName(elementos.e40)[12] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[12]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[12]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[12]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[12]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fd() {
    if (
        document.getElementsByClassName(elementos.e40)[13] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[13]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[13]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[13]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[13]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fe() {
    if (
        document.getElementsByClassName(elementos.e40)[15] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[15]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[15]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[15]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[15]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ff() {
    if (
        document.getElementsByClassName(elementos.e40)[16] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[16]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[16]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[16]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[16]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fg() {
    if (
        document.getElementsByClassName(elementos.e40)[18] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[18]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[18]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[18]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[18]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fh() {
    if (
        document.getElementsByClassName(elementos.e40)[21] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[21]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[21]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[21]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[21]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fi() {
    if (
        document.getElementsByClassName(elementos.e40)[22] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[22]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[22]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[22]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[22]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fj() {
    if (
        document.getElementsByClassName(elementos.e40)[24] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[24]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[24]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[24]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[24]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fk() {
    if (
        document.getElementsByClassName(elementos.e40)[25] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[25]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[25]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[25]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[25]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fl() {
    if (
        document.getElementsByClassName(elementos.e40)[27] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[27]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[27]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[27]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[27]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fm() {
    if (
        document.getElementsByClassName(elementos.e40)[30] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[30]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[30]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[30]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[30]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fn() {
    if (
        document.getElementsByClassName(elementos.e40)[31] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[31]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[31]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[31]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[31]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fo() {
    if (
        document.getElementsByClassName(elementos.e40)[33] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[33]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[33]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[33]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[33]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fp() {
    if (
        document.getElementsByClassName(elementos.e40)[34] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[34]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[34]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[34]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[34]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fq() {
    if (
        document.getElementsByClassName(elementos.e40)[36] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[36]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[36]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[36]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[36]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fr() {
    if (
        document.getElementsByClassName(elementos.e40)[39] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[39]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[39]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[39]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[39]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fs() {
    if (
        document.getElementsByClassName(elementos.e40)[40] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[40]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[40]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[40]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[40]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ft() {
    if (
        document.getElementsByClassName(elementos.e40)[42] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[42]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[42]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[42]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[42]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fu() {
    if (
        document.getElementsByClassName(elementos.e40)[43] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[43]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[43]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[43]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[43]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fv() {
    if (
        document.getElementsByClassName(elementos.e40)[45] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[45]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[45]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[45]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[45]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fw() {
    if (
        document.getElementsByClassName(elementos.e40)[48] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[48]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[48]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[48]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[48]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fx() {
    if (
        document.getElementsByClassName(elementos.e40)[49] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[49]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[49]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[49]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[49]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fy() {
    if (
        document.getElementsByClassName(elementos.e40)[51] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[51]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[51]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[51]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[51]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function fz() {
    if (
        document.getElementsByClassName(elementos.e40)[52] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[52]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[52]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[52]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[52]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ga() {
    if (
        document.getElementsByClassName(elementos.e40)[54] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[54]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[54]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[54]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[54]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gb() {
    if (
        document.getElementsByClassName(elementos.e40)[57] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[57]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[57]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[57]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[57]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gc() {
    if (
        document.getElementsByClassName(elementos.e40)[58] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[58]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[58]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[58]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[58]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gd() {
    if (
        document.getElementsByClassName(elementos.e40)[60] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[60]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[60]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[60]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[60]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ge() {
    if (
        document.getElementsByClassName(elementos.e40)[61] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[61]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[61]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[61]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[61]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gf() {
    if (
        document.getElementsByClassName(elementos.e40)[63] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[63]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[63]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[63]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[63]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gg() {
    if (
        document.getElementsByClassName(elementos.e40)[66] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[66]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[66]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[66]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[66]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gh() {
    if (
        document.getElementsByClassName(elementos.e40)[67] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[67]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[67]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[67]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[67]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gi() {
    if (
        document.getElementsByClassName(elementos.e40)[69] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[69]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[69]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[69]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[69]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gj() {
    if (
        document.getElementsByClassName(elementos.e40)[70] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[70]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[70]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[70]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[70]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gk() {
    if (
        document.getElementsByClassName(elementos.e40)[72] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[72]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[72]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[72]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[72]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gl() {
    if (
        document.getElementsByClassName(elementos.e40)[75] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[75]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[75]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[75]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[75]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gm() {
    if (
        document.getElementsByClassName(elementos.e40)[76] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[76]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[76]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[76]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[76]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gn() {
    if (
        document.getElementsByClassName(elementos.e40)[78] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[78]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[78]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[78]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[78]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function go() {
    if (
        document.getElementsByClassName(elementos.e40)[79] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[79]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[79]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[79]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[79]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gp() {
    if (
        document.getElementsByClassName(elementos.e40)[81] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[81]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[81]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[81]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[81]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gq() {
    if (
        document.getElementsByClassName(elementos.e40)[84] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[84]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[84]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[84]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[84]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gr() {
    if (
        document.getElementsByClassName(elementos.e40)[85] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[85]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[85]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[85]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[85]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gs() {
    if (
        document.getElementsByClassName(elementos.e40)[87] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[87]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[87]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[87]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[87]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gt() {
    if (
        document.getElementsByClassName(elementos.e40)[88] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[88]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[88]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[88]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[88]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gu() {
    if (
        document.getElementsByClassName(elementos.e40)[90] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[90]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[90]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[90]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[90]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gv() {
    if (
        document.getElementsByClassName(elementos.e40)[93] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[93]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[93]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[93]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[93]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gw() {
    if (
        document.getElementsByClassName(elementos.e40)[94] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[94]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[94]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[94]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[94]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gx() {
    if (
        document.getElementsByClassName(elementos.e40)[96] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[96]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[96]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[96]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[96]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gy() {
    if (
        document.getElementsByClassName(elementos.e40)[97] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[97]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[97]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[97]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[97]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function gz() {
    if (
        document.getElementsByClassName(elementos.e40)[99] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[99]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[99]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[99]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[99]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ha() {
    if (
        document.getElementsByClassName(elementos.e40)[102] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[102]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[102]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[102]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[102]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hb() {
    if (
        document.getElementsByClassName(elementos.e40)[103] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[103]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[103]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[103]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[103]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hc() {
    if (
        document.getElementsByClassName(elementos.e40)[105] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[105]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[105]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[105]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[105]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hd() {
    if (
        document.getElementsByClassName(elementos.e40)[106] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[106]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[106]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[106]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[106]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function he() {
    if (
        document.getElementsByClassName(elementos.e40)[1] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[1]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[1]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[1]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[1]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hf() {
    if (
        document.getElementsByClassName(elementos.e40)[5] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[5]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[5]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[5]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[5]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hg() {
    if (
        document.getElementsByClassName(elementos.e40)[8] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[8]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[8]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[8]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[8]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hh() {
    if (
        document.getElementsByClassName(elementos.e40)[10] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[10]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[10]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[10]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[10]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hi() {
    if (
        document.getElementsByClassName(elementos.e40)[19] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[19]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[19]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[19]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[19]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hj() {
    if (
        document.getElementsByClassName(elementos.e40)[28] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[28]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[28]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[28]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[28]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hk() {
    if (
        document.getElementsByClassName(elementos.e40)[37] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[37]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[37]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[37]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[37]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hl() {
    if (
        document.getElementsByClassName(elementos.e40)[46] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[46]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[46]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[46]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[46]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hm() {
    if (
        document.getElementsByClassName(elementos.e40)[55] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[55]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[55]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[55]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[55]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hn() {
    if (
        document.getElementsByClassName(elementos.e40)[64] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[64]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[64]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[64]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[64]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ho() {
    if (
        document.getElementsByClassName(elementos.e40)[73] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[73]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[73]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[73]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[73]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hp() {
    if (
        document.getElementsByClassName(elementos.e40)[82] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[82]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[82]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[82]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[82]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hq() {
    if (
        document.getElementsByClassName(elementos.e40)[91] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[91]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[91]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[91]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[91]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hr() {
    if (
        document.getElementsByClassName(elementos.e40)[100] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[100]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[100]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[100]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[100]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hs() {
    if (
        document.getElementsByClassName(elementos.e40)[2] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[2]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[2]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[2]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[2]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ht() {
    if (
        document.getElementsByClassName(elementos.e40)[14] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[14]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[14]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[14]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[14]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hu() {
    if (
        document.getElementsByClassName(elementos.e40)[17] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[17]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[17]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[17]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[17]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hv() {
    if (
        document.getElementsByClassName(elementos.e40)[23] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[23]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[23]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[23]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[23]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hw() {
    if (
        document.getElementsByClassName(elementos.e40)[26] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[26]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[26]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[26]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[26]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hx() {
    if (
        document.getElementsByClassName(elementos.e40)[32] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[32]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[32]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[32]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[32]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hy() {
    if (
        document.getElementsByClassName(elementos.e40)[35] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[35]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[35]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[35]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[35]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function hz() {
    if (
        document.getElementsByClassName(elementos.e40)[41] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[41]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[41]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[41]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[41]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ia() {
    if (
        document.getElementsByClassName(elementos.e40)[44] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[44]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[44]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[44]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[44]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ib() {
    if (
        document.getElementsByClassName(elementos.e40)[50] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[50]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[50]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[50]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[50]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ic() {
    if (
        document.getElementsByClassName(elementos.e40)[53] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[53]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[53]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[53]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[53]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function id() {
    if (
        document.getElementsByClassName(elementos.e40)[59] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[59]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[59]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[59]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[59]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ie() {
    if (
        document.getElementsByClassName(elementos.e40)[62] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[62]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[62]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[62]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[62]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ig() {
    if (
        document.getElementsByClassName(elementos.e40)[68] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[68]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[68]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[68]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[68]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ih() {
    if (
        document.getElementsByClassName(elementos.e40)[71] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[71]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[71]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[71]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[71]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ii() {
    if (
        document.getElementsByClassName(elementos.e40)[77] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[77]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[77]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[77]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[77]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ij() {
    if (
        document.getElementsByClassName(elementos.e40)[80] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[80]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[80]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[80]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[80]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ik() {
    if (
        document.getElementsByClassName(elementos.e40)[86] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[86]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[86]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[86]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[86]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function il() {
    if (
        document.getElementsByClassName(elementos.e40)[89] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[89]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[89]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[89]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[89]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function im() {
    if (
        document.getElementsByClassName(elementos.e40)[95] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[95]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[95]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[95]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[95]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function io() {
    if (
        document.getElementsByClassName(elementos.e40)[98] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[98]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[98]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[98]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[98]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ip() {
    if (
        document.getElementsByClassName(elementos.e40)[104] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[104]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[104]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[104]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[104]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iq() {
    if (
        document.getElementsByClassName(elementos.e40)[107] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[107]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[107]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[107]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[107]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ir() {
    if (
        document.getElementsByClassName(elementos.e40)[11] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[11]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[11]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[11]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[11]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function is() {
    if (
        document.getElementsByClassName(elementos.e40)[20] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[20]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[20]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[20]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[20]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function it() {
    if (
        document.getElementsByClassName(elementos.e40)[29] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[29]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[29]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[29]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[29]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iu() {
    if (
        document.getElementsByClassName(elementos.e40)[38] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[38]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[38]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[38]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[38]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iv() {
    if (
        document.getElementsByClassName(elementos.e40)[47] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[47]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[47]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[47]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[47]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iw() {
    if (
        document.getElementsByClassName(elementos.e40)[56] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[56]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[56]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[56]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[56]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ix() {
    if (
        document.getElementsByClassName(elementos.e40)[65] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[65]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[65]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[65]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[65]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iy() {
    if (
        document.getElementsByClassName(elementos.e40)[74] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[74]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[74]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[74]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[74]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function iz() {
    if (
        document.getElementsByClassName(elementos.e40)[83] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[83]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[83]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[83]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[83]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function ja() {
    if (
        document.getElementsByClassName(elementos.e40)[92] !=
        undefined
    ) {
        bj(
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[92]
                    .getBoundingClientRect().x
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[92]
                    .getBoundingClientRect().width / 2
            ),
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[92]
                    .getBoundingClientRect().y
            ) +
            Math.trunc(
                document
                    .getElementsByClassName(elementos.e40)[92]
                    .getBoundingClientRect().height / 2
            )
        );
    }
}

function jb(numero, range) {
    if (document.getElementsByClassName(elementos.e15).length > 12) {
        for (let i = 12; i < (range + 12); i++) {
            if (document.getElementsByClassName(elementos.e15)[i]) {
                if (numero == document.getElementsByClassName(elementos.e15)[i].outerText) {
                    if (document.getElementsByClassName(elementos.e15)[i - 1] != undefined) {
                        jc(document.getElementsByClassName(elementos.e15)[i - 1].outerText);
                    }
                }
            }
        }
    }
}

function jc(numero) {
    if (numero == '0') {
        je();
    } else if (numero == '1') {
        jf();
    } else if (numero == '2') {
        jg();
    } else if (numero == '3') {
        jh();
    } else if (numero == '4') {
        ji();
    } else if (numero == '5') {
        jj();
    } else if (numero == '6') {
        jk();
    } else if (numero == '7') {
        jl();
    } else if (numero == '8') {
        jm();
    } else if (numero == '9') {
        jn();
    } else if (numero == '10') {
        jo();
    } else if (numero == '11') {
        jp();
    } else if (numero == '12') {
        jq();
    } else if (numero == '13') {
        jr();
    } else if (numero == '14') {
        js();
    } else if (numero == '15') {
        jt();
    } else if (numero == '16') {
        ju();
    } else if (numero == '17') {
        jv();
    } else if (numero == '18') {
        jw();
    } else if (numero == '19') {
        jx();
    } else if (numero == '20') {
        jy();
    } else if (numero == '21') {
        jz();
    } else if (numero == '22') {
        ka();
    } else if (numero == '23') {
        kb();
    } else if (numero == '24') {
        kc();
    } else if (numero == '25') {
        kd();
    } else if (numero == '26') {
        ke();
    } else if (numero == '27') {
        kf();
    } else if (numero == '28') {
        kg();
    } else if (numero == '29') {
        kh();
    } else if (numero == '30') {
        ki();
    } else if (numero == '31') {
        kj();
    } else if (numero == '32') {
        kk();
    } else if (numero == '33') {
        kl();
    } else if (numero == '34') {
        km();
    } else if (numero == '35') {
        kn();
    } else if (numero == '36') {
        ko();
    }

}

async function jd() {

    if (document.getElementsByClassName(elementos.e41)[30] &&
        document.querySelector(elementos.e45)) {
        document.getElementsByClassName(elementos.e41)[30].style.fill = 'black';
        document.querySelector(elementos.e45).style.fill = 'black';

    }

    for (let i = 0; i < 37; i++) {

        if (document.getElementsByClassName(elementos.e41)[i]) {
            document.getElementsByClassName(elementos.e41)[i].style.fill = 'black';
        }

        if (document.getElementsByClassName(elementos.e38)[i]
            && document.getElementsByClassName(elementos.e38)[i].children[0]) {
            document.getElementsByClassName(elementos.e38)[i].children[0].style.fill = 'black';
        }

        if (document.getElementsByClassName(elementos.e39)[i]
            && document.getElementsByClassName(elementos.e39)[i].children[0]) {
            document.getElementsByClassName(elementos.e39)[i].children[0].style.fill = 'black';
        }

    }
}

function je() {
    document.getElementsByClassName(elementos.e41)[30].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e45)[1].children[1].style.fill = 'cadetblue';
}

function jf() {
    document.getElementsByClassName(elementos.e41)[3].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[18].children[0].style.fill = 'cadetblue';
}

function jg() {
    document.getElementsByClassName(elementos.e41)[18].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[18].children[0].style.fill = 'cadetblue';
}

function jh() {
    document.getElementsByClassName(elementos.e41)[28].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[19].children[0].style.fill = 'cadetblue';
}

function ji() {
    document.getElementsByClassName(elementos.e41)[16].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[19].children[0].style.fill = 'cadetblue';

}

function jj() {
    document.getElementsByClassName(elementos.e41)[36].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[20].children[0].style.fill = 'cadetblue';

}

function jk() {
    document.getElementsByClassName(elementos.e41)[22].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[20].children[0].style.fill = 'cadetblue';

}

function jl() {
    document.getElementsByClassName(elementos.e41)[11].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[21].children[0].style.fill = 'cadetblue';

}

function jm() {
    document.getElementsByClassName(elementos.e41)[33].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[21].children[0].style.fill = 'cadetblue';

}

function jn() {
    document.getElementsByClassName(elementos.e41)[7].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[22].children[0].style.fill = 'cadetblue';

}

function jo() {
    document.getElementsByClassName(elementos.e41)[35].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[22].children[0].style.fill = 'cadetblue';

}

function jp() {
    document.getElementsByClassName(elementos.e41)[26].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[23].children[0].style.fill = 'cadetblue';

}

function jq() {
    document.getElementsByClassName(elementos.e41)[13].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[23].children[0].style.fill = 'cadetblue';

}

function jr() {
    document.getElementsByClassName(elementos.e41)[24].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[24].children[0].style.fill = 'cadetblue';

}

function js() {
    document.getElementsByClassName(elementos.e41)[5].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[24].children[0].style.fill = 'cadetblue';

}

function jt() {
    document.getElementsByClassName(elementos.e41)[14].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[25].children[0].style.fill = 'cadetblue';

}

function ju() {
    document.getElementsByClassName(elementos.e41)[1].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[25].children[0].style.fill = 'cadetblue';

}

function jv() {
    document.getElementsByClassName(elementos.e41)[20].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[26].children[0].style.fill = 'cadetblue';

}

function jw() {
    document.getElementsByClassName(elementos.e41)[9].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[26].children[0].style.fill = 'cadetblue';

}

function jx() {
    document.getElementsByClassName(elementos.e41)[15].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[27].children[0].style.fill = 'cadetblue';

}

function jy() {
    document.getElementsByClassName(elementos.e41)[4].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[27].children[0].style.fill = 'cadetblue';

}

function jz() {
    document.getElementsByClassName(elementos.e41)[17].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[28].children[0].style.fill = 'cadetblue';
}

function ka() {
    document.getElementsByClassName(elementos.e41)[8].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[28].children[0].style.fill = 'cadetblue';

}

function kb() {
    document.getElementsByClassName(elementos.e41)[34].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[29].children[0].style.fill = 'cadetblue';

}

function kc() {
    document.getElementsByClassName(elementos.e41)[0].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[29].children[0].style.fill = 'cadetblue';

}

function kd() {
    document.getElementsByClassName(elementos.e41)[19].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[30].children[0].style.fill = 'cadetblue';

}

function ke() {
    document.getElementsByClassName(elementos.e41)[29].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[30].children[0].style.fill = 'cadetblue';

}

function kf() {
    document.getElementsByClassName(elementos.e41)[23].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[31].children[0].style.fill = 'cadetblue';

}

function kg() {
    document.getElementsByClassName(elementos.e41)[12].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[31].children[0].style.fill = 'cadetblue';

}

function kh() {
    document.getElementsByClassName(elementos.e41)[10].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[32].children[0].style.fill = 'cadetblue';

}

function ki() {
    document.getElementsByClassName(elementos.e41)[32].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[32].children[0].style.fill = 'cadetblue';

}

function kj() {
    document.getElementsByClassName(elementos.e41)[6].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[33].children[0].style.fill = 'cadetblue';

}

function kk() {
    document.getElementsByClassName(elementos.e41)[31].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[33].children[0].style.fill = 'cadetblue';

}

function kl() {
    document.getElementsByClassName(elementos.e41)[2].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[34].children[0].style.fill = 'cadetblue';

}

function km() {
    document.getElementsByClassName(elementos.e41)[21].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[34].children[0].style.fill = 'cadetblue';

}

function kn() {
    document.getElementsByClassName(elementos.e41)[27].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[35].children[0].style.fill = 'cadetblue';

}

function ko() {
    document.getElementsByClassName(elementos.e41)[25].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[35].children[0].style.fill = 'cadetblue';

}