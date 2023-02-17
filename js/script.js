const btn = document.getElementById("menu-btn"); //gets menu button id
const nav = document.getElementById("menu"); //gets menu id

btn.addEventListener("click", () => {
  //click function that toggles open and hide
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
