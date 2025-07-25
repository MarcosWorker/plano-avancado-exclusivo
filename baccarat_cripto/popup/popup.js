const selectedTables = [];
const inputTextElement = document.getElementById('input-text');
const addButtonElement = document.getElementById('add-button');
const selectedListElement = document.getElementById('selected-list');

function a() {
    selectedListElement.innerHTML = '';
    selectedTables.forEach((table, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = table;

        const removeButton = document.createElement('button-ul');
        removeButton.textContent = 'Deletar';
        removeButton.addEventListener('click', () => {
            selectedTables.splice(index, 1);
            a();
        });

        listItem.appendChild(removeButton);
        selectedListElement.appendChild(listItem);
    });
}

addButtonElement.addEventListener('click', () => {
    event.preventDefault();
    const tableName = inputTextElement.value;
    if (tableName && !selectedTables.includes(tableName)) {
        selectedTables.push(tableName);
        inputTextElement.value = '';
        a();
    } else if (selectedTables.includes(tableName)) {
        alert('Essa mesa já foi adicionada.');
    }
});

let config = {
    timer: 0,
    timerGain: 0,
    stopGainMesas: 0,
    mesas: [],
    surf: 0,
    galeAlternado: 0,
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

function b() {
    let date = new Date;
    let day = date.getDate();
    let mount = date.getMonth();
    let year = date.getFullYear();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    return `${day}/${(mount + 1)}/${year} - ${hour}:${minutes}:${seconds}`;
}

let labelCasas = document.getElementById('labelCasas');
let btnEsportesdaSorte = document.getElementById('btnEsportesdaSorte');
let btnKto = document.getElementById('btnKto');
let btnStake = document.getElementById('btnStake');
let btnSegurobet = document.getElementById('btnSegurobet');
let btnBetano = document.getElementById('btnBetano');
let btnReals = document.getElementById('btnReals');
let btnSuperbet = document.getElementById('btnSuperbet');
let labelConfig1 = document.getElementById('labelConfig1');
let labelMesas = document.getElementById('labelMesas');
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

let inputSoros = document.getElementById('inputSoros');
let txtSoros = document.getElementById('txtSoros');
inputSoros.value = 0;
txtSoros.textContent = `Modo MartinGale`;

let inputCicloSequencial = document.getElementById('inputCicloSequencial');
let txtCicloSequencial = document.getElementById('txtCicloSequencial');
inputCicloSequencial.value = 0;
txtCicloSequencial.textContent = `Ciclo Sequencial desativado`;

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

let inputGaleAlternado = document.getElementById('inputGaleAlternado');
let txtGaleAlternado = document.getElementById('txtGaleAlternado');

let inputGain = document.getElementById('inputGain');
let txtGain = document.getElementById('txtGain');

let inputGainMesas = document.getElementById('inputGainMesas');
let txtGainMesas = document.getElementById('txtGainMesas');

let inputLoss = document.getElementById('inputLoss');
let txtLoss = document.getElementById('txtLoss');

let inputTimer = document.getElementById('inputTimer');
let txtTimer = document.getElementById('txtTimer');

let inputTimerGain = document.getElementById('inputTimerGain');
let txtTimerGain = document.getElementById('txtTimerGain');

let btnSalvar = document.getElementById('btnSalvar');

btnSalvar.addEventListener("click", () => {
    p();
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

inputSoros.addEventListener("input", () => {

    if (inputSoros.value == 0) {
        txtSoros.textContent = `Modo MartinGale`;
    } else if (inputSoros.value == 1) {
        txtSoros.textContent = `Modo SorosGale`;
        posLossInput.value = '';
        posGreenInput.value = '';
        posGainInput.value = '';
    }

});

inputCicloSequencial.addEventListener("input", () => {

    if (inputCicloSequencial.value == 0) {
        txtCicloSequencial.textContent = `Ciclo Sequencial desativado`;
    } else if (inputCicloSequencial.value == 1) {
        txtCicloSequencial.textContent = `Ciclo Sequencial ativado`;
    }

});

inputFicha.addEventListener("input", () => {

    if (inputFicha.value == 0) {
        txtFicha.textContent = `Modo Simulação`;
    } else if (inputFicha.value == 1) {
        txtFicha.textContent = `Apostar com ficha R$ 0.20`;
    } else if (inputFicha.value == 2) {
        txtFicha.textContent = `Apostar com ficha R$ 1`;
    } else if (inputFicha.value == 3) {
        txtFicha.textContent = `Apostar com ficha R$ 2`;
    } else if (inputFicha.value == 4) {
        txtFicha.textContent = `Apostar com ficha R$ 3`;
    } else if (inputFicha.value == 5) {
        txtFicha.textContent = `Apostar com ficha R$ 4`;
    } else if (inputFicha.value == 6) {
        txtFicha.textContent = `Apostar com ficha R$ 5`;
    } else if (inputFicha.value == 7) {
        txtFicha.textContent = `Apostar com ficha R$ 10`;
    } else if (inputFicha.value == 8) {
        txtFicha.textContent = `Apostar com ficha R$ 15`;
    } else if (inputFicha.value == 9) {
        txtFicha.textContent = `Apostar com ficha R$ 20`;
    } else if (inputFicha.value == 10) {
        txtFicha.textContent = `Apostar com ficha R$ 25`;
    } else if (inputFicha.value == 11) {
        txtFicha.textContent = `Apostar com ficha R$ 50`;
    } else if (inputFicha.value == 12) {
        txtFicha.textContent = `Apostar com ficha R$ 75`;
    } else if (inputFicha.value == 13) {
        txtFicha.textContent = `Apostar com ficha R$ 100`;
    } else if (inputFicha.value == 14) {
        txtFicha.textContent = `Apostar com ficha R$ 125`;
    } else if (inputFicha.value == 15) {
        txtFicha.textContent = `Apostar com ficha R$ 250`;
    } else if (inputFicha.value == 16) {
        txtFicha.textContent = `Apostar com ficha R$ 375`;
    } else if (inputFicha.value == 17) {
        txtFicha.textContent = `Apostar com ficha R$ 500`;
    } else if (inputFicha.value == 18) {
        txtFicha.textContent = `Apostar com ficha R$ 1K`;
    } else if (inputFicha.value == 19) {
        txtFicha.textContent = `Apostar com ficha R$ 1250`;
    } else if (inputFicha.value == 20) {
        txtFicha.textContent = `Apostar com ficha R$ 5K`;
    }

});

inputFichaEmpate.addEventListener("input", () => {
    if (inputFichaEmpate.value == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (inputFichaEmpate.value == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 0.20`;
    } else if (inputFichaEmpate.value == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1`;
    } else if (inputFichaEmpate.value == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2`;
    } else if (inputFichaEmpate.value == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 3`;
    } else if (inputFichaEmpate.value == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 4`;
    } else if (inputFichaEmpate.value == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (inputFichaEmpate.value == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (inputFichaEmpate.value == 8) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 15`;
    } else if (inputFichaEmpate.value == 9) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 20`;
    } else if (inputFichaEmpate.value == 10) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (inputFichaEmpate.value == 11) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 50`;
    } else if (inputFichaEmpate.value == 12) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 75`;
    } else if (inputFichaEmpate.value == 13) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 100`;
    } else if (inputFichaEmpate.value == 14) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (inputFichaEmpate.value == 15) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 250`;
    } else if (inputFichaEmpate.value == 16) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 375`;
    } else if (inputFichaEmpate.value == 17) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (inputFichaEmpate.value == 18) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1K`;
    } else if (inputFichaEmpate.value == 19) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1250`;
    } else if (inputFichaEmpate.value == 20) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5K`;
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

inputSurf.addEventListener("input", () => {
    if (inputSurf.value == 0) {
        txtSurf.textContent = `Modo Surf desativado`;
    } else if (inputSurf.value == 1) {
        txtSurf.textContent = `Modo Surf ativado`;
    }
});

inputGaleAlternado.addEventListener("input", () => {
    if (inputGaleAlternado.value == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (inputGaleAlternado.value == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 3`;
    }
});

