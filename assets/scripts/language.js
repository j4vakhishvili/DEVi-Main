const langEl = document.querySelector('.language');
const link = document.querySelectorAll('a');
const hola = document.querySelector('.hola');
const weare = document.querySelector('.weare');
const DEVi = document.querySelector('.DEVi');
const getStart = document.querySelector('.getstartTxt');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        
        const attr = el.getAttribute('language');
        hola.textContent = data[attr].Hola;
        weare.textContent = data[attr].WeAre;
        DEVi.textContent = data[attr].DEVi;
        getStart.textContent = data[attr].getStart;
    })
})

var data = {
    "GEka":{
        "Hola": "ჰეი",
        "WeAre": "ჩვენ ვართ",
        "DEVi": "დევი",
        "getStart": "დაწყება",
    },
    "enUS":{
        "Hola": "hola",
        "WeAre": "We are",
        "DEVi": "DEVi",
        "getStart": "Get Start",
    }
}