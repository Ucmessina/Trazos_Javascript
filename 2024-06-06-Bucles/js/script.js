//Bucles

let counter = 0;

const printValue = () => {
  if (counter < 5) console.log(counter);

  counter++;
};

printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();

console.log('--------------------');
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('--------------------');
//Bucle for of

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log('--------------------');
// automaticamente se encarga de recoger cada uno de los valores del array
for (const number of numbers) {
  console.log(number);
}

const word = 'Tatiana';
for (const letter of word) {
  console.log(letter);
}

console.clear();
// # Ejercicios

// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const DecrNumber = number => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};

DecrNumber(10);
// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const sumArray = numbers => {
  let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }

  for (const number of numbers) {
    sum += number;
  }
  console.log(`La suma de los valores del array ${numbers} es: ${sum}`);
};
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40
const multiplyTable = number => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${i * number}`);
  }
};

multiplyTable(4);

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const multiplyTableReverse = number => {
  for (let i = 10; i >= 0; i--) {
    console.log(`${number} x ${i} = ${i * number}`);
  }
};

multiplyTableReverse(4);

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const ageBirthday = (year, age) => {
  const firstAge = year - age;
  console.log(`Nasciste en el año ${firstAge}`);

  for (let i = firstAge + 1; i <= year; i++) {
    if (i === firstAge + 1) console.log(`En el año ${i} cumpliste ${i - firstAge} año`);
    else console.log(`En el año ${i} cumpliste ${i - firstAge} años`);
  }
};

ageBirthday(2024, 28);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.
const printOddEvenNumber = (numberA, numberB) => {
  if (numberA === numberB) {
    console.log(`${numberA} es igual a ${numberB}`);
    return;
  }

  const max = Math.max(numberA, numberB);
  const min = Math.min(numberA, numberB);
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

printOddEvenNumber(19, 19);

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.
const repetitionNumber = (numbersA, numbersB) => {
  for (let i = 0; i < 5; i++) {
    const randomValueA = Math.ceil(Math.random() * 10);
    numbersA.push(randomValueA);
    const randomValueB = Math.ceil(Math.random() * 10);
    numbersB.push(randomValueB);
  }

  const repValues = [];
  // for (let i = 0; i < 5; i++) {
  //   if (numbersB.includes(numbersA[i]) && !repValues.includes(numbersA[i])) {
  //     repValues.push(numbersA[i]);
  //   }
  // }

  for (number of numbersB) {
    if (numbersA.includes(number) && !repValues.includes(number)) {
      repValues.push(number);
    }
  }

  console.log(numbersA, numbersB);
  console.log(repValues);
};

repetitionNumber([], []);

// - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo
const primeNumber = number => {
  if (number < 2 || (number % 2 === 0 && number != 2)) {
    console.log(`${number} no es un número primo.`);
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`${number} no es un número primo.`);
      return;
    }
  }

  console.log(number + ' es un número primo.');
};
primeNumber(2);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)
const powValue = numbers => {
  for (const number of numbers) {
    console.log(`Numero: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
  }
};

powValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
const upperCaseWord = word => {
  let newWord = '';
  const vowel = 'aeiou';

  for (letter of word) {
    if (vowel.includes(letter)) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter.toLowerCase();
    }
  }
  console.log(newWord);
};

upperCaseWord('Tatiana');

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//   a: 3,
//   e: 3,
//   i: 1,
//   o: 1,
//   u: 1
const checkVowelRepetition = phrase => {
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;

  for (letter of phrase.toLowerCase()) {
    let caracter = letter;

    if (caracter === 'a') a++;
    else if (caracter === 'e') e++;
    else if (caracter === 'i') i++;
    else if (caracter === 'o') o++;
    else if (caracter === 'u') u++;
  }

  console.log('a: ' + a);
  console.log('e: ' + e);
  console.log('i: ' + i);
  console.log('o: ' + o);
  console.log('u: ' + u);
};

checkVowelRepetition('Enrique ordeña cabras');

// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"
const intercalateWord = (wordA, wordB) => {
  let newWord = '';

  const lenghtWordMin = Math.min(wordA.length, wordB.length);

  for (let i = 0; i < lenghtWordMin; i++) {
    newWord += wordA[i] + wordB[i];
  }

  console.log(newWord);
};

intercalateWord('hola', 'adios');

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const reverseWord = word => {
  let newWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  console.log(newWord);

  //en una linea
  console.log(word.split('').reverse().join(''));
};

reverseWord('Mariposas');
// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const checkArrayValue = numbers => {
  console.log(numbers);
  const evenArray = [];
  const oddArray = [];
  const randomValue = Math.ceil(Math.random() * 10);

  //for (i = 0; i <= numbers.length; i++)
  for (number of numbers) {
    const newNumber = number * randomValue;

    if (newNumber % 2 === 0) evenArray.push(newNumber);
    else oddArray.push(newNumber);
  }

  console.log(evenArray);
  console.log(oddArray);
  console.log(numbers);
};

checkArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const convertArrayToUpperCase = words => {
  const upperCaseChars = [];

  for (let i = 0; i < words.length; i++) {
    upperCaseChars.push(words[i][0].toUpperCase());
    upperCaseChars.push(words[i][words[i].length - 1].toUpperCase());
  }

  console.log(upperCaseChars);
};

convertArrayToUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']);
