let countries1 = new Array ('Argentina', 'Belize', 'Bermuda', 'Bolivia',
                           'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'Falkland Islands', 'French Guiana', 'El Salvador', 'Greenland', 'Guatemala', 'Guyana', 
                           'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 
                           'Suriname', 'United States', 'Uruguay', 'Venezuela');

//Array that stores all links to American flags
var links = new Array ("https://flagcdn.com/h120/ar.png",
                      "https://flagcdn.com/h120/bz.png",
                      "https://flagcdn.com/h120/bm.png",
                      "https://flagcdn.com/h120/bo.png",
                      "https://flagcdn.com/h120/br.png",
                      "https://flagcdn.com/h120/ca.png",
                      "https://flagcdn.com/h120/cl.png",
                      "https://flagcdn.com/h120/co.png",
                      "https://flagcdn.com/h120/cr.png",
                      "https://flagcdn.com/h120/ec.png",
                      "https://flagcdn.com/h120/fk.png",
                      "https://flagcdn.com/h120/gf.png",
                      "https://flagcdn.com/h120/sv.png",
                      "https://flagcdn.com/h120/gl.png",
                      "https://flagcdn.com/h120/gt.png",
                      "https://flagcdn.com/h120/gy.png",
                      "https://flagcdn.com/h120/hn.png",
                      "https://flagcdn.com/h120/mx.png",
                      "https://flagcdn.com/h120/ni.png",
                      "https://flagcdn.com/h120/pa.png",
                      "https://flagcdn.com/h120/py.png",
                      "https://flagcdn.com/h120/pe.png",
                      "https://flagcdn.com/h120/sr.png",
                      "https://flagcdn.com/h120/us.png",
                      "https://flagcdn.com/h120/uy.png",
                      "https://flagcdn.com/h120/ve.png");

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 26;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 26){
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
    
    let percent = score / 26 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 20.8){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/26 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/26 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});