let config = {
    tipoPosGain: 0,
    galeVirtual: 0,
    galeAlternado: 0,
    galeAlternadoContagem: 0,
    historico: 0,
    iaMinimo: 0,
    iaMaximo: 0,
    eventoMinimo: 0,
    eventoMaximo: 0,
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
    timer: 1,
    gainTimer: 0,
    startTimer: 0,
    terminal: [],
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
let btnKto = document.getElementById('btnKto');
let btnEsportesdaSorte = document.getElementById('btnEsportesdaSorte');
let btnNovibet = document.getElementById('btnNovibet');
let btnSuperbet = document.getElementById('btnSuperbet');
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

let inputFichaCasaPorcentMaximo = document.getElementById('inputFichaCasaPorcentMaximo');
let txtFichaCasaPorcentMaximo = document.getElementById('txtFichaCasaPorcentMaximo');

let inputFichaCasaPorcentMinimo = document.getElementById('inputFichaCasaPorcentMinimo');
let txtFichaCasaPorcentMinimo = document.getElementById('txtFichaCasaPorcentMinimo');

let inputFichaVisitantePorcentMaximo = document.getElementById('inputFichaVisitantePorcentMaximo');
let txtFichaVisitantePorcentMaximo = document.getElementById('txtFichaVisitantePorcentMaximo');

let inputFichaVisitantePorcentMinimo = document.getElementById('inputFichaVisitantePorcentMinimo');
let txtFichaVisitantePorcentMinimo = document.getElementById('txtFichaVisitantePorcentMinimo');

let inputFichaCasaPorcentMaximoLimite = document.getElementById('inputFichaCasaPorcentMaximoLimite');
let txtFichaCasaPorcentMaximoLimite = document.getElementById('txtFichaCasaPorcentMaximoLimite');

let inputFichaCasaPorcentMinimoLimite = document.getElementById('inputFichaCasaPorcentMinimoLimite');
let txtFichaCasaPorcentMinimoLimite = document.getElementById('txtFichaCasaPorcentMinimoLimite');

let inputFichaVisitantePorcentMaximoLimite = document.getElementById('inputFichaVisitantePorcentMaximoLimite');
let txtFichaVisitantePorcentMaximoLimite = document.getElementById('txtFichaVisitantePorcentMaximoLimite');

let inputFichaVisitantePorcentMinimoLimite = document.getElementById('inputFichaVisitantePorcentMinimoLimite');
let txtFichaVisitantePorcentMinimoLimite = document.getElementById('txtFichaVisitantePorcentMinimoLimite');

let inputGaleVirtual = document.getElementById("inputGaleVirtual");
let txtGaleVirtual = document.getElementById("txtGaleVirtual");

let inputSurf = document.getElementById('inputSurf');
let txtSurf = document.getElementById('txtSurf');

let inputEsperarEmpate = document.getElementById('inputEsperarEmpate');
let txtEsperarEmpate = document.getElementById('txtEsperarEmpate');

let inputGain = document.getElementById('inputGain');
let txtGain = document.getElementById('txtGain');

let inputLoss = document.getElementById('inputLoss');
let txtLoss = document.getElementById('txtLoss');

let inputTimer = document.getElementById('inputTimer');
let txtTimer = document.getElementById('txtTimer');

let inputGainTimer = document.getElementById('inputGainTimer');
let txtGainTimer = document.getElementById('txtGainTimer');

let txtStartTimer = document.getElementById('txtStartTimer');
let inputStartTimer = document.getElementById('inputStartTimer');

let inputTipoPosGain = document.getElementById('inputTipoPosGain');
let txtTipoPosGain = document.getElementById('txtTipoPosGain');

let inputGaleAlternado = document.getElementById('inputGaleAlternado');
let txtGaleAlternado = document.getElementById('txtGaleAlternado');

let inputGaleAlternadoContagem = document.getElementById('inputGaleAlternadoContagem');
let txtGaleAlternadoContagem = document.getElementById('txtGaleAlternadoContagem');

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
        txtFicha.textContent = `Apostar com ficha R$ 0.50`;
    } else if (inputFicha.value == 2) {
        txtFicha.textContent = `Apostar com ficha R$ 1`;
    } else if (inputFicha.value == 3) {
        txtFicha.textContent = `Apostar com ficha R$ 1.50`;
    } else if (inputFicha.value == 4) {
        txtFicha.textContent = `Apostar com ficha R$ 2`;
    } else if (inputFicha.value == 5) {
        txtFicha.textContent = `Apostar com ficha R$ 2.50`;
    } else if (inputFicha.value == 6) {
        txtFicha.textContent = `Apostar com ficha R$ 5`;
    } else if (inputFicha.value == 7) {
        txtFicha.textContent = `Apostar com ficha R$ 7.50`;
    } else if (inputFicha.value == 8) {
        txtFicha.textContent = `Apostar com ficha R$ 10`;
    } else if (inputFicha.value == 9) {
        txtFicha.textContent = `Apostar com ficha R$ 15`;
    } else if (inputFicha.value == 10) {
        txtFicha.textContent = `Apostar com ficha R$ 20`;
    } else if (inputFicha.value == 11) {
        txtFicha.textContent = `Apostar com ficha R$ 25`;
    } else if (inputFicha.value == 12) {
        txtFicha.textContent = `Apostar com ficha R$ 50`;
    } else if (inputFicha.value == 13) {
        txtFicha.textContent = `Apostar com ficha R$ 75`;
    } else if (inputFicha.value == 14) {
        txtFicha.textContent = `Apostar com ficha R$ 100`;
    } else if (inputFicha.value == 15) {
        txtFicha.textContent = `Apostar com ficha R$ 125`;
    } else if (inputFicha.value == 16) {
        txtFicha.textContent = `Apostar com ficha R$ 250`;
    } else if (inputFicha.value == 17) {
        txtFicha.textContent = `Apostar com ficha R$ 375`;
    } else if (inputFicha.value == 18) {
        txtFicha.textContent = `Apostar com ficha R$ 500`;
    } else if (inputFicha.value == 19) {
        txtFicha.textContent = `Apostar com ficha R$ 1000`;
    } else if (inputFicha.value == 20) {
        txtFicha.textContent = `Apostar com ficha R$ 1500`;
    } else if (inputFicha.value == 21) {
        txtFicha.textContent = `Apostar com ficha R$ 2000`;
    }
});

