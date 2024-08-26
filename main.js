const form = document.getElementById('form-agenda')
const contatos = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaSecao()
    atualizando()
})

function adicionaSecao(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefone = document.getElementById('telefone')

    if (contatos.includes(inputNomeContato.value)){
        alert('Esse contato já existe!')
    } else {
        contatos.push(inputNomeContato.value)

        let linha = `<tr>`
        linha+= `<td>${inputNomeContato.value}</td>`
        linha+= `<td>${inputTelefone.value}</td>`
        linha+= `</tr>`

        linhas += linha
    }

    inputNomeContato.value = ''
    inputTelefone.value = ''
}

function atualizando(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}