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
