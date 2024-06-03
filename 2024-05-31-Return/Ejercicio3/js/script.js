// - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.
const name = 'Carlos';
const age = 18;
if (age >= 18) console.log('Hola ' + name + ', eres mayor de edad.');
else console.log('Hola ' + name + ', eres menor de edad.');

//Otra opción
const printAgeName = (age, name) => {
  if (age >= 18) {
    return 'Hola ' + name + ', eres mayor de edad porque tienes ' + age + ' años.';
  } else {
    return 'Hola ' + name + ', eres menor de edad porque tienes ' + age + ' años.';
  }
};
console.log(printAgeName(18, 'Lucas'));
console.log(printAgeName(21, 'Lucas'));
console.log(printAgeName(17, 'Lucas'));

// - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.
const numberA = 18;
const numberB = 21;

if (numberA > numberB) console.log(numberA + ' es mayor de ' + numberB);
else console.log(numberA + ' es menor de ' + numberB);

//Otra opción
const compareNumber = (numberA, numberB) => {
  if (numberA > numberB) return numberA + ' es mayor de ' + numberB;
  else return numberA + ' es menor de ' + numberB;
};
console.log(compareNumber(21, 17));
console.log(compareNumber(17, 15));

// - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.
const numberC = -31;
if (numberC === 0) console.log('El numero es igual a 0');
else if (numberC > 0) console.log('El numero es positivo');
else console.log('El numero es negativo');

//Otra opción
const checkPositiveNegativeNumber = number => {
  if (number === undefined || number === null) {
    return 'Valor incorrecto    ------';
  }
  // if (number === 0){
  //     return 'El numero es igual a 0'
  // }
  // else if (number > 0){
  //     return 'El numero es positivo'
  // }
  // else{
  //     return 'El numero es negativo'
  // }

  if (number === 0) {
    return 'El numero es igual a 0   ------';
  }
  if (number > 0) {
    return 'El numero es positivo   -----';
  }
  return 'El numero es negativo   -----';
};
console.log(checkPositiveNegativeNumber());
console.log(checkPositiveNegativeNumber(0));
console.log(checkPositiveNegativeNumber(8));
console.log(checkPositiveNegativeNumber(-2));

// - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"
const averageRating = (rate1, rate2, rate3) => {
  const averageScore = ((rate1 + rate2 + rate3) / 3).toFixed(1); //Redondeo nota
  if (averageScore >= 0 && averageScore < 5) {
    return 'Nota:' + averageScore + ' - Suspenso';
  } else if (averageScore >= 5 && averageScore < 8) {
    return 'Nota:' + averageScore + ' - Aprobado';
  } else if (averageScore > 8) {
    return 'Nota:' + averageScore + ' - Matrícula de honor';
  } else {
    return 'Notas no válidas';
  }
};
console.log(averageRating(5, 7, 1));
console.log(averageRating(8, 7, 7));
console.log(averageRating(8.3, 8.1, 7.9));
console.log(averageRating(-4, -1, -8));

// - Crea una función que reciba tres números y devuelva el mayor de ellos.
const highestNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) return num1 + ' es el numero mayor.';
  else if (num2 > num1 && num2 > num3) return num2 + ' es el numero mayor.';
  else return num3 + ' es el numero mayor.';
};
console.log(highestNumber(7, 21, 231));
console.log(highestNumber(71, 21, 23));
console.log(highestNumber(7, 211, 21));

//Otra opción:
const highestNumbers = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(highestNumbers(7, 22, 2));
console.log(highestNumbers(61, 21, 23));
console.log(highestNumbers(7, 21, 20));

// - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.
const checkDivisibility = number => {
  if (number % 3 === 0 && number % 5 === 0) return 'Es divisible por 3 y por 5';
  else if (number % 3 === 0) {
    return 'Es divisible por 3';
  } else if (number % 5 === 0) {
    return 'Es divisible por 5';
  } else {
    return 'El numero ' + number + ' no es divisible ni por 3 ni por 5';
  }
};
console.log(checkDivisibility(15));
console.log(checkDivisibility(9));
console.log(checkDivisibility(10));
console.log(checkDivisibility(13));
// - Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.
const checkParNumber = number => {
  if (number % 2 === 0) {
    return 'El numero ' + number + ' es par';
  } else {
    return 'El numero ' + number + ' es impar';
  }
};
console.log(checkParNumber(10));
console.log(checkParNumber(27));

// - Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado
const checkLeapYear = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + ' es un año bisiesto';
  } else {
    return year + ' no es un año bisiesto';
  }
};
console.log(checkLeapYear(2016));
console.log(checkLeapYear(2015));
console.log(checkLeapYear(2029));
console.log(checkLeapYear(2020));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1900));

// - Crea una función que reciba dos valores y los sume, la función debe sumar los valores aunque se los mandemos en formato string y SÓLO debe convertirlos a number si llegan como string.
const sumValidNumber = (num1, num2) => {
  if (typeof num1 === 'string') {
    num1 = Number(num1);
  }
  if (typeof num2 === 'string') {
    num2 = Number(num2);
  }

  if (isNaN(num1) || isNaN(num2)) {
    return 'Has introducido un valor string que no es un numero';
  } else {
    return num1 + num2;
  }
};
console.log(sumValidNumber(5, 10));
console.log(sumValidNumber('5', 10));
console.log(sumValidNumber('5', '10'));
console.log(sumValidNumber('Hola', '10'));
console.log(sumValidNumber('10', 'Hola'));