inputFichaEmpate.addEventListener("input", () => {
    if (inputFichaEmpate.value == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (inputFichaEmpate.value == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 0.50`;
    } else if (inputFichaEmpate.value == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1`;
    } else if (inputFichaEmpate.value == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1.50`;
    } else if (inputFichaEmpate.value == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2`;
    } else if (inputFichaEmpate.value == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2.50`;
    } else if (inputFichaEmpate.value == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (inputFichaEmpate.value == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 7.50`;
    } else if (inputFichaEmpate.value == 8) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (inputFichaEmpate.value == 9) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 15`;
    } else if (inputFichaEmpate.value == 10) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 20`;
    } else if (inputFichaEmpate.value == 11) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (inputFichaEmpate.value == 12) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 50`;
    } else if (inputFichaEmpate.value == 13) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 75`;
    } else if (inputFichaEmpate.value == 14) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 100`;
    } else if (inputFichaEmpate.value == 15) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (inputFichaEmpate.value == 16) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 250`;
    } else if (inputFichaEmpate.value == 17) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 375`;
    } else if (inputFichaEmpate.value == 18) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (inputFichaEmpate.value == 19) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1000`;
    } else if (inputFichaEmpate.value == 20) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1500`;
    } else if (inputFichaEmpate.value == 21) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2000`;
    }
});

inputFichaEmpatePorcent.addEventListener("input", () => {
    txtFichaEmpatePorcent.textContent = `Apostar Empate com ${inputFichaEmpatePorcent.value}% ou mais`;
});

inputFichaCasaPorcentMaximo.addEventListener("input", () => {
    txtFichaCasaPorcentMaximo.textContent = `Apostar Casa Máximo ${inputFichaCasaPorcentMaximo.value}%`;
});

inputFichaCasaPorcentMinimo.addEventListener("input", () => {
    txtFichaCasaPorcentMinimo.textContent = `Apostar Casa Mínimo ${inputFichaCasaPorcentMinimo.value}%`;
});

