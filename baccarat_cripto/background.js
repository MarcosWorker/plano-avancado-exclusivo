async function fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    return await response.json();
}

async function ajshdaw(email, senha) {
    const url = 'https://autobotcasino.com:5000/api/slkfjlsa/ajshdaw';
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
        throw new Error('Erro 1');
    }
}

async function jadbha(email, senha) {
    const url = 'https://autobotcasino.com:5000/api/slkfjlsa/jadbha';
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
        throw new Error('Erro 2');
    }
}

async function skdjfhs(email, senha, id, bot) {
    const params = new URLSearchParams({ email, senha });
    const url = `https://autobotcasino.com:5000/api/slkfjlsa/${id}/${bot}?${params}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        throw new Error('Erro 3');
    }
}

async function kjnvksjn(email, senha, usuario_id, bot_tipo, configuracoes) {
    const url = 'https://autobotcasino.com:5000/api/slkfjlsa';
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
        throw new Error('Erro 4');
    }
}

async function lfkjsdy(email, senha, usuario_id, bot_tipo, configuracoes) {
    const url = `https://autobotcasino.com:5000/api/slkfjlsa/${usuario_id}/${bot_tipo}`;
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
        throw new Error('Erro 5');
    }
}

async function poqwueiq(id) {
    const url = `https://autobotcasino.com:5000/api/slkfjlsa/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        throw new Error('Erro 6');
    }
}

async function sakjnda(email, senha, id, bot) {
    const params = new URLSearchParams({ email, senha });
    const url = `https://autobotcasino.com:5000/api/slkfjlsa/sakjnda/${id}/${bot}?${params}`;
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let actionPromise;
    switch (request.action) {
        case 'jadbha':
            actionPromise = jadbha(request.email, request.senha);
            break;
        case 'skdjfhs':
            actionPromise = skdjfhs(request.email, request.senha, request.id, request.bot);
            break;
        case 'kjnvksjn':
            actionPromise = kjnvksjn(request.email, request.senha, request.id, request.bot, request.config);
            break;
        case 'lfkjsdy':
            actionPromise = lfkjsdy(request.email, request.senha, request.id, request.bot, request.config);
            break;
        case 'ajshdaw':
            actionPromise = ajshdaw(request.email, request.senha);
            break;
        case 'poqwueiq':
            actionPromise = poqwueiq(request.id);
            break;
        case 'sakjnda':
            actionPromise = sakjnda(request.email, request.senha, request.id, request.bot);
            break;
        default:
            sendResponse({ success: false, error: 'Ação desconhecida' });
            return;
    }

    actionPromise
        .then(response => sendResponse(response))
        .catch(error => {
            sendResponse({ success: false, error: error.message });
        });

    return true;
});
