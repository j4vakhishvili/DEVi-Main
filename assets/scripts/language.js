const langEl = document.querySelector('.language');
const link = document.querySelectorAll('a');
const hola = document.querySelector('.hola');
const weare = document.querySelector('.weare');
const DEVi = document.querySelector('.DEVi');
const getStart = document.querySelector('.getstartTxt');
const whoAreWe = document.querySelector('.whoAreWe');
const whereDidDeviCome = document.querySelector('.aboutTitle');
const portfolio = document.querySelector('.ourportfolio');
const EduDevi = document.querySelector('.EduDevi');
const fullPortfolio = document.querySelector('.ourwork');
const whyusTxt = document.querySelector('.ourwork');
const contactTxt = document.querySelector('.contactTxt');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        
        const attr = el.getAttribute('language');
        hola.textContent = data[attr].Hola;
        weare.textContent = data[attr].WeAre;
        DEVi.textContent = data[attr].DEVi;
        getStart.textContent = data[attr].getStart;
        whoAreWe.textContent = data[attr].whoAreWe;
        whereDidDeviCome.textContent = data[attr].whereDidDeviCome;
        portfolio.textContent = data[attr].portfolio;
        EduDevi.textContent = data[attr].EduDevi;
        fullPortfolio.textContent = data[attr].fullPortfolio;
        contactTxt.textContent = data[attr].contactTxt;
    })
})

var data = {
    "GEka":{
        "Hola": "ჰეი",
        "WeAre": "ჩვენ ვართ",
        "DEVi": "დევი",
        "getStart": "დაწყება",
        "whoAreWe": "ვინ ვართ ჩვენ",
        "whereDidDeviCome": "საიდან წარმოიშვა დევი?",
        "portfolio": "ჩვენი პორტფოლიო",
        "EduDevi": "DEVi სწავლება",
        "fullPortfolio": "შეავლე თვალი ჩვენს ყველა პროექტს",
        "contactTxt": "კონტაქტი",
    },
    "enUS":{
        "Hola": "hola",
        "WeAre": "We are",
        "DEVi": "DEVi",
        "getStart": "Get Start",
        "whoAreWe": "Who are we",
        "whereDidDeviCome": "So where did Devi come from?",
        "portfolio": "Our Portfolio",
        "EduDevi": "DEVi EDU",
        "fullPortfolio": "see all of our projects",
        "contactTxt": "Contact",
    }
}


localStorage.setItem("lang", lang);
const currentLang = localStorage.getItem("lang");

if(currentLang == "lang"){
    
}