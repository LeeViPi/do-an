const productLink = document.querySelector(",nav-item > .nav-link");
const dropdownMenu = document.querySelector(".dropdown-menu");

productLink.addEventListener("click", function (event) {
  event.preventDefault();
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".nav-item")) {
    dropdownMenu.style.display = "none";
  }
});
