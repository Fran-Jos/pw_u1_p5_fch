// Definir variables para almacenar los valores y la operación
let num1 = '';
let num2 = '';
let operacion = '';

// Función para agregar números a la pantalla
function agregarNum(numero) {
  if (!operacion) {
    // Si no hay operación, agregamos al primer número
    num1 += numero;
    actualizarPantalla(num1);
  } else {
    // Si hay operación, agregamos al segundo número
    num2 += numero;
    actualizarPantalla(num2);
  }
}

// Función para realizar operaciones
function realizarOperacion(op) {
  // Si ya hay una operación, calculamos el resultado
  if (operacion && num1 && num2) {
    const resultado = calcularResultado();
    num1 = resultado.toString();
    num2 = '';
    actualizarPantalla(resultado);
  }
  // Almacenamos la nueva operación
  operacion = op;
}

// Función para calcular el resultado
function calcularResultado() {
  const valor1 = parseFloat(num1);
  const valor2 = parseFloat(num2);

  switch (operacion) {
    case '+':
      return valor1 + valor2;
    case '-':
      return valor1 - valor2;
    case '*':
      return valor1 * valor2;
    case '/':
      return valor1 / valor2;
    default:
      return valor1;
  }
}

function recetear(){
  let num1 = '';
let num2 = '';
let operacion = '';
document.getElementById('idresul').textContent = '';
}

// Función para actualizar la pantalla con el resultado
function actualizarPantalla(valor) {
  document.getElementById('idresul').textContent = valor;
}

// Evento para el botón de igual
document.getElementById('btnIgual').addEventListener('click', function () {
  if (num1 && num2 && operacion) {
    const resultadoFinal = calcularResultado();
    actualizarPantalla(resultadoFinal);
    // Reiniciar valores para permitir nuevas operaciones
    num1 = resultadoFinal.toString();
    num2 = '';
    operacion = '';

  }
});




