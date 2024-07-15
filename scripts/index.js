//objeto basico
const keretHouse = {
  bedrooms: 3,
  heat: "gas",
  hasBasement: false,
  architect: {
    name: "Jakub Szczęsny",
    homeCountry: "Poland",
    yearOfBirth: 1973,
  },
};

console.log(keretHouse);
//notacion por puntos
const obj = {
  one: 1,
  two: 2,
  three: 3,
};

console.log(obj.three);

//Abreviaciones de propiedades

const uno = 1;
const dos = 2;
const tres = 3;

function numeracion() {
  return "los numeros";
}
//opcion uno de abreviacion

/*const numeros = {
  uno: uno,
  dos: dos,
  tres: tres,
};*/

//opcion dos de abreviacion
const numeros = {
  uno,
  dos,
  tres,
};

console.log(numeros);
