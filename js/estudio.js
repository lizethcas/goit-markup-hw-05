/* document.getElementById("portafolio").style.color = "#2196F3"; */
document.getElementById("estudio").style.color = "#2196F3";
const openModal = document.querySelector(".boton");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".cerrar");
/* const estudio = document.querySelector("portafolio"); */

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
