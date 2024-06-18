// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array
// const resultMultForEach = numbers => {
//   const result = numbers.map(value, index) => {return value * index;}
// };
// console.log(result);

// resultMultForEach([1, 2, 3, 4, 5]);

const resultMultForEach = numbers => {
  const result = numbers.map((value, index) => {
    return value * index;
  });

  console.log(result);
};

resultMultForEach([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2
const resultDividedForEach = numbers => {
  const result = numbers.map((value, index) => {
    return value / (index + 2);
  });

  console.log(result);
};

resultDividedForEach([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const wordUpperCase = word => {
  const result = word.map((value, index) => {
    return value.toUpperCase();
  });

  console.log(result);
};

wordUpperCase(['a', 'b', 'c', 'd']);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
const findletter = (word, letter) => {
  const result = word.filter(word => {
    return word.startsWith(letter);
  });
  if (result.length === 0) {
    console.log('Ninguna palabra coincide');
    return;
  }
  console.log(result);
};

findletter(['Perro', 'Casa', 'Gato', 'Garaje'], 'G');

// - Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

const findletterCaps = (word, letter) => {
  const result = word.filter(word => {
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    return word.startsWith(letter);
  });
  if (result.length === 0) {
    console.log('Ninguna palabra coincide');
    return;
  }
  console.log(result);
};

findletterCaps(['Perro', 'Casa', 'Gato', 'Garaje'], 'G');

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const sumArrayNumbers = (acc, cur) => {
  const result = acc.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(result);
};

sumArrayNumbers([1, 2, 3, 4, 5, 6, 7]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const pownumbers = (acc, cur) => {
  const result = acc.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(result);
};

pownumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
const vowelUpperCase = word => {
  const isVowel = 'aeiouáéíóú';

  const result = word.split('').reduce((acc, letter) => {
    if (isVowel.includes(letter)) {
      return acc + letter.toUpperCase();
    } else return acc + letter.toLowerCase();
  }, '');

  console.log(result);
};

vowelUpperCase('consola');

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

/*const evenOddArray = numbers => {
  const odd = [];
  const even = [];

  const randomValue = Math.ceil(Math.random() * 10);

  // MAP O FILTER YA CREAN EL ARRAY
  const total = numbers.map(numbers => {
    if ((numbers * randomValue) % 2 === 0) {
      return even.push(numbers * randomValue);
    } else {
      return odd.push(numbers * randomValue);
    }
  });

  console.log(even);
  console.log(odd);
};

evenOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); */

const evenOddArray = numbers => {
  const randomValue = Math.ceil(Math.random() * 10);

  const arrayResult = numbers.map(number => {
    return number * randomValue;
  });

  const evens = arrayResult.filter(number => number % 2 === 0);
  const odds = arrayResult.filter(number => number % 2 !== 0);

  console.log(numbers, evens, odds);
};

evenOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

const firstLastUpperCase = word => {
  const firstAndLastLetter = word.flatMap(letter => {
    const firstLetter = letter.charAt(0).toUpperCase();
    const lastLetter = letter.charAt(letter.length - 1).toUpperCase();

    return [firstLetter, lastLetter];
  });
  console.log(firstAndLastLetter);
};

firstLastUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']);

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const numberMayorOfFive = numbers => {
  const total = numbers.some(number => number > 5);
  console.log(total);
};

numberMayorOfFive([2, 4, 6, 8, 10, 13, 15, 16, 4, 6, 2]);

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const checkLengthWord = (word, lengthWord) => {
  const total = word.filter(word => word.length === lengthWord);
  console.log(total);
};
checkLengthWord(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const dividersNumber = (numbers, diviser) => {
  const total = numbers.filter(number => number % diviser === 0);
  console.log(total);
};

dividersNumber([2, 3, 4, 5, 6, 7], 2);
// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const ageLessThirty = year => {
  const userUnderThirty = year.filter(user => {
    return user.age < 30;
  });
  console.log(userUnderThirty);
};

ageLessThirty(users);
// - Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

const allEvenNumbers = numbers => {
  const total = numbers.every(number => {
    return number % 2 === 0;
  });
  console.log(total);
};

allEvenNumbers([2, 4, 6, 8, 10, 13, 15, 16, 4, 6, 2]);

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
const sortByLength = words => {
  const sortResult = words.sort((a, b) => a.length - b.length);
  console.log(sortResult);
};

sortByLength(['perro', 'gato', 'ratón', 'elefante', 'tigre']);
// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

const reverseWord = word => {
  const reversResult = word.split('').reduce((reversed, char) => char + reversed);
  console.log(reversResult);
};
reverseWord('Mariposas');

// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]
const sumDigits = numbers => {
  const sumValues = numbers.map(number => {
    const digits = String(number);

    const sumDigits = digits.split('').reduce((acc, digit) => acc + Number(digit), 0);
    return sumDigits;
  });
  console.log(sumValues);
};

sumDigits([21, 34, 87, 10, 28]);
// - Utilizando el array que te dejo a continuación resuelve estos dos retos.

//   - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.

//   - Crea una función que reciba un id de usuario y borre ese usuario del array.

const usersArray = [
  {
    id: 'user001',
    name: 'Juan',
    surname: 'Pérez',
    age: 30
  },
  {
    id: 'user002',
    name: 'María',
    surname: 'González',
    age: 25
  },
  {
    id: 'user003',
    name: 'Pedro',
    surname: 'Sánchez',
    age: 35
  },
  {
    id: 'user004',
    name: 'Ana',
    surname: 'Martínez',
    age: 28
  },
  {
    id: 'user005',
    name: 'Luis',
    surname: 'López',
    age: 40
  }
];

const orderUserByAge = condition => {
  if (condition === 'age') {
    usersArray.sort((a, b) => a.age - b.age);
  } else if (condition === 'name') {
    usersArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (condition === 'surname') {
    usersArray.sort((a, b) => a.surname.localeCompare(b.surname));
  }
  console.log(usersArray);
};

orderUserByAge('age');
orderUserByAge('name');
orderUserByAge('surname');
