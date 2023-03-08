let nav = document.querySelector("nav");
let scrollButton = document.querySelector(".scroll-button a");
console.log(scrollButton);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollButton.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollButton.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuButton = document.querySelector(".menu-btn");
let cancelButton = document.querySelector(".cancel-btn");
menuButton.onclick = function(){
  navBar.classList.add("active");
  menuButton.style.opacity = "0";
  menuButton.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollButton.style.pointerEvents = "none";
}
cancelButton.onclick = function(){
  navBar.classList.remove("active");
  menuButton.style.opacity = "1";
  menuButton.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollButton.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuButton.style.opacity = "1";
    menuButton.style.pointerEvents = "auto";
  });
}
