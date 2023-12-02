var formulario = document.getElementById('formulario')


formulario.addEventListener('submit', () => {
    event.preventDefault();

    if (numero.value.length !== 19) {
        numero.classList.add('is-invalid');
    }

    if (numero.value.length == '') {
        titular.classList.add('is-invalid');
    }

    if (mes.value == '---Selecione---') {
        mes.classList.add('is-invalid');
    }
})
