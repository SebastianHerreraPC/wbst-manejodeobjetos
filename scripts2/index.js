//gestion de eventos

//eventos de teclado
const inputTeclado = document.querySelector(".form__input-teclado");

inputTeclado.addEventListener("keydown", function () {
  console.log("Estas pulsando una tecla cualquiera");
});
inputTeclado.addEventListener("keypress", function () {
  console.log(
    "Estas presionando otra, recuerda que los modificadores no cuentan"
  );
});
inputTeclado.addEventListener("keyup", function () {
  console.log("Dejaste de presionar la tecla");
});

//detectores y controladores
