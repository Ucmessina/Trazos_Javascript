//Objetos
// se contruye con clase - valore

// const user = {
//   name: 'Cesar',
//   age: 79,
//   isActive: false,
//   friends: [],
//   address: {
//     city: 'Gotham'
//   }
// };

// // console.log(user.name.toUpperCase());
// user.friends.push('globo');
// console.log(user);
// console.log(user.address.city);

// # Ejercicios

// ## Objetos

// - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

// javascript
const user = {
  name: 'John', //
  surname: 'Doe', //
  age: 25, //
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street', //
    city: 'Gotham', //
    state: 'California', //
    postalCode: '12345', //
    country: 'USA' //
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(`
  Me llamo ${user.name} ${user.surname}, tengo ${user.age} y soy de ${user.address.country}.
  Soy un ${user.occupation} que ha estudiato ${user.education}.
  Mis hobbies favoritos son: ${user.hobbies[0]}, ${user.hobbies[1]} y ${user.hobbies[2]}.
  Tengo ${user.pets.length} pets: un ${user.pets[0].type} que se llama ${user.pets[0].name} y un ${user.pets[1].type} que se llama ${user.pets[1].name}.
  Vivo en ${user.address.city} - ${user.address.state} en la calle ${user.address.street} y mi codigo postal es ${user.address.postalCode}.
  Mi numero de movíl es ${user.phone}, mi correo ${user.email}.
`);

// - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

// javascript
const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};
const dataObject = number => {
  //console.log(number.length);

  //for (let i = 0; i < number.length; i++)
  for (number of data.numbers) {
    //console.log(number[i] + 2);
    data.firstFloor.secondFloor.numbersPlus2.push(number + 2);
    data.firstFloor.thirdFloor.numbersDouble.push(number * 2);
    data.fourthFloor.numbersDividedBy2.push(number / 2);
    if (number % 2 === 0) {
      data.fifthFloor.onlyEven.push(number);
    } else {
      data.fifthFloor.onlyOdd.push(number);
    }
  }
  console.log(data.firstFloor.secondFloor.numbersPlus2);
  console.log(data.firstFloor.thirdFloor.numbersDouble);
  console.log(data.fourthFloor.numbersDividedBy2);
  console.log(data.fifthFloor.onlyEven);
  console.log(data.fifthFloor.onlyOdd);
};

dataObject(data.numbers);

// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

// javascript
const dataNew = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const wordArray = phrase => {
  //console.log(word);
  const isVowel = 'aeiouáéíóú';
  const isSpecialCharacter = ' ,.';
  const splitWord = phrase.split(' ');
  const isAlphabet = 'abcdefghijklmnñopqrstuvwxyz';
  const isConsonant = 'bcdfghjklmnñpqrstvwxyz';
  secretCode = dataNew.sixthFloor.secretCode;

  //for (let i = 0; i < word.length; i++) {
  for (const caracter of phrase) {
    if (isVowel.includes(caracter)) {
      dataNew.firstFloor.vowels.push(caracter);
    } else if (!isVowel.includes(caracter) && !isSpecialCharacter.includes(caracter)) {
      dataNew.secondFloor.consonants.push(caracter);
    }
    dataNew.fourthFloor.asciiCode.push(caracter.charCodeAt());
  }

  for (let i = 0; i < splitWord.length; i++) {
    dataNew.fifthFloor.wordsInUppercase.push(splitWord[i].toUpperCase());
    dataNew.fifthFloor.wordsInLowercase.push(splitWord[i].toLowerCase());
  }

  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[áàäâa]/gi, 1);
  phrase = phrase.replace(/[éèëêe]/gi, 2);
  phrase = phrase.replace(/[íìïîi]/gi, 3);
  phrase = phrase.replace(/[óòöûo]/gi, 4);
  phrase = phrase.replace(/[úùüûu]/gi, 5);

  // const cryptVowel = {
  //   a: '1',
  //   e: '2',
  //   i: '3',
  //   o: '4',
  //   u: '5'
  // };

  const previuosLetter = letter => {
    let index = isConsonant.indexOf(letter);
    if (index === 'b') return isConsonant[isConsonant.length - 1];
    else return isConsonant[(index - 1 + isConsonant.length) % isConsonant.length];
  };

  const randomSpaceLetter = letter => {
    return isAlphabet[Math.floor(Math.random() * isAlphabet.length)];
  };

  for (let char of phrase) {
    /*if (cryptVowel[char]) {
      secretCode += cryptVowel[char];
    } else */ if (isAlphabet.includes(char)) {
      secretCode += previuosLetter(char);
    } else if (char === ' ') {
      secretCode += randomSpaceLetter();
    } else {
      secretCode += char;
    }
  }

  console.log(dataNew.firstFloor.vowels);
  console.log(dataNew.secondFloor.consonants);
  console.log(dataNew.fourthFloor.asciiCode);
  console.log(dataNew.fifthFloor.wordsInUppercase);
  console.log(dataNew.fifthFloor.wordsInLowercase);
  console.log(secretCode);
};

wordArray('Si no estudias acabarás como Victor');
