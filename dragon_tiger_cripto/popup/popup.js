let config = {
    gale: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    ficha: 0,
    fichaEmpate: 0,
    empatePorcent: 0,
    tigrePorcentMaximo: 0,
    tigrePorcentMinimo: 0,
    dragaoPorcentMaximo: 0,
    dragaoPorcentMinimo: 0,
    tigrePorcentMaximoLimite: 0,
    tigrePorcentMinimoLimite: 0,
    dragaoPorcentMaximoLimite: 0,
    dragaoPorcentMinimoLimite: 0,
    stopGain: 1,
    stopLoss: 1,
    posGain: 1,
    posLoss: 1,
    terminal: [],
    statusBot: 0,
    token: '',
    chat: ''
};

var btnLink = document.getElementById("btnLink");
btnLink.addEventListener("click", carregarLink);

function carregarLink() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "openLink" }, (response) => {
            try {
                if (chrome.runtime.lastError) {
                    alert(
                        "Carregue primeiro uma roleta evolution , depois clique para abrir o link."
                    );
                }
            } catch (e) {
                alert(
                    "Carregue primeiro uma roleta evolution , depois clique para abrir o link."
                );
            }
        });
    });
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

let labelStatus = document.getElementById('labelStatus');
let txtStatus = document.getElementById('txtStatus');
let btnStatus = document.getElementById('btnStatus');

let labelCasas = document.getElementById('labelCasas');
let btnBetwinner = document.getElementById('btnBetwinner');
let btnStake = document.getElementById('btnStake');
let btnSegurobet = document.getElementById('btnSegurobet');
let btnBetano = document.getElementById('btnBetano');
let btnReals = document.getElementById('btnReals');

let labelConfig1 = document.getElementById('labelConfig1');
let labelConfig2 = document.getElementById('labelConfig2');
let labelConfig3 = document.getElementById('labelConfig3');
let labelConfig4 = document.getElementById('labelConfig4');
let labelConfig5 = document.getElementById('labelConfig5');
let labelConfig6 = document.getElementById('labelConfig6');
let labelConfig7 = document.getElementById('labelConfig7');
let gatilho = document.getElementById('gatilho');
let aposta = document.getElementById('aposta');
let userLiberacao = document.getElementById('userLiberacao');
let senhaLiberacao = document.getElementById('senhaLiberacao');
let tokenEdit = document.getElementById('token');
let chatEdit = document.getElementById('chat');

let inputIaMinimo = document.getElementById('inputIaMinimo');
let txtIaMinimo = document.getElementById('txtIaMinimo');

let inputHistorico = document.getElementById('inputHistorico');
let txtHistorico = document.getElementById('txtHistorico');

let inputIaMaximo = document.getElementById('inputIaMaximo');
let txtIaMaximo = document.getElementById('txtIaMaximo');

let inputEventoMinimo = document.getElementById('inputEventoMinimo');
let txtEventoMinimo = document.getElementById('txtEventoMinimo');

let inputEventoMaximo = document.getElementById('inputEventoMaximo');
let txtEventoMaximo = document.getElementById('txtEventoMaximo');

let inputFicha = document.getElementById('inputFicha');
let txtFicha = document.getElementById('txtFicha');

let inputFichaEmpate = document.getElementById('inputFichaEmpate');
let txtFichaEmpate = document.getElementById('txtFichaEmpate');

let inputFichaEmpatePorcent = document.getElementById('inputFichaEmpatePorcent');
let txtFichaEmpatePorcent = document.getElementById('txtFichaEmpatePorcent');

let inputFichaTigrePorcentMaximo = document.getElementById('inputFichaTigrePorcentMaximo');
let txtFichaTigrePorcentMaximo = document.getElementById('txtFichaTigrePorcentMaximo');

let inputFichaTigrePorcentMinimo = document.getElementById('inputFichaTigrePorcentMinimo');
let txtFichaTigrePorcentMinimo = document.getElementById('txtFichaTigrePorcentMinimo');

let inputFichaDragaoPorcentMaximo = document.getElementById('inputFichaDragaoPorcentMaximo');
let txtFichaDragaoPorcentMaximo = document.getElementById('txtFichaDragaoPorcentMaximo');

