//copiar elementos
function shallowCopy(objeto) {
  return Object.assign({}, objeto);
}

const myObjeto = {
  uno: 1,
  dos: 2,
  tres: 3,
};

const myObjetoCopy = shallowCopy(myObjeto);

console.log(myObjetoCopy === myObjeto);

//con 3 parametros

function evolution(obj, key, value) {
  const newObject = Object.assign({}, obj);
  newObject[key] = value;
  return newObject;
}

const fish = {
  eggs: "huevas",
  eyes: 2,
  habitat: "agua",
};

const frog = evolution(fish, "legs", 4);

console.log("rana: ", frog);
console.log("pez: ", fish);
