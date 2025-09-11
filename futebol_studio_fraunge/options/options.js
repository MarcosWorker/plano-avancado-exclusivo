
var listaHistorico = document.getElementById('historico')
var btnReset = document.getElementById('btnReset')

btnReset.addEventListener("click", () => {
    chrome.storage.local.get(["historico"], (res) => {
        var historico = []
        if (res.historico == undefined) {
            historico = []
        } else {
            res.historico = historico
        }
        chrome.storage.local.set({
            historico,
        }, () => {

        })
    })
    location.reload()
})

listarhitorico()

function listarhitorico() {
    chrome.storage.local.get(["historico"], (res) => {
        if (res.historico != undefined) {

            if (res.historico.length == 0) {
                btnReset.style.display = 'none'
                let item = document.createElement('li')
                item.appendChild(document.createTextNode('Nenhuma ação protocolada no histórico'))
                listaHistorico.appendChild(item)
            } else {
                btnReset.style.display = 'block'
            }

            for (let i = 0; i < res.historico.length; i++) {
                let item = document.createElement('li')
                item.appendChild(document.createTextNode(res.historico[i]))
                listaHistorico.appendChild(item)
            }
        } else {
            btnReset.style.display = 'none'
            let item = document.createElement('li')
            item.appendChild(document.createTextNode('Nenhuma ação protocolada no histórico'))
            listaHistorico.appendChild(item)
        }
    })
}