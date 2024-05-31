// return de una función
// const value = 9;

// function printNumber(number) {
//   console.log(number);
// }

function getDoubleValue(number) {
  const double = number * 2;
  //   printNumber(double);
  return double;
}
const result = getDoubleValue(8);
console.log(result);

function getSum(a, b) {
  //   const resultSum = a + b;
  return a + b;
}
const resultSum = getSum(8, 4);
console.log(resultSum);

//Conversion vacía
// == comprara valor
// === compara valor y tipo
const isActive = true;
console.log(!isActive);

const numberA = 6;
const numberB = '6';
console.log(numberA * numberB);
console.log(String(numberA));
console.log(Number(numberA));

//los string siempre dan True, solo los vación dan False
console.log(Boolean(numberA));
//los numeros siempre dan true menos el 0 que siempre da false
// undefined y null siempre dan false

//Condicionales if/else
const number = 6;
const numberz = 6;
if (number) {
  console.log('Es mayor a 0');
}

if (number === numberz) {
  console.log('Funciona');
}

// && ||

const a = 1;
const b = 10;
const c = 5;
const d = 8;

if (a < b && c < d) console.log('todo ok');

if (a < b || d > a || a < c) console.log('todo ok');
