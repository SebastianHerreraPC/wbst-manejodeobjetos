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
//uso de object keys
Object.keys(mascotas).forEach(function (a) {
  console.log(a);
});

//ejercicio:
const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540,
};

const stratosphere = 11000;

const sumHeights = Object.values(heights).reduce(function (current, result) {
  return current + result;
}, 0);

console.log(sumHeights >= stratosphere);

//ejercicio 2

const tion = {
  fruition: "la realización o cumplimiento de un plan o proyecto",
  depreciation: "el proceso de pérdida de valor",
  microseismicity: "un débil temblor de tierra causado por fenómenos naturales",
  alienation: "la transmisión de la propiedad",
  bifurcation:
    "el punto o la zona en la que algo se divide en dos ramas o partes",
  locomotion: "la capacidad de moverse",
  fusion: "proceso de unificar o juntar dos objetos",
};

Object.keys(tion).forEach(function (key) {
  if (!key.endsWith("tion")) delete tion[key];
});

console.log(tion);

//ejercicio con swap
function swap(obj) {
  const res = {};
  Object.keys(obj).forEach(function (key) {
    res[obj[key]] = key;
  });
  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3,
};
