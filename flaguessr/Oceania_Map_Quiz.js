let countries1 = new Array ("American Samoa", "Australia", "Cocos Islands", "Christmas Island", "Fiji", "Guam", "Indonesia", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
                             "New Caledonia", "New Zealand", "Niue", "Norfolk Island", "Northern Mariana Islands", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Timor-Leste", "Tokelau", "Tonga", "Tuvalu",
                             "Vanuatu", "Wallis and Futuna");


let links = new Array ("https://flagcdn.com/h120/as.png",
                        "https://flagcdn.com/h120/au.png",
                        "https://flagcdn.com/h120/cc.png",
                        "https://flagcdn.com/h120/cx.png",
                        "https://flagcdn.com/h120/fj.png",
                        "https://flagcdn.com/h120/gu.png",
                        "https://flagcdn.com/h120/id.png",
                        "https://flagcdn.com/h120/ki.png",
                        "https://flagcdn.com/h120/mh.png",
                        "https://flagcdn.com/h120/fm.png",
                        "https://flagcdn.com/h120/nr.png",
                        "https://flagcdn.com/h120/nc.png",
                        "https://flagcdn.com/h120/nz.png",
                        "https://flagcdn.com/h120/nu.png",
                        "https://flagcdn.com/h120/nf.png",
                        "https://flagcdn.com/h120/mp.png",
                        "https://flagcdn.com/h120/pw.png",
                        "https://flagcdn.com/h120/pg.png",
                        "https://flagcdn.com/h120/ws.png",
                        "https://flagcdn.com/h120/sb.png",
                        "https://flagcdn.com/h120/tl.png",
                        "https://flagcdn.com/h120/tk.png",
                        "https://flagcdn.com/h120/to.png",
                        "https://flagcdn.com/h120/tv.png",
                        "https://flagcdn.com/h120/vu.png",
                        "https://flagcdn.com/h120/wf.png");



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