let inputFichaDragaoPorcentMinimo = document.getElementById('inputFichaDragaoPorcentMinimo');
let txtFichaDragaoPorcentMinimo = document.getElementById('txtFichaDragaoPorcentMinimo');

let inputFichaTigrePorcentMaximoLimite = document.getElementById('inputFichaTigrePorcentMaximoLimite');
let txtFichaTigrePorcentMaximoLimite = document.getElementById('txtFichaTigrePorcentMaximoLimite');

let inputFichaTigrePorcentMinimoLimite = document.getElementById('inputFichaTigrePorcentMinimoLimite');
let txtFichaTigrePorcentMinimoLimite = document.getElementById('txtFichaTigrePorcentMinimoLimite');

let inputFichaDragaoPorcentMaximoLimite = document.getElementById('inputFichaDragaoPorcentMaximoLimite');
let txtFichaDragaoPorcentMaximoLimite = document.getElementById('txtFichaDragaoPorcentMaximoLimite');

let inputFichaDragaoPorcentMinimoLimite = document.getElementById('inputFichaDragaoPorcentMinimoLimite');
let txtFichaDragaoPorcentMinimoLimite = document.getElementById('txtFichaDragaoPorcentMinimoLimite');

let inputGain = document.getElementById('inputGain');
let txtGain = document.getElementById('txtGain');

let inputLoss = document.getElementById('inputLoss');
let txtLoss = document.getElementById('txtLoss');

let inputPosGain = document.getElementById('inputPosGain');
let txtPosGain = document.getElementById('txtPosGain');

let inputPosLoss = document.getElementById('inputPosLoss');
let txtPosLoss = document.getElementById('txtPosLoss');

let inputGale = document.getElementById('inputGale');
let txtGale = document.getElementById('txtGale');

let btnSalvar = document.getElementById('btnSalvar');

btnStatus.addEventListener("click", () => {
    zerarStatus();
});

btnSalvar.addEventListener("click", () => {
    salvarLista();
});

inputIaMinimo.addEventListener("input", () => {
    txtIaMinimo.textContent = `IA Mínimo : ${inputIaMinimo.value}%`;
});

inputHistorico.addEventListener("input", () => {
    txtHistorico.textContent = `Analisar ${inputHistorico.value} rodadas`;
});

inputIaMaximo.addEventListener("input", () => {
    txtIaMaximo.textContent = `IA Máximo : ${inputIaMaximo.value}%`;
});

inputEventoMinimo.addEventListener("input", () => {
    txtEventoMinimo.textContent = `Evento Mínimo : ${inputEventoMinimo.value}`;
});

inputEventoMaximo.addEventListener("input", () => {
    txtEventoMaximo.textContent = `Evento Máximo : ${inputEventoMaximo.value}`;
});

inputFicha.addEventListener("input", () => {
    if (inputFicha.value == 0) {
        txtFicha.textContent = `Modo Simulação`;
    } else if (inputFicha.value == 1) {
        txtFicha.textContent = `Apostar com ficha R$ 2.50`;
    } else if (inputFicha.value == 2) {
        txtFicha.textContent = `Apostar com ficha R$ 5`;
    } else if (inputFicha.value == 3) {
        txtFicha.textContent = `Apostar com ficha R$ 10`;
    } else if (inputFicha.value == 4) {
        txtFicha.textContent = `Apostar com ficha R$ 25`;
    } else if (inputFicha.value == 5) {
        txtFicha.textContent = `Apostar com ficha R$ 125`;
    } else if (inputFicha.value == 6) {
        txtFicha.textContent = `Apostar com ficha R$ 500`;
    } else if (inputFicha.value == 7) {
        txtFicha.textContent = `Apostar com ficha R$ 2500`;
    }
});

