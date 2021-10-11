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
const aboutDesc = document.querySelector('.aboutDesc');
const whoareDeviDesc = document.querySelector('.whoareDeviDesc');

function getLang(){
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
            aboutDesc.textContent = data[attr].aboutDesc;
            whoareDeviDesc.textContent = data[attr].whoareDeviDesc;
            document.getAttribute("lang");
        });
    });
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
        "whoareDeviDesc": "დევი არის მცირე ჯგუფი, რომელიც ცდილობს საკუთარი თავის დამკვიდრებას კომპიუტერული სფეროს განხრით, დევის მიზანია ქართველი ხალხისთვის ტექნოლოგიური სამყაროს თვალსაწიერის გაფართოება და ამავდროულად მიზნად ისახავს, ისეთი საკითხების დანერგვას რაც ქართველ ერს წინ წაწევს.",
        "aboutDesc": "ჩვენ ბევრი ვიფიქრეთ თუ როგორ შეიძლებოდა საქართველოში პროგრამირების და ტექნოლოგიების განვითარება, ამისათვის უბრალოდ საჭირო იყო დევის შექმნა, ...და ჩვენ დავიწყეთ ჩვენი ცოდნის გაზიარება, თუმცა ეს არ იყო საკმარისი და ჩვენ ჩამოვაყალიბეთ დევი Gaming კომპანია და საბოლოოდ, ჩვენ არ ვაპირებთ გაჩერებას და ვგეგმავთ უამრავ, სხვა საჭირო საკითხებზე მუშაობას.",
    },
    "enUS":{
        "Hola": "hola",
        "WeAre": "We are",
        "DEVi": "DEVi",
        "getStart": "Get Started",
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
        "whoareDeviDesc": "DEVi is a little group that is trying to establish themselves in the field of computer science. DEVi's goal is expanding the horizons of the technological world for the Georgian people and at the same time, it aims to introduce issues that will advance the Georgian nation.",
        "aboutDesc": "We thought a lot about improving programming and technology subjects in Georgia, for that reason the only thing to do was to create DEVi, ...and we started sharing our knowledge, however, it was not enough, so we formed DEVi as a gaming company, too. At last, we are not going to stop, we will add plenty of other important subjects.",
    }
}

function getGe(){
    document.getElementById("whyusEng").style.display = "none";
    document.getElementById("whyusGe").style.display = "block";
    document.getElementById("ctFormEng").style.display = "none";
    document.getElementById("ctFormGe").style.display = "inline-block";
    document.body.setAttribute("lang", "1");
}

function getEn(){
    document.getElementById("whyusEng").style.display = "block";
    document.getElementById("whyusGe").style.display = "none";
    document.getElementById("ctFormEng").style.display = "inline-block";
    document.getElementById("ctFormGe").style.display = "none";
    document.body.removeAttribute("lang");
}

window.addEventListener("load", () => {
    getLang();
});