//eliminacion de propiedades

const objeto = {
  one: 1,
};

delete objeto.one;
console.log(objeto);

//comprobar si la clave esta en el elemento

const animales = {
  mascotaUno: "perro",
  mascotaDos: "gato",
};
console.log("mascotaUno" in animales);

//ejercicio de eliminacion
const right = {
  right1: "⇸",
  right2: "→",
  notLeft: "⇍",
  right3: "⇛",
  right4: "⇉",
  left: "⇐",
};

delete right.left;

console.log(right);

//ejercicio
const welcomeMessages = {
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "Bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
  finnish: "Tervetuloa",
};

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach(function (key) {
    delete welcomeMessages[key];
  });
}

deleteWelcomeMessages(["italian", "french"]);

console.log(welcomeMessages);