inputGain.addEventListener("input", () => {
    txtGain.textContent = `Stop Gain - R$ ${inputGain.value}`;
});

inputGainMesas.addEventListener("input", () => {
    txtGainMesas.textContent = `Trocar de mesa após ${inputGainMesas.value} greens`;
});

inputLoss.addEventListener("input", () => {
    txtLoss.textContent = `Stop Loss - R$ ${inputLoss.value}`;
});

inputTimer.addEventListener("input", () => {
    txtTimer.textContent = `Timer ${inputTimer.value} min`;
});

inputTimerGain.addEventListener("input", () => {
    txtTimerGain.textContent = `Contar Timer depois de ${inputTimerGain.value} greens`;
});

let emailEdit = document.getElementById('email');
let passwordEdit = document.getElementById('password');
let btnLiberar = document.getElementById('btnLiberar');
let btnLimparDados = document.getElementById('btnLimparDados');

btnLiberar.addEventListener("click", () => {
    t();
});

btnLimparDados.addEventListener("click", () => {
    z();
});

let gatilhos = [];
let gatilhoInput = document.getElementById("gatilho");
let apostaInput = document.getElementById("aposta");
let galeInput = document.getElementById("gale");
let cicloInput = document.getElementById("ciclo");

const listaCiclosElement = document.createElement("div");
listaCiclosElement.id = "listaCiclos";
cicloInput.parentNode.insertBefore(listaCiclosElement, cicloInput.nextSibling);

