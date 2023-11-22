let countries1 = new Array ("Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
                           "Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
                           "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
                           "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
                           "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Reunion", "Rwanda", "Flag of Saint Helena, Ascension and Tristan da Cunha", "Sao Tome and Principe",
                           "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
                           "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/dz.png",
                      "https://flagcdn.com/h120/ao.png",
                      "https://flagcdn.com/h120/bj.png",
                      "https://flagcdn.com/h120/bw.png",
                      "https://flagcdn.com/h120/bf.png",
                      "https://flagcdn.com/h120/bi.png",
                      "https://flagcdn.com/h120/cm.png",
                      "https://flagcdn.com/h120/cv.png",
                      "https://flagcdn.com/h120/cf.png",
                      "https://flagcdn.com/h120/td.png",
                      "https://flagcdn.com/h120/km.png",
                      "https://flagcdn.com/h120/cg.png",
                      "https://flagcdn.com/h120/cd.png",
                      "https://flagcdn.com/h120/ci.png",
                      "https://flagcdn.com/h120/dj.png",
                      "https://flagcdn.com/h120/eg.png",
                      "https://flagcdn.com/h120/gq.png",
                      "https://flagcdn.com/h120/er.png",
                      "https://flagcdn.com/h120/sz.png",
                      "https://flagcdn.com/h120/et.png",
                      "https://flagcdn.com/h120/ga.png",
                      "https://flagcdn.com/h120/gm.png",
                      "https://flagcdn.com/h120/gh.png",
                      "https://flagcdn.com/h120/gn.png",
                      "https://flagcdn.com/h120/gw.png",
                      "https://flagcdn.com/h120/ke.png",
                      "https://flagcdn.com/h120/ls.png",
                      "https://flagcdn.com/h120/lr.png",
                      "https://flagcdn.com/h120/ly.png",
                      "https://flagcdn.com/h120/mg.png",
                      "https://flagcdn.com/h120/mw.png",
                      "https://flagcdn.com/h120/ml.png",
                      "https://flagcdn.com/h120/mr.png",
                      "https://flagcdn.com/h120/mu.png",
                      "https://flagcdn.com/h120/yt.png",
                      "https://flagcdn.com/h120/ma.png",
                      "https://flagcdn.com/h120/mz.png",
                      "https://flagcdn.com/h120/na.png",
                      "https://flagcdn.com/h120/ne.png",
                      "https://flagcdn.com/h120/ng.png",
                      "https://flagcdn.com/h120/re.png",
                      "https://flagcdn.com/h120/rw.png",
                      "https://flagcdn.com/h120/sh.png",
                      "https://flagcdn.com/h120/st.png",
                      "https://flagcdn.com/h120/sn.png",
                      "https://flagcdn.com/h120/sc.png",
                      "https://flagcdn.com/h120/sl.png",
                      "https://flagcdn.com/h120/so.png",
                      "https://flagcdn.com/h120/za.png",
                      "https://flagcdn.com/h120/ss.png",
                      "https://flagcdn.com/h120/sd.png",
                      "https://flagcdn.com/h120/tz.png",
                      "https://flagcdn.com/h120/tg.png",
                      "https://flagcdn.com/h120/tn.png",
                      "https://flagcdn.com/h120/ug.png",
                      "https://flagcdn.com/h120/eh.png",
                      "https://flagcdn.com/h120/zm.png",
                      "https://flagcdn.com/h120/zw.png");

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 58;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 58){
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
    
    let percent = score / 58 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 46.4){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/58 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/58 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});