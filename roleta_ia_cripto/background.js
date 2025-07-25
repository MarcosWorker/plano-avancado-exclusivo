async function fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    return await response.json();
}

async function vpqetsra(historico, email, senha, perfil) {
    const url = 'https://autobotcasino.com:5000/api/vpqetsra';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ historico, email, senha, perfil }),
    };

    try {
        return await fetchJson(url, options);
    } catch (error) {
        throw new Error('Erro 01');
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
        throw new Error('Erro 02');
    }
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
        throw new Error('Erro 03');
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
        throw new Error('Erro 04');
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
        throw new Error('Erro 05');
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
        throw new Error('Erro 06');
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
        throw new Error('Erro 07');
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
        throw new Error('Erro 08');
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
        case 'bvmvb':
            actionPromise = bvmvb(request.email, request.senha, request.id, request.bot);
            break;
        case 'vpqetsra':
            actionPromise = vpqetsra(request.historico, request.email, request.senha, request.perfil);
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
