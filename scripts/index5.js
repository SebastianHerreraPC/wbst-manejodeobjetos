//Comparando objetos

function compare(firstObj, secondObj) {
  return firstObj === secondObj;
}

const first = {
  property: "valor",
};

const second = {
  property: "valor",
};

const third = second;

compare(first, second); // false
compare(second, third); // true

//ejercicio 2
function isEqual(firstObj, secondObj) {
  const firstKeys = Object.keys(firstObj);
  const secondKeys = Object.keys(secondObj);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  return firstKeys.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
}

const primero = {
  property: "valor",
  anotherProperty: "otro valor",
};

const segundo = {
  property: "valor",
  anotherProperty: "otro valor",
};

const tercero = {
  property: "valor",
  anotherProperty: "otro valor más",
};

isEqual(primero, segundo);
isEqual(segundo, tercero);
