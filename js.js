


function sumar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        let resultado = num1 / num2;
        document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
    } else {
        document.getElementById('resultado').innerHTML = "No se puede dividir entre cero.";
    }
}