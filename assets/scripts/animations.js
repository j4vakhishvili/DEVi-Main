const header = document.querySelector("header");
const startTxt = document.querySelector(".landtxt");
const lemmeStartbtn = document.querySelector(".getstart");
const landing = document.querySelector(".landing");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");

window.addEventListener("load", () => {
    header.style.transform = "translateX(0)";
    startTxt.style.transform = "translateX(0)";
    startTxt.style.opacity = "100%";
    lemmeStartbtn.style.transform = "scale(1)";
    lemmeStartbtn.style.opacity = "100%";
    landing.style.opacity = "2%";
    b1.style.transform = "scale(1)";
    b2.style.transform = "scale(1)";
    b3.style.transform = "scale(1)";
    b4.style.transform = "scale(1)";
    b5.style.transform = "scale(1)";
});