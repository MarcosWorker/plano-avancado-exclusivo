document.addEventListener('DOMContentLoaded', async () => {
    const resetStorageButton = document.getElementById('reset-storage-button');
    const loginScreen = document.getElementById('login-screen');
    const configScreen = document.getElementById('config-screen');
    const loginButton = document.getElementById('login-button');
    const saveConfigButton = document.getElementById('save-config-button');
    const errorMessage = document.getElementById('error-message');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const roletasContainer = document.getElementById('roletas-container');
    const addLegendaButton = document.getElementById('add-legenda-button');
    const legendaInput = document.getElementById('legenda-input');
    const numerosInput = document.getElementById('numeros-input');
    const legendasList = document.getElementById('legendas-list');
    const addGrupoButton = document.getElementById('add-grupo-button');
    const grupoNomeInput = document.getElementById('grupo-nome');
    const grupoList = document.getElementById('grupo-list');
    const posLossInput = document.getElementById("pos-loss");
    const posGreenInput = document.getElementById("pos-green");
    const pauseWinInput = document.getElementById("pause-win");
    const congruenciaGaleInput = document.getElementById("congruencia-gale");
    const congruenciaGaleContainer = document.getElementById("congruencia-gale-container");
    const congruenciaCicloInput = document.getElementById("congruencia-ciclo");
    const congruenciaCicloContainer = document.getElementById("congruencia-ciclo-container");
    const congruenciaFichaSelect = document.getElementById("congruencia-ficha");
    const assertividadeMaxInput = document.getElementById("assertividade-max");
    const assertividadeMinInput = document.getElementById("assertividade-min");
    const eventosMaxInput = document.getElementById("eventos-max");
    const eventosMinInput = document.getElementById("eventos-min");
    const historicoInput = document.getElementById("congruencia-historico");

    const configJogadaSection = document.getElementById('config-jogada-section');
    const grupoAtualTitulo = document.getElementById('grupo-atual');

    const galeNumQuentesInput = document.getElementById('gale-num-quentes');
    const galeNumQuentesContainer = document.getElementById('gale-num-quentes-container');
    const galeNumFriosInput = document.getElementById('gale-num-frios');
    const galeNumFriosContainer = document.getElementById('gale-num-frios-container');
    const galeTermQuentesInput = document.getElementById('gale-term-quentes');
    const galeTermQuentesContainer = document.getElementById('gale-term-quentes-container');
    const galeTermFriosInput = document.getElementById('gale-term-frios');
    const galeTermFriosContainer = document.getElementById('gale-term-frios-container');

    const storageKey = 'userStatus';
    let loggedInUser = null; // Dados do usuário logado


    // Função para atualizar os campos de multiplicadores de Gale
    function updateGaleNumQuentesFields() {
        const gale = parseInt(galeNumQuentesInput.value, 10);
        galeNumQuentesContainer.innerHTML = ''; // Limpa os campos anteriores

        if (isNaN(gale) || gale <= 0) {
            return;
        }

        // Cria os campos para cada Gale
        for (let i = 0; i < gale; i++) {
            const galeDiv = document.createElement('div');
            galeDiv.className = 'gale-container';

            const galeLabel = document.createElement('label');
            galeLabel.textContent = `Multiplicador do Gale ${i + 1}:`;

            const galeInput = document.createElement('input');
            galeInput.type = 'number';
            galeInput.className = 'multiplicador-gale-num-quentes';
            galeInput.setAttribute('data-gale', i);

            galeDiv.appendChild(galeLabel);
            galeDiv.appendChild(galeInput);
            galeNumQuentesContainer.appendChild(galeDiv);
        }
    }

    function updateGaleNumFriosFields() {
        const gale = parseInt(galeNumFriosInput.value, 10);
        galeNumFriosContainer.innerHTML = ''; // Limpa os campos anteriores

        if (isNaN(gale) || gale <= 0) {
            return;
        }

        // Cria os campos para cada Gale
        for (let i = 0; i < gale; i++) {
            const galeDiv = document.createElement('div');
            galeDiv.className = 'gale-container';

            const galeLabel = document.createElement('label');
            galeLabel.textContent = `Multiplicador do Gale ${i + 1}:`;

            const galeInput = document.createElement('input');
            galeInput.type = 'number';
            galeInput.className = 'multiplicador-gale-num-frios';
            galeInput.setAttribute('data-gale', i);

            galeDiv.appendChild(galeLabel);
            galeDiv.appendChild(galeInput);
            galeNumFriosContainer.appendChild(galeDiv);
        }
    }

    function updateGaleTermQuentesFields() {
        const gale = parseInt(galeTermQuentesInput.value, 10);
        galeTermQuentesContainer.innerHTML = ''; // Limpa os campos anteriores

        if (isNaN(gale) || gale <= 0) {
            return;
        }

        // Cria os campos para cada Gale
        for (let i = 0; i < gale; i++) {
            const galeDiv = document.createElement('div');
            galeDiv.className = 'gale-container';

            const galeLabel = document.createElement('label');
            galeLabel.textContent = `Multiplicador do Gale ${i + 1}:`;

            const galeInput = document.createElement('input');
            galeInput.type = 'number';
            galeInput.className = 'multiplicador-gale-term-quentes';
            galeInput.setAttribute('data-gale', i);

            galeDiv.appendChild(galeLabel);
            galeDiv.appendChild(galeInput);
            galeTermQuentesContainer.appendChild(galeDiv);
        }
    }

    function updateGaleTermFriosFields() {
        const gale = parseInt(galeTermFriosInput.value, 10);
        galeTermFriosContainer.innerHTML = ''; // Limpa os campos anteriores

        if (isNaN(gale) || gale <= 0) {
            return;
        }

        // Cria os campos para cada Gale
        for (let i = 0; i < gale; i++) {
            const galeDiv = document.createElement('div');
            galeDiv.className = 'gale-container';

            const galeLabel = document.createElement('label');
            galeLabel.textContent = `Multiplicador do Gale ${i + 1}:`;

            const galeInput = document.createElement('input');
            galeInput.type = 'number';
            galeInput.className = 'multiplicador-gale-term-frios';
            galeInput.setAttribute('data-gale', i);

            galeDiv.appendChild(galeLabel);
            galeDiv.appendChild(galeInput);
            galeTermFriosContainer.appendChild(galeDiv);
        }
    }

    // Evento para atualizar os campos de multiplicadores de Gale quando o valor do Gale muda
    galeNumQuentesInput.addEventListener('input', updateGaleNumQuentesFields);
    galeNumFriosInput.addEventListener('input', updateGaleNumFriosFields);
    galeTermQuentesInput.addEventListener('input', updateGaleTermQuentesFields);
    galeTermFriosInput.addEventListener('input', updateGaleTermFriosFields);

    // Função para habilitar/desabilitar campos de Gales e multiplicadores
    function toggleCamposGales(modo, ativado) {
        const quantidadeGalesInput = document.getElementById(`gale-${modo}`);
        const multiplicadoresContainer = document.getElementById(`gale-${modo}-container`);

        if (quantidadeGalesInput && multiplicadoresContainer) {
            quantidadeGalesInput.disabled = ativado; // Desabilita se o modo estiver ativado
            const multiplicadoresInputs = multiplicadoresContainer.querySelectorAll('input');
            multiplicadoresInputs.forEach(input => {
                input.disabled = ativado; // Desabilita os multiplicadores se o modo estiver ativado
            });
        }
    }

    // Função para validar Gales e Multiplicadores
    function validarGalesEMultiplicadores() {
        // Obter os modos ativados
        const modosAtivados = [];
        if (document.getElementById('numeros-quentes').checked) modosAtivados.push('num-quentes');
        if (document.getElementById('numeros-frios').checked) modosAtivados.push('num-frios');
        if (document.getElementById('terminais-quentes').checked) modosAtivados.push('term-quentes');
        if (document.getElementById('terminais-frios').checked) modosAtivados.push('term-frios');

        // Se menos de 2 modos estão ativados, não há necessidade de validação
        if (modosAtivados.length < 2) return true;

        // Obter os valores de Gales e Multiplicadores do primeiro modo ativado
        const primeiroModo = modosAtivados[0];
        const quantidadeGalesPrimeiroModo = parseInt(document.getElementById(`gale-${primeiroModo}`).value, 10);
        const multiplicadoresPrimeiroModo = Array.from(document.querySelectorAll(`.multiplicador-gale-${primeiroModo}`)).map(input => parseInt(input.value, 10));

        // Verificar se os outros modos ativados têm os mesmos valores
        for (const modo of modosAtivados.slice(1)) {
            const quantidadeGalesModo = parseInt(document.getElementById(`gale-${modo}`).value, 10);
            const multiplicadoresModo = Array.from(document.querySelectorAll(`.multiplicador-gale-${modo}`)).map(input => parseInt(input.value, 10));

            // Verificar quantidade de Gales
            if (quantidadeGalesModo !== quantidadeGalesPrimeiroModo) {
                alert(`A quantidade de Gales do modo "${modo}" não corresponde ao modo "${primeiroModo}". Ajuste os valores para ativar ambos.`);
                return false;
            }

            // Verificar multiplicadores de Gales
            if (multiplicadoresModo.toString() !== multiplicadoresPrimeiroModo.toString()) {
                alert(`Os multiplicadores de Gales do modo "${modo}" não correspondem ao modo "${primeiroModo}". Ajuste os valores para ativar ambos.`);
                return false;
            }
        }

        return true;
    }

    // Adicionar eventos de mudança nos checkboxes
    document.getElementById('numeros-quentes').addEventListener('change', function () {
        if (this.checked && !validarGalesEMultiplicadores()) {
            this.checked = false; // Desmarca o checkbox se a validação falhar
        } else {
            toggleCamposGales('num-quentes', this.checked); // Habilita/desabilita os campos
        }
    });

    document.getElementById('numeros-frios').addEventListener('change', function () {
        if (this.checked && !validarGalesEMultiplicadores()) {
            this.checked = false; // Desmarca o checkbox se a validação falhar
        } else {
            toggleCamposGales('num-frios', this.checked); // Habilita/desabilita os campos
        }
    });

    document.getElementById('terminais-quentes').addEventListener('change', function () {
        if (this.checked && !validarGalesEMultiplicadores()) {
            this.checked = false; // Desmarca o checkbox se a validação falhar
        } else {
            toggleCamposGales('term-quentes', this.checked); // Habilita/desabilita os campos
        }
    });

    document.getElementById('terminais-frios').addEventListener('change', function () {
        if (this.checked && !validarGalesEMultiplicadores()) {
            this.checked = false; // Desmarca o checkbox se a validação falhar
        } else {
            toggleCamposGales('term-frios', this.checked); // Habilita/desabilita os campos
        }
    });

    resetStorageButton.addEventListener('click', async () => {
        await resetStorageData();
    });

    async function resetStorageData() {
        try {
            // Valores padrões
            const defaultCongruenciaSalva = {
                contagemCiclo: 0,
                contagemLossVirtual: 0,
                contagemPosGreen: 0,
                contagemPauseWin: 0
            };

            //const defaultJogadasSalvas = []; // Garante que sempre será um array

            // Obtém os valores armazenados
            const congruenciaSalva = await getChromeStorage('congruenciaSalva') || defaultCongruenciaSalva;
            //let jogadasSalvas = await getChromeStorage('jogadasSalvas');

            // Se 'jogadasSalvas' não for um array, define como um array vazio
            // if (!Array.isArray(jogadasSalvas)) {
            //     jogadasSalvas = defaultJogadasSalvas;
            // }

            // Zera os valores de congruenciaSalva
            congruenciaSalva.contagemCiclo = 0;
            congruenciaSalva.contagemLossVirtual = 0;
            congruenciaSalva.contagemPosGreen = 0;
            congruenciaSalva.contagemPauseWin = 0;

            // Zera os valores das jogadas salvas, caso existam
            // jogadasSalvas.forEach(jogada => {
            //     jogada.contagemCiclo = 0;
            //     jogada.contagemLossVirtual = 0;
            //     jogada.contagemPosGreen = 0;
            //     jogada.contagemPauseWin = 0;
            // });

            // Salva os valores resetados
            await setChromeStorage('congruenciaSalva', congruenciaSalva);
            await setChromeStorage('jogadasSalvas', []);
            // await setChromeStorage('jogadasSalvas', jogadasSalvas);

            // Exibe um toast de sucesso
            alert('✔ Contadores resetados com sucesso!');

        } catch (error) {
            alert('⚠ Erro ao resetar contadores!');
        }
    }

    const roletasDisponiveis = [
        "Betano Bulgarian Roulette",
        "Ruleta Betano",
        "Roleta Btasileira Betano",
        "Vegas Roulette Live",
        "Elite Roulette",
        "Lucky Ball Roulette Live",
        "Sticky Bandits Roulette Live",
        "Roleta Brasileira Betano",
        "MGM Grand Live Roulette",
        "Cash Collect Roulette Live",
        "Türkçe Mega Fire Blaze Rulet",
        "Bellagio Live Roulette",
        "Speed Roleta Brasileira",
        "Ruleta Betano en Español",
        "Roleta Brasileira",
        "Mega Fire Blaze Roulette Live",
        "Who Wants To Be a Millionaire? Roulette",
        "x1000 Quantum Roulette",
        "Quantum Roulette Live",
        "Football Roulette",
        "Speed Roulette",
        "Roulette",
        "Prestige Roulette",
        "Quantum Auto Roulette",
        "UK Roulette",
        "Roulette Italiana",
        "Speed Auto Roulette",
        "Auto Roulette",
        "Bucharest Roulette",
        "Greek Quantum Roulette",
        "Turkish Roulette",
        "Deutsches Roulette",
        "Arabic Roulette",
        "Hindi Roulette",
        "Greek Roulette",
        "Auto Roulette 2",
        "Super Spin Roulette",
        "bet365 Roulette",
        "bet365 Dutch Roulette",
        "Ruleta Latinoamérica bet365",
        "Roleta Brasileira bet365",
        "Slingshot Ruleta España",
        "Nederlandstalige Roulette",
        "Ruleta Automática Cuántica",
        "Ruleta Rápida",
        "Ruleta Clásica",
        "Brussels Roulette",
        "Bucharest Quantum Roulette",
        "Quantum Ruleta España",
        "Mega Fire Blaze Ruleta España",
        "Nederlandstalige Speed Roulette",

    ];

    // Mapeamento de fichas para texto
    const fichaTextoMap = {
        0: "Modo Simulador",
        1: "Apostar com ficha $ 0,10",
        2: "Apostar com ficha $ 0,20",
        3: "Apostar com ficha $ 0,50",
        4: "Apostar com ficha $ 1,00",
        5: "Apostar com ficha $ 2,50",
        6: "Apostar com ficha $ 5,00",
        7: "Apostar com ficha $ 10,00",
        8: "Apostar com ficha $ 15,00",
        9: "Apostar com ficha $ 20,00",
        10: "Apostar com ficha $ 25,00",
        11: "Apostar com ficha $ 50,00",
        12: "Apostar com ficha $ 100,00",
        13: "Apostar com ficha $ 125,00",
        14: "Apostar com ficha $ 500,00",
        15: "Apostar com ficha $ 2000,00",
        16: "Apostar com ficha $ 2500,00",
        17: "Apostar com ficha $ 5000,00",
        18: "Apostar com ficha $ 25000,00",
    };

    let legendas = []; // Armazena as legendas criadas

    // Função para validar e adicionar uma legenda
    addLegendaButton.addEventListener('click', () => {
        const legenda = legendaInput.value.trim();
        const numeros = numerosInput.value.trim();

        // Validações
        if (!legenda || legenda.length > 3 || /\s/.test(legenda)) {
            alert('Legenda inválida! Deve ter no máximo 3 caracteres e sem espaços.');
            return;
        }

        const numerosArray = numeros.split(' ').map(Number);

        if (
            !numeros ||
            numerosArray.some(num => isNaN(num) || num < 0 || num > 36) ||
            /\s{2,}/.test(numeros) || // Verifica espaços consecutivos
            numeros.endsWith(' ') ||
            numeros.startsWith(' ')
        ) {
            alert('Números inválidos! Digite números de 0 a 36 separados por um único espaço.');
            return;
        }

        // Adiciona a legenda e os números
        legendas.push({ legenda, numeros: numerosArray });
        renderLegendas(); // Atualiza a lista de legendas
        legendaInput.value = '';
        numerosInput.value = '';
    });

    // Função para renderizar a lista de legendas
    function renderLegendas() {
        legendasList.innerHTML = '';
        legendas.forEach(({ legenda, numeros }, index) => {
            const li = document.createElement('li');

            // Adiciona o texto da legenda e números
            const textSpan = document.createElement('span');
            textSpan.className = 'legend-text';
            textSpan.textContent = `Legenda: ${legenda}  Números: ${numeros.join(' ')}`;

            // Botão de remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                legendas.splice(index, 1);
                renderLegendas();
            });

            li.appendChild(textSpan);
            li.appendChild(removeButton);
            legendasList.appendChild(li);
        });
    }

    function legendExists(legenda) {
        // Verifica se a legenda existe nas configurações salvas
        return legendas.some(l => l.legenda === legenda);
    }

    // Renderizar checkboxes para roletas
    function renderRoletas() {
        roletasContainer.innerHTML = ''; // Limpa o container
        roletasDisponiveis.forEach(roleta => {
            const div = document.createElement('div');
            div.className = 'checkbox-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = roleta;
            checkbox.id = `roleta-${roleta.replace(/\s+/g, '-').toLowerCase()}`;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = roleta;

            div.appendChild(checkbox);
            div.appendChild(label);
            roletasContainer.appendChild(div);
        });

        // Preenche o select do modo solo
        const roletaSoloSelect = document.getElementById('roleta-solo-select');
        roletaSoloSelect.innerHTML = '<option value="">-- Selecione uma Roleta --</option>'; // Limpa e adiciona placeholder
        roletasDisponiveis.forEach(roleta => {
            const option = document.createElement('option');
            option.value = roleta;
            option.textContent = roleta;
            roletaSoloSelect.appendChild(option);
        });
    }

    renderRoletas(); // Renderiza os checkboxes na inicialização

    let grupos = []; // Lista de grupos
    let grupoAtual = null;

    // Adicionar grupo
    addGrupoButton.addEventListener('click', () => {
        const nomeGrupo = grupoNomeInput.value.trim();

        if (!nomeGrupo) {
            alert('Digite um nome para o grupo.');
            return;
        }

        // Cria o grupo e adiciona à lista de grupos
        const novoGrupo = { nome: nomeGrupo, jogadas: [] };
        grupos.push(novoGrupo);

        // Define o grupo atual como o grupo recém-criado
        grupoAtual = novoGrupo;
        grupoAtualTitulo.textContent = `Configurar Grupo: ${grupoAtual.nome}`;
        configJogadaSection.classList.remove('hidden'); // Exibe o formulário de jogadas

        // Renderiza a lista de grupos com jogadas
        renderGrupos();

        // Limpa o campo de entrada
        grupoNomeInput.value = '';
    });

    // Renderizar lista de grupos
    function renderGrupos() {
        grupoList.innerHTML = ''; // Limpa a lista de grupos

        grupos.forEach((grupo, index) => {
            const li = document.createElement('li');
            li.className = 'grupo-item';
            li.innerHTML = `<strong>${grupo.nome}</strong>`;

            // Botão para selecionar o grupo
            const selectButton = document.createElement('button');
            selectButton.textContent = 'Selecionar';
            selectButton.addEventListener('click', () => {
                grupoAtual = grupo;
                grupoAtualTitulo.textContent = `Configurar Grupo: ${grupoAtual.nome}`;
                configJogadaSection.classList.remove('hidden'); // Exibe o formulário de jogadas
                // Faz a rolagem até o formulário de jogadas
                configJogadaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                renderGrupos();
            });

            // Botão para remover o grupo
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover Grupo';
            removeButton.addEventListener('click', () => {
                grupos.splice(index, 1);
                grupoAtual = null;
                grupoAtualTitulo.textContent = '';
                configJogadaSection.classList.add('hidden');
                renderGrupos();
            });

            li.appendChild(selectButton);
            li.appendChild(removeButton);

            // Lista de jogadas do grupo
            const jogadasList = document.createElement('ul');
            jogadasList.className = 'jogadas-list';

            grupo.jogadas.forEach((jogada, jogadaIndex) => {
                const jogadaItem = document.createElement('li');
                jogadaItem.className = 'jogada-item';

                jogadaItem.innerHTML = `
                    <p><strong>Gatilho:</strong> ${jogada.gatilho}</p>
                    <p><strong>Aposta:</strong> ${jogada.aposta}</p>
                    <p><strong>Loss Virtual:</strong> ${jogada.lossVirtual}</p>
                    <p><strong>Pos Green:</strong> ${jogada.posGreen}</p>
                    <p><strong>Pause Win:</strong> ${jogada.pauseWin}</p>
                    <p><strong>Ficha:</strong> ${fichaTextoMap[jogada.ficha] || "Desconhecido"}</p>
                    <h4>Ciclos:</h4>
                    <p><strong>Assertividade Mínima:</strong> ${jogada.assertividadeMin}%</p>
                    <p><strong>Assertividade Máxima:</strong> ${jogada.assertividadeMax}%</p>
                    <p><strong>Eventos Mínimos:</strong> ${jogada.eventosMin}</p>
                    <p><strong>Eventos Máximos:</strong> ${jogada.eventosMax}</p>
                    <p><strong>Histórico:</strong> ${jogada.historico}</p>
                    <p><strong>Análise:</strong> ${jogada.analise || "Nenhuma"}</p>
                `;

                // Criando lista de Gales da Jogada
                if (jogada.gale.length > 0) {
                    const galesJogadaList = document.createElement('ul');
                    galesJogadaList.className = 'gales-jogada-list';
                    galesJogadaList.innerHTML = `<h4>Gales da Jogada:</h4>`;

                    jogada.gale.forEach((multiplicador, galeIndex) => {
                        const galeItem = document.createElement('li');
                        galeItem.className = 'gale-item';
                        galeItem.innerHTML = `<p><strong>Gale ${galeIndex + 1}:</strong> Multiplicador: ${multiplicador}</p>`;
                        galesJogadaList.appendChild(galeItem);
                    });

                    jogadaItem.appendChild(galesJogadaList);
                }

                // Criar a lista de ciclos da jogada
                const ciclosList = document.createElement('ul');
                ciclosList.className = 'ciclos-list';

                jogada.ciclos.forEach((ciclo, cicloIndex) => {
                    const cicloItem = document.createElement('li');
                    cicloItem.className = 'ciclo-item';
                    cicloItem.innerHTML = `
                        <p><strong>Ciclo ${cicloIndex + 1}:</strong></p>
                        <p><strong>Multiplicador:</strong> ${ciclo.multiplicador}</p>
                        <h5>Gales:</h5>
                    `;

                    // Criar a lista de gales do ciclo
                    const galesList = document.createElement('ul');
                    galesList.className = 'gales-list';

                    ciclo.gales.forEach((multiplicador, galeIndex) => {
                        const galeItem = document.createElement('li');
                        galeItem.className = 'gale-item';
                        galeItem.innerHTML = `<p><strong>Gale ${galeIndex + 1}:</strong> Multiplicador: ${multiplicador}</p>`;
                        galesList.appendChild(galeItem);
                    });

                    cicloItem.appendChild(galesList);
                    ciclosList.appendChild(cicloItem);
                });

                jogadaItem.appendChild(ciclosList);

                // Adiciona o checkbox de Status da jogada
                const statusCheckbox = document.createElement('input');
                statusCheckbox.type = 'checkbox';
                statusCheckbox.checked = jogada.status;
                statusCheckbox.addEventListener('change', async () => {
                    jogada.status = statusCheckbox.checked; // Atualiza o status na jogada
                });

                const statusLabel = document.createElement('label');
                statusLabel.textContent = "Ativar Jogada";

                jogadaItem.appendChild(statusCheckbox);
                jogadaItem.appendChild(statusLabel);

                // Botão para remover a jogada
                const removeJogadaButton = document.createElement('button');
                removeJogadaButton.textContent = 'Remover Jogada';
                removeJogadaButton.addEventListener('click', () => {
                    grupo.jogadas.splice(jogadaIndex, 1);
                    renderGrupos();
                });

                jogadaItem.appendChild(removeJogadaButton);

                jogadasList.appendChild(jogadaItem);
            });

            li.appendChild(jogadasList);
            grupoList.appendChild(li);
        });
    }

    // Adicionar jogada ao grupo
    document.getElementById('add-jogada-button').addEventListener('click', () => {
        if (!grupoAtual) {
            alert('Selecione um grupo.');
            return;
        }

        // Pegando valores e validando
        const gatilho = document.getElementById('gatilho').value.trim();
        const aposta = document.getElementById('aposta').value.trim();
        const galeQuantidade = parseInt(document.getElementById('gale').value, 10) || 0;
        const lossVirtual = parseInt(document.getElementById('lossVirtual').value, 10) || 0;
        const posGreen = parseInt(document.getElementById('posGreen').value, 10) || 0;
        const pauseWin = parseInt(document.getElementById('pauseWin').value, 10) || 0;
        const ficha = parseInt(document.getElementById('ficha').value, 10) || 0;
        const assertividadeMax = parseInt(document.getElementById('assertividadeMax').value, 10) || 0;
        const assertividadeMin = parseInt(document.getElementById('assertividadeMin').value, 10) || 0;
        const eventosMax = parseInt(document.getElementById('eventosMax').value, 10) || 0;
        const eventosMin = parseInt(document.getElementById('eventosMin').value, 10) || 0;
        const historico = parseInt(document.getElementById('historico').value, 10) || 0;
        const analise = document.getElementById('analise').value.trim();

        if (!gatilho) {
            alert('O campo Gatilho é obrigatório.');
            return;
        }

        if (!aposta) {
            alert('O campo Aposta é obrigatório.');
            return;
        }

        // ** Gerar um ID único para a jogada **
        const jogadaId = Date.now(); // Usa o timestamp para garantir um ID único

        // ** Capturando os multiplicadores dos Gales corretamente **
        let multiplicadorGale = [];
        document.querySelectorAll('.multiplicador-gale').forEach(input => {
            multiplicadorGale.push(parseInt(input.value, 10) || 0);
        });

        // ** Capturando os ciclos e seus respectivos gales **
        const ciclos = [];
        document.querySelectorAll('.ciclo-config').forEach((cicloDiv, cicloIndex) => {
            const multiplicador = parseInt(cicloDiv.querySelector('.multiplicador-ciclo').value, 10) || 0;
            const gales = [];

            cicloDiv.querySelectorAll('.gale-config input').forEach((galeInput) => {
                gales.push(parseInt(galeInput.value, 10) || 0);
            });

            ciclos.push({
                index: cicloIndex,
                multiplicador,
                gales
            });
        });

        // ** Adiciona a jogada ao grupo atual com a estrutura correta **
        grupoAtual.jogadas.push({
            id: jogadaId, // ** Adiciona o ID da jogada **
            gatilho,
            aposta,
            gale: {
                quantidade: galeQuantidade,
                multiplicador: multiplicadorGale // Array de multiplicadores do Gale
            },
            ciclos,
            lossVirtual,
            posGreen,
            pauseWin,
            ficha,
            assertividade: "0%", // Valor padrão
            assertividadeMax,
            assertividadeMin,
            eventosMax,
            eventosMin,
            historico,
            analise,
            status: false // Valor padrão
        });

        // ** Renderiza as jogadas do grupo **
        renderGrupos();

        // ** Oculta o formulário após adicionar a jogada **
        configJogadaSection.classList.add('hidden');

        // ** Limpa os campos do formulário **
        document.getElementById('gatilho').value = '';
        document.getElementById('aposta').value = '';
        document.getElementById('ciclo-container').innerHTML = '';

        // ** Espera um pequeno tempo e rola até a última jogada do grupo atual **
        setTimeout(() => {
            // Encontrar o container da jogadas do grupo atual
            const grupoIndex = grupos.findIndex(g => g.nome === grupoAtual.nome);
            if (grupoIndex !== -1) {
                const jogadasDoGrupo = document.querySelectorAll(`.grupo-item:nth-child(${grupoIndex + 1}) .jogada-item`);
                if (jogadasDoGrupo.length > 0) {
                    const ultimaJogada = jogadasDoGrupo[jogadasDoGrupo.length - 1];
                    ultimaJogada.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 100);

    });

    // Configuração dinâmica para os multiplicadores de Gale
    document.getElementById('gale').addEventListener('input', updateGaleFields);

    function updateGaleFields() {
        const gale = parseInt(document.getElementById('gale').value, 10);
        const galeFieldsContainer = document.getElementById('gale-fields');
        const galeConfig = document.getElementById('gale-config');
        galeFieldsContainer.innerHTML = ''; // Limpa os campos anteriores

        if (isNaN(gale) || gale <= 0) {
            galeConfig.classList.add('hidden'); // Esconde a seção se não houver Gale
            return;
        }

        galeConfig.classList.remove('hidden'); // Exibe a seção de configuração

        // Cria os campos para cada Gale
        for (let i = 0; i < gale; i++) {
            const galeDiv = document.createElement('div');
            galeDiv.className = 'gale-container';

            const galeLabel = document.createElement('label');
            galeLabel.textContent = `Multiplicador do Gale ${i + 1}:`;

            const galeInput = document.createElement('input');
            galeInput.type = 'number';
            galeInput.className = 'multiplicador-gale';
            galeInput.setAttribute('data-gale', i);

            galeDiv.appendChild(galeLabel);
            galeDiv.appendChild(galeInput);
            galeFieldsContainer.appendChild(galeDiv);
        }
    }

    // gerar ciclos dinamicamente
    document.getElementById('ciclo').addEventListener('input', atualizarCiclos);

    function atualizarCiclos() {
        const cicloContainer = document.getElementById('ciclo-container');
        cicloContainer.innerHTML = ''; // Limpa os ciclos anteriores

        const numCiclos = parseInt(document.getElementById('ciclo').value, 10);
        if (isNaN(numCiclos) || numCiclos <= 0) return;

        for (let i = 0; i < numCiclos; i++) {
            const cicloDiv = document.createElement('div');
            cicloDiv.className = 'ciclo-config';
            cicloDiv.dataset.ciclo = i;

            cicloDiv.innerHTML = `
            <h5>Ciclo ${i + 1}</h5>
            <label>Multiplicador do Ciclo:</label>
            <input type="number" class="multiplicador-ciclo" data-ciclo="${i}" min="0" step="1">
            
            <label>Quantidade de Gales no Ciclo:</label>
            <input type="number" class="quantidade-gale" data-ciclo="${i}" min="0">
            
            <div class="gale-container" data-ciclo="${i}">
                <!-- Gales serão adicionados aqui -->
            </div>
        `;

            const galeInput = cicloDiv.querySelector('.quantidade-gale');
            galeInput.addEventListener('input', () => atualizarGalesNoCiclo(i, galeInput.value));

            cicloContainer.appendChild(cicloDiv);
        }
    }

    function atualizarGalesNoCiclo(cicloIndex, numGales) {
        const galeContainer = document.querySelector(`.gale-container[data-ciclo="${cicloIndex}"]`);
        galeContainer.innerHTML = ""; // Limpa os gales antigos

        numGales = parseInt(numGales, 10) || 0;
        if (numGales <= 0) return;

        for (let j = 0; j < numGales; j++) {
            const galeDiv = document.createElement("div");
            galeDiv.className = "gale-config";
            galeDiv.innerHTML = `
                <label>Multiplicador do Gale ${j + 1}:</label>
                <input type="number" class="multiplicador-gale" data-ciclo="${cicloIndex}" data-gale="${j}" min="0" step="1">
            `;
            galeContainer.appendChild(galeDiv);
        }
    }

    // Atualiza os campos dinâmicos conforme o valor de Gale muda
    congruenciaGaleInput.addEventListener("input", atualizarGaleFields);
    congruenciaCicloInput.addEventListener("input", atualizarCicloFields);

    function atualizarGaleFields() {
        const quantidade = parseInt(congruenciaGaleInput.value, 10) || 0;
        congruenciaGaleContainer.innerHTML = "";

        for (let i = 0; i < quantidade; i++) {
            const label = document.createElement("label");
            label.textContent = `Multiplicador Gale ${i + 1}:`;

            const input = document.createElement("input");
            input.type = "number";
            input.className = "multiplicador-gale";
            input.dataset.index = i;

            congruenciaGaleContainer.appendChild(label);
            congruenciaGaleContainer.appendChild(input);
        }
    }

    function atualizarCicloFields() {
        congruenciaCicloContainer.innerHTML = ""; // Limpa os ciclos anteriores

        const numCiclos = parseInt(congruenciaCicloInput.value, 10) || 0;
        if (numCiclos <= 0) return;

        for (let i = 0; i < numCiclos; i++) {
            const cicloDiv = document.createElement("div");
            cicloDiv.className = "ciclo-config";
            cicloDiv.dataset.ciclo = i;

            cicloDiv.innerHTML = `
                <h5>Ciclo ${i + 1}</h5>
                <label>Multiplicador do Ciclo:</label>
                <input type="number" class="multiplicador-ciclo" data-ciclo="${i}" min="0" step="1">
                
                <label>Quantidade de Gales no Ciclo:</label>
                <input type="number" class="quantidade-gale" data-ciclo="${i}" min="0">
                
                <div class="gale-container" data-ciclo="${i}">
                    <!-- Gales serão adicionados aqui -->
                </div>
            `;

            const galeInput = cicloDiv.querySelector(".quantidade-gale");
            galeInput.addEventListener("input", () => atualizarGalesNoCiclo(i, galeInput.value));

            congruenciaCicloContainer.appendChild(cicloDiv);
        }
    }

    // Verifica se o usuário está logado
    async function checkLoginStatus() {
        try {
            const storedStatus = await getChromeStorage(storageKey);

            if (storedStatus && storedStatus.status === true) {

                // Tenta fazer login automaticamente
                const checkResponse = await reger(storedStatus.email, storedStatus.senha);

                if (checkResponse.message === 'ok' && checkResponse.usuario) {
                    loggedInUser = storedStatus;
                    showConfigScreen();
                    await loadConfig();
                } else {
                    logoutUser(); // Se falhar, desloga e mostra a tela de login
                }
            } else {
                showLoginScreen();
            }
        } catch (error) {
            showLoginScreen();
        }
    }

    // Exibe a tela de login
    function showLoginScreen() {
        loginScreen.classList.add('visible');
        loginScreen.classList.remove('hidden');
        configScreen.classList.add('hidden');
        configScreen.classList.remove('visible');
        errorMessage.classList.add('hidden'); // Esconde mensagens de erro residuais
    }

    // Exibe a tela de configuração
    function showConfigScreen() {
        configScreen.classList.add('visible');
        configScreen.classList.remove('hidden');
        loginScreen.style.display = 'none';
        configScreen.style.display = 'flex';

        // Exibe email e senha do usuário logado
        document.getElementById('user-email').textContent = loggedInUser.email;
        document.getElementById('user-password').textContent = loggedInUser.senha;
    }

    // Carrega as configurações no formulário
    async function loadConfig() {
        // Recupera os dados do usuário do armazenamento local
        const storedStatus = await getChromeStorage(storageKey);

        // Se não houver usuário logado, não tenta carregar configurações
        if (!storedStatus || !storedStatus.status) return;

        const { email, senha, id } = storedStatus;
        const bot = "bot_teste_editado";

        try {
            const config = await ergerg(email, senha, id, bot);

            if (!config) {
                console.warn("⚠️ Nenhuma configuração encontrada!");
                return;
            }

            // Atualiza os campos com os dados do usuário logado
            loggedInUser = storedStatus;
            // document.getElementById('user-email').textContent = loggedInUser.email;
            // document.getElementById('user-password').textContent = loggedInUser.senha;

            // Marcar as roletas selecionadas
            const selectedRoletas = config.roletas || [];
            roletasDisponiveis.forEach(roleta => {
                const checkbox = document.querySelector(`input[value="${roleta}"]`);
                if (checkbox) {
                    checkbox.checked = selectedRoletas.includes(roleta);
                }
            });

            // Marcar os modos
            document.getElementById('modo-solo').checked = config.modoSolo || false;
            document.getElementById('modo-carrossel').checked = config.modoCarrossel || false;

            // Legendas
            legendas = config.legendas || [];
            renderLegendas();

            // Grupos e Jogadas
            // Carregar grupos e jogadas
            grupos = config.grupos || [];
            renderGrupos();

            // Roleta Solo
            if (config.roletaSolo) {
                document.getElementById('roleta-solo-select').value = config.roletaSolo;
            }

            //quentes e frios
            if (config.quentesFrios) {
                const quentesFrios = config.quentesFrios || {};
                document.getElementById('numeros-quentes').checked = quentesFrios.numerosQuentes || false;
                document.getElementById('qtd-aposta-num-quentes').value = quentesFrios.qtdApostaNumQuentes || 0;
                document.getElementById('qtd-vizinhos-num-quentes').value = quentesFrios.qtdVizinhosNumQuentes || 0;
                document.getElementById('qtd-historico-num-quentes').value = quentesFrios.qtdHistoricoNumQuentes || 0;
                document.getElementById('qtd-eventos-num-quentes').value = quentesFrios.qtdEventosNumQuentes || 0;
                if (quentesFrios.galeNumQuentes) {
                    document.getElementById('gale-num-quentes').value = quentesFrios.galeNumQuentes.quantidade || 0;
                    updateGaleNumQuentesFields(); // Atualiza os campos de multiplicadores de Gale

                    // Preencher os multiplicadores de Gale
                    document.querySelectorAll('.multiplicador-gale-num-quentes').forEach((input, index) => {
                        input.value = quentesFrios.galeNumQuentes.multiplicador[index] || 0;
                    });
                }

                document.getElementById('numeros-frios').checked = quentesFrios.numerosFrios || false;
                document.getElementById('qtd-aposta-num-frios').value = quentesFrios.qtdApostaNumFrios || 0;
                document.getElementById('qtd-vizinhos-num-frios').value = quentesFrios.qtdVizinhosNumFrios || 0;
                document.getElementById('qtd-historico-num-frios').value = quentesFrios.qtdHistoricoNumFrios || 0;
                document.getElementById('qtd-eventos-num-frios').value = quentesFrios.qtdEventosNumFrios || 0;
                if (quentesFrios.galeNumFrios) {
                    document.getElementById('gale-num-frios').value = quentesFrios.galeNumFrios.quantidade || 0;
                    updateGaleNumFriosFields(); // Atualiza os campos de multiplicadores de Gale

                    // Preencher os multiplicadores de Gale
                    document.querySelectorAll('.multiplicador-gale-num-frios').forEach((input, index) => {
                        input.value = quentesFrios.galeNumFrios.multiplicador[index] || 0;
                    });
                }

                document.getElementById('terminais-quentes').checked = quentesFrios.terminaisQuentes || false;
                document.getElementById('qtd-aposta-term-quentes').value = quentesFrios.qtdApostaTermQuentes || 0;
                document.getElementById('qtd-vizinhos-term-quentes').value = quentesFrios.qtdVizinhosTermQuentes || 0;
                document.getElementById('qtd-historico-term-quentes').value = quentesFrios.qtdHistoricoTermQuentes || 0;
                document.getElementById('qtd-eventos-term-quentes').value = quentesFrios.qtdEventosTermQuentes || 0;
                if (quentesFrios.galeTermQuentes) {
                    document.getElementById('gale-term-quentes').value = quentesFrios.galeTermQuentes.quantidade || 0;
                    updateGaleTermQuentesFields(); // Atualiza os campos de multiplicadores de Gale

                    // Preencher os multiplicadores de Gale
                    document.querySelectorAll('.multiplicador-gale-term-quentes').forEach((input, index) => {
                        input.value = quentesFrios.galeTermQuentes.multiplicador[index] || 0;
                    });
                }

                document.getElementById('terminais-frios').checked = quentesFrios.terminaisFrios || false;
                document.getElementById('qtd-aposta-term-frios').value = quentesFrios.qtdApostaTermFrios || 0;
                document.getElementById('qtd-vizinhos-term-frios').value = quentesFrios.qtdVizinhosTermFrios || 0;
                document.getElementById('qtd-historico-term-frios').value = quentesFrios.qtdHistoricoTermFrios || 0;
                document.getElementById('qtd-eventos-term-frios').value = quentesFrios.qtdEventosTermFrios || 0;
                if (quentesFrios.galeTermFrios) {
                    document.getElementById('gale-term-frios').value = quentesFrios.galeTermFrios.quantidade || 0;
                    updateGaleTermFriosFields(); // Atualiza os campos de multiplicadores de Gale

                    // Preencher os multiplicadores de Gale
                    document.querySelectorAll('.multiplicador-gale-term-frios').forEach((input, index) => {
                        input.value = quentesFrios.galeTermFrios.multiplicador[index] || 0;
                    });
                }

                document.getElementById('ficha-quentes-frios').value = quentesFrios.ficha || 0;
            }

            // Preencher os campos do Congruencia
            document.getElementById('modo-congruencia').checked = config.congruencia?.ativo || false;
            document.getElementById('num-gatilhos').value = config.congruencia?.numGatilhos || 0;
            document.getElementById('num-fichas').value = config.congruencia?.numFichas || 0;
            congruenciaFichaSelect.value = config.congruencia?.ficha || 0;
            posLossInput.value = config.congruencia?.lossVirtual || 0;
            posGreenInput.value = config.congruencia?.posGreen || 0;
            pauseWinInput.value = config.congruencia?.pauseWin || 0;
            assertividadeMaxInput.value = config.congruencia?.assertividadeMax || 100;
            assertividadeMinInput.value = config.congruencia?.assertividadeMin || 0;
            eventosMaxInput.value = config.congruencia?.eventosMax || 500;
            eventosMinInput.value = config.congruencia?.eventosMin || 0;
            historicoInput.value = config.congruencia?.historico || 250;

            congruenciaGaleInput.value = config.congruencia?.gale?.quantidade || 0;
            atualizarGaleFields();
            document.querySelectorAll(".multiplicador-gale").forEach((input, index) => {
                input.value = config.congruencia?.gale?.multiplicador[index] || 0;
            });

            // Carregar Ciclos e seus Gales
            congruenciaCicloInput.value = config.congruencia?.ciclos?.length || 0;
            atualizarCicloFields();

            document.querySelectorAll(".ciclo-config").forEach((cicloDiv, cicloIndex) => {
                cicloDiv.querySelector(".multiplicador-ciclo").value = config.congruencia?.ciclos[cicloIndex]?.multiplicador || 0;

                const numGales = config.congruencia?.ciclos[cicloIndex]?.gales.length || 0;
                const galeInput = cicloDiv.querySelector(".quantidade-gale");
                galeInput.value = numGales;
                atualizarGalesNoCiclo(cicloIndex, numGales);

                // Preencher os multiplicadores dos Gales dentro de cada ciclo
                document.querySelectorAll(`.multiplicador-gale[data-ciclo="${cicloIndex}"]`).forEach((galeInput, galeIndex) => {
                    galeInput.value = config.congruencia?.ciclos[cicloIndex]?.gales[galeIndex] || 0;
                });
            });


            // Preencher os campos do Timer
            document.getElementById('tempo-ocioso').value = config.timer?.tempoOcioso || 0;
            document.getElementById('num-greens').value = config.timer?.numGreens || 0;

            // Preencher os campos do Cobrir Zero
            document.getElementById('cobrir-zero').checked = config.cobrirZero?.ativo || false;
            document.getElementById('ficha-zero').value = config.cobrirZero?.ficha || 0;

            // Preencher os campos do Surf
            document.getElementById('modo-surf').checked = config.surf?.ativo || false;

            // Preencher os campos do Color Race
            document.getElementById('color-race').checked = config.colorRace?.ativo || false;
            document.getElementById('historico-color').value = config.colorRace?.historico || 0;

            // Preencher os campos do Modo IA
            document.getElementById('modo-ia').checked = config.modoIA?.ativo || false;
            document.getElementById('ficha-modo-ia').value = config.modoIA?.ficha || 0;
            document.getElementById('perfil-modo-ia').value = config.modoIA?.perfil || 0;

            // Preencher os campos do Stop
            document.getElementById('stop-win').value = config.stop?.win || 0;
            document.getElementById('stop-loss').value = config.stop?.loss || 0;

            // Preencher os campos do Telegram
            document.getElementById('monitorar-telegram').checked = config.telegram?.ativo || false;
            document.getElementById('token-telegram').value = config.telegram?.token || "";
            document.getElementById('chat-id-telegram').value = config.telegram?.chatId || "";


        } catch (error) {
            console.error('Erro ao carregar configuração:', error);
        }
    }

    // Função para salvar ou atualizar configuração
    saveConfigButton.addEventListener('click', async () => {
        if (!loggedInUser) {
            alert('Usuário não logado. Faça login novamente.');
            return;
        }

        const { email, senha, id } = loggedInUser;
        const bot = "bot_teste_editado";

        try {
            // Coletar roletas selecionadas
            const selectedRoletas = Array.from(document.querySelectorAll('#roletas-container input:checked'))
                .map(input => input.value);

            const modoSolo = document.getElementById('modo-solo').checked;
            const modoCarrossel = document.getElementById('modo-carrossel').checked;
            const roletaSolo = document.getElementById('roleta-solo-select').value;

            // Coletar os multiplicadores de Gale para Números Quentes
            const galeNumQuentesMultiplicadores = Array.from(document.querySelectorAll('.multiplicador-gale-num-quentes'))
                .map(input => parseInt(input.value, 10) || 0);

            const galeNumFriosMultiplicadores = Array.from(document.querySelectorAll('.multiplicador-gale-num-frios'))
                .map(input => parseInt(input.value, 10) || 0);

            const galeTermQuentesMultiplicadores = Array.from(document.querySelectorAll('.multiplicador-gale-term-quentes'))
                .map(input => parseInt(input.value, 10) || 0);

            const galeTermFriosMultiplicadores = Array.from(document.querySelectorAll('.multiplicador-gale-term-frios'))
                .map(input => parseInt(input.value, 10) || 0);

            const quentesFrios = {
                numerosQuentes: document.getElementById('numeros-quentes').checked,
                qtdApostaNumQuentes: parseInt(document.getElementById('qtd-aposta-num-quentes').value, 10) || 0,
                qtdVizinhosNumQuentes: parseInt(document.getElementById('qtd-vizinhos-num-quentes').value, 10) || 0,
                qtdHistoricoNumQuentes: parseInt(document.getElementById('qtd-historico-num-quentes').value, 10) || 0,
                qtdEventosNumQuentes: parseInt(document.getElementById('qtd-eventos-num-quentes').value, 10) || 0,
                galeNumQuentes: {
                    quantidade: parseInt(galeNumQuentesInput.value, 10) || 0,
                    multiplicador: galeNumQuentesMultiplicadores
                },
                numerosFrios: document.getElementById('numeros-frios').checked,
                qtdApostaNumFrios: parseInt(document.getElementById('qtd-aposta-num-frios').value, 10) || 0,
                qtdVizinhosNumFrios: parseInt(document.getElementById('qtd-vizinhos-num-frios').value, 10) || 0,
                qtdHistoricoNumFrios: parseInt(document.getElementById('qtd-historico-num-frios').value, 10) || 0,
                qtdEventosNumFrios: parseInt(document.getElementById('qtd-eventos-num-frios').value, 10) || 0,
                galeNumFrios: {
                    quantidade: parseInt(galeNumFriosInput.value, 10) || 0,
                    multiplicador: galeNumFriosMultiplicadores
                },
                terminaisQuentes: document.getElementById('terminais-quentes').checked,
                qtdApostaTermQuentes: parseInt(document.getElementById('qtd-aposta-term-quentes').value, 10) || 0,
                qtdVizinhosTermQuentes: parseInt(document.getElementById('qtd-vizinhos-term-quentes').value, 10) || 0,
                qtdHistoricoTermQuentes: parseInt(document.getElementById('qtd-historico-term-quentes').value, 10) || 0,
                qtdEventosTermQuentes: parseInt(document.getElementById('qtd-eventos-term-quentes').value, 10) || 0,
                galeTermQuentes: {
                    quantidade: parseInt(galeTermQuentesInput.value, 10) || 0,
                    multiplicador: galeTermQuentesMultiplicadores
                },
                terminaisFrios: document.getElementById('terminais-frios').checked,
                qtdApostaTermFrios: parseInt(document.getElementById('qtd-aposta-term-frios').value, 10) || 0,
                qtdVizinhosTermFrios: parseInt(document.getElementById('qtd-vizinhos-term-frios').value, 10) || 0,
                qtdHistoricoTermFrios: parseInt(document.getElementById('qtd-historico-term-frios').value, 10) || 0,
                qtdEventosTermFrios: parseInt(document.getElementById('qtd-eventos-term-frios').value, 10) || 0,
                galeTermFrios: {
                    quantidade: parseInt(galeTermFriosInput.value, 10) || 0,
                    multiplicador: galeTermFriosMultiplicadores
                },
                ficha: parseInt(document.getElementById('ficha-quentes-frios').value, 10) || 0,
            };

            const congruencia = {
                ativo: document.getElementById("modo-congruencia").checked,
                numGatilhos: parseInt(document.getElementById("num-gatilhos").value, 10) || 0,
                numFichas: parseInt(document.getElementById("num-fichas").value, 10) || 0,
                ficha: parseInt(congruenciaFichaSelect.value, 10) || 0,
                lossVirtual: parseInt(posLossInput.value, 10) || 0,
                posGreen: parseInt(posGreenInput.value, 10) || 0,
                pauseWin: parseInt(pauseWinInput.value, 10) || 0,
                assertividadeMax: parseInt(assertividadeMaxInput.value, 10) || 100,
                assertividadeMin: parseInt(assertividadeMinInput.value, 10) || 0,
                eventosMax: parseInt(eventosMaxInput.value, 10) || 500,
                eventosMin: parseInt(eventosMinInput.value, 10) || 0,
                historico: parseInt(historicoInput.value, 10) || 250,
                gale: {
                    quantidade: parseInt(congruenciaGaleInput.value, 10) || 0,
                    multiplicador: [...document.querySelectorAll(".multiplicador-gale")].map(input => parseInt(input.value, 10) || 0)
                },
                ciclos: [...document.querySelectorAll(".ciclo-config")].map((cicloDiv, index) => ({
                    index,
                    multiplicador: parseInt(cicloDiv.querySelector(".multiplicador-ciclo").value, 10) || 0,
                    gales: [...cicloDiv.querySelectorAll(".multiplicador-gale")].map(input => parseInt(input.value, 10) || 0)
                }))
            };

            const timer = {
                tempoOcioso: parseInt(document.getElementById("tempo-ocioso").value, 10) || 0,
                numGreens: parseInt(document.getElementById("num-greens").value, 10) || 0
            };

            const cobrirZero = {
                ativo: document.getElementById("cobrir-zero").checked,
                ficha: parseInt(document.getElementById("ficha-zero").value, 10) || 0
            };

            const surf = {
                ativo: document.getElementById("modo-surf").checked
            };

            const colorRace = {
                ativo: document.getElementById("color-race").checked,
                historico: parseInt(document.getElementById("historico-color").value, 10) || 0
            };

            const modoIA = {
                ativo: document.getElementById("modo-ia").checked,
                ficha: parseInt(document.getElementById("ficha-modo-ia").value, 10) || 0,
                perfil: parseInt(document.getElementById("perfil-modo-ia").value, 10) || 0
            };

            const stop = {
                win: parseInt(document.getElementById("stop-win").value, 10) || 0,
                loss: parseInt(document.getElementById("stop-loss").value, 10) || 0
            };

            const telegram = {
                ativo: document.getElementById("monitorar-telegram").checked,
                token: document.getElementById("token-telegram").value.trim(),
                chatId: document.getElementById("chat-id-telegram").value.trim()
            };

            // Inicializar o objeto config antes de adicionar quentesFrios
            const config = {
                roletas: selectedRoletas,
                roletaSolo,
                modoSolo,
                modoCarrossel,
                legendas,
                grupos,
                congruencia,
                quentesFrios,
                timer,
                cobrirZero,
                surf,
                colorRace,
                modoIA,
                stop,
                telegram
            };

            // Atualiza ou salva configuração
            const response = await asdsfdf(email, senha, id, bot, config);

            console.info('retorno update : ', response);

            if (response && response.message) {
                alert(`✅ ${response.message}!`);
            } else {
                throw new Error('Erro ao salvar as configurações.');
            }
        } catch (error) {
            alert(`Erro ao atualizar configuração: ${error.message}`);
        }
    });

    // Evento de login
    loginButton.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const senha = passwordInput.value.trim();

        if (!email || !senha) {
            alert('Por favor, insira email e senha.');
            return;
        }

        try {
            const loginResponse = await kljklj(email, senha);
            if (loginResponse.message !== 'ok' || !loginResponse.usuario) {
                alert('Erro ao autenticar. Verifique suas credenciais.');
                return;
            }

            const usuario = loginResponse.usuario;
            const id = usuario.id;

            // Verifica o nome do bot
            const exclusivityResponse = await wsifuw(id);
            if (!exclusivityResponse || exclusivityResponse.nome_bot !== 'bot_teste_editado') {
                alert('Acesso negado! Nome do bot não corresponde.');
                return;
            }

            // Salva usuário no storage
            const userData = {
                id: usuario.id,
                email: usuario.email,
                senha: usuario.senha, // Usando a senha retornada pela API
                status: true,
            };
            await setChromeStorage(storageKey, userData);

            loggedInUser = userData;
            showConfigScreen();
            await loadConfig();
        } catch (error) {
            alert('Erro ao fazer login. Tente novamente mais tarde.');
        }
    });

    async function logoutUser() {
        await setChromeStorage(storageKey, { status: false });
        loggedInUser = null;
        showLoginScreen();
    }

    async function setChromeStorage(key, value) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [key]: value }, () => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve();
            });
        });
    }

    // Inicializa verificando o status
    checkLoginStatus();



    // Helper function to get Chrome storage data
    function getChromeStorage(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get([key], (result) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve(result[key] || { status: false }); // Retorna status false se não encontrado
            });
        });
    }

    // Funções de backend (fornecidas)
    async function kljklj(email, senha) {
        const response = await enviarMensagem('kljklj', { email, senha });
        return response;
    }

    async function reger(email, senha) {
        const response = await enviarMensagem('reger', { email, senha });
        return response;
    }

    async function wsifuw(id) {
        const response = await enviarMensagem('wsifuw', { id });
        return response;
    }

    async function ergerg(email, senha, id, bot) {
        const response = await enviarMensagem('ergerg', { email, senha, id, bot });
        return response;
    }

    async function asdsfdf(email, senha, id, bot, config) {
        const response = await enviarMensagem('asdsfdf', { email, senha, id, bot, config });
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

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'updateAnalise' && message.data) {
            const { grupoIndex, jogadaIndex, valor } = message.data;

            if (grupos[grupoIndex] && grupos[grupoIndex].jogadas[jogadaIndex]) {
                grupos[grupoIndex].jogadas[jogadaIndex].analise = `${valor}`;
                renderGrupos(); // Atualiza a exibição
            }
        }
    });

});