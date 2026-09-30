const menubutton = document.querySelector("#button_menu");
const menumobile = document.querySelector("#mobile_menu");

menubutton.addEventListener("click", () => {
  menumobile.classList.toggle("hidden");
});

console.log("button");
