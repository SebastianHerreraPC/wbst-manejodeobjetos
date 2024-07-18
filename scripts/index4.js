//Copiar
function copy(obj) {
  const res = {};

  Object.keys(obj).forEach(function (key) {
    res[key] = obj[key];
  });

  return res;
}

const firstObj = {
  one: 1,
  two: 2,
  three: 3,
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

firstObj.four = 4;
