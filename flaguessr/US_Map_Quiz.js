let countries1 = new Array ("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
                           "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan","Minnesota", "Mississippi", "Missouri",
                           "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
                           "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
                           "West Virginia", "Wisconsin", "Wyoming");


let links = new Array ("https://flagcdn.com/h120/us-al.png",
                       "https://flagcdn.com/h120/us-ak.png",
                       "https://flagcdn.com/h120/us-az.png",
                       "https://flagcdn.com/h120/us-ar.png",
                       "https://flagcdn.com/h120/us-ca.png",
                       "https://flagcdn.com/h120/us-co.png",
                       "https://flagcdn.com/h120/us-ct.png",
                       "https://flagcdn.com/h120/us-de.png",
                       "https://flagcdn.com/h120/us-fl.png",
                       "https://flagcdn.com/h120/us-ga.png",
                       "https://flagcdn.com/h120/us-hi.png",
                       "https://flagcdn.com/h120/us-id.png",
                       "https://flagcdn.com/h120/us-il.png",
                       "https://flagcdn.com/h120/us-in.png",
                       "https://flagcdn.com/h120/us-ia.png",
                       "https://flagcdn.com/h120/us-ks.png",
                       "https://flagcdn.com/h120/us-ky.png",
                       "https://flagcdn.com/h120/us-la.png",
                       "https://flagcdn.com/h120/us-me.png",
                       "https://flagcdn.com/h120/us-md.png",
                       "https://flagcdn.com/h120/us-ma.png",
                       "https://flagcdn.com/h120/us-mi.png",
                       "https://flagcdn.com/h120/us-mn.png",
                       "https://flagcdn.com/h120/us-ms.png",
                       "https://flagcdn.com/h120/us-mo.png",
                       "https://flagcdn.com/h120/us-mt.png",
                       "https://flagcdn.com/h120/us-ne.png",
                       "https://flagcdn.com/h120/us-nv.png",
                       "https://flagcdn.com/h120/us-nh.png",
                       "https://flagcdn.com/h120/us-nj.png",
                       "https://flagcdn.com/h120/us-nm.png",
                       "https://flagcdn.com/h120/us-ny.png",
                       "https://flagcdn.com/h120/us-nc.png",
                       "https://flagcdn.com/h120/us-nd.png",
                       "https://flagcdn.com/h120/us-oh.png",
                       "https://flagcdn.com/h120/us-ok.png",
                       "https://flagcdn.com/h120/us-or.png",
                       "https://flagcdn.com/h120/us-pa.png",
                       "https://flagcdn.com/h120/us-ri.png",
                       "https://flagcdn.com/h120/us-sc.png",
                       "https://flagcdn.com/h120/us-sd.png",
                       "https://flagcdn.com/h120/us-tn.png",
                       "https://flagcdn.com/h120/us-tx.png",
                       "https://flagcdn.com/h120/us-ut.png",
                       "https://flagcdn.com/h120/us-vt.png",
                       "https://flagcdn.com/h120/us-va.png",
                       "https://flagcdn.com/h120/us-wa.png",
                       "https://flagcdn.com/h120/us-wv.png",
                       "https://flagcdn.com/h120/us-wi.png",
                       "https://flagcdn.com/h120/us-wy.png");

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 50;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 50){
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
    
    let percent = score / 50 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 40){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/50 (" + percent +
        "%), you have mastered the U.S. States!";
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/50 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});