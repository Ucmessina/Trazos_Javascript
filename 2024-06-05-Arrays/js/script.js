// Arrays
const lettersArray = ['a', 'b', 'c'];

console.log(lettersArray);
console.log(lettersArray[0]);
console.log(lettersArray[0].toUpperCase());

console.log(lettersArray.length);
console.log(lettersArray.includes('a'));
console.log(lettersArray.indexOf('c'));

lettersArray.pop(); // elimina el último elemento del array
lettersArray.push('a', 'b', 'c'); // añade elemento al final del array
console.log(lettersArray);

lettersArray.shift(); // elimina el primer elemento del array
lettersArray.unshift('d', 'e'); // añade elemento al principio del array
console.log(lettersArray);

// Nombres de arrays en plural, mientras que en singular para variables : letters = array : letter = variable

const printnumbers = numbers => numbers;
console.log(printnumbers([1, 2, 3, 4, 5])); // como pasar array en una función

// # Ejercicios

// ## Arrays

// - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const printRandomNumber = numbers => numbers[Math.floor(Math.random() * numbers.length)];
console.log(printRandomNumber([1, 2, 3, 4, 5]));

// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

//   - "La suma de todos los números es:[suma]"
//   - "La media de todos los números es:[media]"
//   - "El mayor es [mayor] y el menor es [menor]"
const printSumAverageHight = number => {
  console.log(number[0] + number[1] + number[2]);
  console.log((number[0] + number[1] + number[2]) / number.length);
  console.log(Math.max(number[0], number[1], number[2]));
};
printSumAverageHight([4, 5, 6]);

// - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const randomNumberCheck = number => {
  const randomValue = Math.ceil(Math.random() * 10);

  if (number.includes(randomValue)) console.log(`El numero ${randomValue} está en el array`);
  else console.log(`El numero ${randomValue} no está en el array`);
};
randomNumberCheck([3, 4, 6, 7, 8]);

// - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
const pushArrayNumber = number => {
  const firstRandomValue = Math.ceil(Math.random() * 100);
  const secondRandomValue = Math.ceil(Math.random() * 100);
  const thirdRandomValue = Math.ceil(Math.random() * 100);

  number.push(firstRandomValue, secondRandomValue, thirdRandomValue);

  console.log(number);
};

pushArrayNumber([]);
// - Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const checkArrayValue = number => {
  console.log(number);
  const evenArray = [];
  const oddArray = [];

  const randomValue = Math.ceil(Math.random() * 10);
  const firstNumber = number[0] * randomValue;
  const secondNumber = number[1] * randomValue;
  const thirdNumber = number[2] * randomValue;
  const fourthNumber = number[3] * randomValue;
  const fifthNumber = number[4] * randomValue;

  if (firstNumber % 2 === 0) evenArray.push(firstNumber);
  else oddArray.push(firstNumber);

  if (secondNumber % 2 === 0) evenArray.push(secondNumber);
  else oddArray.push(secondNumber);

  if (thirdNumber % 2 === 0) evenArray.push(thirdNumber);
  else oddArray.push(thirdNumber);

  if (fourthNumber % 2 === 0) evenArray.push(fourthNumber);
  else oddArray.push(fourthNumber);

  if (fifthNumber % 2 === 0) evenArray.push(fifthNumber);
  else oddArray.push(fifthNumber);

  console.log(evenArray);
  console.log(oddArray);
};

checkArrayValue([1, 2, 3, 4, 5]);

// - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = number => {
  const getLetters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];

  const numberToArrayPosition = number % 23;

  console.log(getLetters[numberToArrayPosition]);
};

dniLetter(70253012);

// - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const convertArrayToUpperCase = word => [
  word[0].charAt(0).toUpperCase(),
  word[0].charAt(word[0].length - 1).toUpperCase(),
  word[1].charAt(0).toUpperCase(),
  word[1].charAt(word[1].length - 1).toUpperCase(),
  word[2].charAt(0).toUpperCase(),
  word[2].charAt(word[2].length - 1).toUpperCase()
];
console.log(convertArrayToUpperCase(['hola', 'adios', 'gato']));

//Another option
const convertArrayToUpperCaseNew = word => {
  const newWord = [];
  const zeroPart = word[0].charAt(0).toUpperCase();
  const onePart = word[0].charAt(word[0].length - 1).toUpperCase();
  const twoPart = word[1].charAt(0).toUpperCase();
  const threePart = word[1].charAt(word[1].length - 1).toUpperCase();
  const fourPart = word[2].charAt(0).toUpperCase();
  const fivePart = word[2].charAt(word[2].length - 1).toUpperCase();

  newWord.push(zeroPart, onePart, twoPart, threePart, fourPart, fivePart);
  console.log(newWord);
};
convertArrayToUpperCaseNew(['hola', 'adios', 'gato']);
