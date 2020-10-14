let bar = document.querySelector(".icon");
let eachLink = document.querySelector("a");

function myFunction() {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  eachLink.classList.toggle("active");
}

bar.addEventListener("click", myFunction);
eachLink.addEventListener("click", myFunction);