galeInput.addEventListener("input", () => {
    let galeValor = parseInt(galeInput.value, 10);
    if (isNaN(galeValor) || galeValor < 0) {
        galeInput.value = "";
        return;
    }
    e(galeValor);
});

cicloInput.addEventListener("input", () => {
    let cicloValor = parseInt(cicloInput.value, 10);
    if (isNaN(cicloValor) || cicloValor < 0) {
        cicloInput.value = "";
        return;
    }
    c(cicloValor);
});

function c(qtdCiclos) {
    listaCiclosElement.innerHTML = "";
    for (let i = 0; i < qtdCiclos; i++) {
        let cicloDiv = document.createElement("div");
        cicloDiv.classList.add("ciclo-container");

        let label = document.createElement("label");
        label.textContent = `Ciclo ${i + 1} - Multiplicador:`;

        let inputMultiplicadorCiclo = document.createElement("input");
        inputMultiplicadorCiclo.type = "number";
        inputMultiplicadorCiclo.min = "1";
        inputMultiplicadorCiclo.classList.add("multiplicador-ciclo");
        inputMultiplicadorCiclo.dataset.cicloIndex = i;

        let galeLabel = document.createElement("label");
        galeLabel.textContent = `Ciclo ${i + 1} - Qtd Gales:`;

        let inputGaleQtd = document.createElement("input");
        inputGaleQtd.type = "number";
        inputGaleQtd.min = "1";
        inputGaleQtd.classList.add("gale-qtd");
        inputGaleQtd.dataset.cicloIndex = i;

        inputGaleQtd.addEventListener("input", () => {
            d(i, parseInt(inputGaleQtd.value, 10));
        });

        cicloDiv.appendChild(label);
        cicloDiv.appendChild(inputMultiplicadorCiclo);
        cicloDiv.appendChild(galeLabel);
        cicloDiv.appendChild(inputGaleQtd);
        listaCiclosElement.appendChild(cicloDiv);
    }
}

