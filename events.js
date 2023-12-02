var numero = document.getElementById('numero'); //Seleciona o id numero e traz para essa variável 
var card_numero = document.getElementById('card_numero');
var bandeira = document.getElementById('bandeira'); //Seleciona o id da bandeira e traz para essa variável
var titular = document.getElementById('titular');
var card_validade = document.getElementById('card_validade');
var card_cvv = document.getElementById('card_cvv')
var cvv = document.getElementById('cvv');
var frente = document.getElementById('frente');
var verso = document.getElementById('verso');



mes.addEventListener('change', alteraValidade)
ano.addEventListener('change', alteraValidade)

//Evento de quando a tecla é solta durante a digitação em um elemento de entrada, interação usuário com o teclado
numero.addEventListener('keyup', () => {
    var primeiroNumero = numero.value.substr(0,1) 
    alterarBandeira(primeiroNumero)
    alterarNumeroCartao()
})

//Evento para alterar o nome do titular no cartão
titular.addEventListener('keyup', () => { 
    card_titular.innerHTML = titular.value.toUpperCase();
    if (titular.value == '') {
        card_titular.innerHTML = "Nome do titular do cartão"
    }
})

cvv.addEventListener('keyup', () => { 
    card_cvv.innerHTML = cvv.value 
})

cvv.addEventListener('focus', () => {
    frente.style.display = 'none';
    verso.style.display = 'block';
    verso.classList.add('animate__flipOutY')
})

cvv.addEventListener('blur', () => {
    verso.style.display = 'none';
    frente.style.display = 'block';
    frente.classList.add('animate__flipOutY')
})

function alteraValidade () {
    card_validade.innerHTML = mes.value + '/' + ano.value.substr(2,4)
}

function alterarBandeira(primeiroNumero) {
    if (primeiroNumero == '4') {
        bandeira.innerHTML = `<img src='assets/imagens/visa.png' width="60px">`
    } else if (primeiroNumero == '5') {
        bandeira.innerHTML = `<img src='assets/imagens/mastercard.png' width="60px">`
    } 
}

function alterarNumeroCartao() {
    card_numero.innerHTML = numero.value
    if (numero.value == '') {
        card_numero.innerHTML = '0000 0000 0000 0000'
    }
}


