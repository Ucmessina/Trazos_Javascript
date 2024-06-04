// # Ejercicios

// ## Strings

// - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else
const name = 'Carlos';
const capsWord = name.length;
if (capsWord - 1 >= 5) {
  console.log(name.toUpperCase());
} else {
  console.log(name.toLowerCase());
}

const wordToUpperOrLower = word => {
  if (word.length > 5) console.log(word.toUpperCase());
  else console.log(word.toLowerCase());
};

// - Repite el ejercicio anterior pero con un operador ternario.
capsWord - 1 >= 5 ? console.log(name.toUpperCase()) : console.log(name.toLowerCase());

// - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const getConjugation = verb => {
  if (verb.endsWith('ar')) return 'primera conjugacion';

  if (verb.endsWith('er')) return 'segunda conjugacion';

  if (verb.endsWith('ir')) return 'tercera conjugacion';

  return false;
};

const checkConjucation = (verb1, verb2) => {
  const resultVerb1 = getConjugation(verb1);
  const resultVerb2 = getConjugation(verb2);

  if (!resultVerb1 || !resultVerb2) {
    console.log('Uno de los verbos no es correcto');
    return;
  }

  console.log(`El verbo ${verb1} es de la ${resultVerb1} y el verbo ${verb2} es de la ${resultVerb2}`);
};

checkConjucation('comer', 'dormir');

// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

const generateWord = (a, b, c) => {
  a = a.substring(3) + a.substring(2, 3);
  b = b.substring(1, 2) + b.substring(3, 4);
  c = c.substring(2, 3) + c.substring(1, 2);

  const newWord = a + b + c;
  return newWord;
};
console.log(generateWord('Hola', 'Adios', 'Mano'));

const getTwoRandomLetter = word => {
  const randomWordA = Math.floor(Math.random() * word.length);
  const randomWordB = Math.floor(Math.random() * word.length);

  return word.charAt(randomWordA) + word.charAt(randomWordB);
};

const generateWordNew = (wordA, wordB, wordC) => {
  const First = getTwoRandomLetter(wordA);
  const Second = getTwoRandomLetter(wordB);
  const Third = getTwoRandomLetter(wordC);

  const newWord = First + Second + Third;
  return newWord;
};

console.log(generateWordNew('Hola', 'Adios', 'Mano'));

// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

// const emailUser = 'dorian@gmail.com';

// const separateEmail = emailUser => {
//   const part = emailUser.split('@');
//   const partName = part[0];
//   const partEmail = part[1];

//   console.log(`El usuario es ${partName}`);
//   console.log(`El dominio es ${partEmail}`);
// };

const separateEmailNew = email => {
  const separateWord = email.indexOf('@');

  const wordName = email.substring(0, separateWord);
  const wordEmail = email.substring(separateWord + 1);

  console.log(`El usuario es ${wordName}`);
  console.log(`El dominio es ${wordEmail}`);
};

separateEmailNew('dorian@gmail.com');

// - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

const randomLetter = word => word.charAt(Math.random() * word.length);

console.log(randomLetter('Computadora'));

// - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

const intercalateUpperCaseLetter = word => {
  if (word.length !== 5) {
    return 'La palabra debe contener 5 letras';
  }

  const result =
    word[0].toLowerCase() +
    word[1].toUpperCase() +
    word[2].toLowerCase() +
    word[3].toUpperCase() +
    word[4].toLowerCase();

  console.log(result);
};

intercalateUpperCaseLetter('Adios');

// - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

const generateUsername = (name, surname) => {
  const firstName = name.charAt(0).toUpperCase();
  const randomValue = Math.ceil(Math.random() * 100);

  console.log(firstName + surname + randomValue);
};

generateUsername('Juan', 'Perez');

//CREA UNA FUNCIÓN QUE RECIBA UNA PALABRA CUALQUIERA E IMPRIMA LA PALABRA CON LA PRIMERA Y ÚLTIMA LETRA EN MAYÚSCULAS

const firstAndLastCapsLetter = word => {
  const firstLetter = word.charAt(0).toUpperCase();
  const lastLetter = word.charAt(word.length - 1).toUpperCase();
  const middleLetterSize = Math.floor(word.length / 2);

  const middleLetter = word.charAt(middleLetterSize).toUpperCase();
  const wordFirstString = word.substring(1, middleLetterSize);
  const wordSecondStrig = word.substring(middleLetterSize + 1, word.length - 1);

  console.log(firstLetter + wordFirstString + middleLetter + wordSecondStrig + lastLetter);
};

firstAndLastCapsLetter('ratón');

// Función que reciba 2 palabras y te las devuelve unidas por un guión
const wordWithDash = (word1, word2) => word1 + '-' + word2;
console.log(wordWithDash('Lucas', 'Carlos'));

// Función que reciba una palabra de 5 letras y te diga quantas vocales tiene

const checkVocalWord = word => {
  const isVocal = char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
  let counterSize = 0;

  counterSize += isVocal(word.charAt(0)) ? 1 : 0;
  counterSize += isVocal(word.charAt(1)) ? 1 : 0;
  counterSize += isVocal(word.charAt(2)) ? 1 : 0;
  counterSize += isVocal(word.charAt(3)) ? 1 : 0;
  counterSize += isVocal(word.charAt(4)) ? 1 : 0;

  console.log(counterSize);
};

checkVocalWord('raton');

// Función que reciba una palabra de 5 letras y la imprima al reves, adios -> soidA

const revertWord = word => {
  if (word.length !== 5) {
    console.log('La palabra debe contener 5 letras!');
  }

  const reversed = word.charAt(4) + word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0);
  console.log(reversed);
};
revertWord('Adiós');

// Crea una funcion llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus digitos

const sumDigits = number => {
  if (number < 100 || number > 999) {
    console.log('El número debe tener exactamente 3 cifras');
  }

  const number1 = Math.floor(number / 100);
  const number2 = Math.floor((number % 100) / 10);
  const number3 = number % 10;

  console.log(number1 + number2 + number3);
};
sumDigits(456);