function d(cicloIndex, qtdGales) {
    let cicloDiv = listaCiclosElement.children[cicloIndex];
    let galeContainer = cicloDiv.querySelector(".gale-container");
    if (!galeContainer) {
        galeContainer = document.createElement("div");
        galeContainer.classList.add("gale-container");
        cicloDiv.appendChild(galeContainer);
    }
    galeContainer.innerHTML = "";
    for (let j = 0; j < qtdGales; j++) {
        let galeDiv = document.createElement("div");
        galeDiv.classList.add("gale-item");

        let galeLabel = document.createElement("label");
        galeLabel.textContent = `Gale ${j + 1} - Multiplicador:`;

        let inputMultiplicador = document.createElement("input");
        inputMultiplicador.type = "number";
        inputMultiplicador.min = "1";
        inputMultiplicador.classList.add("multiplicador-gale-ciclo");
        inputMultiplicador.dataset.cicloIndex = cicloIndex;
        inputMultiplicador.dataset.galeIndex = j;

        galeDiv.appendChild(galeLabel);
        galeDiv.appendChild(inputMultiplicador);
        galeContainer.appendChild(galeDiv);
    }
}

function e(qtdGales) {
    let galeContainer = document.getElementById("gale-container");
    if (!galeContainer) {
        galeContainer = document.createElement("div");
        galeContainer.id = "gale-container";
        galeInput.parentNode.insertBefore(galeContainer, galeInput.nextSibling);
    }
    galeContainer.innerHTML = "";
    for (let i = 0; i < qtdGales; i++) {
        let galeDiv = document.createElement("div");
        galeDiv.classList.add("gale-multiplier-item");

        let galeLabel = document.createElement("label");
        galeLabel.textContent = `Multiplicador para Gale ${i + 1}:`;

        let inputMultiplicador = document.createElement("input");
        inputMultiplicador.type = "number";
        inputMultiplicador.min = "1";
        inputMultiplicador.classList.add("multiplicador-gale");
        inputMultiplicador.dataset.galeIndex = i;

        galeDiv.appendChild(galeLabel);
        galeDiv.appendChild(inputMultiplicador);
        galeContainer.appendChild(galeDiv);
    }
}

let posLossInput = document.getElementById("posLoss");
let posGreenInput = document.getElementById("posGreen");
let posGainInput = document.getElementById("posGain");

let listaGatilhosElement = document.getElementById("listaGatilhos");
let btnAdicionarGatilhos = document.getElementById("btnAdicionarGatilhos");
btnAdicionarGatilhos.addEventListener("click", g);

function f(inputValue) {
    const trimmedValue = inputValue.trim();
    const numericValue = parseInt(trimmedValue, 10);
    return isNaN(numericValue) ? 0 : numericValue;
}

function g() {

    if (inputSoros.value == 1) {
        posLossInput.value = '';
        posGreenInput.value = '';
        posGainInput.value = '';
    }

    let galeMultiplicadores = Array.from(document.querySelectorAll(".multiplicador-gale"))
        .map(input => parseInt(input.value, 10) || 1);

    let cicloMultiplicadores = Array.from(document.querySelectorAll(".multiplicador-ciclo"))
        .map(input => parseInt(input.value, 10) || 1);

    let cicloGaleMultiplicadores = Array.from(document.querySelectorAll(".gale-container"))
        .map(container => Array.from(container.querySelectorAll(".multiplicador-gale-ciclo"))
            .map(input => parseInt(input.value, 10) || 1));

    let ciclos = cicloMultiplicadores.map((multiplicador, index) => ({
        multiplicadorCiclo: multiplicador,
        galeMultiplicadores: cicloGaleMultiplicadores[index] || []
    }));


    let novoGatilho = {
        gatilho: gatilhoInput.value.split(' '),
        aposta: apostaInput.value.split(' '),
        gale: galeMultiplicadores,
        ciclo: ciclos,
        posLoss: f(posLossInput.value),
        posGreen: f(posGreenInput.value),
        posGain: f(posGainInput.value),
        ficha: f(inputFicha.value),
        soros: f(inputSoros.value),
        cicloSequencial: f(inputCicloSequencial.value)
    };

    if (novoGatilho.gatilho != undefined && novoGatilho.gatilho != '' && novoGatilho.gatilho.length > 0 && m(novoGatilho.gatilho)
        && o(novoGatilho.gatilho) && n(novoGatilho.aposta) && novoGatilho.aposta.length == 1) {
        gatilhos.push(novoGatilho);

        gatilhoInput.value = '';
        apostaInput.value = '';
        galeInput.value = '';
        cicloInput.value = '';
        posLossInput.value = '';
        posGreenInput.value = '';
        posGainInput.value = '';
        inputFicha.value = 0;
        txtFicha.textContent = `Modo Simulação`;
        inputSoros.value = 0;
        txtSoros.textContent = `Modo MartinGale`;
        inputCicloSequencial.value = 0;
        txtCicloSequencial.textContent = `Ciclo Sequencial desativado`;

        ii();
    } else {
        alert('Os campos de gatilho e aposta devem ser preenchidos de acordo com as regras do tutorial.');
    }

}

