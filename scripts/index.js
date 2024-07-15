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
obj.four = 4;
console.log(obj);

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

//ejemplo de añadir
/*const welcomeMessages = {
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
};

welcomeMessages.finnish = "Tervetuloa";*/

//abreviada de arriba

const english = "Welcome";
const french = "Bienvenue";
const italian = "Benvenuto";
const spanish = "bienvenido";
const russian = "Добро пожаловать";
const chinese = "歡迎";

const welcomeMessages = {
  english,
  french,
  italian,
  spanish,
  russian,
  chinese,
};
