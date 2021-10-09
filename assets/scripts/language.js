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
const QA = document.querySelector('.QA');
const Policy = document.querySelector('.Policy');
const rights = document.querySelector('.rights');
const Partner = document.querySelector('.Partner');
const otherwork = document.querySelector('.otherwork');

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
        QA.textContent = data[attr].QA;
        Policy.textContent = data[attr].Policy;
        rights.textContent = data[attr].rights;
        Partner.textContent = data[attr].Partner;
        otherwork.textContent = data[attr].otherwork;
    })
})

function langSwitch(){
    
}

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
        "QA": "ხშირად დასმული კითხვები",
        "Policy": "წესდება და პოლიტიკა",
        "rights": "ყველა უფლება დაცულია",
        "Partner": "პარტნიორი",
        "otherwork": "ჩვენი საიტები",
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
        "QA": "Frequently Asked Questions",
        "Policy": "Privacy policy",
        "rights": "All rights reserved",
        "Partner": "Our Partner",
        "otherwork": "Our Other Sites",
    }
}

function getGe(){
    document.getElementById("whyusEng").style.display = "none";
    document.getElementById("whyusGe").style.display = "block";
    document.getElementById("ctFormEng").style.display = "none";
    document.getElementById("ctFormGe").style.display = "inline-block";
}

function getEn(){
    document.getElementById("whyusEng").style.display = "block";
    document.getElementById("whyusGe").style.display = "none";
    document.getElementById("ctFormEng").style.display = "inline-block";
    document.getElementById("ctFormGe").style.display = "none";
}