function h(index) {
    gatilhos.splice(index, 1);
    ii();
}

function ii() {

    listaGatilhosElement.innerHTML = "";

    for (let i = 0; i < gatilhos.length; i++) {
        let gatilho = gatilhos[i];
        let listItem = document.createElement("li");
        listItem.textContent = "Gatilho: " + gatilho.gatilho.join(', ') +
            " # Aposta: " + gatilho.aposta +
            " # Gale: " + gatilho.gale.join(', ') +
            " # Ciclo: " + gatilho.ciclo.map(c => `{ Multiplicador: ${c.multiplicadorCiclo}, Gales: [${c.galeMultiplicadores.join(', ')}] }`).join(' | ') +
            " # Pos Loss: " + gatilho.posLoss +
            " # Pos Green: " + gatilho.posGreen +
            " # Pos Gain: " + gatilho.posGain +
            " # Ficha: " + l(gatilho.ficha) +
            " # " + j(gatilho.soros) +
            " # " + k(gatilho.cicloSequencial);

        let deleteButton = document.createElement("button-ul");
        deleteButton.textContent = "Deletar";
        deleteButton.addEventListener("click", (function (index) {
            return function () {
                h(index);
            }
        })(i));

        listItem.appendChild(deleteButton);
        listaGatilhosElement.appendChild(listItem);

        config.terminal = gatilhos;
    }
}

function j(index) {
    if (index == 0) {
        return `Modo MartinGale`;
    } else if (index == 1) {
        return `Modo SorosGale`;
    }
}


function k(index) {
    if (index == 0) {
        return `Ciclo Sequencial desativado`;
    } else if (index == 1) {
        return `Ciclo Sequencial ativado`;
    }
}

function l(index) {
    if (index == 1) {
        return `R$ 0.20`;
    } else if (index == 2) {
        return `R$ 1`;
    } else if (index == 3) {
        return `R$ 2`;
    } else if (index == 4) {
        return `R$ 3`;
    } else if (index == 5) {
        return `R$ 4`;
    } else if (index == 6) {
        return `R$ 5`;
    } else if (index == 7) {
        return `R$ 10`;
    } else if (index == 8) {
        return `R$ 15`;
    } else if (index == 9) {
        return `R$ 20`;
    } else if (index == 10) {
        return `R$ 25`;
    } else if (index == 11) {
        return `R$ 50`;
    } else if (index == 12) {
        return `R$ 75`;
    } else if (index == 13) {
        return `R$ 100`;
    } else if (index == 14) {
        return `R$ 125`;
    } else if (index == 15) {
        return `R$ 250`;
    } else if (index == 16) {
        return `R$ 375`;
    } else if (index == 17) {
        return `R$ 500`;
    } else if (index == 18) {
        return `R$ 1K`;
    } else if (index == 19) {
        return `R$ 1250`;
    } else if (index == 20) {
        return `R$ 5K`;
    } else {
        return `Simulação`;
    }
}

