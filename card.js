var numero = document.getElementById('numero')
var bandeira = document.getElementById('bandeira')

function alterarBandeira() {
    if (numero.value.substr(0,1) == '4') {
        bandeira.innerHTML = '<img src="assets/imagens/visa.png" alt="Logo Visa" style="width: 50px;">'
    } else if (numero.value.substr(0,1) == '5') {
        bandeira.innerHTML = '<img src="assets/imagens/mastercard.png" alt="Logo Mastercard" style="width: 50px;">'
    } else {
        bandeira.innerHTML = ""
    }
}

//Alterar o nome dinamicamente
const inputNome = document.getElementById('titular') //Seleciona o input onde digita o nome
const nomeTitular = document.getElementById('card-titular') //Seleciona o span onde vai aparecer o nome no cartão
//Função para alterar o nome
function alterarNome() {
    const nome = inputNome.value //Pega o valor que é digitado no input
    nomeTitular.textContent = nome //Atualiza o elemento no cartão com o nome digitado 
}

//Função para alterar o número do cartão
function atualizarNumeroCartao() {
    const numeroDigitado = document.getElementById('numero').value //seleciona o input onde digita o número
    const numeroExibido = document.getElementById('card-numero') // seleciona onde número é digitado

    numeroExibido.textContent = numeroDigitado 
}

//Adicionando 10 anos para cima no elemento select ano
var select = document.getElementById('ano') //selecionando o select ano

//Ano atual
var anoAtual =  new Date().getFullYear()

//Adicionando 10 anos no select
for (let i = 0; i <= 10; i++) {
    var option = document.createElement("option")
    option.value = anoAtual + i
    option.text = anoAtual + i
    select.appendChild(option)
}

//Lista com os meses
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//Selecionando o select do mes
var select = document.getElementById('mes')

for (let i = 0; i < meses.length; i++) {
    var option = document.createElement("option")
    option.value = i + 1
    option.text = meses[i]
    select.appendChild(option)
}

