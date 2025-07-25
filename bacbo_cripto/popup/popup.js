let config = {
    galeAlternado: 0,
    galeAlternadoContagem: 0,
    galeVirtual: 0,
    surf: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
    fichaEmpate: 0,
    empatePorcent: 0,
    azulPorcentMaximo: 0,
    azulPorcentMinimo: 0,
    vermelhoPorcentMaximo: 0,
    vermelhoPorcentMinimo: 0,
    azulPorcentMaximoLimite: 0,
    azulPorcentMinimoLimite: 0,
    vermelhoPorcentMaximoLimite: 0,
    vermelhoPorcentMinimoLimite: 0,
    stopGain: 1,
    stopLoss: 1,
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
let btnPlacerpBet = document.getElementById('btnPlacerpBet');
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
inputFicha.value = 0;
txtFicha.textContent = `Modo Simulação`;

let inputFichaEmpate = document.getElementById('inputFichaEmpate');
let txtFichaEmpate = document.getElementById('txtFichaEmpate');

let inputFichaEmpatePorcent = document.getElementById('inputFichaEmpatePorcent');
let txtFichaEmpatePorcent = document.getElementById('txtFichaEmpatePorcent');

let inputFichaAzulPorcentMaximo = document.getElementById('inputFichaAzulPorcentMaximo');
let txtFichaAzulPorcentMaximo = document.getElementById('txtFichaAzulPorcentMaximo');

let inputFichaAzulPorcentMinimo = document.getElementById('inputFichaAzulPorcentMinimo');
let txtFichaAzulPorcentMinimo = document.getElementById('txtFichaAzulPorcentMinimo');

let inputFichaVermelhoPorcentMaximo = document.getElementById('inputFichaVermelhoPorcentMaximo');
let txtFichaVermelhoPorcentMaximo = document.getElementById('txtFichaVermelhoPorcentMaximo');

let inputFichaVermelhoPorcentMinimo = document.getElementById('inputFichaVermelhoPorcentMinimo');
let txtFichaVermelhoPorcentMinimo = document.getElementById('txtFichaVermelhoPorcentMinimo');

let inputFichaAzulPorcentMaximoLimite = document.getElementById('inputFichaAzulPorcentMaximoLimite');
let txtFichaAzulPorcentMaximoLimite = document.getElementById('txtFichaAzulPorcentMaximoLimite');

let inputFichaAzulPorcentMinimoLimite = document.getElementById('inputFichaAzulPorcentMinimoLimite');
let txtFichaAzulPorcentMinimoLimite = document.getElementById('txtFichaAzulPorcentMinimoLimite');

let inputFichaVermelhoPorcentMaximoLimite = document.getElementById('inputFichaVermelhoPorcentMaximoLimite');
let txtFichaVermelhoPorcentMaximoLimite = document.getElementById('txtFichaVermelhoPorcentMaximoLimite');

let inputFichaVermelhoPorcentMinimoLimite = document.getElementById('inputFichaVermelhoPorcentMinimoLimite');
let txtFichaVermelhoPorcentMinimoLimite = document.getElementById('txtFichaVermelhoPorcentMinimoLimite');

let inputSurf = document.getElementById('inputSurf');
let txtSurf = document.getElementById('txtSurf');

let inputGain = document.getElementById('inputGain');
let txtGain = document.getElementById('txtGain');

let inputLoss = document.getElementById('inputLoss');
let txtLoss = document.getElementById('txtLoss');

let inputGaleVirtual = document.getElementById("inputGaleVirtual");
let txtGaleVirtual = document.getElementById("txtGaleVirtual");

let inputGaleAlternado = document.getElementById('inputGaleAlternado');
let txtGaleAlternado = document.getElementById('txtGaleAlternado');

let inputGaleAlternadoContagem = document.getElementById('inputGaleAlternadoContagem');
let txtGaleAlternadoContagem = document.getElementById('txtGaleAlternadoContagem');

let btnSalvar = document.getElementById('btnSalvar');

btnStatus.addEventListener("click", () => {
    zerarStatus();
    alert('Status zerado com sucesso!');
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

inputGain.addEventListener("input", () => {
    txtGain.textContent = `Stop Gain - R$ ${inputGain.value}.00`;
});

inputLoss.addEventListener("input", () => {
    txtLoss.textContent = `Stop Loss - R$ ${inputLoss.value}.00`;
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

inputFichaAzulPorcentMaximo.addEventListener("input", () => {
    txtFichaAzulPorcentMaximo.textContent = `Apostar Azul Máximo ${inputFichaAzulPorcentMaximo.value}%`;
});

inputFichaAzulPorcentMinimo.addEventListener("input", () => {
    txtFichaAzulPorcentMinimo.textContent = `Apostar Azul Mínimo ${inputFichaAzulPorcentMinimo.value}%`;
});

inputFichaVermelhoPorcentMaximo.addEventListener("input", () => {
    txtFichaVermelhoPorcentMaximo.textContent = `Apostar Vermelho Máximo ${inputFichaVermelhoPorcentMaximo.value}%`;
});

inputFichaVermelhoPorcentMinimo.addEventListener("input", () => {
    txtFichaVermelhoPorcentMinimo.textContent = `Apostar Vermelho Mínimo ${inputFichaVermelhoPorcentMinimo.value}%`;
});


inputFichaAzulPorcentMaximoLimite.addEventListener("input", () => {
    txtFichaAzulPorcentMaximoLimite.textContent = `Limite Azul Máximo ${inputFichaAzulPorcentMaximoLimite.value}%`;
});

inputFichaAzulPorcentMinimoLimite.addEventListener("input", () => {
    txtFichaAzulPorcentMinimoLimite.textContent = `Limite Azul Mínimo ${inputFichaAzulPorcentMinimoLimite.value}%`;
});

inputFichaVermelhoPorcentMaximoLimite.addEventListener("input", () => {
    txtFichaVermelhoPorcentMaximoLimite.textContent = `Limite Vermelho Máximo ${inputFichaVermelhoPorcentMaximoLimite.value}%`;
});

inputFichaVermelhoPorcentMinimoLimite.addEventListener("input", () => {
    txtFichaVermelhoPorcentMinimoLimite.textContent = `Limite Vermelho Mínimo ${inputFichaVermelhoPorcentMinimoLimite.value}%`;
});

inputGaleVirtual.addEventListener("input", () => {
    if (inputGaleVirtual.value == 0) {
        txtGaleVirtual.textContent = `Gale virtual desativado`;
    } else if (inputGaleVirtual.value == 1) {
        txtGaleVirtual.textContent = `Aposta virtual`;
    } else {
        txtGaleVirtual.textContent = `Gale Virtual - ${inputGaleVirtual.value - 1}`;
    }
});

inputGaleAlternado.addEventListener("input", () => {
    if (inputGaleAlternado.value == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (inputGaleAlternado.value == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 5`;
    } else if (inputGaleAlternado.value == 2) {
        txtGaleAlternado.textContent = `Gale com alternância inteligente`;
    }
});

inputGaleAlternadoContagem.addEventListener("input", () => {
    if (inputGaleAlternadoContagem.value == 0) {
        txtGaleAlternadoContagem.textContent = `Contagem de green desativado`;
    } else if (inputGaleAlternadoContagem.value == 1) {
        txtGaleAlternadoContagem.textContent = `Alternar estrategia de alternancia depois de ${inputGaleAlternadoContagem.value} green`;
    } else if (inputGaleAlternadoContagem.value > 1) {
        txtGaleAlternadoContagem.textContent = `Alternar estrategia de alternancia depois de ${inputGaleAlternadoContagem.value} greens`;
    }
});

inputSurf.addEventListener("input", () => {
    if (inputSurf.value == 0) {
        txtSurf.textContent = `Modo Surf desativado`;
    } else if (inputSurf.value == 1) {
        txtSurf.textContent = `Modo Surf ativado`;
    }
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
let galeInput = document.getElementById('gale');
let cicloInput = document.getElementById('ciclo');
let galesPorCicloContainer = document.getElementById('galesPorCicloContainer');

let galesPorCiclo = [];

cicloInput.addEventListener('input', function () {
    let qtdCiclos = parseInt(cicloInput.value) || 0;
    atualizarCamposGalePorCiclo(qtdCiclos);
});

function atualizarCamposGalePorCiclo(qtdCiclos) {
    galesPorCicloContainer.innerHTML = '';
    galesPorCiclo = [];

    for (let i = 0; i < qtdCiclos; i++) {
        let label = document.createElement('label');
        label.textContent = `Gales ciclo ${i + 1}:`;
        label.htmlFor = `galeCiclo${i + 1}`;

        let input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 10;
        input.value = 0;
        input.id = `galeCiclo${i + 1}`;

        input.addEventListener('input', function () {
            galesPorCiclo[i] = parseInt(input.value) || 0;
        });

        galesPorCiclo[i] = 0;

        galesPorCicloContainer.appendChild(label);
        galesPorCicloContainer.appendChild(document.createElement('br'));
        galesPorCicloContainer.appendChild(input);
        galesPorCicloContainer.appendChild(document.createElement('br'));
    }
}
let posLossInput = document.getElementById('posLoss');
let posGainInput = document.getElementById('posGain');
let listaGatilhosElement = document.getElementById("listaGatilhos");
let btnAdicionarGatilhos = document.getElementById("btnAdicionarGatilhos");
btnAdicionarGatilhos.addEventListener("click", adicionarGatilho);

function getNumericValue(inputValue) {
    const trimmedValue = inputValue.trim();
    const numericValue = parseInt(trimmedValue, 10);
    return isNaN(numericValue) ? 0 : numericValue;
}

function adicionarGatilho() {

    let novoGatilho = {
        gatilho: gatilhoInput.value.split(' '),
        aposta: apostaInput.value.split(' '),
        gale: galeInput.value ? getNumericValue(galeInput.value) : 0,
        ciclo: cicloInput.value ? getNumericValue(cicloInput.value) : 0,
        posLoss: posLossInput.value ? getNumericValue(posLossInput.value) : 0,
        posGain: posGainInput.value ? getNumericValue(posGainInput.value) : 0,
        ficha: inputFicha.value ? getNumericValue(inputFicha.value) : 0,
        galesPorCiclo: [...galesPorCiclo]
    };

    if (novoGatilho.gatilho != undefined && novoGatilho.gatilho != '' && novoGatilho.gatilho.length > 0 && verificarGatilhosRepetidos(novoGatilho.gatilho)
        && validarGatilho(novoGatilho.gatilho) && validarAposta(novoGatilho.aposta) && novoGatilho.aposta.length == 1) {
        gatilhos.push(novoGatilho);

        gatilhoInput.value = "";
        apostaInput.value = "";
        galeInput.value = "";
        cicloInput.value = "";
        posLossInput.value = "";
        posGainInput.value = "";
        galesPorCiclo = [];
        galesPorCicloContainer.innerHTML = '';

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
        let galesPorCicloTexto = gatilho.galesPorCiclo && gatilho.galesPorCiclo.length > 0
            ? " Gales ciclo: ( " + gatilho.galesPorCiclo.join(', ') + " )"
            : "";

        listItem.textContent = "Gatilho: ( " + gatilho.gatilho.join(', ') +
            " )   Aposta: ( " + gatilho.aposta.join(', ') + " )" +
            "   Gale: ( " + gatilho.gale + " )" +
            "   Ciclo: ( " + gatilho.ciclo + " )" +
            galesPorCicloTexto +
            "   Pos Loss: ( " + gatilho.posLoss + " )" +
            "   Pos Gain: ( " + gatilho.posGain + " )" +
            " # Ficha: " + valorFicha(gatilho.ficha);

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

function valorFicha(index) {

    if (index == 1) {
        return `R$ 2.50`;
    } else if (index == 2) {
        return `R$ 5`;
    } else if (index == 3) {
        return `R$ 10`;
    } else if (index == 4) {
        return `R$ 25`;
    } else if (index == 5) {
        return `R$ 125`;
    } else if (index == 6) {
        return `R$ 500`;
    } else if (index == 7) {
        return `R$ 2500`;
    } else {
        return `Simulação`;
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

        if (numero != 'A' && numero != 'V') {
            retorno = false;
            break;
        }
    }

    return retorno;
}

function validarGatilho(numero) {

    let gatilhosValidos = ['A', 'V', 'E', 'A2', 'V2', 'E2', 'A3', 'V3', 'E3',
        'A4', 'V4', 'E4', 'A5', 'V5', 'E5', 'A6', 'V6', 'E6', 'A7', 'V7', 'E7',
        'A8', 'V8', 'E8', 'A9', 'V9', 'E9', 'A10', 'V10', 'E10', 'A11', 'V11', 'E11',
        'A12', 'V12', 'E12', 'N', 'AE', 'VE'];

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
    config.fichaEmpate = inputFichaEmpate.value;
    config.empatePorcent = inputFichaEmpatePorcent.value;
    config.azulPorcentMaximo = inputFichaAzulPorcentMaximo.value;
    config.azulPorcentMinimo = inputFichaAzulPorcentMinimo.value;
    config.vermelhoPorcentMaximo = inputFichaVermelhoPorcentMaximo.value;
    config.vermelhoPorcentMinimo = inputFichaVermelhoPorcentMinimo.value;
    config.azulPorcentMaximoLimite = inputFichaAzulPorcentMaximoLimite.value;
    config.azulPorcentMinimoLimite = inputFichaAzulPorcentMinimoLimite.value;
    config.vermelhoPorcentMaximoLimite = inputFichaVermelhoPorcentMaximoLimite.value;
    config.vermelhoPorcentMinimoLimite = inputFichaVermelhoPorcentMinimoLimite.value;
    config.surf = inputSurf.value;
    config.stopGain = inputGain.value;
    config.stopLoss = inputLoss.value;
    config.galeVirtual = inputGaleVirtual.value;
    config.token = tokenEdit.value;
    config.chat = chatEdit.value;
    config.galeAlternado = inputGaleAlternado.value;
    config.galeAlternadoContagem = inputGaleAlternadoContagem.value;

    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao == undefined) {
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        zerarUsuario();
        ocultarConfig();
    } else {
        let checkData = await nkosud(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {

            let exclusivo = await lgiruets(checkData.usuario.id);

            if (exclusivo.nome_bot == 'bot_teste_editado') {

                let updateData = await sjdhwue(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
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
    btnPlacerpBet.style.display = 'block';
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
    galeInput.style.display = 'block';
    cicloInput.style.display = 'block';
    posLossInput.style.display = 'block';
    posGainInput.style.display = 'block';
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
    inputFichaAzulPorcentMaximo.style.display = 'block';
    txtFichaAzulPorcentMaximo.style.display = 'block';
    inputFichaVermelhoPorcentMaximo.style.display = 'block';
    txtFichaVermelhoPorcentMaximo.style.display = 'block';
    inputFichaAzulPorcentMinimo.style.display = 'block';
    txtFichaAzulPorcentMinimo.style.display = 'block';
    inputFichaVermelhoPorcentMinimo.style.display = 'block';
    txtFichaVermelhoPorcentMinimo.style.display = 'block';
    inputFichaAzulPorcentMaximoLimite.style.display = 'block';
    txtFichaAzulPorcentMaximoLimite.style.display = 'block';
    inputFichaVermelhoPorcentMaximoLimite.style.display = 'block';
    txtFichaVermelhoPorcentMaximoLimite.style.display = 'block';
    inputFichaAzulPorcentMinimoLimite.style.display = 'block';
    txtFichaAzulPorcentMinimoLimite.style.display = 'block';
    inputFichaVermelhoPorcentMinimoLimite.style.display = 'block';
    txtFichaVermelhoPorcentMinimoLimite.style.display = 'block';
    inputSurf.style.display = 'block';
    txtSurf.style.display = 'block';
    inputGain.style.display = 'block';
    txtGain.style.display = 'block';
    inputLoss.style.display = 'block';
    txtLoss.style.display = 'block';
    inputGaleVirtual.style.display = "block";
    txtGaleVirtual.style.display = "block";
    inputGaleAlternado.style.display = 'block';
    txtGaleAlternado.style.display = 'block';
    inputGaleAlternadoContagem.style.display = 'block';
    txtGaleAlternadoContagem.style.display = 'block';
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
    galeInput.style.display = 'none';
    cicloInput.style.display = 'none';
    posLossInput.style.display = 'none';
    posGainInput.style.display = 'none';
    listaGatilhosElement.style.display = 'none';
    btnAdicionarGatilhos.style.display = 'none';
    labelStatus.style.display = 'none';
    txtStatus.style.display = 'none';
    btnStatus.style.display = 'none';
    labelCasas.style.display = 'none';
    btnPlacerpBet.style.display = 'none';
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
    inputFichaAzulPorcentMaximo.style.display = 'none';
    txtFichaAzulPorcentMaximo.style.display = 'none';
    inputFichaVermelhoPorcentMaximo.style.display = 'none';
    txtFichaVermelhoPorcentMaximo.style.display = 'none';
    inputFichaAzulPorcentMinimo.style.display = 'none';
    txtFichaAzulPorcentMinimo.style.display = 'none';
    inputFichaVermelhoPorcentMinimo.style.display = 'none';
    txtFichaVermelhoPorcentMinimo.style.display = 'none';
    inputFichaAzulPorcentMaximoLimite.style.display = 'none';
    txtFichaAzulPorcentMaximoLimite.style.display = 'none';
    inputFichaVermelhoPorcentMaximoLimite.style.display = 'none';
    txtFichaVermelhoPorcentMaximoLimite.style.display = 'none';
    inputFichaAzulPorcentMinimoLimite.style.display = 'none';
    txtFichaAzulPorcentMinimoLimite.style.display = 'none';
    inputFichaVermelhoPorcentMinimoLimite.style.display = 'none';
    txtFichaVermelhoPorcentMinimoLimite.style.display = 'none';
    inputSurf.style.display = 'none';
    txtSurf.style.display = 'none';
    inputGain.style.display = 'none';
    txtGain.style.display = 'none';
    inputLoss.style.display = 'none';
    txtLoss.style.display = 'none';
    inputGaleVirtual.style.display = "none";
    txtGaleVirtual.style.display = "none";
    inputGaleAlternado.style.display = 'none';
    txtGaleAlternado.style.display = 'none';
    inputGaleAlternadoContagem.style.display = 'none';
    txtGaleAlternadoContagem.style.display = 'none';
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
    txtFichaAzulPorcentMaximo.textContent = `Apostar Azul Máximo ${config.azulPorcentMaximo}%`;
    txtFichaVermelhoPorcentMaximo.textContent = `Apostar Vermelho Máximo ${config.vermelhoPorcentMaximo}%`;
    txtFichaAzulPorcentMinimo.textContent = `Apostar Azul Mínimo ${config.azulPorcentMinimo}%`;
    txtFichaVermelhoPorcentMinimo.textContent = `Apostar Vermelho Mínimo ${config.vermelhoPorcentMinimo}%`;

    txtFichaAzulPorcentMaximoLimite.textContent = `Limite Azul Máximo ${config.azulPorcentMaximoLimite}%`;
    txtFichaVermelhoPorcentMaximoLimite.textContent = `Limite Vermelho Máximo ${config.vermelhoPorcentMaximoLimite}%`;
    txtFichaAzulPorcentMinimoLimite.textContent = `Limite Azul Mínimo ${config.azulPorcentMinimoLimite}%`;
    txtFichaVermelhoPorcentMinimoLimite.textContent = `Limite Vermelho Mínimo ${config.vermelhoPorcentMinimoLimite}%`;

    txtHistorico.textContent = `Analisar ${config.historico} rodadas`;
    txtIaMinimo.textContent = `IA Mínimo : ${config.iaMinimo}%`;
    txtIaMaximo.textContent = `IA Máximo : ${config.iaMaximo}%`;
    txtEventoMinimo.textContent = `Evento Mínimo : ${config.eventoMinimo}`;
    txtEventoMaximo.textContent = `EventoMáximo : ${config.eventoMaximo}`;

    if (config.surf == 0) {
        txtSurf.textContent = `Modo Surf desativado`;
    } else if (config.surf == 1) {
        txtSurf.textContent = `Modo Surf ativado`;
    }

    txtGain.textContent = `Stop Gain - R$ ${config.stopGain}.00`;
    txtLoss.textContent = `Stop Loss - R$ ${config.stopLoss}.00`;


    if (config.galeVirtual == 0) {
        txtGaleVirtual.textContent = `Gale virtual desativado`;
    } else if (config.galeVirtual == 1) {
        txtGaleVirtual.textContent = `Aposta virtual`;
    } else {
        txtGaleVirtual.textContent = `Gale Virtual - ${config.galeVirtual - 1}`;
    }

    if (config.galeAlternado == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (config.galeAlternado == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 5`;
    } else if (config.galeAlternado == 2) {
        txtGaleAlternado.textContent = `Gale com alternância inteligente`;
    }

    if (config.galeAlternadoContagem == 0) {
        txtGaleAlternadoContagem.textContent = `Contagem de green desativado`;
    } else if (config.galeAlternadoContagem == 1) {
        txtGaleAlternadoContagem.textContent = `Alternar estrategia de alternancia depois de ${config.galeAlternadoContagem} green`;
    } else if (config.galeAlternadoContagem > 1) {
        txtGaleAlternadoContagem.textContent = `Alternar estrategia de alternancia depois de ${config.galeAlternadoContagem} greens`;
    }

    inputIaMaximo.value = config.iaMaximo;
    inputHistorico.value = config.historico;
    inputIaMinimo.value = config.iaMinimo;
    inputEventoMaximo.value = config.eventoMaximo;
    inputEventoMinimo.value = config.eventoMinimo;
    inputFichaEmpate.value = config.fichaEmpate;
    inputFichaEmpatePorcent.value = config.empatePorcent;
    inputFichaAzulPorcentMaximo.value = config.azulPorcentMaximo;
    inputFichaVermelhoPorcentMaximo.value = config.vermelhoPorcentMaximo;
    inputFichaAzulPorcentMinimo.value = config.azulPorcentMinimo;
    inputFichaVermelhoPorcentMinimo.value = config.vermelhoPorcentMinimo;

    inputFichaAzulPorcentMaximoLimite.value = config.azulPorcentMaximoLimite;
    inputFichaVermelhoPorcentMaximoLimite.value = config.vermelhoPorcentMaximoLimite;
    inputFichaAzulPorcentMinimoLimite.value = config.azulPorcentMinimoLimite;
    inputFichaVermelhoPorcentMinimoLimite.value = config.vermelhoPorcentMinimoLimite;

    inputSurf.value = config.surf;
    inputGain.value = config.stopGain;
    inputLoss.value = config.stopLoss;

    inputGaleVirtual.value = config.galeVirtual;
    inputGaleAlternado.value = config.galeAlternado;
    inputGaleAlternadoContagem.value = config.galeAlternadoContagem;
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
            const data = await cisudbc(emailEdit.value, passwordEdit.value);
            if (data.usuario) {

                let exclusivo = await lgiruets(data.usuario.id);

                if (exclusivo.nome_bot == 'bot_teste_editado') {
                    salvarNovaSenha(data.usuario.email, data.usuario.senha);
                    newConfig(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_teste_editado');
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

    let dataConfig = alksjduew(email, senha, id, bot);

    if (dataConfig.token) {
        atualizaConfig(dataConfig);
    } else {
        skdouwted(email, senha, id, bot);
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
            let data = await nkosud(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);

            if (data.usuario) {

                let exclusivo = await lgiruets(data.usuario.id);

                if (exclusivo.nome_bot == 'bot_teste_editado') {
                    userLiberacao.textContent = `Usuario : ${data.usuario.email}`;
                    senhaLiberacao.textContent = `Senha : ${data.usuario.senha}`;

                    let dataConfig = await alksjduew(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_teste_editado');

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
    let status = { win: 0, loss: 0, terminalStorage: [] };
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

async function cisudbc(email, senha) {
    const response = await enviarMensagem('cisudbc', { email, senha });
    return response;
}

async function nkosud(email, senha) {
    const response = await enviarMensagem('nkosud', { email, senha });
    return response;
}

async function alksjduew(email, senha, id, bot) {
    const response = await enviarMensagem('alksjduew', { email, senha, id, bot });
    return response;
}

async function skdouwted(email, senha, id, bot) {
    const response = await enviarMensagem('skdouwted', { email, senha, id, bot, config });
    return response;
}

async function sjdhwue(email, senha, id, bot) {
    const response = await enviarMensagem('sjdhwue', { email, senha, id, bot, config });
    return response;
}

async function lgiruets(id) {
    const response = await enviarMensagem('lgiruets', { id });
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