function m(objeto) {
    for (let i = 0; i < config.terminal.length; i++) {
        if (config.terminal[i].gatilho.join('') === objeto.join('')) {
            return false;
        }
    }
    return true;
}

function n(aposta) {
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

function o(numero) {

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

async function p() {
    config.mesas = [...selectedTables];
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
    config.galeAlternado = inputGaleAlternado.value;
    config.stopGain = inputGain.value;
    config.stopGainMesas = inputGainMesas.value;
    config.stopLoss = inputLoss.value;
    config.timer = inputTimer.value;
    config.timerGain = inputTimerGain.value;
    config.token = tokenEdit.value;
    config.chat = chatEdit.value;

    let retornoChrome = await aa("liberacao");

    if (retornoChrome.liberacao == undefined) {
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        y();
        r();
    } else {
        let checkData = await jadbha(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);
        if (checkData.usuario) {

            let exclusivo = await poqwueiq(checkData.usuario.id);

            if (exclusivo.nome_bot == 'bot_teste_editado') {

                let updateData = await lfkjsdy(checkData.usuario.email, checkData.usuario.senha, checkData.usuario.id, 'bot_teste_editado');
                if (updateData.message) {
                    alert(updateData.message);
                    v(b());
                } else {
                    alert('Erro ao atualizar as configurações');
                }
            } else {
                y();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                r();
            }
        } else if (checkData.error) {
            y();
            userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
            senhaLiberacao.textContent = '';
            r();
        }
    }
}

function q() {
    btnLiberar.style.display = 'none';
    emailEdit.style.display = 'none';
    passwordEdit.style.display = 'none';
    btnLimparDados.style.display = 'block';
    inputTextElement.style.display = 'block';
    addButtonElement.style.display = 'block';
    selectedListElement.style.display = 'block';
    labelCasas.style.display = 'block';
    btnEsportesdaSorte.style.display = 'block';
    btnKto.style.display = 'block';
    btnStake.style.display = 'block';
    btnSegurobet.style.display = 'block';
    btnBetano.style.display = 'block';
    btnReals.style.display = 'block';
    btnSuperbet.style.display = 'block';
    labelMesas.style.display = 'block';
    labelConfig1.style.display = 'block';
    labelConfig2.style.display = 'block';
    labelConfig3.style.display = 'block';
    labelConfig4.style.display = 'block';
    labelConfig5.style.display = 'block';
    labelConfig6.style.display = 'block';
    labelConfig7.style.display = 'block';
    gatilhoInput.style.display = 'block';
    apostaInput.style.display = 'block';
    gale.style.display = 'block';
    ciclo.style.display = 'block';
    posLoss.style.display = 'block';
    posGreen.style.display = 'block';
    posGain.style.display = 'block';
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
    inputSoros.style.display = 'block';
    txtSoros.style.display = 'block';
    inputCicloSequencial.style.display = 'block';
    txtCicloSequencial.style.display = 'block';
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
    inputGaleAlternado.style.display = 'block';
    txtGaleAlternado.style.display = 'block';
    inputGain.style.display = 'block';
    txtGain.style.display = 'block';
    inputGainMesas.style.display = 'block';
    txtGainMesas.style.display = 'block';
    inputLoss.style.display = 'block';
    txtLoss.style.display = 'block';
    inputTimer.style.display = 'block';
    txtTimer.style.display = 'block';
    inputTimerGain.style.display = 'block';
    txtTimerGain.style.display = 'block';
    btnSalvar.style.display = 'block';
    gatilho.style.display = 'block';
    aposta.style.display = 'block';
    chatEdit.style.display = 'block';
    tokenEdit.style.display = 'block';
}

function r() {
    btnLiberar.style.display = 'block';
    emailEdit.style.display = 'block';
    passwordEdit.style.display = 'block';
    btnLimparDados.style.display = 'none';
    inputTextElement.style.display = 'none';
    addButtonElement.style.display = 'none';
    selectedListElement.style.display = 'none';
    gatilhoInput.style.display = 'none';
    apostaInput.style.display = 'none';
    gale.style.display = 'none';
    ciclo.style.display = 'none';
    posLoss.style.display = 'none';
    posGreen.style.display = 'none';
    posGain.style.display = 'none';
    listaGatilhosElement.style.display = 'none';
    btnAdicionarGatilhos.style.display = 'none';
    labelCasas.style.display = 'none';
    btnEsportesdaSorte.style.display = 'none';
    btnKto.style.display = 'none';
    btnStake.style.display = 'none';
    btnSegurobet.style.display = 'none';
    btnBetano.style.display = 'none';
    btnReals.style.display = 'none';
    btnSuperbet.style.display = 'none';
    labelMesas.style.display = 'none';
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
    inputSoros.style.display = 'none';
    txtSoros.style.display = 'none';
    inputCicloSequencial.style.display = 'none';
    txtCicloSequencial.style.display = 'none';
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
    inputGaleAlternado.style.display = 'none';
    txtGaleAlternado.style.display = 'none';
    inputGain.style.display = 'none';
    txtGain.style.display = 'none';
    inputGainMesas.style.display = 'none';
    txtGainMesas.style.display = 'none';
    inputLoss.style.display = 'none';
    txtLoss.style.display = 'none';
    inputTimer.style.display = 'none';
    txtTimer.style.display = 'none';
    inputTimerGain.style.display = 'none';
    txtTimerGain.style.display = 'none';
    btnSalvar.style.display = 'none';
    gatilho.style.display = 'none';
    aposta.style.display = 'none';
    chatEdit.style.display = 'none';
    tokenEdit.style.display = 'none';
}

function s(config) {

    if (config.fichaEmpate == 0) {
        txtFichaEmpate.textContent = `Não apostar empate`;
    } else if (config.fichaEmpate == 1) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 0.20`;
    } else if (config.fichaEmpate == 2) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1`;
    } else if (config.fichaEmpate == 3) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 2`;
    } else if (config.fichaEmpate == 4) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 3`;
    } else if (config.fichaEmpate == 5) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 4`;
    } else if (config.fichaEmpate == 6) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5`;
    } else if (config.fichaEmpate == 7) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 10`;
    } else if (config.fichaEmpate == 8) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 15`;
    } else if (config.fichaEmpate == 9) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 20`;
    } else if (config.fichaEmpate == 10) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 25`;
    } else if (config.fichaEmpate == 11) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 50`;
    } else if (config.fichaEmpate == 12) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 75`;
    } else if (config.fichaEmpate == 13) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 100`;
    } else if (config.fichaEmpate == 14) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 125`;
    } else if (config.fichaEmpate == 15) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 250`;
    } else if (config.fichaEmpate == 16) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 375`;
    } else if (config.fichaEmpate == 17) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 500`;
    } else if (config.fichaEmpate == 18) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1K`;
    } else if (config.fichaEmpate == 19) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 1250`;
    } else if (config.fichaEmpate == 20) {
        txtFichaEmpate.textContent = `Apostar Empate com ficha R$ 5K`;
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


    if (config.galeAlternado == 0) {
        txtGaleAlternado.textContent = `Não alternar aposta no gale`;
    } else if (config.galeAlternado == 1) {
        txtGaleAlternado.textContent = `Alternar aposta a partir do gale 3`;
    }

    txtGain.textContent = `Stop Gain - R$ ${config.stopGain}`;

    txtGainMesas.textContent = `Trocar de mesa após ${config.stopGainMesas} greens`;

    txtLoss.textContent = `Stop Loss - R$ ${config.stopLoss}`;

    txtTimer.textContent = `Timer ${config.timer} min`;

    txtTimerGain.textContent = `Contar Timer depois de ${config.timerGain} greens`;

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
    inputGaleAlternado.value = config.galeAlternado;
    inputGain.value = config.stopGain;
    inputGainMesas.value = config.stopGainMesas;
    inputLoss.value = config.stopLoss;
    inputTimer.value = config.timer;
    inputTimerGain.value = config.timerGain;
    tokenEdit.value = config.token;
    chatEdit.value = config.chat;
    config = config;
    gatilhos = config.terminal;

    if (config.mesas != undefined) {
        selectedTables.length = 0;
        selectedTables.push(...config.mesas);
        a();
    }

    ii();
    q();

}

async function t() {
    if (emailEdit.value != undefined && emailEdit.value != '' &&
        passwordEdit.value != undefined && passwordEdit.value != '') {
        try {
            const data = await ajshdaw(emailEdit.value, passwordEdit.value);
            if (data.usuario) {

                let exclusivo = await poqwueiq(data.usuario.id);

                if (exclusivo.nome_bot == 'bot_teste_editado') {
                    u(data.usuario.email, data.usuario.senha);
                    w(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_teste_editado');
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

function u(email, senha) {
    let liberacao = { usuario: email, senha: senha };
    chrome.storage.local.set({ liberacao });
}

function v(data) {
    chrome.storage.local.set({ data });
}

function w(email, senha, id, bot) {

    let dataConfig = skdjfhs(email, senha, id, bot);

    if (dataConfig.token) {
        s(dataConfig);
    } else {
        kjnvksjn(email, senha, id, bot);
        s(config);
    }

}

async function x() {
    try {
        let retornoChrome = await aa("liberacao");

        if (retornoChrome.liberacao == undefined) {
            userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
            senhaLiberacao.textContent = '';
            r();
        } else {
            let data = await jadbha(retornoChrome.liberacao.usuario, retornoChrome.liberacao.senha);

            if (data.usuario) {
                let exclusivo = await poqwueiq(data.usuario.id);
                if (exclusivo.nome_bot == 'bot_teste_editado') {
                    userLiberacao.textContent = `Usuario : ${data.usuario.email}`;
                    senhaLiberacao.textContent = `Senha : ${data.usuario.senha}`;

                    let dataConfig = await skdjfhs(data.usuario.email, data.usuario.senha, data.usuario.id, 'bot_teste_editado');

                    s(dataConfig);
                } else {
                    y();
                    userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                    senhaLiberacao.textContent = '';
                    r();
                }
            } else if (data.error) {
                y();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                r();
                alert('Erro ao tentar carregar configuracao');
            } else {
                y();
                userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
                senhaLiberacao.textContent = '';
                r();
                alert('Erro ao tentar carregar configuracao');
            }
        }
    } catch (error) {
        y();
        userLiberacao.textContent = 'Suporte através do WhatsApp 21 99055-7970 (Vitor)';
        senhaLiberacao.textContent = '';
        r();
        alert('Erro ao tentar carregar configuracao');
    }
}

function y() {
    chrome.storage.local.remove('liberacao');
}

function z() {
    chrome.storage.local.remove('dataContentScript');
    alert('DADOS APAGADOS COM SUCESSO');
}

function aa(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
}

async function ajshdaw(email, senha) {
    const response = await ah('ajshdaw', { email, senha });
    return response;
}

async function jadbha(email, senha) {
    const response = await ah('jadbha', { email, senha });
    return response;
}

async function skdjfhs(email, senha, id, bot) {
    const response = await ah('skdjfhs', { email, senha, id, bot });
    return response;
}

async function kjnvksjn(email, senha, id, bot) {
    const response = await ah('kjnvksjn', { email, senha, id, bot, config });
    return response;
}

async function lfkjsdy(email, senha, id, bot) {
    const response = await ah('lfkjsdy', { email, senha, id, bot, config });
    return response;
}

async function poqwueiq(id) {
    const response = await ah('poqwueiq', { id });
    return response;
}

function ah(action, data) {
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

x();


