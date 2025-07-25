
let listaProtocolo = document.getElementById('protocolo')
let btnReset = document.getElementById('btnReset')

btnReset.addEventListener("click", () => {
    chrome.storage.local.get(["protocolo"], (res) => {
        let protocolo = []
        if (res.protocolo == undefined) {
            protocolo = []
        } else {
            res.protocolo = protocolo
        }
        chrome.storage.local.set({
            protocolo,
        }, () => {

        })
    })
    location.reload()
})

listarProtocolo();

function listarProtocolo() {
    chrome.storage.local.get(["protocolo"], (res) => {
        if (res.protocolo != undefined) {

            if (res.protocolo.length == 0) {
                btnReset.style.display = 'none'
                let item = document.createElement('li')
                item.appendChild(document.createTextNode('Nenhuma ação protocolada'))
                listaProtocolo.appendChild(item)
            } else {
                btnReset.style.display = 'block'
            }

            for (let i = 0; i < res.protocolo.length; i++) {
                let item = document.createElement('li')
                item.appendChild(document.createTextNode(res.protocolo[i]))
                listaProtocolo.appendChild(item)
            }
        } else {
            btnReset.style.display = 'none'
            let item = document.createElement('li')
            item.appendChild(document.createTextNode('Nenhuma ação protocolada'))
            listaProtocolo.appendChild(item)
        }
    })
}