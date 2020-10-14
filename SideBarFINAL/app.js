let bar = document.querySelector(".main-icon");

function myFunction() {
  let sideBar = document.querySelector(".sidebar-container");
  sideBar.classList.toggle("active");
}

bar.addEventListener("click", myFunction);
