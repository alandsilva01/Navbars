const hamburger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => navList.classList.toggle("active"));
