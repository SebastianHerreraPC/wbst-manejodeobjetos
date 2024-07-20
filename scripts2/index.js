//gestion de eventos

//eventos de teclado
const inputTeclado = document.querySelector(".form__input-teclado");

inputTeclado.addEventListener("keydown", function () {
  console.log("Cada vez que pulses una tecla, me registro");
});
