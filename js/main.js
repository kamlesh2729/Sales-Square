let MobNav = document.querySelector('[data-Mobnav]');
let MenuOp = document.querySelector('[data-menubutton]');
let close = document.querySelector('[data-Mobnav]');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("NavBar").style.backgroundColor = "#ffffffee";
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("NavBar").style.backgroundColor = "#ffff";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openMenu() {
  MobNav.style.left = "0";
}

function closeMenu() {
  MobNav.style.left = "-100%";
}