function validarNumeros(input) {
    const valor = input.value;

    // Verifica si el valor es un número y no comienza con cero
    if (/^[1-9]\d*$/.test(valor)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }

    // Compara los dos números y muestra el resultado
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');

    if (numero1 === numero2) {
        resultado.textContent = 'Los números son iguales';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Los números son diferentes';
        resultado.style.color = 'red';
    }
}