inputFichaEmpate.addEventListener("input", () => {
    if (inputFichaEmpate.value == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (inputFichaEmpate.value == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2.50`;
    } else if (inputFichaEmpate.value == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (inputFichaEmpate.value == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (inputFichaEmpate.value == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (inputFichaEmpate.value == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (inputFichaEmpate.value == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (inputFichaEmpate.value == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2500`;
    }
});

inputFichaEmpatePorcent.addEventListener("input", () => {
    txtFichaEmpatePorcent.textContent = `Apostar Empate com ${inputFichaEmpatePorcent.value}% ou mais`;
});

inputFichaTigrePorcentMaximo.addEventListener("input", () => {
    txtFichaTigrePorcentMaximo.textContent = `Apostar Tigre Máximo ${inputFichaTigrePorcentMaximo.value}%`;
});

inputFichaTigrePorcentMinimo.addEventListener("input", () => {
    txtFichaTigrePorcentMinimo.textContent = `Apostar Tigre Mínimo ${inputFichaTigrePorcentMinimo.value}%`;
});

inputFichaDragaoPorcentMaximo.addEventListener("input", () => {
    txtFichaDragaoPorcentMaximo.textContent = `Apostar Dragão Máximo ${inputFichaDragaoPorcentMaximo.value}%`;
});

inputFichaDragaoPorcentMinimo.addEventListener("input", () => {
    txtFichaDragaoPorcentMinimo.textContent = `Apostar Dragão Mínimo ${inputFichaDragaoPorcentMinimo.value}%`;
});


inputFichaTigrePorcentMaximoLimite.addEventListener("input", () => {
    txtFichaTigrePorcentMaximoLimite.textContent = `Limite Tigre Máximo ${inputFichaTigrePorcentMaximoLimite.value}%`;
});

inputFichaTigrePorcentMinimoLimite.addEventListener("input", () => {
    txtFichaTigrePorcentMinimoLimite.textContent = `Limite Tigre Mínimo ${inputFichaTigrePorcentMinimoLimite.value}%`;
});

inputFichaDragaoPorcentMaximoLimite.addEventListener("input", () => {
    txtFichaDragaoPorcentMaximoLimite.textContent = `Limite Dragão Máximo ${inputFichaDragaoPorcentMaximoLimite.value}%`;
});

inputFichaDragaoPorcentMinimoLimite.addEventListener("input", () => {
    txtFichaDragaoPorcentMinimoLimite.textContent = `Limite Dragão Mínimo ${inputFichaDragaoPorcentMinimoLimite.value}%`;
});

inputGale.addEventListener("input", () => {
    txtGale.textContent = `${inputGale.value} gale`;
});

inputGain.addEventListener("input", () => {
    txtGain.textContent = `Stop Gain - ${inputGain.value}`;
});

inputLoss.addEventListener("input", () => {
    txtLoss.textContent = `Stop Loss - ${inputLoss.value}`;
});

inputPosGain.addEventListener("input", () => {
    txtPosGain.textContent = `Pos Gain - ${inputPosGain.value}`;
});

inputPosLoss.addEventListener("input", () => {
    txtPosLoss.textContent = `Pos Loss - ${inputPosLoss.value}`;
});

let emailEdit = document.getElementById('email');
let passwordEdit = document.getElementById('password');
let btnLiberar = document.getElementById('btnLiberar');

btnLiberar.addEventListener("click", () => {
    login();
});

let gatilhos = [];
let gatilhoInput = document.getElementById("gatilho");
let apostaInput = document.getElementById("aposta");
let listaGatilhosElement = document.getElementById("listaGatilhos");
let btnAdicionarGatilhos = document.getElementById("btnAdicionarGatilhos");
btnAdicionarGatilhos.addEventListener("click", adicionarGatilho);

function adicionarGatilho() {

    let novoGatilho = {
        gatilho: gatilhoInput.value.split(' '),
        aposta: apostaInput.value.split(' ')
    };

    if (novoGatilho.gatilho != undefined && novoGatilho.gatilho != '' && novoGatilho.gatilho.length > 0 && verificarGatilhosRepetidos(novoGatilho.gatilho)
        && validarGatilho(novoGatilho.gatilho) && validarAposta(novoGatilho.aposta) && novoGatilho.aposta.length == 1) {
        gatilhos.push(novoGatilho);

        gatilhoInput.value = "";
        apostaInput.value = "";

        atualizarListaGatilhos();
    } else {
        alert('Os campos de gatilho e aposta devem ser preenchidos de acordo com as regras do tutorial.');
    }

}

function removerGatilho(index) {
    gatilhos.splice(index, 1);
    atualizarListaGatilhos();
}

function atualizarListaGatilhos() {

    listaGatilhosElement.innerHTML = "";

    for (let i = 0; i < gatilhos.length; i++) {
        let gatilho = gatilhos[i];
        let listItem = document.createElement("li");
        listItem.textContent = "Gatilho: ( " + gatilho.gatilho.join(', ') + " )   Aposta: ( " + gatilho.aposta.join(', ') + " )";

        let deleteButton = document.createElement("button-ul");
        deleteButton.textContent = "Deletar";
        deleteButton.addEventListener("click", (function (index) {
            return function () {
                removerGatilho(index);
            }
        })(i));

        listItem.appendChild(deleteButton);
        listaGatilhosElement.appendChild(listItem);

        config.terminal = gatilhos;
    }
}

function verificarGatilhosRepetidos(objeto) {
    for (let i = 0; i < config.terminal.length; i++) {
        if (config.terminal[i].gatilho.join('') === objeto.join('')) {
            return false;
        }
    }
    return true;
}

function validarAposta(aposta) {
    let retorno = true;

    for (let i = 0; i < aposta.length; i++) {
        const numero = aposta[i];

        if (numero === undefined) {
            retorno = false;
            break;
        }

        if (numero != 'D' && numero != 'T') {
            retorno = false;
            break;
        }
    }

    return retorno;
}

function validarGatilho(numero) {

    let gatilhosValidos = ['D', 'T', 'E', 'D2', 'T2', 'E2', 'D3', 'T3', 'E3',
        'D4', 'T4', 'E4', 'D5', 'T5', 'E5', 'D6', 'T6', 'E6', 'D7', 'T7', 'E7',
        'D8', 'T8', 'E8', 'D9', 'T9', 'E9', 'D10', 'T10', 'E10', 'DA', 'TA', 'EA',
        'DJ', 'TJ', 'EJ', 'DQ', 'TQ', 'EQ', 'DK', 'TK', 'EK', 'N', 'DE', 'TE'];

    let retorno = true;

    for (let i = 0; i < aposta.length; i++) {
        const numero = aposta[i];

        if (numero === undefined) {
            retorno = false;
            break;
        }

        if (!gatilhosValidos.includes(numero)) {
            retorno = false;
            break;
        }
    }

    return retorno;

}

async function salvarLista() {
    config.iaMinimo = inputIaMinimo.value;
    config.historico = inputHistorico.value;
    config.iaMaximo = inputIaMaximo.value;
    config.eventoMinimo = inputEventoMinimo.value;
    config.eventoMaximo = inputEventoMaximo.value;
    config.ficha = inputFicha.value;
    config.fichaEmpate = inputFichaEmpate.value;
    config.empatePorcent = inputFichaEmpatePorcent.value;
    config.tigrePorcentMaximo = inputFichaTigrePorcentMaximo.value;
    config.tigrePorcentMinimo = inputFichaTigrePorcentMinimo.value;
    config.dragaoPorcentMaximo = inputFichaDragaoPorcentMaximo.value;
    config.dragaoPorcentMinimo = inputFichaDragaoPorcentMinimo.value;
    config.tigrePorcentMaximoLimite = inputFichaTigrePorcentMaximoLimite.value;
    config.tigrePorcentMinimoLimite = inputFichaTigrePorcentMinimoLimite.value;
    config.dragaoPorcentMaximoLimite = inputFichaDragaoPorcentMaximoLimite.value;
    config.dragaoPorcentMinimoLimite = inputFichaDragaoPorcentMinimoLimite.value;
    config.stopGain = inputGain.value;
    config.stopLoss = inputLoss.value;
    config.posGain = inputPosGain.value;
    config.posLoss = inputPosLoss.value;
    config.token = tokenEdit.value;
    config.chat = chatEdit.value;
    config.gale = inputGale.value;

    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao == undefined) {
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        zerarUsuario();
        ocultarConfig();
    } else {
        let checkData = await oetwudgs(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {
            if (checkData.usuario.bot_dragon_tiger == 1) {

                let updateData = await iuhytcs(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_dragon_tiger');
                if (updateData.message) {
                    alert(updateData.message);
                    updateConfigOnGame(dataHora());
                } else {
                    alert('Erro ao atualizar as configurações');
                }
            } else {
                zerarUsuario();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                ocultarConfig();
            }
        } else if (checkData.error) {
            zerarUsuario();
            userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
            senhaLiberacao.textContent = '';
            ocultarConfig();
        }
    }
}

function ocultarLogin() {
    btnLiberar.style.display = 'none';
    emailEdit.style.display = 'none';
    passwordEdit.style.display = 'none';
    btnLink.style.display = "block";
    labelStatus.style.display = 'block';
    txtStatus.style.display = 'block';
    btnStatus.style.display = 'block';
    labelCasas.style.display = 'block';
    btnBetwinner.style.display = 'block';
    btnStake.style.display = 'block';
    btnSegurobet.style.display = 'block';
    btnBetano.style.display = 'block';
    btnReals.style.display = 'block';
    labelConfig1.style.display = 'block';
    labelConfig2.style.display = 'block';
    labelConfig3.style.display = 'block';
    labelConfig4.style.display = 'block';
    labelConfig5.style.display = 'block';
    labelConfig6.style.display = 'block';
    labelConfig7.style.display = 'block';
    gatilhoInput.style.display = 'block';
    apostaInput.style.display = 'block';
    listaGatilhosElement.style.display = 'block';
    btnAdicionarGatilhos.style.display = 'block';
    inputIaMinimo.style.display = 'block';
    txtIaMinimo.style.display = 'block';
    inputHistorico.style.display = 'block';
    txtHistorico.style.display = 'block';
    inputIaMaximo.style.display = 'block';
    txtIaMaximo.style.display = 'block';
    inputEventoMinimo.style.display = 'block';
    txtEventoMinimo.style.display = 'block';
    inputEventoMaximo.style.display = 'block';
    txtEventoMaximo.style.display = 'block';
    inputFicha.style.display = 'block';
    txtFicha.style.display = 'block';
    inputFichaEmpate.style.display = 'block';
    txtFichaEmpate.style.display = 'block';
    inputFichaEmpatePorcent.style.display = 'block';
    txtFichaEmpatePorcent.style.display = 'block';
    inputFichaTigrePorcentMaximo.style.display = 'block';
    txtFichaTigrePorcentMaximo.style.display = 'block';
    inputFichaDragaoPorcentMaximo.style.display = 'block';
    txtFichaDragaoPorcentMaximo.style.display = 'block';
    inputFichaTigrePorcentMinimo.style.display = 'block';
    txtFichaTigrePorcentMinimo.style.display = 'block';
    inputFichaDragaoPorcentMinimo.style.display = 'block';
    txtFichaDragaoPorcentMinimo.style.display = 'block';
    inputFichaTigrePorcentMaximoLimite.style.display = 'block';
    txtFichaTigrePorcentMaximoLimite.style.display = 'block';
    inputFichaDragaoPorcentMaximoLimite.style.display = 'block';
    txtFichaDragaoPorcentMaximoLimite.style.display = 'block';
    inputFichaTigrePorcentMinimoLimite.style.display = 'block';
    txtFichaTigrePorcentMinimoLimite.style.display = 'block';
    inputFichaDragaoPorcentMinimoLimite.style.display = 'block';
    txtFichaDragaoPorcentMinimoLimite.style.display = 'block';
    inputGain.style.display = 'block';
    txtGain.style.display = 'block';
    inputLoss.style.display = 'block';
    txtLoss.style.display = 'block';
    inputPosGain.style.display = 'block';
    txtPosGain.style.display = 'block';
    inputPosLoss.style.display = 'block';
    txtPosLoss.style.display = 'block';
    inputGale.style.display = 'block';
    txtGale.style.display = 'block';
    btnSalvar.style.display = 'block';
    gatilho.style.display = 'block';
    aposta.style.display = 'block';
    chatEdit.style.display = 'block';
    tokenEdit.style.display = 'block';
}

function ocultarConfig() {
    btnLiberar.style.display = 'block';
    emailEdit.style.display = 'block';
    passwordEdit.style.display = 'block';
    btnLink.style.display = "none";
    gatilhoInput.style.display = 'none';
    apostaInput.style.display = 'none';
    listaGatilhosElement.style.display = 'none';
    btnAdicionarGatilhos.style.display = 'none';
    labelStatus.style.display = 'none';
    txtStatus.style.display = 'none';
    btnStatus.style.display = 'none';
    labelCasas.style.display = 'none';
    btnBetwinner.style.display = 'none';
    btnStake.style.display = 'none';
    btnSegurobet.style.display = 'none';
    btnBetano.style.display = 'none';
    btnReals.style.display = 'none';
    labelConfig1.style.display = 'none';
    labelConfig2.style.display = 'none';
    labelConfig3.style.display = 'none';
    labelConfig4.style.display = 'none';
    labelConfig5.style.display = 'none';
    labelConfig6.style.display = 'none';
    labelConfig7.style.display = 'none';
    inputIaMinimo.style.display = 'none';
    txtIaMinimo.style.display = 'none';
    inputHistorico.style.display = 'none';
    txtHistorico.style.display = 'none';
    inputIaMaximo.style.display = 'none';
    txtIaMaximo.style.display = 'none';
    inputEventoMinimo.style.display = 'none';
    txtEventoMinimo.style.display = 'none';
    inputEventoMaximo.style.display = 'none';
    txtEventoMaximo.style.display = 'none';
    inputFicha.style.display = 'none';
    txtFicha.style.display = 'none';
    inputFichaEmpate.style.display = 'none';
    txtFichaEmpate.style.display = 'none';
    inputFichaEmpatePorcent.style.display = 'none';
    txtFichaEmpatePorcent.style.display = 'none';
    inputFichaTigrePorcentMaximo.style.display = 'none';
    txtFichaTigrePorcentMaximo.style.display = 'none';
    inputFichaDragaoPorcentMaximo.style.display = 'none';
    txtFichaDragaoPorcentMaximo.style.display = 'none';
    inputFichaTigrePorcentMinimo.style.display = 'none';
    txtFichaTigrePorcentMinimo.style.display = 'none';
    inputFichaDragaoPorcentMinimo.style.display = 'none';
    txtFichaDragaoPorcentMinimo.style.display = 'none';
    inputFichaTigrePorcentMaximoLimite.style.display = 'none';
    txtFichaTigrePorcentMaximoLimite.style.display = 'none';
    inputFichaDragaoPorcentMaximoLimite.style.display = 'none';
    txtFichaDragaoPorcentMaximoLimite.style.display = 'none';
    inputFichaTigrePorcentMinimoLimite.style.display = 'none';
    txtFichaTigrePorcentMinimoLimite.style.display = 'none';
    inputFichaDragaoPorcentMinimoLimite.style.display = 'none';
    txtFichaDragaoPorcentMinimoLimite.style.display = 'none';
    inputGain.style.display = 'none';
    txtGain.style.display = 'none';
    inputLoss.style.display = 'none';
    txtLoss.style.display = 'none';
    inputPosGain.style.display = 'none';
    txtPosGain.style.display = 'none';
    inputPosLoss.style.display = 'none';
    txtPosLoss.style.display = 'none';
    inputGale.style.display = 'none';
    txtGale.style.display = 'none';
    btnSalvar.style.display = 'none';
    gatilho.style.display = 'none';
    aposta.style.display = 'none';
    chatEdit.style.display = 'none';
    tokenEdit.style.display = 'none';
}

function atualizaConfig(config) {

    if (config.ficha == 0) {
        txtFicha.textContent = `Modo Simulação`;
    } else if (config.ficha == 1) {
        txtFicha.textContent = `Apostar com ficha R$ 2.50`;
    } else if (config.ficha == 2) {
        txtFicha.textContent = `Apostar com ficha R$ 5`;
    } else if (config.ficha == 3) {
        txtFicha.textContent = `Apostar com ficha R$ 10`;
    } else if (config.ficha == 4) {
        txtFicha.textContent = `Apostar com ficha R$ 25`;
    } else if (config.ficha == 5) {
        txtFicha.textContent = `Apostar com ficha R$ 125`;
    } else if (config.ficha == 6) {
        txtFicha.textContent = `Apostar com ficha R$ 500`;
    } else if (config.ficha == 7) {
        txtFicha.textContent = `Apostar com ficha R$ 2500`;
    }

    if (config.fichaEmpate == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (config.fichaEmpate == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2.50`;
    } else if (config.fichaEmpate == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (config.fichaEmpate == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (config.fichaEmpate == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (config.fichaEmpate == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (config.fichaEmpate == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (config.fichaEmpate == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2500`;
    }

    txtFichaEmpatePorcent.textContent = `Apostar Empate com ${config.empatePorcent}% ou mais`;
    txtFichaTigrePorcentMaximo.textContent = `Apostar Tigre Máximo ${config.tigrePorcentMaximo}%`;
    txtFichaDragaoPorcentMaximo.textContent = `Apostar Dragão Máximo ${config.dragaoPorcentMaximo}%`;
    txtFichaTigrePorcentMinimo.textContent = `Apostar Tigre Mínimo ${config.tigrePorcentMinimo}%`;
    txtFichaDragaoPorcentMinimo.textContent = `Apostar Dragão Mínimo ${config.dragaoPorcentMinimo}%`;

    txtFichaTigrePorcentMaximoLimite.textContent = `Limite Tigre Máximo ${config.tigrePorcentMaximoLimite}%`;
    txtFichaDragaoPorcentMaximoLimite.textContent = `Limite Dragão Máximo ${config.dragaoPorcentMaximoLimite}%`;
    txtFichaTigrePorcentMinimoLimite.textContent = `Limite Tigre Mínimo ${config.tigrePorcentMinimoLimite}%`;
    txtFichaDragaoPorcentMinimoLimite.textContent = `Limite Dragão Mínimo ${config.dragaoPorcentMinimoLimite}%`;

    txtHistorico.textContent = `Analisar ${config.historico} rodadas`;
    txtIaMinimo.textContent = `IA Mínimo : ${config.iaMinimo}%`;
    txtIaMaximo.textContent = `IA Máximo : ${config.iaMaximo}%`;
    txtEventoMinimo.textContent = `Evento Mínimo : ${config.eventoMinimo}`;
    txtEventoMaximo.textContent = `EventoMáximo : ${config.eventoMaximo}`;
    txtGain.textContent = `Stop Gain - ${config.stopGain}`;
    txtLoss.textContent = `Stop Loss - ${config.stopLoss}`;
    txtPosGain.textContent = `Pos Gain - ${config.posGain}`;
    txtPosLoss.textContent = `Pos Loss - ${config.posLoss}`;
    txtGale.textContent = `${config.gale} gale`;

    inputIaMaximo.value = config.iaMaximo;
    inputHistorico.value = config.historico;
    inputIaMinimo.value = config.iaMinimo;
    inputEventoMaximo.value = config.eventoMaximo;
    inputEventoMinimo.value = config.eventoMinimo;
    inputFicha.value = config.ficha;
    inputFichaEmpate.value = config.fichaEmpate;
    inputFichaEmpatePorcent.value = config.empatePorcent;
    inputFichaTigrePorcentMaximo.value = config.tigrePorcentMaximo;
    inputFichaDragaoPorcentMaximo.value = config.dragaoPorcentMaximo;
    inputFichaTigrePorcentMinimo.value = config.tigrePorcentMinimo;
    inputFichaDragaoPorcentMinimo.value = config.dragaoPorcentMinimo;

    inputFichaTigrePorcentMaximoLimite.value = config.tigrePorcentMaximoLimite;
    inputFichaDragaoPorcentMaximoLimite.value = config.dragaoPorcentMaximoLimite;
    inputFichaTigrePorcentMinimoLimite.value = config.tigrePorcentMinimoLimite;
    inputFichaDragaoPorcentMinimoLimite.value = config.dragaoPorcentMinimoLimite;

    inputGain.value = config.stopGain;
    inputLoss.value = config.stopLoss;
    inputPosGain.value = config.posGain;
    inputPosLoss.value = config.posLoss;
    inputGale.value = config.gale;
    tokenEdit.value = config.token;
    chatEdit.value = config.chat;
    config = config;
    gatilhos = config.terminal;

    atualizarListaGatilhos();
    ocultarLogin();
    carregarStatus();

}

async function login() {
    if (emailEdit.value != undefined && emailEdit.value != '' &&
        passwordEdit.value != undefined && passwordEdit.value != '') {
        try {
            const data = await kjshdbcy(emailEdit.value, passwordEdit.value);
            if (data.usuario) {
                if (data.usuario.bot_dragon_tiger == 1) {
                    salvarNovaSenha(data.usuario.email, data.usuario.senha);
                    newConfig(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_dragon_tiger');
                    alert('BOT Liberado');
                } else {
                    alert('Usuário sem permisão');
                }
            } else if (data.error) {
                alert('Usuário sem permisão');
            }
        } catch (error) {
            alert('Usuário sem permisão');
        }
    } else {
        alert('todos os campos devem ser preenchidos corretamente');
    }
}

function salvarNovaSenha(email, senha) {
    let liberacao = { usuario: email, senha: senha };
    chrome.storage.local.set({ liberacao });
}

function updateConfigOnGame(data) {
    chrome.storage.local.set({ data });
}

function newConfig(email, senha, id, bot) {

    let dataConfig = pzvstdue(email, senha, id, bot);

    if (dataConfig.token) {
        atualizaConfig(dataConfig);
    } else {
        njdiuet(email, senha, id, bot);
        atualizaConfig(config);
    }

}

async function load() {
    try {
        let retornoChrome = await getChromeStorage("liberacao");

        if (retornoChrome.liberacao == undefined) {
            userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
            senhaLiberacao.textContent = '';
            ocultarConfig();
        } else {
            let data = await oetwudgs(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);

            if (data.usuario) {
                if (data.usuario.bot_dragon_tiger == 1) {
                    userLiberacao.textContent = `Usuario : ${data.usuario.email}`;
                    senhaLiberacao.textContent = `Senha : ${data.usuario.senha}`;

                    let dataConfig = await pzvstdue(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_dragon_tiger');

                    atualizaConfig(dataConfig);
                } else {
                    zerarUsuario();
                    userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                    senhaLiberacao.textContent = '';
                    ocultarConfig();
                }
            } else if (data.error) {
                zerarUsuario();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                ocultarConfig();
                alert('Erro ao tentar carregar configuracao');
            } else {
                zerarUsuario();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                ocultarConfig();
                alert('Erro ao tentar carregar configuracao');
            }
        }
    } catch (error) {
        zerarUsuario();
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        ocultarConfig();
        alert('Erro ao tentar carregar configuracao');
    }
}

function zerarUsuario() {
    chrome.storage.local.remove('liberacao');
}

function zerarStatus() {
    let status = { win: 0, loss: 0, posloss: 0, posgain: 0 };
    chrome.storage.local.set({ status });
}

async function carregarStatus() {
    let res = await getChromeStorage("status");
    if (res.status == undefined) {
        zerarStatus();
    } else {
        txtStatus.textContent = `win : ${res.status.win} / loss : ${res.status.loss}`;
    }
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

async function kjshdbcy(email, senha) {
    const response = await enviarMensagem('kjshdbcy', { email, senha });
    return response;
}

async function oetwudgs(email, senha) {
    const response = await enviarMensagem('oetwudgs', { email, senha });
    return response;
}

async function pzvstdue(email, senha, id, bot) {
    const response = await enviarMensagem('pzvstdue', { email, senha, id, bot });
    return response;
}

async function njdiuet(email, senha, id, bot) {
    const response = await enviarMensagem('njdiuet', { email, senha, id, bot, config });
    return response;
}

async function iuhytcs(email, senha, id, bot) {
    const response = await enviarMensagem('iuhytcs', { email, senha, id, bot, config });
    return response;
}

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

load();


