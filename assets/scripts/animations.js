const header = document.querySelector("header");
const startTxt = document.querySelector(".landtxt");
const lemmeStartbtn = document.querySelector(".getstart");
const landing = document.querySelector(".landing");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");
const b10 = document.querySelector(".b10");
const b11 = document.querySelector(".b11");
const b12 = document.querySelector(".b12");
const aboutIllustration = document.querySelector(".about-illustration");

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
    b6.style.transform = "scale(1)";
    b7.style.transform = "scale(1)";
    b8.style.transform = "scale(1)";
    b9.style.transform = "scale(1)";
    b10.style.transform = "scale(1)";
    b11.style.transform = "scale(1)";
    b12.style.transform = "scale(1)";
});

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;

    aboutIllustration.style.left = scrollValue * 0.5 + "px";
});