//iterar sobre propiedades con for ... in

const mascotas = {
  perro: 1,
  gato: 2,
  hamster: 3,
  lagartija: 4,
  erizo: 5,
};
for (animales in mascotas) {
  console.log(`${animales} y  ${mascotas[animales]}`);
}

Object.keys(mascotas).forEach(function (a) {
  console.log(a);
});
