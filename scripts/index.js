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

//funcion de añadir nuevas opciones

function addWelcomeMessage(language, message) {
  welcomeMessages[language] = message;
}

//ejercicio de numeros telefonicos

const phonebook = {
  Lily: {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223",
  },
  "Kyle, el hermano de Tim": {
    mobile: "+4235555616",
  },
};
//funcion que toma 3 parametros
function addPhoneNumber(name, numberType, number) {
  //si no existe el nombre en la funcion agrega el nombre con un objeto vacio
  if (!phonebook[name]) {
    phonebook[name] = {};
  }
  //accede y crea una propiedad que es el numberType como clave y se le asigna el valor de el numero de telefono
  phonebook[name][numberType] = number;
}
// cuando la función esté lista, añade el número de teléfono de xx
addPhoneNumber("Stephanie Noland", "móvil", "+4235555212");

console.log(phonebook["Stephanie Noland"].móvil); // "+4235555212"

//ejercicio aparte:

const agendaTelefonica = {
  Alice: {
    home: "000123456",
    work: "00123456789",
  },
  Bob: {
    movil: "30029504",
  },
};
function agregaNumero(nombre, lugar, telefono) {
  if (!agendaTelefonica[nombre]) {
    agendaTelefonica[nombre] = {};
  }
  agendaTelefonica[nombre][lugar] = telefono;
}

agregaNumero("Charlie", "home", "00000");
agregaNumero("Alice", "movil", "12345678910");
agregaNumero("Charlie", "work", "123456789");

console.log(agendaTelefonica["Alice"].movil);
console.log(agendaTelefonica["Charlie"].home);
console.log(agendaTelefonica["Charlie"].work);

//"Asignación Dinámica de Valores de Ventana"
const yourNumber = "D135";
let windowNumber;

const windows = {
  D133: 1,
  D134: 2,
  D135: 3,
  D136: 4,
  D137: 5,
};

windowNumber = windows[yourNumber] || windowNumber[0];

console.log(windows["D136"]);
