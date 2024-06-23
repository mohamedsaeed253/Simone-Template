const toggle = document.querySelector(".toggle");
var isShown = 0;

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showNav() {
  toggle.style.left = "0";
  const menuBar = document.querySelector(".menu-bar");
  menuBar.style.display = "none";
  const closeBar = document.querySelector(".close");
  closeBar.style.display = "inline-block";
  const nav = document.querySelector("nav");
  nav.style.background = "black";
  isShown = 1;
}

function closeNav() {
  toggle.style.left = "-100%";
  const closeBar = document.querySelector(".close");
  closeBar.style.display = "none";
  const menuBar = document.querySelector(".menu-bar");
  menuBar.style.display = "inline-block";
  const navScroll = document.querySelector("nav");
  if (window.scrollY > 100) {
    navScroll.style.background = "black";
  } else {
    navScroll.style.background = "transparent";
  }
  isShown = 0;
}

window.addEventListener("scroll", function () {
  const navScroll = document.querySelector("nav");
  const arrowUP = this.document.querySelector(".fixed-arrow");
  if (this.window.scrollY > 400) {
    arrowUP.style.display = "flex";
  } else {
    arrowUP.style.display = "none";
  }
  if (window.scrollY > 100) {
    navScroll.style.background = "black";
  } else if (window.scrollY < 100 && isShown == 1) {
    navScroll.style.background = "black";
  } else {
    navScroll.style.background = "transparent";
  }
});

/*
 */
