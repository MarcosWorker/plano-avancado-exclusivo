let elementos = {};

let configuracaoAtual = null; // configuracao carregada do servidor
let fluxoInterval = 0; // serve pra contar a quantidade de vezes que o interval rodou
let contagemWinTimer = 0; // serve pra contar a quantidade de wins , para iniciar o timer
let contadorSegundos = 0; // serve pra contar os segundos no modo timer
let contadorMinutos = 0; // serve pra contar os minutos no modo timer
let jogadasLobby = []; // todas as jogadas que o gatilho bateu no lobby
let roletasLobby = []; // todas as roletas do lobby
let listaCarrossel = []; // lista com as roletas que já foram jogadas
let roletaAtualCarrossel = ''; // lista com as roletas que já foram jogadas
let visaoLobby = 0; // ordem da visão no lobby
let roleta = {}; // informaçoes da roleta (nome,sequencia)
let sequenciaAtual = []; // sequencia de numeros atual da roleta
let rodada = 0; // numero de rodadas que saiu na roleta
let aposta = []; // lista com os numeros ou legendas da aposta
let chaveAposta = false;
let galeIA = 0;
let estrategiaIAmsg = '';
let galeAtual = 0; // valor do gale atual da aposta atual
let contagemAcertos = 0;
let contagemErros = 0;
let contagemConfirmacaoSolo = 0;
let valorAntesDeAposta = 0;
let valorDePerca = 0;
let valorDeGanho = 0;
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

function enviarMsgTelegram(msg) {
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

function apagarMsgTelegram() {
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

function atualizarProtocolo(novaEntrada) {
    chrome.storage.local.get(["protocolo"], (res) => {
        let protocolo = res.protocolo || []; // Se não existir, inicializa como array vazio

        // Adiciona a nova entrada ao início da lista
        protocolo.unshift(novaEntrada);

        // Garante que o protocolo não ultrapasse 100 entradas
        if (protocolo.length > 100) {
            protocolo.pop();
        }

        // Salva novamente no storage
        chrome.storage.local.set({ protocolo }, () => { });
    });
}

function dataHora() {
    const date = new Date();
    const day = date.getDate();
    const mount = date.getMonth();
    const year = date.getFullYear();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    return `${day}/${mount + 1}/${year} - ${hour}:${minutes}:${seconds}`;
}

function createToast(message, time = 3000) {
    let toast = document.getElementById(elementos.e42);

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "chrome-toast";

        // Estilização futurista baseada na logo
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
        toast.style.color = "#0ff"; // Azul neon
        toast.style.background = "rgba(10, 10, 10, 0.9)"; // Fundo escuro
        toast.style.boxShadow = "0 0 15px #0ff"; // Brilho neon
        toast.style.border = "2px solid rgba(0, 255, 255, 0.5)"; // Borda neon
        toast.style.letterSpacing = "1px";
        toast.style.textTransform = "uppercase";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
        toast.style.transition = "opacity 0.5s ease-in-out, visibility 0s 0.5s";

        // Adiciona ao corpo do documento
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    // Exibir o toast
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    // Esconder o toast após o tempo definido
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
    }, time);
}

async function validarBot() {
    const usuario = await getUsuarioStorage();
    if (!usuario || !usuario.email || !usuario.senha) {
        await fazerLogout();
        return;
    }

    const { email, senha, id } = usuario;

    try {
        let res = await bvmvb(email, senha, id, 'skdjfhgs');
        if (res.error) {
            alert('Erro');
        } else {
            elementos = res;
        }
    } catch (error) {

    }

    try {
        const statusCheck = await reger(email, senha);

        if (!statusCheck || !statusCheck.usuario) {
            await fazerLogout();
            return;
        }
    } catch (error) {
        return;
    }
    try {
        const bot = "bot_teste_editado";
        configuracaoAtual = await ergerg(email, senha, id, bot);

        if (!configuracaoAtual) {
            alert("⚠️ Não foi possível carregar as configurações. Tente novamente.");
            return;
        }

    } catch (error) {
        alert("⚠️ Erro ao carregar configurações.");
        return;
    }

};

async function vpqetsra(historico, perfil) {
    const usuario = await getUsuarioStorage();
    if (!usuario || !usuario.email || !usuario.senha) {
        await fazerLogout();
        return;
    }
    const { email, senha } = usuario;
    const response = await enviarMensagem('vpqetsra', { historico, email, senha, perfil });
    return response;
}

async function reger(email, senha) {
    const response = await enviarMensagem('reger', { email, senha });
    return response;
}

async function bvmvb(email, senha, id, bot) {
    const response = await enviarMensagem('bvmvb', { email, senha, id, bot });
    return response;
}

