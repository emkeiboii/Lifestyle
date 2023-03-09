const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".sliding")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("visible")
})