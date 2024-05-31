// # Ejercicios funciones con return

// - Crea una función que reciba tres números y devuelva la media entre esos 3 números.

function getAverage(a, b, c) {
  return (a + b + c) / 3;
}
const resultSum = getAverage(7, 9, 5);
console.log(resultSum);

// - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio.
function getDiscount(price, discount) {
  const discountPrice = (discount * 100) / price;
  return price - discountPrice;
}
const discountResult = getDiscount(100, 20);
console.log(discountResult);

// - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión  namea - nameb
function getSumString(nameA, nameB) {
  return nameA + ' - ' + nameB;
}

const sumName = getSumString('Carlos', 'Lucas');

console.log(sumName);
// - Crea una función que reciba un número de kilómetros y los devuelva conviertidos a metros.   km - - m  /100
function convertKmToM(distance) {
  return distance * 1000;
}
const distance = convertKmToM(5);
console.log(distance);

// - Crea una función que reciba un número de horas y las devuelva convertidas a segundos.
function convertHtoS(hour) {
  return hour * 3600;
}

const resultHtoS = convertHtoS(2);

console.log(resultHtoS);