async function getUsuarioStorage() {
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

async function ergerg(email, senha, id, bot) {
    const response = await enviarMensagem('ergerg', { email, senha, id, bot });
    return response;
}

async function fazerLogout() {
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

function enviarMensagem(action, data) {
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

function fecharTutorial() {
    if (document.getElementsByClassName(elementos.e1).length > 0 && document.getElementsByClassName(elementos.e2).length > 0) {
        document.getElementsByClassName(elementos.e1)[0].click();
    }
}

function valorNumericoBanca() {
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

function validarStop() {
    if (parseFloat(configuracaoAtual.stop.win) <= valorNumericoBanca()) {
        return true;
    } else {
        return false;
    }
}

function validarTimer() {
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

function clicarModal() {
    if (document.getElementsByClassName(elementos.e3).length == 1) {
        document.getElementsByClassName(elementos.e3)[0].children[0].click();
    }

    if (document.getElementsByClassName(elementos.e4).length == 1) {
        if (document.getElementsByClassName(elementos.e4)[0] != undefined) {
            clique(Math.trunc(document.getElementsByClassName(elementos.e4)[0].getBoundingClientRect().x) +
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

function modoStop() {
    if (document.getElementsByClassName(elementos.e10).length > 1) {
        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);
        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }
        inserirTextoDisplay(`MODO STOP ATIVADO`, 1);

        if (fluxoInterval > 350 && document.getElementsByClassName(elementos.e10).length > 1) {
            fluxoInterval = 0;
            document.getElementsByClassName(elementos.e11)[5].click();
        }
    } else {
        sairRoleta();
    }
}

function sairRoleta() {
    if (document.getElementsByClassName(elementos.e12)[0] != undefined &&
        document.getElementsByClassName(elementos.e12)[0].children[0] != undefined) {
        clique(Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().x) +
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().width / 2),
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().y) +
            Math.trunc(document.getElementsByClassName(elementos.e12)[0].children[0].getBoundingClientRect().height / 2));
    }
}

function validarSurf() {
    if (configuracaoAtual.surf.ativo) {
        rodada = 1;
    } else {
        rodada = 0;
    }
}

function inserirTextoDisplay(texto, tela) {
    if (tela == 1) {
        let textoDisplay = document.getElementById(elementos.e43);
        textoDisplay.textContent = `${texto}`;
    } else if (tela == 2) {
        let textoDisplay = document.getElementById(elementos.e44);
        textoDisplay.textContent = `${texto}`;
    }
}

function modoTimer() {
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

        inserirTextoDisplay(`MODO TIMER ATIVADO  ${contadorMinutos.toString().padStart(2, '0')}:${contadorSegundos.toString().padStart(2, '0')}`, 1);

    } else {
        sairRoleta();
    }
}

function validarModo() {
    if (configuracaoAtual.modoIA.ativo) {
        modoIA();
        return;
    }

    if (configuracaoAtual.quentesFrios.numerosQuentes ||
        configuracaoAtual.quentesFrios.numerosFrios ||
        configuracaoAtual.quentesFrios.terminaisQuentes ||
        configuracaoAtual.quentesFrios.terminaisFrios
    ) {

        if ((configuracaoAtual.modoSolo && configuracaoAtual.roletaSolo !== '') || (configuracaoAtual.modoCarrossel && configuracaoAtual.roletas.length > 0)) {
            modoQuentesFrios();
        } else {
            sairRoleta();
            createToast('VOCÊ PRECISA SELECIONAR MODO CARROSEL (COM SUAS ROLETAS) OU MODO SOLO (COM SUA ROLETA) PARA USAR O MODO QUENTES/FRIOS', 3000);
        }

    } else if (configuracaoAtual.modoSolo) {
        if (configuracaoAtual.modoCarrossel) {
            modoCarrossel();
        } else {
            modoSolo();
        }
    } else if (configuracaoAtual.modoCarrossel) {
        modoCarrossel();
    } else {
        modoLobby();
    }
}

function validarColorRace(numero) {
    if (configuracaoAtual.colorRace.ativo) {
        pintaHistorico(numero, configuracaoAtual.colorRace.historico);
    }

}

async function modoIA() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (listaCarrossel.length == 0) {
            sairRoleta();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = carregarRoleta();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[4].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            executarApostaIA();
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;
            if (rodada == 0) {
                rodada++;
                inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (await validarJogadasIa()) {
                    rodada++;
                    chaveAposta = true;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 8) {
                        resetTelaRoleta();
                        // listaCarrossel = listaCarrossel.filter(item => item !== roletaAtualCarrossel);
                        roletaAtualCarrossel = '';
                        sairRoleta();
                    } else {
                        rodada = 1;
                        inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (confirmarGreen(aposta, sequenciaAtual[0])) {
                    tirarDiferencaDeganho();
                    inserirTextoDisplay(`GANHOU`, 2);
                    definirMensagemDeGreenIA();
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                } else if (galeIA > galeAtual) {
                    chaveAposta = true;
                    galeAtual++;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    definirStopDePerca();
                    inserirTextoDisplay(`PERDEU`, 2);
                    definirMensagemDeRedIA();
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        inserirTextoDisplay(`MODO IA - MONITORANDO`, 1);

        lobby();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        listarRoletasLobby(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && validarCarrossel(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function modoQuentesFrios() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (configuracaoAtual.modoCarrossel && listaCarrossel.length == 0) {
            sairRoleta();
            return;
        } else if (configuracaoAtual.modoSolo && document.getElementsByClassName(elementos.e13)[0].outerText != configuracaoAtual.roletaSolo) {
            sairRoleta();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = carregarRoleta();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[4].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            executarApostaQuentesFrios();
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                rodada++;
                inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (validarJogadaQuentesFrios()) {
                    rodada++;
                    chaveAposta = true;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    createToast('FREQUENCIA NÃO FOI VALIDADA'),
                        contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        resetTelaRoleta();
                        if (configuracaoAtual.modoCarrossel) {
                            listaCarrossel = listaCarrossel.filter(item => item !== roletaAtualCarrossel);
                        }
                        sairRoleta();
                    } else {
                        rodada = 1;
                        inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (confirmarGreen(aposta, sequenciaAtual[0])) {
                    tirarDiferencaDeganho();
                    inserirTextoDisplay(`GANHOU`, 2);
                    definirMensagemDeGreenQuentesFrios();
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                } else if (fazerGaleQuentesfrios()) {
                    chaveAposta = true;
                    galeAtual++;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    definirStopDePerca();
                    inserirTextoDisplay(`PERDEU`, 2);
                    definirMensagemDeRedQuentesFrios();
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        inserirTextoDisplay(`MODO QUENTES/FRIOS - MONITORANDO`, 1);

        lobby();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        configuracaoAtual.modoCarrossel ? listarRoletasLobby(qtdRoletas) : listarRoletasLobbySolo(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (configuracaoAtual.modoCarrossel && roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (configuracaoAtual.modoCarrossel && roletasLobby[i] != undefined && validarCarrossel(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && configuracaoAtual.modoSolo && configuracaoAtual.roletaSolo == roletasLobby[i].nome) {
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

        }
    }
}

async function modoCarrossel() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (listaCarrossel.length == 0) {
            sairRoleta();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = carregarRoleta();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[4].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            executarAposta();
        } else {
            if (rodada > 0) {
                atualizarAnaliseDosGatilhos(roleta.nome);
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
                inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (validarJogadasSolo(sequenciaAtual) && confirmarAssertividade()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = definirNumerosCongruentes();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            createToast('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            resetTelaRoleta();
                            validarSurf();
                            return;
                        }
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        resetTelaRoleta();
                        listaCarrossel = listaCarrossel.filter(item => item !== roletaAtualCarrossel);
                        sairRoleta();
                    } else {
                        rodada = 1;
                        inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (confirmarGreen(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await getContagem();
                    tirarDiferencaDeganho();
                    inserirTextoDisplay(`GANHOU`, 2);
                    definirMensagemDeGreen(contagemStorage);
                    definirCicloNoGreen(contagemStorage);
                    definirPauseWinNoGreen(contagemStorage);
                    definirPosGreenNoGreen(contagemStorage);
                    definirLossVirtualNoGreen(contagemStorage);
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                } else if (fazerGale()) {
                    chaveAposta = true;
                    galeAtual++;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await getContagem();
                    definirStopDePerca();
                    inserirTextoDisplay(`PERDEU`, 2);
                    definirMensagemDeRed(contagemStorage);
                    definirCicloNoRed(contagemStorage);
                    definirPauseWinNoRed(contagemStorage);
                    definirPosGreenNoRed(contagemStorage);
                    definirLossVirtualNoRed(contagemStorage);
                    resetTelaRoleta();
                    roletaAtualCarrossel = '';
                    sairRoleta();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        inserirTextoDisplay(`MODO CARROSSEL - MONITORANDO`, 1);

        lobby();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        listarRoletasLobby(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {

            if (roletaAtualCarrossel != '') {
                listaCarrossel.push(roletaAtualCarrossel);
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletaAtualCarrossel)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }

            if (roletasLobby[i] != undefined && validarCarrossel(roletasLobby[i].nome)) {
                roletaAtualCarrossel = roletasLobby[i].nome;
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function modoSolo() {
    if (document.getElementsByClassName(elementos.e13).length > 0) {
        if (document.getElementsByClassName(elementos.e13)[0].outerText != configuracaoAtual.roletaSolo) {
            sairRoleta();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = carregarRoleta();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[4].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            executarAposta();
        } else {
            if (rodada > 0) {
                atualizarAnaliseDosGatilhos(roleta.nome);
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
                inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);

            } else if (rodada == 1) {
                if (validarJogadasSolo(sequenciaAtual) && confirmarAssertividade()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = definirNumerosCongruentes();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            createToast('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            resetTelaRoleta();
                            validarSurf();
                            return;
                        }
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                } else {
                    contagemConfirmacaoSolo++;
                    if (contagemConfirmacaoSolo == 5) {
                        resetTelaRoleta();
                        sairRoleta();
                    } else {
                        rodada = 1;
                        inserirTextoDisplay(`AGUARDANDO FORMAÇÃO DE GATILHO`, 2);
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                }
            } else if (rodada > 1) {

                if (confirmarGreen(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await getContagem();
                    tirarDiferencaDeganho();
                    inserirTextoDisplay(`GANHOU`, 2);
                    definirMensagemDeGreen(contagemStorage);
                    definirCicloNoGreen(contagemStorage);
                    definirPauseWinNoGreen(contagemStorage);
                    definirPosGreenNoGreen(contagemStorage);
                    definirLossVirtualNoGreen(contagemStorage);
                    resetTelaRoleta();
                    validarSurf();
                } else if (fazerGale()) {
                    chaveAposta = true;
                    galeAtual++;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await getContagem();
                    definirStopDePerca();
                    inserirTextoDisplay(`PERDEU`, 2);
                    definirMensagemDeRed(contagemStorage);
                    definirCicloNoRed(contagemStorage);
                    definirPauseWinNoRed(contagemStorage);
                    definirPosGreenNoRed(contagemStorage);
                    definirLossVirtualNoRed(contagemStorage);
                    resetTelaRoleta();
                    validarSurf();
                }
            }

        }

    } else if (document.getElementsByClassName(elementos.e10).length > 1) {

        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        inserirTextoDisplay(`MODO SOLO - MONITORANDO`, 1);

        lobby();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        listarRoletasLobbySolo(qtdRoletas);

        for (let i = 0; i < roletasLobby.length; i++) {
            if (roletasLobby[i] != undefined && configuracaoAtual.roletaSolo == roletasLobby[i].nome) {
                document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                break;
            }
        }
    }
}

async function modoLobby() {
    if (document.getElementsByClassName(elementos.e10).length > 1) {
        //tela lobby
        let painelLobby = document.querySelector(`.lobby-table-size-switcher--gtX4b`);

        if (!document.getElementById(elementos.e43) && painelLobby != undefined) {
            painelLobby.insertAdjacentHTML("afterbegin", '<h3 id = "displaybotlobby" style="width: 90%;color: white;text-align: justify;font-size: larger;font-weight: normal;align-self: center;"></h3>');

        }

        inserirTextoDisplay(`MODO LOBBY - MONITORANDO`, 1);

        lobby();

        let qtdRoletas = document.getElementsByClassName(elementos.e10).length;

        listarRoletasLobby(qtdRoletas);
        for (let i = 0; i < roletasLobby.length; i++) {
            if (roletasLobby[i] != undefined && configuracaoAtual.roletas.includes(roletasLobby[i].nome) && validarJogadasLobby(roletasLobby[i].sequencia)) {
                if (configuracaoAtual.congruencia.ativo && jogadasLobby.length >= configuracaoAtual.congruencia.numGatilhos) {
                    document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                    break;
                } else if (!configuracaoAtual.congruencia.ativo && jogadasLobby.length == 1) {
                    document.getElementsByClassName(elementos.e10)[getRoletaLobby(qtdRoletas, roletasLobby[i].nome)].getElementsByClassName("table__main-content--NSkLf")[0].click();
                    break;
                }
            }
        }

    } else if (document.getElementsByClassName(elementos.e13).length > 0) {

        if (jogadasLobby.length == 0) {
            sairRoleta();
            return;
        }

        let painelRoleta = document.querySelector(accountPanel);

        if (!document.getElementById(elementos.e44) && painelRoleta != undefined) {
            painelRoleta.insertAdjacentHTML("beforeend", '<span id = "displaybotroleta" style="margin: 5px;width: 90%;color: white;text-align: justify;;font-size: medium;font-weight: normal"></span>');
        }

        roleta = carregarRoleta();

        if (document.getElementsByClassName(elementos.e14).length == 1) {
            document.getElementsByClassName(elementos.e14)[0].click();
        }

        if (document.getElementsByClassName(elementos.e9).length == 1) {
            document.getElementsByClassName(elementos.e9)[0].click();
        }

        if (document.getElementsByClassName(elementos.e15).length == 12 || document.getElementsByClassName(elementos.e15).length == 10) {
            document.getElementsByClassName(elementos.e16)[4].click();
        }

        if (document.getElementsByClassName(elementos.e17).length == 1 || document.getElementsByClassName(elementos.e18).length == 1) {
            executarAposta();
        } else {
            if (rodada > 0) {
                atualizarAnaliseDosGatilhos(roleta.nome);
            }
        }

        if (document.getElementsByClassName(elementos.e19).length == 1) {
            document.getElementsByClassName(elementos.e20)[0].click();
        }

        document.getElementsByClassName(elementos.e13)[0].scrollIntoView();

        if (JSON.stringify(sequenciaAtual) != JSON.stringify(roleta.sequencia)) {
            sequenciaAtual = roleta.sequencia;

            if (rodada == 0) {
                // Extrai os primeiros 5 elementos de cada sequência
                let primeirosJogadas = jogadasLobby[0].sequencia.slice(0, 5);
                let primeirosRoleta = roleta.sequencia.slice(0, 5);

                // Verifica se os primeiros 5 elementos são iguais
                if (JSON.stringify(primeirosJogadas) !== JSON.stringify(primeirosRoleta)) {
                    createToast('⚠️ DELAY NO SINCRONISMO ⚠️');
                    resetTelaRoleta();
                    sairRoleta();
                    return;
                }
                rodada++;
                inserirTextoDisplay(`CONFIRMANDO ${retornarUltimosGatilhos()}`, 2);
                enviarMsgTelegram(`AGUARDANDO CONFIRMAÇÃO DE ${retornarUltimosGatilhos()}\n${roleta.nome}`);
            } else if (rodada == 1) {
                if (confirmarUltimoGatilho(sequenciaAtual[0]) && confirmarAssertividade()) {
                    rodada++;
                    if (configuracaoAtual.congruencia.ativo) {
                        aposta = definirNumerosCongruentes();
                        if (configuracaoAtual.congruencia.numFichas < aposta.length) {
                            apagarMsgTelegram();
                            createToast('⚠️ NÚMEROS DE FICHAS SUPERIOR AO EXCLUÍDO ⚠️');
                            resetTelaRoleta();
                            sairRoleta();
                            return;
                        }
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    } else {
                        aposta = jogadasLobby[0].aposta.split(' ');
                        chaveAposta = true;
                        await zerarPintura();
                        validarColorRace(sequenciaAtual[0]);
                    }
                } else {
                    apagarMsgTelegram();
                    resetTelaRoleta();
                    sairRoleta();
                    return;
                }
            } else if (rodada > 1) {

                if (confirmarGreen(aposta, sequenciaAtual[0])) {
                    let contagemStorage = await getContagem();
                    tirarDiferencaDeganho();
                    inserirTextoDisplay(`GANHOU`, 2);
                    definirMensagemDeGreen(contagemStorage);
                    definirCicloNoGreen(contagemStorage);
                    definirPauseWinNoGreen(contagemStorage);
                    definirPosGreenNoGreen(contagemStorage);
                    definirLossVirtualNoGreen(contagemStorage);
                    resetTelaRoleta();
                    sairRoleta();
                } else if (fazerGale()) {
                    chaveAposta = true;
                    galeAtual++;
                    await zerarPintura();
                    validarColorRace(sequenciaAtual[0]);
                } else {
                    let contagemStorage = await getContagem();
                    definirStopDePerca();
                    inserirTextoDisplay(`PERDEU`, 2);
                    definirMensagemDeRed(contagemStorage);
                    definirCicloNoRed(contagemStorage);
                    definirPauseWinNoRed(contagemStorage);
                    definirPosGreenNoRed(contagemStorage);
                    definirLossVirtualNoRed(contagemStorage);
                    resetTelaRoleta();
                    sairRoleta();
                }
            }

        }

    }
}

function validarCarrossel(nomeRoleta) {

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

function atualizarAnaliseDosGatilhos(nomeRoleta) {
    configuracaoAtual.grupos.forEach((grupo, grupoIndex) => {
        grupo.jogadas.forEach((jogada, jogadaIndex) => {

            let eventosAssertividade = eventosAssertividadeGatilho(numerosHistorico(configuracaoAtual.congruencia.ativo ? configuracaoAtual.congruencia.historico : jogada.historico),
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

function retornarUltimosGatilhos() {
    return jogadasLobby.map(jogada => jogada.gatilho.split(' ')[0]);
}

function resetTelaRoleta() {
    contagemConfirmacaoSolo = 0;
    galeAtual = 0;
    aposta = [];
    rodada = 0;
    roleta = {};
    sequenciaAtual = [];
    jogadasLobby = [];
    visaoLobby = 0;
}

function fazerGaleQuentesfrios() {
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

function fazerGale() {
    if (configuracaoAtual.congruencia.ativo) {
        return configuracaoAtual.congruencia.gale.quantidade > galeAtual ? true : false;
    } else {
        return jogadasLobby[0].gale.quantidade > galeAtual ? true : false;
    }
}

function definirNumerosCongruentes() {
    // 🔹 Transforma todas as apostas em arrays de números únicos

    let listasApostas = jogadasLobby.map(jogada => new Set(jogada.aposta.split(' ')));

    // 🔹 Pega a primeira lista como referência
    let numerosComuns = [...listasApostas[0]];

    // 🔹 Mantém apenas os números que aparecem em todas as listas
    numerosComuns = numerosComuns.filter(num =>
        listasApostas.every(aposta => aposta.has(num))
    );

    return numerosComuns; // ✅ Retorna os números que aparecem em todas as apostas
}

function confirmarAssertividade() {
    for (let i = jogadasLobby.length - 1; i >= 0; i--) { // 🔹 Percorre de trás para frente
        let eventosAssertividade = eventosAssertividadeGatilho(numerosHistorico(jogadasLobby[i].historico), jogadasLobby[i].gatilho.split(' '), jogadasLobby[i].aposta.split(' '), jogadasLobby[i].gale.quantidade);

        if (configuracaoAtual.congruencia.ativo) {
            if (eventosAssertividade.eventos < configuracaoAtual.congruencia.eventosMin ||
                eventosAssertividade.eventos > configuracaoAtual.congruencia.eventosMax ||
                eventosAssertividade.assertividade < configuracaoAtual.congruencia.assertividadeMin ||
                eventosAssertividade.assertividade > configuracaoAtual.congruencia.assertividadeMax
            ) {
                jogadasLobby.splice(i, 1); // ✅ Remove a jogada sem afetar os índices
            }
        } else {
            if (eventosAssertividade.eventos < jogadasLobby[i].eventosMin ||
                eventosAssertividade.eventos > jogadasLobby[i].eventosMax ||
                eventosAssertividade.assertividade < jogadasLobby[i].assertividadeMin ||
                eventosAssertividade.assertividade > jogadasLobby[i].assertividadeMax
            ) {
                jogadasLobby.splice(i, 1); // ✅ Remove a jogada sem afetar os índices
            }
        }
    }

    if (configuracaoAtual.congruencia.ativo) {
        if (jogadasLobby.length > configuracaoAtual.congruencia.numGatilhos) {
            while (jogadasLobby.length > configuracaoAtual.congruencia.numGatilhos) {
                jogadasLobby.pop(); // ✅ Remove o último elemento até atingir o tamanho desejado
            }
            return true;
        } else if (configuracaoAtual.congruencia.numGatilhos == jogadasLobby.length) {
            return true;
        } else {
            createToast('⚠️ ASSERTIVIDADE NÃO CONFIRMADA ⚠️');
            return false;
        }
    } else {
        if (jogadasLobby.length == 1) {
            return true;
        } else {
            createToast('⚠️ ASSERTIVIDADE NÃO CONFIRMADA ⚠️');
            return false;
        }
    }
}

function eventosAssertividadeGatilho(historico, gatilho, aposta, qtdGale) {

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
            } else if (confirmarGatilhoLegenda(gatilho[x], historico[incrementoGatilho])) {
                validouEstrategia = true;
                incrementoGatilho++;
            } else {
                validouEstrategia = false;
                break;
            }
        }

        if (validouEstrategia) {
            if (
                confirmaGreenIa(
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

function confirmarGatilhoLegenda(legenda, numero) {
    let retorno = false;
    configuracaoAtual.legendas.forEach((item) => {
        if (item.legenda === legenda && item.numeros.includes(parseInt(numero))) {
            retorno = true;
            return;
        }
    });
    return retorno;
}

function confirmaGreenIa(aposta, gale, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    if (gale == 0) {
        return confirmarGreen(aposta, n1);
    } else if (gale == 1) {
        if (confirmarGreen(aposta, n1) || confirmarGreen(aposta, n2)) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 2) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 3) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 4) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 5) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 6) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6) ||
            confirmarGreen(aposta, n7)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 7) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6) ||
            confirmarGreen(aposta, n7) ||
            confirmarGreen(aposta, n8)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 8) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6) ||
            confirmarGreen(aposta, n7) ||
            confirmarGreen(aposta, n8) ||
            confirmarGreen(aposta, n9)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 9) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6) ||
            confirmarGreen(aposta, n7) ||
            confirmarGreen(aposta, n8) ||
            confirmarGreen(aposta, n9) ||
            confirmarGreen(aposta, n10)
        ) {
            return true;
        } else {
            return false;
        }
    } else if (gale == 10) {
        if (
            confirmarGreen(aposta, n1) ||
            confirmarGreen(aposta, n2) ||
            confirmarGreen(aposta, n3) ||
            confirmarGreen(aposta, n4) ||
            confirmarGreen(aposta, n5) ||
            confirmarGreen(aposta, n6) ||
            confirmarGreen(aposta, n7) ||
            confirmarGreen(aposta, n8) ||
            confirmarGreen(aposta, n9) ||
            confirmarGreen(aposta, n10) ||
            confirmarGreen(aposta, n11)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

function confirmarGreen(aposta, rodada) {

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

function numerosHistorico(range) {
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

function numerosHistoricoIA(range) {
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

function confirmarUltimoGatilho(numero) {
    for (let i = jogadasLobby.length - 1; i >= 0; i--) {
        let gatilhoJogada = jogadasLobby[i].gatilho.split(' ');

        if (/^\d+$/.test(gatilhoJogada[0])) {
            if (gatilhoJogada[0] !== numero.toString()) {
                jogadasLobby.splice(i, 1);
            }
        } else {
            if (!confirmarGatilhoLegenda(gatilhoJogada[0], numero)) {
                jogadasLobby.splice(i, 1);
            }
        }
    }

    if (configuracaoAtual.congruencia.ativo) {
        let retorno = configuracaoAtual.congruencia.numGatilhos <= jogadasLobby.length;
        if (!retorno) {
            createToast('⚠️ ULTIMO GATILHO NÃO CONFIRMADO ⚠️');
        }
        return retorno;
    } else {
        let retorno = jogadasLobby.length == 1;
        if (!retorno) {
            createToast('⚠️ ULTIMO GATILHO NÃO CONFIRMADO ⚠️');
        }
        return retorno;
    }

}

function carregarRoleta() {
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

function retornaVizinhos(numero, quantidadeVizinhos) {
    // Sequência de números na roleta europeia (pode variar dependendo da roleta)
    const sequenciaRoleta = [
        "0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36",
        "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9",
        "22", "18", "29", "7", "28", "12", "35", "3", "26"
    ];

    // Encontra o índice do número na sequência
    const indiceNumero = sequenciaRoleta.indexOf(numero.toString());

    // Se o número não existir na sequência, retorna uma lista vazia
    if (indiceNumero === -1) {
        return [];
    }

    // Lista para armazenar os vizinhos
    const vizinhos = [];

    // Adiciona os vizinhos à esquerda
    for (let i = 1; i <= quantidadeVizinhos; i++) {
        const indiceEsquerda = (indiceNumero - i + sequenciaRoleta.length) % sequenciaRoleta.length;
        vizinhos.unshift(sequenciaRoleta[indiceEsquerda]); // Adiciona no início da lista
    }

    // Adiciona o número principal
    vizinhos.push(sequenciaRoleta[indiceNumero]);

    // Adiciona os vizinhos à direita
    for (let i = 1; i <= quantidadeVizinhos; i++) {
        const indiceDireita = (indiceNumero + i) % sequenciaRoleta.length;
        vizinhos.push(sequenciaRoleta[indiceDireita]); // Adiciona no final da lista
    }

    return vizinhos;
}

function retornaVizinhosPorTerminal(terminal, quantidadeVizinhos) {
    // Sequência de números na roleta europeia (pode variar dependendo da roleta)
    const sequenciaRoleta = [
        "0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36",
        "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9",
        "22", "18", "29", "7", "28", "12", "35", "3", "26"
    ];

    // Filtra os números que terminam com o terminal especificado
    const numerosTerminal = sequenciaRoleta.filter(numero => numero.endsWith(terminal.toString()));

    // Lista para armazenar os números do terminal e seus vizinhos
    const numerosComVizinhos = [];

    // Para cada número do terminal, adiciona ele e seus vizinhos à lista
    numerosTerminal.forEach(numero => {
        const indiceNumero = sequenciaRoleta.indexOf(numero);

        // Adiciona os vizinhos à esquerda
        for (let i = 1; i <= quantidadeVizinhos; i++) {
            const indiceEsquerda = (indiceNumero - i + sequenciaRoleta.length) % sequenciaRoleta.length;
            numerosComVizinhos.push(sequenciaRoleta[indiceEsquerda]);
        }

        // Adiciona o número principal
        numerosComVizinhos.push(numero);

        // Adiciona os vizinhos à direita
        for (let i = 1; i <= quantidadeVizinhos; i++) {
            const indiceDireita = (indiceNumero + i) % sequenciaRoleta.length;
            numerosComVizinhos.push(sequenciaRoleta[indiceDireita]);
        }
    });

    // Remove duplicatas (caso algum número seja vizinho de mais de um número do terminal)
    const numerosUnicos = [...new Set(numerosComVizinhos)];

    return numerosUnicos;
}

function validarJogadaQuentesFrios() {

    let numerosAposta = [];

    if (configuracaoAtual.quentesFrios.numerosQuentes) {
        let historico = numerosHistorico(configuracaoAtual.quentesFrios.qtdHistoricoNumQuentes);
        let numQuentes = numerosQuentes(historico);
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
                let vizinhos = retornaVizinhos(numerosQuentesValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosNumQuentes);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }

    }

    if (configuracaoAtual.quentesFrios.numerosFrios) {
        let historico = numerosHistorico(configuracaoAtual.quentesFrios.qtdHistoricoNumFrios);
        let numFrios = numerosFrios(historico);

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
                let vizinhos = retornaVizinhos(numerosFriosValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosNumFrios);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }

    if (configuracaoAtual.quentesFrios.terminaisQuentes) {
        let historico = numerosHistorico(configuracaoAtual.quentesFrios.qtdHistoricoTermQuentes);
        let termQuentes = terminaisQuentes(historico);

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
                let vizinhos = retornaVizinhosPorTerminal(terminaisQuentesValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosTermQuentes);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }

    if (configuracaoAtual.quentesFrios.terminaisFrios) {
        let historico = numerosHistorico(configuracaoAtual.quentesFrios.qtdHistoricoTermFrios);
        let termFrios = terminaisFrios(historico);

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
                let vizinhos = retornaVizinhosPorTerminal(terminaisFriosValidos[i], configuracaoAtual.quentesFrios.qtdVizinhosTermFrios);
                vizinhos.forEach(numero => {
                    numerosAposta.push(numero);
                });
            }
        }
    }
    aposta = removerRepetidos(numerosAposta);
    return aposta.length > 0 ? true : false;

}

function removerRepetidos(lista) {
    // Usa o Set para remover valores duplicados
    const valoresUnicos = new Set(lista);

    // Converte o Set de volta para um array
    return Array.from(valoresUnicos);
}

function numerosQuentes(historico) {
    const frequencia = {};

    // Conta a frequência de cada número
    historico.forEach(numero => {
        if (frequencia[numero]) {
            frequencia[numero]++;
        } else {
            frequencia[numero] = 1;
        }
    });

    // Converte o objeto de frequência em uma lista de objetos
    const listaFrequencia = Object.keys(frequencia).map(numero => ({
        numero: numero,
        frequencia: frequencia[numero]
    }));

    // Ordena a lista pela frequência (decrescente para quentes, crescente para frios)
    listaFrequencia.sort((a, b) => b.frequencia - a.frequencia);

    return listaFrequencia;
}

function numerosFrios(historico) {
    const frequencia = {};

    // Conta a frequência de cada número
    historico.forEach(numero => {
        if (frequencia[numero]) {
            frequencia[numero]++;
        } else {
            frequencia[numero] = 1;
        }
    });

    // Converte o objeto de frequência em uma lista de objetos
    const listaFrequencia = Object.keys(frequencia).map(numero => ({
        numero: numero,
        frequencia: frequencia[numero]
    }));

    // Ordena a lista pela frequência (crescente para frios)
    listaFrequencia.sort((a, b) => a.frequencia - b.frequencia);

    return listaFrequencia;
}

function terminaisQuentes(historico) {
    const frequencia = {};

    // Conta a frequência de cada terminal
    historico.forEach(numero => {
        const terminal = numero.slice(-1); // Pega o último dígito do número
        if (frequencia[terminal]) {
            frequencia[terminal]++;
        } else {
            frequencia[terminal] = 1;
        }
    });

    // Converte o objeto de frequência em uma lista de objetos
    const listaFrequencia = Object.keys(frequencia).map(terminal => ({
        terminal: terminal,
        frequencia: frequencia[terminal]
    }));

    // Ordena a lista pela frequência (decrescente para quentes)
    listaFrequencia.sort((a, b) => b.frequencia - a.frequencia);

    return listaFrequencia;
}

function terminaisFrios(historico) {
    const frequencia = {};

    // Conta a frequência de cada terminal
    historico.forEach(numero => {
        const terminal = numero.slice(-1); // Pega o último dígito do número
        if (frequencia[terminal]) {
            frequencia[terminal]++;
        } else {
            frequencia[terminal] = 1;
        }
    });

    // Converte o objeto de frequência em uma lista de objetos
    const listaFrequencia = Object.keys(frequencia).map(terminal => ({
        terminal: terminal,
        frequencia: frequencia[terminal]
    }));

    // Ordena a lista pela frequência (crescente para frios)
    listaFrequencia.sort((a, b) => a.frequencia - b.frequencia);

    return listaFrequencia;
}

function validarJogadasSolo(sequencia) {
    // Esvazia a lista jogadasLobby antes de iniciar
    jogadasLobby = [];

    // Função para encontrar a legenda correspondente a um número
    function encontrarLegenda(legendaEsperada, numeroSequencia) {

        if (parseInt(legendaEsperada) == parseInt(numeroSequencia)) {
            return true;
        }

        numeroSequencia = parseInt(numeroSequencia); // Certifica que o número está no formato correto

        // Procura a legenda dentro da configuração
        let legendaEncontrada = configuracaoAtual.legendas.find(legenda => legenda.legenda === legendaEsperada);

        if (!legendaEncontrada) {
            return false;
        }

        // Verifica se o número está presente na lista de números da legenda
        if (legendaEncontrada.numeros.includes(numeroSequencia)) {
            return true;
        }

        return false;
    }

    // Filtrar grupos que tenham pelo menos uma jogada ativa
    let gruposValidos = configuracaoAtual.grupos.filter(grupo =>
        grupo.jogadas.some(jogada => jogada.status === true)
    );

    // Percorrer **todos os grupos**
    for (const grupo of gruposValidos) {

        for (const jogada of grupo.jogadas) {
            if (!jogada.status) continue; // Pula jogadas inativas

            let gatilhoArray = jogada.gatilho.split(' '); // Transforma gatilho em lista
            if (gatilhoArray.length > sequencia.length) continue; // Se o gatilho for maior que a sequência, ignora

            let valido = true; // Flag para verificar se o gatilho bate com a sequência

            // **Corrigida a comparação correta do índice**
            for (let j = 0; j < gatilhoArray.length; j++) {
                let legendaEsperada = gatilhoArray[j]; // Exemplo: "D3"
                let numeroSequencia = sequencia[j]; // **Comparação correta**
                if (!encontrarLegenda(legendaEsperada, numeroSequencia)) {
                    valido = false;
                    break;
                }
            }

            if (valido) {

                let jogadaValidada = { ...jogada, grupo: grupo.nome, sequencia: sequencia };

                if (!configuracaoAtual.congruencia.ativo) {
                    jogadasLobby = [jogadaValidada]; // Apenas a primeira jogada válida
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

function validarJogadasLobby(sequencia) {
    // Esvazia a lista jogadasLobby antes de iniciar
    jogadasLobby = [];

    // Função para encontrar a legenda correspondente a um número
    function encontrarLegenda(legendaEsperada, numeroSequencia) {

        if (parseInt(legendaEsperada) == parseInt(numeroSequencia)) {
            return true;
        }

        numeroSequencia = parseInt(numeroSequencia); // Certifica que o número está no formato correto

        // Procura a legenda dentro da configuração
        let legendaEncontrada = configuracaoAtual.legendas.find(legenda => legenda.legenda === legendaEsperada);

        if (!legendaEncontrada) {
            return false;
        }

        // Verifica se o número está presente na lista de números da legenda
        if (legendaEncontrada.numeros.includes(numeroSequencia)) {
            return true;
        }

        return false;
    }

    // Filtrar grupos que tenham pelo menos uma jogada ativa
    let gruposValidos = configuracaoAtual.grupos.filter(grupo =>
        grupo.jogadas.some(jogada => jogada.status === true)
    );

    // Percorrer **todos os grupos**
    for (const grupo of gruposValidos) {

        for (const jogada of grupo.jogadas) {
            if (!jogada.status) continue; // Pula jogadas inativas

            let gatilhoArray = jogada.gatilho.split(' '); // Transforma gatilho em lista
            if (gatilhoArray.length > sequencia.length) continue; // Se o gatilho for maior que a sequência, ignora

            let valido = true; // Flag para verificar se o gatilho bate com a sequência

            // **Corrigida a comparação correta do índice**
            for (let j = 1; j < gatilhoArray.length; j++) {
                let legendaEsperada = gatilhoArray[j]; // Exemplo: "D3"
                let numeroSequencia = sequencia[j - 1]; // **Comparação correta**
                if (!encontrarLegenda(legendaEsperada, numeroSequencia)) {
                    valido = false;
                    break;
                }
            }

            if (valido) {

                let jogadaValidada = { ...jogada, grupo: grupo.nome, sequencia: sequencia };

                if (!configuracaoAtual.congruencia.ativo) {
                    jogadasLobby = [jogadaValidada]; // Apenas a primeira jogada válida
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

function getRoletaLobby(qtd, nome) {
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

function listarRoletasLobby(qtd) {
    carregarVisao();

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

function listarRoletasLobbySolo(qtd) {
    carregarVisao();

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

function carregarVisao() {
    const items = document.getElementsByClassName(elementos.e10);
    const step = 10;

    if (items.length > visaoLobby * step) {
        items[visaoLobby * step].scrollIntoView();
        visaoLobby++;
    } else {
        visaoLobby = 0;
    }
}

function lobby() {
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

function clique(x, y) {
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

function selecionarFichaApostaIA() {
    let valorConfig = configuracaoAtual.modoIA.ficha;

    // Obtém o valor real correspondente no HTML
    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        enviarMsgTelegram(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    // Obtém todas as fichas disponíveis
    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        // Obtém o texto dentro do elemento corretamente (o valor da ficha)
        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue; // Se não encontrou a classe, pula para a próxima

        let valorTexto = textoElemento.textContent.trim().replace(',', '.'); // Garante que está no formato correto

        let valorNumerico = parseFloat(valorTexto);

        // Se encontrar a ficha correspondente, clica nela
        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                createToast(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                enviarMsgTelegram(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            // Obtendo as coordenadas da ficha
            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            // Chamando sua função de clique
            clique(x, y);
            return true;
        }
    }

    createToast(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    enviarMsgTelegram(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function selecionarFichaAposta() {
    let valorConfig = 0;

    if (configuracaoAtual.congruencia.ativo) {
        valorConfig = configuracaoAtual.congruencia.ficha;
    } else {
        valorConfig = jogadasLobby[0].ficha;
    }

    // Obtém o valor real correspondente no HTML
    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        createToast(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        enviarMsgTelegram(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    // Obtém todas as fichas disponíveis
    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        // Obtém o texto dentro do elemento corretamente (o valor da ficha)
        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue; // Se não encontrou a classe, pula para a próxima

        let valorTexto = textoElemento.textContent.trim().replace(',', '.'); // Garante que está no formato correto

        let valorNumerico = parseFloat(valorTexto);

        // Se encontrar a ficha correspondente, clica nela
        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                createToast(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                enviarMsgTelegram(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            // Obtendo as coordenadas da ficha
            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            // Chamando sua função de clique
            clique(x, y);
            return true;
        }
    }

    createToast(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    enviarMsgTelegram(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function selecionarFichaApostaQuentesFrios() {
    let valorConfig = 0;

    valorConfig = configuracaoAtual.quentesFrios.ficha;

    // Obtém o valor real correspondente no HTML
    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        createToast(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        enviarMsgTelegram(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    // Obtém todas as fichas disponíveis
    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        // Obtém o texto dentro do elemento corretamente (o valor da ficha)
        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue; // Se não encontrou a classe, pula para a próxima

        let valorTexto = textoElemento.textContent.trim().replace(',', '.'); // Garante que está no formato correto

        let valorNumerico = parseFloat(valorTexto);

        // Se encontrar a ficha correspondente, clica nela
        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                createToast(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                enviarMsgTelegram(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            // Obtendo as coordenadas da ficha
            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            // Chamando sua função de clique
            clique(x, y);
            return true;
        }
    }

    createToast(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    enviarMsgTelegram(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    return false;
}

function selecionarFichaZero() {
    let valorConfig = configuracaoAtual.cobrirZero.ficha;

    // Obtém o valor real correspondente no HTML
    let valorDesejado = fichaMap[valorConfig];

    if (!valorDesejado) {
        createToast(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        enviarMsgTelegram(`⚠️ Nenhuma ficha mapeada para o valor: ${valorConfig}`);
        return false;
    }

    // Obtém todas as fichas disponíveis
    const fichas = document.getElementsByClassName(elementos.e24);

    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];

        // Obtém o texto dentro do elemento corretamente (o valor da ficha)
        let textoElemento = ficha.querySelector('.chip__label');
        if (!textoElemento) continue; // Se não encontrou a classe, pula para a próxima

        let valorTexto = textoElemento.textContent.trim().replace(',', '.'); // Garante que está no formato correto

        let valorNumerico = parseFloat(valorTexto);

        // Se encontrar a ficha correspondente, clica nela
        if (valorNumerico == valorDesejado) {
            let chipElement = ficha.closest('.chip');
            if (!chipElement) {
                createToast(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                enviarMsgTelegram(`⚠️ Elemento da ficha não encontrado para ${valorDesejado}`);
                return false;
            }

            // Obtendo as coordenadas da ficha
            let rect = chipElement.getBoundingClientRect();
            let x = Math.trunc(rect.x + rect.width / 2);
            let y = Math.trunc(rect.y + rect.height / 2);

            // Chamando sua função de clique
            clique(x, y);
            return true;
        }
    }

    createToast(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);
    enviarMsgTelegram(`⚠️ Nenhuma ficha encontrada para o valor: ${valorDesejado}`);

    return false;
}

function definirMultiplicadorGale() {
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

function definirMultiplicadorGaleQuentesFrios() {
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

function definirMultiplicadorCiclo(contagemCiclo) {
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

function validarApostarZero() {
    if (configuracaoAtual.cobrirZero.ativo) {
        if (!selecionarFichaZero()) {
            sairRoleta();
            resetTelaRoleta();
            return;
        }
        apostar0();
    }
}

async function validarJogadasIa() {
    // consultar o servidor , enviando os parametros do usuario e p historico.
    let hist = numerosHistoricoIA(500);
    const historicoIA = hist.reverse();
    let res = await vpqetsra(historicoIA, configuracaoAtual.modoIA.perfil);
    aposta = [];
    if (res.numeros && res.numeros.length > 1) {
        aposta = res.numeros;
        galeIA = res.gale;
        estrategiaIAmsg = res.estrategia;
        createToast(res.mensagem, 15000);
    } else {
        createToast(res.mensagem, 10000);
        return false;
    }
    return aposta.length > 0 ? true : false;
}

function definirStopDePerca() {
    let valorDeBanca = valorNumericoBanca();
    if (valorAntesDeAposta > valorDeBanca && parseInt(configuracaoAtual.stop.loss) > 0) {
        valorDePerca = valorDePerca + (valorAntesDeAposta - valorDeBanca);
        if (parseFloat(configuracaoAtual.stop.loss) <= valorDePerca) {
            pararTudo = true;
            createToast(`STOP DE PERDA ATINGIDO! Banca: R$ ${valorDeBanca} - Perca: R$ ${valorDePerca}`, 10000);
        }
    }
}

function tirarDiferencaDeganho() {
    let valorDeBanca = valorNumericoBanca();
    if (valorAntesDeAposta < valorDeBanca) {
        valorDeGanho = (valorDeBanca - valorAntesDeAposta);
        if (valorDePerca > 0) {
            valorDePerca = (valorDePerca - valorDeGanho) > 0 ? (valorDePerca - valorDeGanho) : 0;
            createToast(`VALOR DE PERCA ATUALIZADO PARA  R$ ${valorDePerca}.00`, 10000);
        }
    }
}

async function executarApostaIA() {
    if (chaveAposta && aposta.length > 0) {

        let simular = false;

        configuracaoAtual.modoIA.ficha == 0 ? simular = true : simular = false;

        // SELECIONAR A FICHA DE APOSTA
        if (!selecionarFichaApostaIA() && !simular) {
            sairRoleta();
            resetTelaRoleta();
            return;
        }

        definirMensagemNaApostaIA(aposta, (galeAtual));

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = valorNumericoBanca();
            }
            for (let i = 0; i < aposta.length; i++) {
                switch (aposta[i]) {
                    case "0": apostar0(); break;
                    case "1": apostar1(); break;
                    case "2": apostar2(); break;
                    case "3": apostar3(); break;
                    case "4": apostar4(); break;
                    case "5": apostar5(); break;
                    case "6": apostar6(); break;
                    case "7": apostar7(); break;
                    case "8": apostar8(); break;
                    case "9": apostar9(); break;
                    case "10": apostar10(); break;
                    case "11": apostar11(); break;
                    case "12": apostar12(); break;
                    case "13": apostar13(); break;
                    case "14": apostar14(); break;
                    case "15": apostar15(); break;
                    case "16": apostar16(); break;
                    case "17": apostar17(); break;
                    case "18": apostar18(); break;
                    case "19": apostar19(); break;
                    case "20": apostar20(); break;
                    case "21": apostar21(); break;
                    case "22": apostar22(); break;
                    case "23": apostar23(); break;
                    case "24": apostar24(); break;
                    case "25": apostar25(); break;
                    case "26": apostar26(); break;
                    case "27": apostar27(); break;
                    case "28": apostar28(); break;
                    case "29": apostar29(); break;
                    case "30": apostar30(); break;
                    case "31": apostar31(); break;
                    case "32": apostar32(); break;
                    case "33": apostar33(); break;
                    case "34": apostar34(); break;
                    case "35": apostar35(); break;
                    case "36": apostar36(); break;
                }
            }
        }
    }

    chaveAposta = false;
}

async function executarAposta() {
    if (chaveAposta && aposta.length > 0) {

        let contagemStorage = await getContagem();
        let repeticaoCiclo = definirMultiplicadorCiclo(contagemStorage.contagemCiclo);
        let multiplicadorGale = definirMultiplicadorGale();

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            inserirTextoDisplay(`LOSS VIRTUAL ${contagemStorage.contagemLossVirtual} APOSTA ${aposta} GALE ${galeAtual} CICLO ${repeticaoCiclo}`, 2);
            enviarMsgTelegram(`${roleta.nome}\nLOSS VIRTUAL ${contagemStorage.contagemLossVirtual}\n${aposta}\nGALE ${galeAtual}\nCICLO ${repeticaoCiclo}`);
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            inserirTextoDisplay(`POS GREEN ${contagemStorage.contagemPosGreen} APOSTA ${aposta} GALE ${galeAtual} CICLO ${repeticaoCiclo}`, 2);
            enviarMsgTelegram(`${roleta.nome}\nPOS GREEN  ${contagemStorage.contagemPosGreen}\n${aposta}\nGALE ${galeAtual}\nCICLO ${repeticaoCiclo}`);
            return;
        }

        let simular = false;

        if (configuracaoAtual.congruencia.ativo) {
            configuracaoAtual.congruencia.ficha == 0 ? simular = true : simular = false;
        } else {
            jogadasLobby[0].ficha == 0 ? simular = true : simular = false;
        }

        // SELECIONAR A FICHA DE APOSTA
        if (!selecionarFichaAposta() && !simular) {
            sairRoleta();
            resetTelaRoleta();
            return;
        }

        definirMensagemNaAposta(aposta, (galeAtual), (repeticaoCiclo - 1));

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = valorNumericoBanca();
            }
            for (let i = 0; i < aposta.length; i++) {
                for (let j = 0; j < (multiplicadorGale) * (repeticaoCiclo); j++) {
                    switch (aposta[i]) {
                        case "D1": apostarD1(); break;
                        case "D2": apostarD2(); break;
                        case "D3": apostarD3(); break;
                        case "C1": apostarC1(); break;
                        case "C2": apostarC2(); break;
                        case "C3": apostarC3(); break;
                        case "H": apostarAlto(); break;
                        case "L": apostarBaixo(); break;
                        case "R": apostarVermelho(); break;
                        case "B": apostarPreto(); break;
                        case "P": apostarPar(); break;
                        case "O": apostarImpar(); break;
                        case "T1": apostar1(); apostar11(); apostar21(); apostar31(); break;
                        case "T2": apostar2(); apostar12(); apostar22(); apostar32(); break;
                        case "T3": apostar3(); apostar13(); apostar23(); apostar33(); break;
                        case "T4": apostar4(); apostar14(); apostar24(); apostar34(); break;
                        case "T5": apostar5(); apostar15(); apostar25(); apostar35(); break;
                        case "T6": apostar6(); apostar16(); apostar26(); apostar36(); break;
                        case "T7": apostar7(); apostar17(); apostar27(); break;
                        case "T8": apostar8(); apostar18(); apostar28(); break;
                        case "T9": apostar9(); apostar19(); apostar29(); break;
                        case "T0": apostar0(); apostar10(); apostar20(); apostar30(); break;
                        case "0": apostar0(); break;
                        case "1": apostar1(); break;
                        case "2": apostar2(); break;
                        case "3": apostar3(); break;
                        case "4": apostar4(); break;
                        case "5": apostar5(); break;
                        case "6": apostar6(); break;
                        case "7": apostar7(); break;
                        case "8": apostar8(); break;
                        case "9": apostar9(); break;
                        case "10": apostar10(); break;
                        case "11": apostar11(); break;
                        case "12": apostar12(); break;
                        case "13": apostar13(); break;
                        case "14": apostar14(); break;
                        case "15": apostar15(); break;
                        case "16": apostar16(); break;
                        case "17": apostar17(); break;
                        case "18": apostar18(); break;
                        case "19": apostar19(); break;
                        case "20": apostar20(); break;
                        case "21": apostar21(); break;
                        case "22": apostar22(); break;
                        case "23": apostar23(); break;
                        case "24": apostar24(); break;
                        case "25": apostar25(); break;
                        case "26": apostar26(); break;
                        case "27": apostar27(); break;
                        case "28": apostar28(); break;
                        case "29": apostar29(); break;
                        case "30": apostar30(); break;
                        case "31": apostar31(); break;
                        case "32": apostar32(); break;
                        case "33": apostar33(); break;
                        case "34": apostar34(); break;
                        case "35": apostar35(); break;
                        case "36": apostar36(); break;
                        case "X1": apostarX1(); break;
                        case "X2": apostarX2(); break;
                        case "X3": apostarX3(); break;
                        case "X4": apostarX4(); break;
                        case "X5": apostarX5(); break;
                        case "X6": apostarX6(); break;
                        case "X7": apostarX7(); break;
                        case "X8": apostarX8(); break;
                        case "X9": apostarX9(); break;
                        case "X10": apostarX10(); break;
                        case "X11": apostarX11(); break;
                        case "X12": apostarX12(); break;
                        case "X13": apostarX13(); break;
                        case "X14": apostarX14(); break;
                        case "X15": apostarX15(); break;
                        case "X16": apostarX16(); break;
                        case "X17": apostarX17(); break;
                        case "X18": apostarX18(); break;
                        case "X19": apostarX19(); break;
                        case "X20": apostarX20(); break;
                        case "X21": apostarX21(); break;
                        case "X22": apostarX22(); break;
                        case "X23": apostarX23(); break;
                        case "X24": apostarX24(); break;
                        case "X25": apostarX25(); break;
                        case "X26": apostarX26(); break;
                        case "X27": apostarX27(); break;
                        case "X28": apostarX28(); break;
                        case "X29": apostarX29(); break;
                        case "X30": apostarX30(); break;
                        case "X31": apostarX31(); break;
                        case "X32": apostarX32(); break;
                        case "X33": apostarX33(); break;
                        case "X34": apostarX34(); break;
                        case "X35": apostarX35(); break;
                        case "X36": apostarX36(); break;
                        case "X37": apostarX37(); break;
                        case "X38": apostarX38(); break;
                        case "X39": apostarX39(); break;
                        case "X40": apostarX40(); break;
                        case "X41": apostarX41(); break;
                        case "X42": apostarX42(); break;
                        case "X43": apostarX43(); break;
                        case "X44": apostarX44(); break;
                        case "X45": apostarX45(); break;
                        case "X46": apostarX46(); break;
                        case "X47": apostarX47(); break;
                        case "X48": apostarX48(); break;
                        case "X49": apostarX49(); break;
                        case "X50": apostarX50(); break;
                        case "X51": apostarX51(); break;
                        case "X52": apostarX52(); break;
                        case "X53": apostarX53(); break;
                        case "X54": apostarX54(); break;
                        case "X55": apostarX55(); break;
                        case "X56": apostarX56(); break;
                        case "X57": apostarX57(); break;
                        case "X58": apostarX58(); break;
                        case "X59": apostarX59(); break;
                        case "X60": apostarX60(); break;
                        case "L1": apostarL1(); break;
                        case "L2": apostarL2(); break;
                        case "L3": apostarL3(); break;
                        case "L4": apostarL4(); break;
                        case "L5": apostarL5(); break;
                        case "L6": apostarL6(); break;
                        case "L7": apostarL7(); break;
                        case "L8": apostarL8(); break;
                        case "L9": apostarL9(); break;
                        case "L10": apostarL10(); break;
                        case "L11": apostarL11(); break;
                        case "L12": apostarL12(); break;
                        case "L13": apostarL13(); break;
                        case "L14": apostarL14(); break;
                        case "Q1": apostarQ1(); break;
                        case "Q2": apostarQ2(); break;
                        case "Q3": apostarQ3(); break;
                        case "Q4": apostarQ4(); break;
                        case "Q5": apostarQ5(); break;
                        case "Q6": apostarQ6(); break;
                        case "Q7": apostarQ7(); break;
                        case "Q8": apostarQ8(); break;
                        case "Q9": apostarQ9(); break;
                        case "Q10": apostarQ10(); break;
                        case "Q11": apostarQ11(); break;
                        case "Q12": apostarQ12(); break;
                        case "Q13": apostarQ13(); break;
                        case "Q14": apostarQ14(); break;
                        case "Q15": apostarQ15(); break;
                        case "Q16": apostarQ16(); break;
                        case "Q17": apostarQ17(); break;
                        case "Q18": apostarQ18(); break;
                        case "Q19": apostarQ19(); break;
                        case "Q20": apostarQ20(); break;
                        case "Q21": apostarQ21(); break;
                        case "Q22": apostarQ22(); break;
                        case "Q23": apostarQ23(); break;
                    }
                }
            }

            validarApostarZero();
        }

    }

    chaveAposta = false;
}

async function executarApostaQuentesFrios() {
    if (chaveAposta && aposta.length > 0) {

        let multiplicadorGale = definirMultiplicadorGaleQuentesFrios();

        let simular = false;

        configuracaoAtual.quentesFrios.ficha == 0 ? simular = true : simular = false;

        // SELECIONAR A FICHA DE APOSTA
        if (!selecionarFichaApostaQuentesFrios() && !simular) {
            sairRoleta();
            resetTelaRoleta();
            return;
        }

        definirMensagemNaApostaQuentesFrios(aposta, galeAtual);

        if (!simular) {
            if (galeAtual == 0) {
                valorAntesDeAposta = valorNumericoBanca();
            }
            for (let i = 0; i < aposta.length; i++) {
                for (let j = 0; j < (multiplicadorGale); j++) {
                    switch (aposta[i]) {
                        case "0": apostar0(); break;
                        case "1": apostar1(); break;
                        case "2": apostar2(); break;
                        case "3": apostar3(); break;
                        case "4": apostar4(); break;
                        case "5": apostar5(); break;
                        case "6": apostar6(); break;
                        case "7": apostar7(); break;
                        case "8": apostar8(); break;
                        case "9": apostar9(); break;
                        case "10": apostar10(); break;
                        case "11": apostar11(); break;
                        case "12": apostar12(); break;
                        case "13": apostar13(); break;
                        case "14": apostar14(); break;
                        case "15": apostar15(); break;
                        case "16": apostar16(); break;
                        case "17": apostar17(); break;
                        case "18": apostar18(); break;
                        case "19": apostar19(); break;
                        case "20": apostar20(); break;
                        case "21": apostar21(); break;
                        case "22": apostar22(); break;
                        case "23": apostar23(); break;
                        case "24": apostar24(); break;
                        case "25": apostar25(); break;
                        case "26": apostar26(); break;
                        case "27": apostar27(); break;
                        case "28": apostar28(); break;
                        case "29": apostar29(); break;
                        case "30": apostar30(); break;
                        case "31": apostar31(); break;
                        case "32": apostar32(); break;
                        case "33": apostar33(); break;
                        case "34": apostar34(); break;
                        case "35": apostar35(); break;
                        case "36": apostar36(); break;
                    }
                }
            }
            validarApostarZero();
        }
    }
    chaveAposta = false;
}

function definirMensagemNaApostaQuentesFrios(aposta, gale) {
    enviarMsgTelegram(`${roleta.nome}\n${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}`);
    inserirTextoDisplay(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale}`, 2);
}

function definirMensagemNaAposta(aposta, gale, repeticaoCiclo) {
    if (configuracaoAtual.congruencia.ativo) {
        enviarMsgTelegram(`${roleta.nome}\n${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}\nCICLO ${repeticaoCiclo}`);
        inserirTextoDisplay(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale} CICLO ${repeticaoCiclo}`, 2);
    } else {
        enviarMsgTelegram(`${roleta.nome}\n${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}\nCICLO ${repeticaoCiclo}`);
        inserirTextoDisplay(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale} CICLO ${repeticaoCiclo}`, 2);
    }
}

function definirMensagemNaApostaIA(aposta, gale) {
    enviarMsgTelegram(`${roleta.nome}\n${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'}\n${aposta}\nGALE ${gale}`);
    inserirTextoDisplay(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : 'APOSTANDO'} ${aposta} GALE ${gale}`, 2);
}

async function definirMensagemDeGreenQuentesFrios() {
    contagemAcertos++;
    enviarMsgTelegram(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function definirMensagemDeGreenIA() {
    contagemAcertos++;
    enviarMsgTelegram(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
}

async function definirMensagemDeGreen(contagemStorage) {

    if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
        enviarMsgTelegram(`GANHOU NO LOSS VIRTUAL\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - GANHOU NO LOSS VIRTUAL - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }

    if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
        enviarMsgTelegram(`GANHOU NO POS GREEN\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - GANHOU NO POS GREEN - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }
    contagemAcertos++;
    if (configuracaoAtual.congruencia.ativo) {
        enviarMsgTelegram(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    } else {
        enviarMsgTelegram(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n✅✅✅${sequenciaAtual[0]}✅✅✅\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - ${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ✅✅✅${sequenciaAtual[0]}✅✅✅ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    }
}

async function definirCicloNoGreen(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.ciclos > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }
        await salvarCongruencia(0, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);

    } else if (jogadasLobby[0].ciclos > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }
        await salvarJogada(jogadasLobby[0], 0, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    }
}

async function definirPauseWinNoGreen(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.pauseWin > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemPauseWin = contagemStorage.contagemPauseWin + 1;

        if (novaContagemPauseWin > configuracaoAtual.congruencia.pauseWin) {
            await salvarCongruencia(0, 0, 0, 0);

        } else {
            await salvarCongruencia(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, novaContagemPauseWin);
        }

    } else if (jogadasLobby[0].pauseWin > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemPauseWin = contagemStorage.contagemPauseWin + 1;

        if (novaContagemPauseWin > jogadasLobby[0].pauseWin) {
            await salvarJogada(jogadasLobby[0], 0, 0, 0, 0);
        } else {
            await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, novaContagemPauseWin);
        }
    }
}

async function definirLossVirtualNoGreen(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.lossVirtual > 0) {
        await salvarCongruencia(contagemStorage.contagemCiclo, 0, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    } else if (jogadasLobby[0].lossVirtual > 0) {
        await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, 0, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
    }
}

async function definirPosGreenNoGreen(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.posGreen > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            let novaContagemPosGreen = contagemStorage.posGreen + 1;
            await salvarCongruencia(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, novaContagemPosGreen, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].posGreen > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            let novaContagemPosGreen = contagemStorage.posGreen + 1;
            await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, novaContagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function definirMensagemDeRedQuentesFrios() {
    contagemErros++;
    enviarMsgTelegram(`${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.quentesFrios.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function definirMensagemDeRedIA() {
    contagemErros++;
    enviarMsgTelegram(`${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
    atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.modoIA.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);

}

async function definirMensagemDeRed(contagemStorage) {

    if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
        enviarMsgTelegram(`PERDEU NO LOSS VIRTUAL\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - PERDEU NO LOSS VIRTUAL - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }

    if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
        enviarMsgTelegram(`PERDEU NO POS GREEN\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - PERDEU NO POS GREEN - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
        return;
    }
    contagemErros++;
    if (configuracaoAtual.congruencia.ativo) {
        enviarMsgTelegram(`${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - ${configuracaoAtual.congruencia.ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    } else {
        enviarMsgTelegram(`${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''}\n${roleta.nome}\n❌❌❌${sequenciaAtual[0]}❌❌❌\nGALE ${galeAtual}\nCICLO ${contagemStorage.contagemCiclo}\n\n💰💰💰 PARCIAL 💰💰💰\n✅${contagemAcertos}\n❌${contagemErros}`);
        atualizarProtocolo(`${dataHora()} - ${jogadasLobby[0].ficha == 0 ? 'SIMULAÇÃO' : ''} - ${roleta.nome} - ❌❌❌${sequenciaAtual[0]}❌❌❌ - GALE ${galeAtual} - CICLO ${contagemStorage.contagemCiclo} - 💰💰💰 PARCIAL 💰💰💰 ✅${contagemAcertos} ❌${contagemErros}`);
    }
}

async function definirCicloNoRed(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.ciclos.length > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemCiclo = contagemStorage.contagemCiclo + 1;

        if (novaContagemCiclo > configuracaoAtual.congruencia.ciclos) {
            await salvarCongruencia(0, 0, 0, 0);

        } else {
            await salvarCongruencia(novaContagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].ciclos.length > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        let novaContagemCiclo = contagemStorage.contagemCiclo + 1;

        if (novaContagemCiclo > configuracaoAtual.congruencia.ciclos) {
            await salvarJogada(jogadasLobby[0], 0, 0, 0, 0);

        } else {
            await salvarJogada(jogadasLobby[0], novaContagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function definirPauseWinNoRed(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.pauseWin > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        await salvarCongruencia(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, 0);

    } else if (jogadasLobby[0].pauseWin > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            return;
        }

        await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, contagemStorage.contagemPosGreen, 0);
    }
}

async function definirLossVirtualNoRed(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.lossVirtual > 0) {
        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            let novaContagemLossVirtual = contagemStorage.contagemLossVirtual + 1;
            await salvarCongruencia(contagemStorage.contagemCiclo, novaContagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    } else if (jogadasLobby[0].lossVirtual > 0) {
        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            let novaContagemLossVirtual = contagemStorage.contagemLossVirtual + 1;
            await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, novaContagemLossVirtual, contagemStorage.contagemPosGreen, contagemStorage.contagemPauseWin);
        }
    }
}

async function definirPosGreenNoRed(contagemStorage) {
    if (configuracaoAtual.congruencia.ativo && configuracaoAtual.congruencia.posGreen > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            await salvarCongruencia(contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, 0, contagemStorage.contagemPauseWin);
        }

    } else if (jogadasLobby[0].posGreen > 0) {

        if (fazerLossVirtual(contagemStorage.contagemLossVirtual)) {
            return;
        }

        if (fazerPosGreen(contagemStorage.contagemPosGreen)) {
            await salvarJogada(jogadasLobby[0], contagemStorage.contagemCiclo, contagemStorage.contagemLossVirtual, 0, contagemStorage.contagemPauseWin);
        }
    }
}

function fazerPauseWin(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.pauseWin ? true : false;
    } else {
        return contagem < jogadasLobby[0].pauseWin ? true : false;
    }
}

function fazerPosGreen(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.posGreen ? true : false;
    } else {
        return contagem < jogadasLobby[0].posGreen ? true : false;
    }
}

function fazerLossVirtual(contagem) {
    if (configuracaoAtual.congruencia.ativo) {
        return contagem < configuracaoAtual.congruencia.lossVirtual ? true : false;
    } else {
        return contagem < jogadasLobby[0].lossVirtual ? true : false;
    }
}

async function getContagem() {
    if (configuracaoAtual.congruencia.ativo) {
        return await obterCongruenciaSalva().then(congruencia => {
            return congruencia;
        });
    } else {
        return await obterJogadaSalva(jogadasLobby[0].id).then(jogada => {
            return jogada;
        }).catch(error => {
            return null;
        });
    }
}

async function salvarCongruencia(contagemCiclo, contagemLossVirtual, contagemPosGreen, contagemPauseWin) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("congruenciaSalva", (result) => {
            let congruenciaSalva = result.congruenciaSalva || null;

            if (!congruenciaSalva) {
                // Se não existir, cria um novo registro
                congruenciaSalva = {
                    contagemCiclo: contagemCiclo,
                    contagemLossVirtual: contagemLossVirtual,
                    contagemPosGreen: contagemPosGreen,
                    contagemPauseWin: contagemPauseWin
                };
            } else {
                // Se já existir, apenas atualiza os novos valores
                congruenciaSalva.contagemCiclo = contagemCiclo;
                congruenciaSalva.contagemLossVirtual = contagemLossVirtual;
                congruenciaSalva.contagemPosGreen = contagemPosGreen;
                congruenciaSalva.contagemPauseWin = contagemPauseWin;
            }

            // Salva a congruência atualizada no storage
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

async function obterCongruenciaSalva() {
    return new Promise((resolve) => {
        chrome.storage.local.get("congruenciaSalva", async (result) => {
            const congruencia = result.congruenciaSalva || [];

            if (congruencia) {
                resolve(congruencia);
            } else {
                const novaCongruencia = await salvarCongruencia(0, 0, 0, 0);
                resolve(novaCongruencia);
            }
        });
    });
}

async function deletarCongruenciaSalva() {
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

async function salvarJogada(jogadaOriginal, contagemCiclo, contagemLossVirtual, contagemPosGreen, contagemPauseWin) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("jogadasSalvas", (result) => {
            let jogadasSalvas = result.jogadasSalvas || [];

            // Verifica se a jogada já existe no storage
            const index = jogadasSalvas.findIndex(j => j.id === jogadaOriginal.id);

            if (index === -1) {
                // Jogada não existe, criar nova entrada
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
                // Jogada já existe, apenas atualizar valores
                jogadasSalvas[index].contagemCiclo = contagemCiclo;
                jogadasSalvas[index].contagemLossVirtual = contagemLossVirtual;
                jogadasSalvas[index].contagemPosGreen = contagemPosGreen;
                jogadasSalvas[index].contagemPauseWin = contagemPauseWin;
            }

            // Salva a lista atualizada no storage
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

async function obterJogadaSalva(jogadaId) {
    return new Promise((resolve) => {
        chrome.storage.local.get("jogadasSalvas", async (result) => {
            const jogadas = result.jogadasSalvas || [];
            const jogada = jogadas.find(j => j.id === jogadaId);

            if (jogada) {
                resolve(jogada);
            } else {
                const novaJogada = await salvarJogada({ id: jogadaId, gatilho: "", aposta: "" }, 0, 0, 0, 0);
                resolve({
                    id: jogadaId,
                    gatilho: "",
                    aposta: "",
                    contagemCiclo: 0,
                    contagemLossVirtual: 0,
                    contagemPosGreen: 0,
                    contagemPauseWin: 0
                });
            }
        });
    });
}

async function deletarJogadaSalva(jogadaId) {
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

async function obterTodasJogadas() {
    return new Promise((resolve) => {
        chrome.storage.local.get("jogadasSalvas", (result) => {
            resolve(result.jogadasSalvas || []);
        });
    });
}

validarBot();

setInterval(() => {
    try {
        fecharTutorial();
        clicarModal();
        if (validarStop() || pararTudo) {
            modoStop();
        } else {
            if (validarTimer()) {
                modoTimer();
            } else {
                validarModo();
            }
        }

    } catch (err) {
        alert(err);
    }
}, 4000);


// FUNÇÕES DE APOSTAR NA RACE

function apostar0() {
    if (document.getElementsByClassName(elementos.e25).length > 1) {
        if (document.getElementsByClassName(elementos.e13)[0].outerText == "Ruleta Betano en Español" || document.getElementsByClassName(elementos.e13)[0].outerText == "American Roulette") {
            clique(Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().x) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().width / 2),
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().y) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[2].children[3].getBoundingClientRect().height / 2));

        } else {
            clique(Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().x) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().width / 2),
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().y) +
                Math.trunc(document.getElementsByClassName(elementos.e25)[1].children[2].getBoundingClientRect().height / 2));
        }
    }
}

function apostarD1() {
    if (
        document.getElementsByClassName(elementos.e26).length == 1
    ) {
        clique(
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

function apostarD2() {
    if (
        document.getElementsByClassName(elementos.e27).length == 1
    ) {
        clique(
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

function apostarD3() {
    if (
        document.getElementsByClassName(elementos.e28).length == 1
    ) {
        clique(
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

function apostarC1() {
    if (
        document.getElementsByClassName(elementos.e29).length == 1
    ) {
        clique(
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

function apostarC2() {
    if (
        document.getElementsByClassName(elementos.e30).length == 1
    ) {
        clique(
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

function apostarC3() {
    if (
        document.getElementsByClassName(elementos.e31).length == 1
    ) {
        clique(
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

function apostarAlto() {
    if (
        document.getElementsByClassName(elementos.e32).length == 1
    ) {
        clique(
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

function apostarBaixo() {
    if (
        document.getElementsByClassName(elementos.e33).length == 1
    ) {
        clique(
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

function apostarVermelho() {
    if (
        document.getElementsByClassName(elementos.e34).length == 1
    ) {
        clique(
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

function apostarPreto() {
    if (
        document.getElementsByClassName(elementos.e35).length == 1
    ) {
        clique(
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

function apostarPar() {
    if (
        document.getElementsByClassName(elementos.e36).length == 1
    ) {
        clique(
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

function apostarImpar() {
    if (
        document.getElementsByClassName(elementos.e37).length == 1
    ) {
        clique(
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

function apostar1() {
    if (
        document.getElementsByClassName(elementos.e38)[18].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar2() {
    if (
        document.getElementsByClassName(elementos.e39)[18].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar3() {
    if (
        document.getElementsByClassName(elementos.e38)[19].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar4() {
    if (
        document.getElementsByClassName(elementos.e39)[19].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar5() {
    if (
        document.getElementsByClassName(elementos.e38)[20].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar6() {
    if (
        document.getElementsByClassName(elementos.e39)[20].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar7() {
    if (
        document.getElementsByClassName(elementos.e38)[21].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar8() {
    if (
        document.getElementsByClassName(elementos.e39)[21].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar9() {
    if (
        document.getElementsByClassName(elementos.e38)[22].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar10() {
    if (
        document.getElementsByClassName(elementos.e39)[22].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar11() {
    if (
        document.getElementsByClassName(elementos.e39)[23].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar12() {
    if (
        document.getElementsByClassName(elementos.e38)[23].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar13() {
    if (
        document.getElementsByClassName(elementos.e39)[24].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar14() {
    if (
        document.getElementsByClassName(elementos.e38)[24].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar15() {
    if (
        document.getElementsByClassName(elementos.e39)[25].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar16() {
    if (
        document.getElementsByClassName(elementos.e38)[25].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar17() {
    if (
        document.getElementsByClassName(elementos.e39)[26].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar18() {
    if (
        document.getElementsByClassName(elementos.e38)[26].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar19() {
    if (
        document.getElementsByClassName(elementos.e38)[27].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar20() {
    if (
        document.getElementsByClassName(elementos.e39)[27].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar21() {
    if (
        document.getElementsByClassName(elementos.e38)[28].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar22() {
    if (
        document.getElementsByClassName(elementos.e39)[28].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar23() {
    if (
        document.getElementsByClassName(elementos.e38)[29].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar24() {
    if (
        document.getElementsByClassName(elementos.e39)[29].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar25() {
    if (
        document.getElementsByClassName(elementos.e38)[30].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar26() {
    if (
        document.getElementsByClassName(elementos.e39)[30].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar27() {
    if (
        document.getElementsByClassName(elementos.e38)[31].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar28() {
    if (
        document.getElementsByClassName(elementos.e39)[31].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar29() {
    if (
        document.getElementsByClassName(elementos.e39)[32].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar30() {
    if (
        document.getElementsByClassName(elementos.e38)[32].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar31() {
    if (
        document.getElementsByClassName(elementos.e39)[33].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar32() {
    if (
        document.getElementsByClassName(elementos.e38)[33].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar33() {
    if (
        document.getElementsByClassName(elementos.e39)[34].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar34() {
    if (
        document.getElementsByClassName(elementos.e38)[34].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar35() {
    if (
        document.getElementsByClassName(elementos.e39)[35].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostar36() {
    if (
        document.getElementsByClassName(elementos.e38)[35].children[3] != undefined
    ) {
        clique(
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
        clique(
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

function apostarX1() {
    if (
        document.getElementsByClassName(elementos.e40)[0] !=
        undefined
    ) {
        clique(
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

function apostarX2() {
    if (
        document.getElementsByClassName(elementos.e40)[3] !=
        undefined
    ) {
        clique(
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

function apostarX3() {
    if (
        document.getElementsByClassName(elementos.e40)[4] !=
        undefined
    ) {
        clique(
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

function apostarX4() {
    if (
        document.getElementsByClassName(elementos.e40)[6] !=
        undefined
    ) {
        clique(
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

function apostarX5() {
    if (
        document.getElementsByClassName(elementos.e40)[7] !=
        undefined
    ) {
        clique(
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

function apostarX6() {
    if (
        document.getElementsByClassName(elementos.e40)[9] !=
        undefined
    ) {
        clique(
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

function apostarX7() {
    if (
        document.getElementsByClassName(elementos.e40)[12] !=
        undefined
    ) {
        clique(
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

function apostarX8() {
    if (
        document.getElementsByClassName(elementos.e40)[13] !=
        undefined
    ) {
        clique(
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

function apostarX9() {
    if (
        document.getElementsByClassName(elementos.e40)[15] !=
        undefined
    ) {
        clique(
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

function apostarX10() {
    if (
        document.getElementsByClassName(elementos.e40)[16] !=
        undefined
    ) {
        clique(
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

function apostarX11() {
    if (
        document.getElementsByClassName(elementos.e40)[18] !=
        undefined
    ) {
        clique(
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

function apostarX12() {
    if (
        document.getElementsByClassName(elementos.e40)[21] !=
        undefined
    ) {
        clique(
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

function apostarX13() {
    if (
        document.getElementsByClassName(elementos.e40)[22] !=
        undefined
    ) {
        clique(
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

function apostarX14() {
    if (
        document.getElementsByClassName(elementos.e40)[24] !=
        undefined
    ) {
        clique(
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

function apostarX15() {
    if (
        document.getElementsByClassName(elementos.e40)[25] !=
        undefined
    ) {
        clique(
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

function apostarX16() {
    if (
        document.getElementsByClassName(elementos.e40)[27] !=
        undefined
    ) {
        clique(
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

function apostarX17() {
    if (
        document.getElementsByClassName(elementos.e40)[30] !=
        undefined
    ) {
        clique(
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

function apostarX18() {
    if (
        document.getElementsByClassName(elementos.e40)[31] !=
        undefined
    ) {
        clique(
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

function apostarX19() {
    if (
        document.getElementsByClassName(elementos.e40)[33] !=
        undefined
    ) {
        clique(
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

function apostarX20() {
    if (
        document.getElementsByClassName(elementos.e40)[34] !=
        undefined
    ) {
        clique(
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

function apostarX21() {
    if (
        document.getElementsByClassName(elementos.e40)[36] !=
        undefined
    ) {
        clique(
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

function apostarX22() {
    if (
        document.getElementsByClassName(elementos.e40)[39] !=
        undefined
    ) {
        clique(
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

function apostarX23() {
    if (
        document.getElementsByClassName(elementos.e40)[40] !=
        undefined
    ) {
        clique(
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

function apostarX24() {
    if (
        document.getElementsByClassName(elementos.e40)[42] !=
        undefined
    ) {
        clique(
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

function apostarX25() {
    if (
        document.getElementsByClassName(elementos.e40)[43] !=
        undefined
    ) {
        clique(
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

function apostarX26() {
    if (
        document.getElementsByClassName(elementos.e40)[45] !=
        undefined
    ) {
        clique(
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

function apostarX27() {
    if (
        document.getElementsByClassName(elementos.e40)[48] !=
        undefined
    ) {
        clique(
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

function apostarX28() {
    if (
        document.getElementsByClassName(elementos.e40)[49] !=
        undefined
    ) {
        clique(
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

function apostarX29() {
    if (
        document.getElementsByClassName(elementos.e40)[51] !=
        undefined
    ) {
        clique(
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

function apostarX30() {
    if (
        document.getElementsByClassName(elementos.e40)[52] !=
        undefined
    ) {
        clique(
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

function apostarX31() {
    if (
        document.getElementsByClassName(elementos.e40)[54] !=
        undefined
    ) {
        clique(
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

function apostarX32() {
    if (
        document.getElementsByClassName(elementos.e40)[57] !=
        undefined
    ) {
        clique(
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

function apostarX33() {
    if (
        document.getElementsByClassName(elementos.e40)[58] !=
        undefined
    ) {
        clique(
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

function apostarX34() {
    if (
        document.getElementsByClassName(elementos.e40)[60] !=
        undefined
    ) {
        clique(
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

function apostarX35() {
    if (
        document.getElementsByClassName(elementos.e40)[61] !=
        undefined
    ) {
        clique(
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

function apostarX36() {
    if (
        document.getElementsByClassName(elementos.e40)[63] !=
        undefined
    ) {
        clique(
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

function apostarX37() {
    if (
        document.getElementsByClassName(elementos.e40)[66] !=
        undefined
    ) {
        clique(
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

function apostarX38() {
    if (
        document.getElementsByClassName(elementos.e40)[67] !=
        undefined
    ) {
        clique(
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

function apostarX39() {
    if (
        document.getElementsByClassName(elementos.e40)[69] !=
        undefined
    ) {
        clique(
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

function apostarX40() {
    if (
        document.getElementsByClassName(elementos.e40)[70] !=
        undefined
    ) {
        clique(
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

function apostarX41() {
    if (
        document.getElementsByClassName(elementos.e40)[72] !=
        undefined
    ) {
        clique(
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

function apostarX42() {
    if (
        document.getElementsByClassName(elementos.e40)[75] !=
        undefined
    ) {
        clique(
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

function apostarX43() {
    if (
        document.getElementsByClassName(elementos.e40)[76] !=
        undefined
    ) {
        clique(
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

function apostarX44() {
    if (
        document.getElementsByClassName(elementos.e40)[78] !=
        undefined
    ) {
        clique(
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

function apostarX45() {
    if (
        document.getElementsByClassName(elementos.e40)[79] !=
        undefined
    ) {
        clique(
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

function apostarX46() {
    if (
        document.getElementsByClassName(elementos.e40)[81] !=
        undefined
    ) {
        clique(
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

function apostarX47() {
    if (
        document.getElementsByClassName(elementos.e40)[84] !=
        undefined
    ) {
        clique(
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

function apostarX48() {
    if (
        document.getElementsByClassName(elementos.e40)[85] !=
        undefined
    ) {
        clique(
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

function apostarX49() {
    if (
        document.getElementsByClassName(elementos.e40)[87] !=
        undefined
    ) {
        clique(
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

function apostarX50() {
    if (
        document.getElementsByClassName(elementos.e40)[88] !=
        undefined
    ) {
        clique(
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

function apostarX51() {
    if (
        document.getElementsByClassName(elementos.e40)[90] !=
        undefined
    ) {
        clique(
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

function apostarX52() {
    if (
        document.getElementsByClassName(elementos.e40)[93] !=
        undefined
    ) {
        clique(
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

function apostarX53() {
    if (
        document.getElementsByClassName(elementos.e40)[94] !=
        undefined
    ) {
        clique(
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

function apostarX54() {
    if (
        document.getElementsByClassName(elementos.e40)[96] !=
        undefined
    ) {
        clique(
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

function apostarX55() {
    if (
        document.getElementsByClassName(elementos.e40)[97] !=
        undefined
    ) {
        clique(
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

function apostarX56() {
    if (
        document.getElementsByClassName(elementos.e40)[99] !=
        undefined
    ) {
        clique(
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

function apostarX57() {
    if (
        document.getElementsByClassName(elementos.e40)[102] !=
        undefined
    ) {
        clique(
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

function apostarX58() {
    if (
        document.getElementsByClassName(elementos.e40)[103] !=
        undefined
    ) {
        clique(
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

function apostarX59() {
    if (
        document.getElementsByClassName(elementos.e40)[105] !=
        undefined
    ) {
        clique(
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

function apostarX60() {
    if (
        document.getElementsByClassName(elementos.e40)[106] !=
        undefined
    ) {
        clique(
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

function apostarL1() {
    if (
        document.getElementsByClassName(elementos.e40)[1] !=
        undefined
    ) {
        clique(
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

function apostarL2() {
    if (
        document.getElementsByClassName(elementos.e40)[5] !=
        undefined
    ) {
        clique(
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

function apostarL3() {
    if (
        document.getElementsByClassName(elementos.e40)[8] !=
        undefined
    ) {
        clique(
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

function apostarL4() {
    if (
        document.getElementsByClassName(elementos.e40)[10] !=
        undefined
    ) {
        clique(
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

function apostarL5() {
    if (
        document.getElementsByClassName(elementos.e40)[19] !=
        undefined
    ) {
        clique(
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

function apostarL6() {
    if (
        document.getElementsByClassName(elementos.e40)[28] !=
        undefined
    ) {
        clique(
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

function apostarL7() {
    if (
        document.getElementsByClassName(elementos.e40)[37] !=
        undefined
    ) {
        clique(
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

function apostarL8() {
    if (
        document.getElementsByClassName(elementos.e40)[46] !=
        undefined
    ) {
        clique(
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

function apostarL9() {
    if (
        document.getElementsByClassName(elementos.e40)[55] !=
        undefined
    ) {
        clique(
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

function apostarL10() {
    if (
        document.getElementsByClassName(elementos.e40)[64] !=
        undefined
    ) {
        clique(
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

function apostarL11() {
    if (
        document.getElementsByClassName(elementos.e40)[73] !=
        undefined
    ) {
        clique(
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

function apostarL12() {
    if (
        document.getElementsByClassName(elementos.e40)[82] !=
        undefined
    ) {
        clique(
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

function apostarL13() {
    if (
        document.getElementsByClassName(elementos.e40)[91] !=
        undefined
    ) {
        clique(
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

function apostarL14() {
    if (
        document.getElementsByClassName(elementos.e40)[100] !=
        undefined
    ) {
        clique(
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

function apostarQ1() {
    if (
        document.getElementsByClassName(elementos.e40)[2] !=
        undefined
    ) {
        clique(
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

function apostarQ2() {
    if (
        document.getElementsByClassName(elementos.e40)[14] !=
        undefined
    ) {
        clique(
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

function apostarQ3() {
    if (
        document.getElementsByClassName(elementos.e40)[17] !=
        undefined
    ) {
        clique(
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

function apostarQ4() {
    if (
        document.getElementsByClassName(elementos.e40)[23] !=
        undefined
    ) {
        clique(
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

function apostarQ5() {
    if (
        document.getElementsByClassName(elementos.e40)[26] !=
        undefined
    ) {
        clique(
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

function apostarQ6() {
    if (
        document.getElementsByClassName(elementos.e40)[32] !=
        undefined
    ) {
        clique(
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

function apostarQ7() {
    if (
        document.getElementsByClassName(elementos.e40)[35] !=
        undefined
    ) {
        clique(
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

function apostarQ8() {
    if (
        document.getElementsByClassName(elementos.e40)[41] !=
        undefined
    ) {
        clique(
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

function apostarQ9() {
    if (
        document.getElementsByClassName(elementos.e40)[44] !=
        undefined
    ) {
        clique(
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

function apostarQ10() {
    if (
        document.getElementsByClassName(elementos.e40)[50] !=
        undefined
    ) {
        clique(
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

function apostarQ11() {
    if (
        document.getElementsByClassName(elementos.e40)[53] !=
        undefined
    ) {
        clique(
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

function apostarQ12() {
    if (
        document.getElementsByClassName(elementos.e40)[59] !=
        undefined
    ) {
        clique(
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

function apostarQ13() {
    if (
        document.getElementsByClassName(elementos.e40)[62] !=
        undefined
    ) {
        clique(
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

function apostarQ14() {
    if (
        document.getElementsByClassName(elementos.e40)[68] !=
        undefined
    ) {
        clique(
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

function apostarQ15() {
    if (
        document.getElementsByClassName(elementos.e40)[71] !=
        undefined
    ) {
        clique(
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

function apostarQ16() {
    if (
        document.getElementsByClassName(elementos.e40)[77] !=
        undefined
    ) {
        clique(
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

function apostarQ17() {
    if (
        document.getElementsByClassName(elementos.e40)[80] !=
        undefined
    ) {
        clique(
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

function apostarQ18() {
    if (
        document.getElementsByClassName(elementos.e40)[86] !=
        undefined
    ) {
        clique(
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

function apostarQ19() {
    if (
        document.getElementsByClassName(elementos.e40)[89] !=
        undefined
    ) {
        clique(
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

function apostarQ20() {
    if (
        document.getElementsByClassName(elementos.e40)[95] !=
        undefined
    ) {
        clique(
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

function apostarQ21() {
    if (
        document.getElementsByClassName(elementos.e40)[98] !=
        undefined
    ) {
        clique(
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

function apostarQ22() {
    if (
        document.getElementsByClassName(elementos.e40)[104] !=
        undefined
    ) {
        clique(
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

function apostarQ23() {
    if (
        document.getElementsByClassName(elementos.e40)[107] !=
        undefined
    ) {
        clique(
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

function apostarR1() {
    if (
        document.getElementsByClassName(elementos.e40)[11] !=
        undefined
    ) {
        clique(
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

function apostarR2() {
    if (
        document.getElementsByClassName(elementos.e40)[20] !=
        undefined
    ) {
        clique(
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

function apostarR3() {
    if (
        document.getElementsByClassName(elementos.e40)[29] !=
        undefined
    ) {
        clique(
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

function apostarR4() {
    if (
        document.getElementsByClassName(elementos.e40)[38] !=
        undefined
    ) {
        clique(
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

function apostarR5() {
    if (
        document.getElementsByClassName(elementos.e40)[47] !=
        undefined
    ) {
        clique(
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

function apostarR6() {
    if (
        document.getElementsByClassName(elementos.e40)[56] !=
        undefined
    ) {
        clique(
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

function apostarR7() {
    if (
        document.getElementsByClassName(elementos.e40)[65] !=
        undefined
    ) {
        clique(
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

function apostarR8() {
    if (
        document.getElementsByClassName(elementos.e40)[74] !=
        undefined
    ) {
        clique(
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

function apostarR9() {
    if (
        document.getElementsByClassName(elementos.e40)[83] !=
        undefined
    ) {
        clique(
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

function apostarR10() {
    if (
        document.getElementsByClassName(elementos.e40)[92] !=
        undefined
    ) {
        clique(
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

function pintaHistorico(numero, range) {
    if (document.getElementsByClassName(elementos.e15).length > 12) {
        for (let i = 12; i < (range + 12); i++) {
            if (document.getElementsByClassName(elementos.e15)[i]) {
                if (numero == document.getElementsByClassName(elementos.e15)[i].outerText) {
                    if (document.getElementsByClassName(elementos.e15)[i - 1] != undefined) {
                        pintarNumeroCartela(document.getElementsByClassName(elementos.e15)[i - 1].outerText);
                    }
                }
            }
        }
    }
}

function pintarNumeroCartela(numero) {
    if (numero == '0') {
        pintar0();
    } else if (numero == '1') {
        pintar1();
    } else if (numero == '2') {
        pintar2();
    } else if (numero == '3') {
        pintar3();
    } else if (numero == '4') {
        pintar4();
    } else if (numero == '5') {
        pintar5();
    } else if (numero == '6') {
        pintar6();
    } else if (numero == '7') {
        pintar7();
    } else if (numero == '8') {
        pintar8();
    } else if (numero == '9') {
        pintar9();
    } else if (numero == '10') {
        pintar10();
    } else if (numero == '11') {
        pintar11();
    } else if (numero == '12') {
        pintar12();
    } else if (numero == '13') {
        pintar13();
    } else if (numero == '14') {
        pintar14();
    } else if (numero == '15') {
        pintar15();
    } else if (numero == '16') {
        pintar16();
    } else if (numero == '17') {
        pintar17();
    } else if (numero == '18') {
        pintar18();
    } else if (numero == '19') {
        pintar19();
    } else if (numero == '20') {
        pintar20();
    } else if (numero == '21') {
        pintar21();
    } else if (numero == '22') {
        pintar22();
    } else if (numero == '23') {
        pintar23();
    } else if (numero == '24') {
        pintar24();
    } else if (numero == '25') {
        pintar25();
    } else if (numero == '26') {
        pintar26();
    } else if (numero == '27') {
        pintar27();
    } else if (numero == '28') {
        pintar28();
    } else if (numero == '29') {
        pintar29();
    } else if (numero == '30') {
        pintar30();
    } else if (numero == '31') {
        pintar31();
    } else if (numero == '32') {
        pintar32();
    } else if (numero == '33') {
        pintar33();
    } else if (numero == '34') {
        pintar34();
    } else if (numero == '35') {
        pintar35();
    } else if (numero == '36') {
        pintar36();
    }

}

async function zerarPintura() {

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

function pintar0() {
    document.getElementsByClassName(elementos.e41)[30].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e45)[1].children[1].style.fill = 'cadetblue';
}

function pintar1() {
    document.getElementsByClassName(elementos.e41)[3].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[18].children[0].style.fill = 'cadetblue';
}

function pintar2() {
    document.getElementsByClassName(elementos.e41)[18].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[18].children[0].style.fill = 'cadetblue';
}

function pintar3() {
    document.getElementsByClassName(elementos.e41)[28].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[19].children[0].style.fill = 'cadetblue';
}

function pintar4() {
    document.getElementsByClassName(elementos.e41)[16].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[19].children[0].style.fill = 'cadetblue';

}

function pintar5() {
    document.getElementsByClassName(elementos.e41)[36].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[20].children[0].style.fill = 'cadetblue';

}

function pintar6() {
    document.getElementsByClassName(elementos.e41)[22].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[20].children[0].style.fill = 'cadetblue';

}

function pintar7() {
    document.getElementsByClassName(elementos.e41)[11].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[21].children[0].style.fill = 'cadetblue';

}

function pintar8() {
    document.getElementsByClassName(elementos.e41)[33].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[21].children[0].style.fill = 'cadetblue';

}

function pintar9() {
    document.getElementsByClassName(elementos.e41)[7].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[22].children[0].style.fill = 'cadetblue';

}

function pintar10() {
    document.getElementsByClassName(elementos.e41)[35].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[22].children[0].style.fill = 'cadetblue';

}

function pintar11() {
    document.getElementsByClassName(elementos.e41)[26].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[23].children[0].style.fill = 'cadetblue';

}

function pintar12() {
    document.getElementsByClassName(elementos.e41)[13].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[23].children[0].style.fill = 'cadetblue';

}

function pintar13() {
    document.getElementsByClassName(elementos.e41)[24].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[24].children[0].style.fill = 'cadetblue';

}

function pintar14() {
    document.getElementsByClassName(elementos.e41)[5].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[24].children[0].style.fill = 'cadetblue';

}

function pintar15() {
    document.getElementsByClassName(elementos.e41)[14].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[25].children[0].style.fill = 'cadetblue';

}

function pintar16() {
    document.getElementsByClassName(elementos.e41)[1].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[25].children[0].style.fill = 'cadetblue';

}

function pintar17() {
    document.getElementsByClassName(elementos.e41)[20].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[26].children[0].style.fill = 'cadetblue';

}

function pintar18() {
    document.getElementsByClassName(elementos.e41)[9].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[26].children[0].style.fill = 'cadetblue';

}

function pintar19() {
    document.getElementsByClassName(elementos.e41)[15].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[27].children[0].style.fill = 'cadetblue';

}

function pintar20() {
    document.getElementsByClassName(elementos.e41)[4].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[27].children[0].style.fill = 'cadetblue';

}

function pintar21() {
    document.getElementsByClassName(elementos.e41)[17].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[28].children[0].style.fill = 'cadetblue';
}

function pintar22() {
    document.getElementsByClassName(elementos.e41)[8].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[28].children[0].style.fill = 'cadetblue';

}

function pintar23() {
    document.getElementsByClassName(elementos.e41)[34].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[29].children[0].style.fill = 'cadetblue';

}

function pintar24() {
    document.getElementsByClassName(elementos.e41)[0].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[29].children[0].style.fill = 'cadetblue';

}

function pintar25() {
    document.getElementsByClassName(elementos.e41)[19].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[30].children[0].style.fill = 'cadetblue';

}

function pintar26() {
    document.getElementsByClassName(elementos.e41)[29].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[30].children[0].style.fill = 'cadetblue';

}

function pintar27() {
    document.getElementsByClassName(elementos.e41)[23].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[31].children[0].style.fill = 'cadetblue';

}

function pintar28() {
    document.getElementsByClassName(elementos.e41)[12].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[31].children[0].style.fill = 'cadetblue';

}

function pintar29() {
    document.getElementsByClassName(elementos.e41)[10].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[32].children[0].style.fill = 'cadetblue';

}

function pintar30() {
    document.getElementsByClassName(elementos.e41)[32].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[32].children[0].style.fill = 'cadetblue';

}

function pintar31() {
    document.getElementsByClassName(elementos.e41)[6].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[33].children[0].style.fill = 'cadetblue';

}

function pintar32() {
    document.getElementsByClassName(elementos.e41)[31].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[33].children[0].style.fill = 'cadetblue';

}

function pintar33() {
    document.getElementsByClassName(elementos.e41)[2].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[34].children[0].style.fill = 'cadetblue';

}

function pintar34() {
    document.getElementsByClassName(elementos.e41)[21].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[34].children[0].style.fill = 'cadetblue';

}

function pintar35() {
    document.getElementsByClassName(elementos.e41)[27].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e39)[35].children[0].style.fill = 'cadetblue';

}

function pintar36() {
    document.getElementsByClassName(elementos.e41)[25].style.fill = 'cadetblue';
    document.getElementsByClassName(elementos.e38)[35].children[0].style.fill = 'cadetblue';

}