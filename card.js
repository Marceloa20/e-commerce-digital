var numero = document.getElementById('numero')
var bandeira = document.getElementById('bandeira')

function alterarBandeira() {
    if (numero.value.substr(0,1) == '4') {
        bandeira.innerHTML = '<img src="assets/imagens/visa.png" alt="Logo Visa" style="width: 50px;">'
    } else if (numero.value.substr(0,1) == '5') {
        bandeira.innerHTML = '<img src="" alt="Logo Master" style="width: 50px;">'
    } else {
        bandeira.innerHTML = ""
    }
}