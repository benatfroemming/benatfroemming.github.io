let countries1 = new Array ("Aland Islands", "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
                           "Cyprus", "Czechia", "Denmark", "Estonia", "Faroe Islands", "Finland", "France", "Georgia", "Germany", "Gibraltar", "Greece", "Guernsey", "Hungary", "Iceland",
                           "Ireland", "Isle of Man", "Italy", "Jersey", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
                           "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
                           "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine",
                           "United Kingdom", "Vatican City");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/ax.png",
                      "https://flagcdn.com/h120/al.png",
                      "https://flagcdn.com/h120/ad.png",
                      "https://flagcdn.com/h120/am.png",
                      "https://flagcdn.com/h120/at.png",
                      "https://flagcdn.com/h120/az.png",
                      "https://flagcdn.com/h120/by.png",
                      "https://flagcdn.com/h120/be.png",
                      "https://flagcdn.com/h120/ba.png",
                      "https://flagcdn.com/h120/bg.png",
                      "https://flagcdn.com/h120/hr.png",
                      "https://flagcdn.com/h120/cy.png",
                      "https://flagcdn.com/h120/cz.png",
                      "https://flagcdn.com/h120/dk.png",
                      "https://flagcdn.com/h120/ee.png",
                      "https://flagcdn.com/h120/fo.png",
                      "https://flagcdn.com/h120/fi.png",
                      "https://flagcdn.com/h120/fr.png",
                      "https://flagcdn.com/h120/ge.png",
                      "https://flagcdn.com/h120/de.png",
                      "https://flagcdn.com/h120/gi.png",
                      "https://flagcdn.com/h120/gr.png",
                      "https://flagcdn.com/h120/gg.png",
                      "https://flagcdn.com/h120/hu.png",
                      "https://flagcdn.com/h120/is.png",
                      "https://flagcdn.com/h120/ie.png",
                      "https://flagcdn.com/h120/im.png",
                      "https://flagcdn.com/h120/it.png",
                      "https://flagcdn.com/h120/je.png",
                      "https://flagcdn.com/h120/xk.png",
                      "https://flagcdn.com/h120/lv.png",
                      "https://flagcdn.com/h120/li.png",
                      "https://flagcdn.com/h120/lt.png",
                      "https://flagcdn.com/h120/lu.png",
                      "https://flagcdn.com/h120/mt.png",
                      "https://flagcdn.com/h120/md.png",
                      "https://flagcdn.com/h120/mc.png",
                      "https://flagcdn.com/h120/me.png",
                      "https://flagcdn.com/h120/nl.png",
                      "https://flagcdn.com/h120/mk.png",
                      "https://flagcdn.com/h120/no.png",
                      "https://flagcdn.com/h120/pl.png",
                      "https://flagcdn.com/h120/pt.png",
                      "https://flagcdn.com/h120/ro.png",
                      "https://flagcdn.com/h120/ru.png",
                      "https://flagcdn.com/h120/sm.png",
                      "https://flagcdn.com/h120/rs.png",
                      "https://flagcdn.com/h120/sk.png",
                      "https://flagcdn.com/h120/si.png",
                      "https://flagcdn.com/h120/es.png",
                      "https://flagcdn.com/h120/se.png",
                      "https://flagcdn.com/h120/ch.png",
                      "https://flagcdn.com/h120/tr.png",
                      "https://flagcdn.com/h120/ua.png",
                      "https://flagcdn.com/h120/gb.png",
                      "https://flagcdn.com/h120/va.png");

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 56;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 56){
        count = Math.floor(Math.random() * startVal);
        randomCountry = countries1[count];
        img.src = "";
        img.src = links[count];
        flagCount = flagCount + 1;
    }else{
        finishQuiz();
    }
}
let wrong;
const land = document.querySelectorAll(".land");
for (i = 0; i < land.length; i++) {
    land[i].addEventListener('click', (e) => {
        let country = e.target;
        let elementId = e.target.id;
        wrong = document.getElementById(randomCountry);
        if (elementId.toLowerCase() === randomCountry.toLowerCase() && countries1.includes(elementId)){
            links.splice(count, 1);
            countries1.splice(count, 1);
            score = score + 1;
            country.style.fill = 'green';
            startVal = startVal - 1; 
            randomFlag(startVal);
        }else if (elementId.toLowerCase() !== randomCountry.toLowerCase() && countries1.includes(elementId)){
            links.splice(count, 1);
            countries1.splice(count, 1);
            wrong.style.fill = 'red';
            startVal = startVal - 1; 
            randomFlag(startVal);
        }
    });
  }

function finishQuiz(){
    
    let percent = score / 56 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 44.8){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/56 (" + percent +
        "%), you have mastered this continent!";
        const start = () => {
            setTimeout(function(){
                confetti.start();
            },1000);
        };
        const stop = () => {
            setTimeout(function(){
                confetti.stop();
            },8000);
        }
        start();
        stop();
    }else{
        h1.innerHTML = "Oops!😬"
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/56 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});