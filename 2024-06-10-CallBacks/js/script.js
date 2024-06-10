// Es una funcion que se encarga de ejecutar otra función

const printResult = value => {
  console.log(value);
};
const sumNumber = (a, b, cb) => {
  const result = a + b;

  cb(result);
};

//sumNumber(3, 5, printResult);

// METODOS DE CALLBACKS

//Normalmente reciben 3 parametros:
//item: Es cada elemento del array. Es obligatorio.
//index: Es su posición en el array. Es opcional
//array: El array que estamos recorriendo. Es opcional. No se usa casi nunca.
const arrayExample = ['a', 'b', 'c', 'd'];

const callback = (value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
};
arrayExample.forEach(callback);

// lo que se hace realmente para comprimr el código

//El ForEach NUNCA devuleve nada fuera de la función
const resultForEach = arrayExample.forEach(
  (value, index) => value.toUpperCase()
  //console.log(value + ' ' + index);
);
console.log(resultForEach); // --> undefined

//El map SIEMPRE devuleve fuera de la función y todo lo devuelve en un nuevo array
const resultMap = arrayExample.map(
  (value, index) => value.toUpperCase()
  // console.log(value + ' ' + index);
);

console.log(resultMap); // --> ['A', 'B', 'C', 'D']
