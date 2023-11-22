let countries1 = new Array ('Anguilla', 'Antigua and Barbuda', 'Aruba', 'Bahamas',
                           'Barbados', 'Cayman Islands', 'Cuba', 'Curacao', 'Dominica', 'Dominican Republic', 'Grenada', 'Guadeloupe', 'Haiti', 'Jamaica', 'Martinique', 'Montserrat', 'Puerto Rico', 'Saint Barthelemy', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 
                           'Saint Vincent and the Grenadines', 'Sint Maarten', 'Trinidad and Tobago', 'Turks and Caicos Islands', 'British Virgin Islands', 'US Virgin Islands');

//Array that stores all links to American flags
var links = new Array ("https://flagcdn.com/h120/ai.png",
                      "https://flagcdn.com/h120/ag.png",
                      "https://flagcdn.com/h120/aw.png",
                      "https://flagcdn.com/h120/bs.png",
                      "https://flagcdn.com/h120/bb.png",
                      "https://flagcdn.com/h120/ky.png",
                      "https://flagcdn.com/h120/cu.png",
                      "https://flagcdn.com/h120/cw.png",
                      "https://flagcdn.com/h120/dm.png",
                      "https://flagcdn.com/h120/do.png",
                      "https://flagcdn.com/h120/gd.png",
                      "https://flagcdn.com/h120/gp.png",
                      "https://flagcdn.com/h120/ht.png",
                      "https://flagcdn.com/h120/jm.png",
                      "https://flagcdn.com/h120/mq.png",
                      "https://flagcdn.com/h120/ms.png",
                      "https://flagcdn.com/h120/pr.png",
                      "https://flagcdn.com/h120/bl.png",
                      "https://flagcdn.com/h120/kn.png",
                      "https://flagcdn.com/h120/lc.png",
                      "https://flagcdn.com/h120/mf.png",
                      "https://flagcdn.com/h120/vc.png",
                      "https://flagcdn.com/h120/sx.png",
                      "https://flagcdn.com/h120/tt.png",
                      "https://flagcdn.com/h120/tc.png",
                      "https://flagcdn.com/h120/vg.png",
                      "https://flagcdn.com/h120/vi.png");

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 27;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 27){
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
    
    let percent = score / 27 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 21.6){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/27 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/27 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});