inputFichaVisitantePorcentMaximo.addEventListener("input", () => {
    txtFichaVisitantePorcentMaximo.textContent = `Apostar Visitante Máximo ${inputFichaVisitantePorcentMaximo.value}%`;
});

inputFichaVisitantePorcentMinimo.addEventListener("input", () => {
    txtFichaVisitantePorcentMinimo.textContent = `Apostar Visitante Mínimo ${inputFichaVisitantePorcentMinimo.value}%`;
});


inputFichaCasaPorcentMaximoLimite.addEventListener("input", () => {
    txtFichaCasaPorcentMaximoLimite.textContent = `Limite Casa Máximo ${inputFichaCasaPorcentMaximoLimite.value}%`;
});

inputFichaCasaPorcentMinimoLimite.addEventListener("input", () => {
    txtFichaCasaPorcentMinimoLimite.textContent = `Limite Casa Mínimo ${inputFichaCasaPorcentMinimoLimite.value}%`;
});

inputFichaVisitantePorcentMaximoLimite.addEventListener("input", () => {
    txtFichaVisitantePorcentMaximoLimite.textContent = `Limite Visitante Máximo ${inputFichaVisitantePorcentMaximoLimite.value}%`;
});

inputFichaVisitantePorcentMinimoLimite.addEventListener("input", () => {
    txtFichaVisitantePorcentMinimoLimite.textContent = `Limite Visitante Mínimo ${inputFichaVisitantePorcentMinimoLimite.value}%`;
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

inputTipoPosGain.addEventListener("input", () => {
    if (inputTipoPosGain.value == 0) {
        txtTipoPosGain.textContent = `Pos gain intercalado`;
    } else if (inputTipoPosGain.value == 1) {
        txtTipoPosGain.textContent = `Pos gain sequencial`;
    } else if (inputTipoPosGain.value == 2) {
        txtTipoPosGain.textContent = `Pos gain reset contagem`;
    }
});

inputGaleAlternado.addEventListener("input", () => {
    if (inputGaleAlternado.value == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (inputGaleAlternado.value == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 3`;
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

inputEsperarEmpate.addEventListener("input", () => {
    if (inputEsperarEmpate.value == 0) {
        txtEsperarEmpate.textContent = `Esperar Empate desativado`;
    } else if (inputEsperarEmpate.value == 1) {
        txtEsperarEmpate.textContent = `Esperar Empate ativado`;
    }
});

inputTimer.addEventListener("input", () => {
    txtTimer.textContent = `Timer ${inputTimer.value} minutos`;
});

inputGainTimer.addEventListener("input", () => {
    txtGainTimer.textContent = `Gain Timer ${inputGainTimer.value}`;
});

inputStartTimer.addEventListener("input", () => {

    if (inputStartTimer.value == 0) {
        txtStartTimer.textContent = `Contar tempo depois apostar`;
    } else if (inputStartTimer.value == 1) {
        txtStartTimer.textContent = `Apostar depois contar tempo`;
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

// Array para armazenar os valores de gales por ciclo
let galesPorCiclo = [];

cicloInput.addEventListener('input', function () {
    let qtdCiclos = parseInt(cicloInput.value) || 0;
    atualizarCamposGalePorCiclo(qtdCiclos);
});

function atualizarCamposGalePorCiclo(qtdCiclos) {
    // Limpa o container
    galesPorCicloContainer.innerHTML = '';
    galesPorCiclo = [];

    for (let i = 0; i < qtdCiclos; i++) {
        // Cria o label acima do input
        let label = document.createElement('label');
        label.textContent = `Gales ciclo ${i + 1}:`;
        label.htmlFor = `galeCiclo${i + 1}`;

        let input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 10;
        input.value = 0;
        input.id = `galeCiclo${i + 1}`;

        // Atualiza o array ao mudar o valor
        input.addEventListener('input', function () {
            galesPorCiclo[i] = parseInt(input.value) || 0;
        });

        // Inicializa o array
        galesPorCiclo[i] = 0;

        // Adiciona o label, input e quebra de linha
        galesPorCicloContainer.appendChild(label);
        galesPorCicloContainer.appendChild(document.createElement('br'));
        galesPorCicloContainer.appendChild(input);
        galesPorCicloContainer.appendChild(document.createElement('br'));
    }
}
let posGainInput = document.getElementById('posGain');
let posLossInput = document.getElementById('posLoss');
// Adiciona o container para os campos de gales por posLoss
let galesPorPosLossContainer = document.getElementById('galesPorPosLossContainer'); // Adicione este elemento no HTML
let galesPorPosLoss = []; // Array para armazenar os valores

posLossInput.addEventListener('input', function () {
    let qtdPosLoss = parseInt(posLossInput.value) || 0;
    atualizarCamposGalePorPosLoss(qtdPosLoss);
});

function atualizarCamposGalePorPosLoss(qtdPosLoss) {
    galesPorPosLossContainer.innerHTML = '';
    galesPorPosLoss = [];

    for (let i = 0; i < qtdPosLoss; i++) {
        let label = document.createElement('label');
        label.textContent = `Gales posLoss ${i + 1}:`;
        label.htmlFor = `galePosLoss${i + 1}`;

        let input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 10;
        input.value = 0;
        input.id = `galePosLoss${i + 1}`;

        input.addEventListener('input', function () {
            galesPorPosLoss[i] = parseInt(input.value) || 0;
        });

        galesPorPosLoss[i] = 0;

        galesPorPosLossContainer.appendChild(label);
        galesPorPosLossContainer.appendChild(document.createElement('br'));
        galesPorPosLossContainer.appendChild(input);
        galesPorPosLossContainer.appendChild(document.createElement('br'));
    }
}

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
        galesPorCiclo: [...galesPorCiclo],
        galesPorPosLoss: [...galesPorPosLoss] // Adiciona ao objeto
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
        galesPorPosLoss = [];
        galesPorCicloContainer.innerHTML = '';
        galesPorPosLossContainer.innerHTML = '';

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
        // Adiciona texto para galesPorPosLoss
        let galesPorPosLossTexto = gatilho.galesPorPosLoss && gatilho.galesPorPosLoss.length > 0
            ? " Gales posLoss: ( " + gatilho.galesPorPosLoss.join(', ') + " )"
            : "";

        listItem.textContent = "Gatilho: ( " + gatilho.gatilho.join(', ') +
            " )   Aposta: ( " + gatilho.aposta.join(', ') + " )" +
            "   Gale: ( " + gatilho.gale + " )" +
            "   Ciclo: ( " + gatilho.ciclo + " )" +
            galesPorCicloTexto +
            "   Pos Loss: ( " + gatilho.posLoss + " )" +
            galesPorPosLossTexto +
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

        if (numero != 'C' && numero != 'V') {
            retorno = false;
            break;
        }
    }

    return retorno;
}

function validarConverterTipoNumero(input) {
    const number = parseInt(input, 10);
    if (!isNaN(number) && number >= 0 && number <= 30) {
        return number;
    }
    return 0;
}

function validarGatilho(numero) {

    let gatilhosValidos = ['C', 'V', 'E', 'N', 'CE', 'VE'];

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
    config.casaPorcentMaximo = inputFichaCasaPorcentMaximo.value;
    config.casaPorcentMinimo = inputFichaCasaPorcentMinimo.value;
    config.visitantePorcentMaximo = inputFichaVisitantePorcentMaximo.value;
    config.visitantePorcentMinimo = inputFichaVisitantePorcentMinimo.value;
    config.casaPorcentMaximoLimite = inputFichaCasaPorcentMaximoLimite.value;
    config.casaPorcentMinimoLimite = inputFichaCasaPorcentMinimoLimite.value;
    config.visitantePorcentMaximoLimite = inputFichaVisitantePorcentMaximoLimite.value;
    config.visitantePorcentMinimoLimite = inputFichaVisitantePorcentMinimoLimite.value;
    config.galeVirtual = inputGaleVirtual.value;
    config.surf = inputSurf.value;
    config.esperarEmpate = inputEsperarEmpate.value;
    config.stopGain = inputGain.value;
    config.stopLoss = inputLoss.value;
    config.timer = inputTimer.value;
    config.gainTimer = inputGainTimer.value;
    config.startTimer = inputStartTimer.value;
    config.token = tokenEdit.value;
    config.chat = chatEdit.value;
    config.tipoPosGain = inputTipoPosGain.value;
    config.galeAlternado = inputGaleAlternado.value;
    config.galeAlternadoContagem = inputGaleAlternadoContagem.value;

    let retornoChrome = await getChromeStorage("liberacao");

    if (retornoChrome.liberacao == undefined) {
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        zerarUsuario();
        ocultarConfig();
    } else {
        let checkData = await reger(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {

            let exclusivo = await wsifuw(checkData.usuario.id);

            if (exclusivo.nome_bot == 'bot_teste_editado') {

                let updateData = await asdsfdf(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
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
    btnKto.style.display = 'block';
    btnEsportesdaSorte.style.display = 'block';
    btnNovibet.style.display = 'block';
    btnSuperbet.style.display = 'block';
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
    inputFichaCasaPorcentMaximo.style.display = 'block';
    txtFichaCasaPorcentMaximo.style.display = 'block';
    inputFichaVisitantePorcentMaximo.style.display = 'block';
    txtFichaVisitantePorcentMaximo.style.display = 'block';
    inputFichaCasaPorcentMinimo.style.display = 'block';
    txtFichaCasaPorcentMinimo.style.display = 'block';
    inputFichaVisitantePorcentMinimo.style.display = 'block';
    txtFichaVisitantePorcentMinimo.style.display = 'block';
    inputFichaCasaPorcentMaximoLimite.style.display = 'block';
    txtFichaCasaPorcentMaximoLimite.style.display = 'block';
    inputFichaVisitantePorcentMaximoLimite.style.display = 'block';
    txtFichaVisitantePorcentMaximoLimite.style.display = 'block';
    inputFichaCasaPorcentMinimoLimite.style.display = 'block';
    txtFichaCasaPorcentMinimoLimite.style.display = 'block';
    inputFichaVisitantePorcentMinimoLimite.style.display = 'block';
    txtFichaVisitantePorcentMinimoLimite.style.display = 'block';
    inputGaleVirtual.style.display = "block";
    txtGaleVirtual.style.display = "block";
    inputSurf.style.display = 'block';
    txtSurf.style.display = 'block';
    inputEsperarEmpate.style.display = 'block';
    txtEsperarEmpate.style.display = 'block';
    inputGain.style.display = 'block';
    txtGain.style.display = 'block';
    inputLoss.style.display = 'block';
    txtLoss.style.display = 'block';
    inputTimer.style.display = 'block';
    txtTimer.style.display = 'block';
    inputGainTimer.style.display = 'block';
    txtGainTimer.style.display = 'block';
    inputStartTimer.style.display = 'block';
    txtStartTimer.style.display = 'block';
    inputTipoPosGain.style.display = 'block';
    txtTipoPosGain.style.display = 'block';
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
    btnKto.style.display = 'none';
    btnEsportesdaSorte.style.display = 'none';
    btnNovibet.style.display = 'none';
    btnSuperbet.style.display = 'none';
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
    inputFichaCasaPorcentMaximo.style.display = 'none';
    txtFichaCasaPorcentMaximo.style.display = 'none';
    inputFichaVisitantePorcentMaximo.style.display = 'none';
    txtFichaVisitantePorcentMaximo.style.display = 'none';
    inputFichaCasaPorcentMinimo.style.display = 'none';
    txtFichaCasaPorcentMinimo.style.display = 'none';
    inputFichaVisitantePorcentMinimo.style.display = 'none';
    txtFichaVisitantePorcentMinimo.style.display = 'none';
    inputFichaCasaPorcentMaximoLimite.style.display = 'none';
    txtFichaCasaPorcentMaximoLimite.style.display = 'none';
    inputFichaVisitantePorcentMaximoLimite.style.display = 'none';
    txtFichaVisitantePorcentMaximoLimite.style.display = 'none';
    inputFichaCasaPorcentMinimoLimite.style.display = 'none';
    txtFichaCasaPorcentMinimoLimite.style.display = 'none';
    inputFichaVisitantePorcentMinimoLimite.style.display = 'none';
    txtFichaVisitantePorcentMinimoLimite.style.display = 'none';
    inputGaleVirtual.style.display = "none";
    txtGaleVirtual.style.display = "none";
    inputSurf.style.display = 'none';
    txtSurf.style.display = 'none';
    inputEsperarEmpate.style.display = 'none';
    txtEsperarEmpate.style.display = 'none';
    inputGain.style.display = 'none';
    txtGain.style.display = 'none';
    inputLoss.style.display = 'none';
    txtLoss.style.display = 'none';
    inputTimer.style.display = 'none';
    txtTimer.style.display = 'none';
    inputGainTimer.style.display = 'none';
    txtGainTimer.style.display = 'none';
    inputStartTimer.style.display = 'none';
    txtStartTimer.style.display = 'none';
    inputTipoPosGain.style.display = 'none';
    txtTipoPosGain.style.display = 'none';
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

    if (config.fichaEmpate == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (config.fichaEmpate == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 0.50`;
    } else if (config.fichaEmpate == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1`;
    } else if (config.fichaEmpate == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1.50`;
    } else if (config.fichaEmpate == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2`;
    } else if (config.fichaEmpate == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2.50`;
    } else if (config.fichaEmpate == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (config.fichaEmpate == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 7.50`;
    } else if (config.fichaEmpate == 8) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (config.fichaEmpate == 9) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 15`;
    } else if (config.fichaEmpate == 10) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 20`;
    } else if (config.fichaEmpate == 11) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (config.fichaEmpate == 12) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 50`;
    } else if (config.fichaEmpate == 13) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 75`;
    } else if (config.fichaEmpate == 14) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 100`;
    } else if (config.fichaEmpate == 15) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (config.fichaEmpate == 16) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 250`;
    } else if (config.fichaEmpate == 17) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 375`;
    } else if (config.fichaEmpate == 18) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (config.fichaEmpate == 19) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1000`;
    } else if (config.fichaEmpate == 20) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1500`;
    } else if (config.fichaEmpate == 21) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2000`;
    }

    txtFichaEmpatePorcent.textContent = `Apostar Empate com ${config.empatePorcent}% ou mais`;
    txtFichaCasaPorcentMaximo.textContent = `Apostar Casa Máximo ${config.casaPorcentMaximo}%`;
    txtFichaVisitantePorcentMaximo.textContent = `Apostar Visitante Máximo ${config.visitantePorcentMaximo}%`;
    txtFichaCasaPorcentMinimo.textContent = `Apostar Casa Mínimo ${config.casaPorcentMinimo}%`;
    txtFichaVisitantePorcentMinimo.textContent = `Apostar Visitante Mínimo ${config.visitantePorcentMinimo}%`;

    txtFichaCasaPorcentMaximoLimite.textContent = `Limite Casa Máximo ${config.casaPorcentMaximoLimite}%`;
    txtFichaVisitantePorcentMaximoLimite.textContent = `Limite Visitante Máximo ${config.visitantePorcentMaximoLimite}%`;
    txtFichaCasaPorcentMinimoLimite.textContent = `Limite Casa Mínimo ${config.casaPorcentMinimoLimite}%`;
    txtFichaVisitantePorcentMinimoLimite.textContent = `Limite Visitante Mínimo ${config.visitantePorcentMinimoLimite}%`;

    txtHistorico.textContent = `Analisar ${config.historico} rodadas`;
    txtIaMinimo.textContent = `IA Mínimo : ${config.iaMinimo}%`;
    txtIaMaximo.textContent = `IA Máximo : ${config.iaMaximo}%`;
    txtEventoMinimo.textContent = `Evento Mínimo : ${config.eventoMinimo}`;
    txtEventoMaximo.textContent = `EventoMáximo : ${config.eventoMaximo}`;

    txtGainTimer.textContent = `Gain Timer ${config.gainTimer}`;

    if (config.startTimer == 0) {
        txtStartTimer.textContent = `Contar tempo depois apostar`;
    } else if (config.startTimer == 1) {
        txtStartTimer.textContent = `Apostar depois contar tempo`;
    }

    txtTimer.textContent = `Timer ${config.timer} minutos`;

    if (config.galeVirtual == 0) {
        txtGaleVirtual.textContent = `Gale virtual desativado`;
    } else if (config.galeVirtual == 1) {
        txtGaleVirtual.textContent = `Aposta virtual`;
    } else {
        txtGaleVirtual.textContent = `Gale Virtual - ${config.galeVirtual - 1}`;
    }

    if (config.tipoPosGain == 0) {
        txtTipoPosGain.textContent = `Pos gain intercalado`;
    } else if (config.tipoPosGain == 1) {
        txtTipoPosGain.textContent = `Pos gain sequencial`;
    } else if (config.tipoPosGain == 2) {
        txtTipoPosGain.textContent = `Pos gain reset contagem`;
    }

    if (config.galeAlternado == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (config.galeAlternado == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 3`;
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

    if (config.surf == 0) {
        txtSurf.textContent = `Modo Surf desativado`;
    } else if (config.surf == 1) {
        txtSurf.textContent = `Modo Surf ativado`;
    }

    if (config.esperarEmpate == 0) {
        txtEsperarEmpate.textContent = `Esperar Empate desativado`;
    } else if (config.esperarEmpate == 1) {
        txtEsperarEmpate.textContent = `Esperar Empate ativado`;
    }

    inputIaMaximo.value = config.iaMaximo;
    inputHistorico.value = config.historico;
    inputIaMinimo.value = config.iaMinimo;
    inputEventoMaximo.value = config.eventoMaximo;
    inputEventoMinimo.value = config.eventoMinimo;
    inputFichaEmpate.value = config.fichaEmpate;

    inputFichaEmpatePorcent.value = config.empatePorcent;
    inputFichaCasaPorcentMaximo.value = config.casaPorcentMaximo;
    inputFichaVisitantePorcentMaximo.value = config.visitantePorcentMaximo;
    inputFichaCasaPorcentMinimo.value = config.casaPorcentMinimo;
    inputFichaVisitantePorcentMinimo.value = config.visitantePorcentMinimo;

    inputFichaCasaPorcentMaximoLimite.value = config.casaPorcentMaximoLimite;
    inputFichaVisitantePorcentMaximoLimite.value = config.visitantePorcentMaximoLimite;
    inputFichaCasaPorcentMinimoLimite.value = config.casaPorcentMinimoLimite;
    inputFichaVisitantePorcentMinimoLimite.value = config.visitantePorcentMinimoLimite;

    inputGaleVirtual.value = config.galeVirtual;
    inputSurf.value = config.surf;
    inputEsperarEmpate.value = config.esperarEmpate;
    inputGain.value = config.stopGain;
    inputLoss.value = config.stopLoss;
    inputTimer.value = config.timer;
    inputGainTimer.value = config.gainTimer;
    inputStartTimer.value = config.startTimer;
    inputTipoPosGain.value = config.tipoPosGain;
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
            const data = await kljklj(emailEdit.value, passwordEdit.value);
            if (data.usuario) {
                let exclusivo = await wsifuw(data.usuario.id);
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

    let dataConfig = ergerg(email, senha, id, bot);

    if (dataConfig.token) {
        atualizaConfig(dataConfig);
    } else {
        qwewqqw(email, senha, id, bot);
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
            let data = await reger(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);

            if (data.usuario) {
                let exclusivo = await wsifuw(data.usuario.id);
                if (exclusivo.nome_bot == 'bot_teste_editado') {
                    userLiberacao.textContent = `Usuario : ${data.usuario.email}`;
                    senhaLiberacao.textContent = `Senha : ${data.usuario.senha}`;

                    let dataConfig = await ergerg(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_teste_editado');

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
    let status = { win: 0, loss: 0 };
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

async function kljklj(email, senha) {
    const response = await enviarMensagem('kljklj', { email, senha });
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

async function qwewqqw(email, senha, id, bot) {
    const response = await enviarMensagem('qwewqqw', { email, senha, id, bot, config });
    return response;
}

async function asdsfdf(email, senha, id, bot) {
    const response = await enviarMensagem('asdsfdf', { email, senha, id, bot, config });
    return response;
}

async function wsifuw(id) {
    const response = await enviarMensagem('wsifuw', { id });
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