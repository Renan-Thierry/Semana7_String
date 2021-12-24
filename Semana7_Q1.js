var elementoLista = document.querySelector('ul')
var elementoInput = document.querySelector('input')
var elementoBotao = document.querySelector('button')
var elementoPosiçao = document.querySelector('#numero')
var elementoAtualizaçao = document.querySelector('#atualizarItem')

var Itens = []

function mostraLista() {
    elementoLista.innerHTML = ''
    for (item of Itens) {
        var elementoItem = document.createElement('li')
        var textoItens = document.createTextNode(item)
        var posiçao = Itens.indexOf(item)
        elementoItem.appendChild(textoItens)
        elementoLista.appendChild(elementoItem)
    }
}

function adicionarItem() {
    var textoItem2 = elementoInput.value
    Itens.push(textoItem2)
    elementoInput.value = ''
    mostraLista()
}

function modificarItem(posiçao) {
    Itens[elementoPosiçao.value] = elementoAtualizaçao.value
    mostraLista()
}