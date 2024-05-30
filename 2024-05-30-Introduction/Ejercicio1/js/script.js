// # Ejercicios funciones con parámetros

// - Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".
function sayhello(name) {
  console.log('hola ' + name);
}

sayhello('Carlos');

// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(numberSide) {
  console.log('El area del cuadrado es ' + numberSide * numberSide);
}

calculateSquareArea(4);

// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(numberBase, numberHeight) {
  console.log('El area del triangulo es: ' + (numberBase * numberHeight) / 2);
}

calculateTriangleArea(4, 2);

// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculateCircleArea(numberRadius) {
  console.log('El area del circulo es: ' + 3.14 * (numberRadius * numberRadius));
}

calculateCircleArea(4);
// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(numberCelsius) {
  console.log(numberCelsius + ' ºC corresponden a ' + (numberCelsius * 1.8 + 32) + ' ºF');
}

celsiusToFahrenheit(20);

// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.
function fahrenheitToCelsius(numberFahrenheit) {
  console.log(numberFahrenheit + ' ºF corresponden a ' + (numberFahrenheit - 32) / 1.8 + ' ºC');
}

fahrenheitToCelsius(50);
// - Crea una función totalPrice que reciba un precio y le sume el IVA.
function totalPrice(price) {
  console.log(price + '€ con IVA corresponden a ' + price * 1.21 + '€');
}

totalPrice(20);
// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note) {
  console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + 'cm. ' + note);
}

writeMessage('Carlos', 'madera', 24, 'Gracias');
