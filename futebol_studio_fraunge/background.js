async function fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    return await response.json();
}

async function bvmvb(email, senha, id, bot) {
    const params = new URLSearchParams({ email, senha });
    const url = `https://autobotcasino.com:5000/api/wiuhw/bvmvb/${id}/${bot}?${params}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        throw new Error('Erro 7');
    }
}

async function kljklj(email, senha) {
    const url = 'https://autobotcasino.com:5000/api/wiuhw/kljklj';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao fazer login:', error);
        throw new Error('Erro ao fazer login');
    }
}

async function reger(email, senha) {
    const url = 'https://autobotcasino.com:5000/api/wiuhw/reger';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao fazer check:', error);
        throw new Error('Erro ao verificar usuário');
    }
}

async function ergerg(email, senha, id, bot) {
    const params = new URLSearchParams({ email, senha });
    const url = `https://autobotcasino.com:5000/api/wiuhw/${id}/${bot}?${params}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao buscar configurações:', error);
        throw new Error('Erro ao buscar configurações');
    }
}

async function qwewqqw(email, senha, usuario_id, bot_tipo, configuracoes) {
    const url = 'https://autobotcasino.com:5000/api/wiuhw';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha, usuario_id, bot_tipo, configuracoes }),
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao criar configuração:', error);
        throw new Error('Erro ao criar configuração');
    }
}

async function asdsfdf(email, senha, usuario_id, bot_tipo, configuracoes) {
    const url = `https://autobotcasino.com:5000/api/wiuhw/${usuario_id}/${bot_tipo}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha, usuario_id, bot_tipo, configuracoes }),
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao atualizar configuração:', error);
        throw new Error('Erro ao atualizar configuração');
    }
}

async function wsifuw(id) {
    const url = `https://autobotcasino.com:5000/api/wiuhw/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        console.warn('Erro ao buscar configurações:', error);
        throw new Error('Erro ao buscar configurações');
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let actionPromise;
    switch (request.action) {
        case 'reger':
            actionPromise = reger(request.email, request.senha);
            break;
        case 'ergerg':
            actionPromise = ergerg(request.email, request.senha, request.id, request.bot);
            break;
        case 'qwewqqw':
            actionPromise = qwewqqw(request.email, request.senha, request.id, request.bot, request.config);
            break;
        case 'asdsfdf':
            actionPromise = asdsfdf(request.email, request.senha, request.id, request.bot, request.config);
            break;
        case 'kljklj':
            actionPromise = kljklj(request.email, request.senha);
            break;
        case 'wsifuw':
            actionPromise = wsifuw(request.id);
            break;
        case 'wsifuw':
            actionPromise = wsifuw(request.id);
            break;
        case 'trustedClick':
            actionPromise = clickTrusted(request);
            break;
        case 'bvmvb':
            actionPromise = bvmvb(request.email, request.senha, request.id, request.bot);
            break;
        default:
            console.warn('Ação desconhecida:', request.action);
            sendResponse({ success: false, error: 'Ação desconhecida' });
            return;
    }

    actionPromise
        .then(response => sendResponse(response))
        .catch(error => {
            console.warn('Erro na operação:', error);
            sendResponse({ success: false, error: error.message });
        });

    return true;
});

async function encontrarAbaCorreta() {
    return await new Promise((resolve, reject) => {
        chrome.tabs.query({}, function (tabs) {
            // Lista de domínios permitidos
            const dominiosPermitidos = [
                "betano-br.evo-games.com",
                "bwl.evo-games.com",
                "live.fantasysportnetwork.com",
                "babylonstkn.evo-games.com",
                "atlas.evo-games.com",
                "a8r.evo-games.com",
                "betconstructlatam.evo-games.com",
                "atlasbr.evo-games.com",
                "kto-bet-br.evo-games.com",
                "2yehmpp4.612qggbq.com"
            ];

            // Procurar uma aba que tenha um dos domínios permitidos
            let abaEncontrada = tabs.find(tab => {
                return dominiosPermitidos.some(dominio => tab.url && tab.url.includes(dominio));
            });

            if (abaEncontrada) {
                console.info(`✅ Aba encontrada: ${abaEncontrada.id} (${abaEncontrada.url})`);
                resolve(abaEncontrada.id);
            } else {
                reject("❌ Nenhuma aba com os domínios permitidos foi encontrada.");
            }
        });
    });
}

let debuggerAttachedTabId = null;

async function attachDebuggerIfNeeded() {
    const tabId = await encontrarAbaCorreta();
    if (debuggerAttachedTabId === tabId) {
        return tabId; // Já anexado
    }
    return new Promise((resolve, reject) => {
        const target = { tabId };
        chrome.debugger.attach(target, "1.2", function () {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
                return;
            }
            debuggerAttachedTabId = tabId;
            resolve(tabId);
        });
    });
}

async function clickTrusted(request) {
    try {
        const tabId = await attachDebuggerIfNeeded();
        const target = { tabId };

        return await new Promise((resolve, reject) => {
            chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
                type: "mouseMoved",
                x: request.x,
                y: request.y
            }, function (moveResponse) {
                if (chrome.runtime.lastError || (moveResponse && moveResponse.error)) {
                    reject("Erro ao mover o mouse");
                    return;
                }
                chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
                    type: "mousePressed",
                    button: "left",
                    x: request.x,
                    y: request.y,
                    clickCount: 1
                }, function (pressResponse) {
                    if (chrome.runtime.lastError || (pressResponse && pressResponse.error)) {
                        reject("Erro ao pressionar o mouse");
                        return;
                    }
                    chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
                        type: "mouseReleased",
                        button: "left",
                        x: request.x,
                        y: request.y,
                        clickCount: 1
                    }, function (releaseResponse) {
                        if (chrome.runtime.lastError || (releaseResponse && releaseResponse.error)) {
                            reject("Erro ao liberar o botão do mouse");
                            return;
                        }
                        resolve({ success: true });
                    });
                });
            });
        });
    } catch (error) {
        console.info("❌ Erro ao executar o clique:", error);
        return { success: false, error };
    }
}

// Opcional: para liberar o debugger manualmente
async function detachDebugger() {
    if (!debuggerAttachedTabId) return { success: false, error: "Debugger não está anexado!" };
    const target = { tabId: debuggerAttachedTabId };
    return new Promise((resolve) => {
        chrome.debugger.detach(target, function () {
            debuggerAttachedTabId = null;
            resolve({ success: true });
        });
    });
}

// Adicione também o listener para detach automático:
chrome.debugger.onDetach.addListener(function (source, reason) {
    debuggerAttachedTabId = null;
    console.info("Debugger foi desanexado automaticamente:", reason);
});