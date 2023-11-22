let countries1 = new Array ('Afghanistan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
                            'Hong Kong', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
                            "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", 'Macau', "Malaysia", "Maldives", "Mongolia",
                            "Myanmar", "Nepal", "Oman", "Pakistan", 'Palestine', "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "Sri Lanka", 
                            "Syria", 'Taiwan', "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
                            "Vietnam", "Yemen");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/af.png",
                      "https://flagcdn.com/h120/bh.png",
                      "https://flagcdn.com/h120/bd.png",
                      "https://flagcdn.com/h120/bt.png",
                      "https://flagcdn.com/h120/bn.png",
                      "https://flagcdn.com/h120/kh.png",
                      "https://flagcdn.com/h120/cn.png",
                      "https://flagcdn.com/h120/hk.png",
                      "https://flagcdn.com/h120/in.png",
                      "https://flagcdn.com/h120/id.png",
                      "https://flagcdn.com/h120/ir.png",
                      "https://flagcdn.com/h120/iq.png",
                      "https://flagcdn.com/h120/il.png",
                      "https://flagcdn.com/h120/jp.png",
                      "https://flagcdn.com/h120/jo.png",
                      "https://flagcdn.com/h120/kz.png",
                      "https://flagcdn.com/h120/kp.png",
                      "https://flagcdn.com/h120/kr.png",
                      "https://flagcdn.com/h120/kw.png",
                      "https://flagcdn.com/h120/kg.png",
                      "https://flagcdn.com/h120/la.png",
                      "https://flagcdn.com/h120/lb.png",
                      "https://flagcdn.com/h120/mo.png",
                      "https://flagcdn.com/h120/my.png",
                      "https://flagcdn.com/h120/mv.png",
                      "https://flagcdn.com/h120/mn.png",
                      "https://flagcdn.com/h120/mm.png",
                      "https://flagcdn.com/h120/np.png",
                      "https://flagcdn.com/h120/om.png",
                      "https://flagcdn.com/h120/pk.png",
                      "https://flagcdn.com/h120/ps.png",
                      "https://flagcdn.com/h120/ph.png",
                      "https://flagcdn.com/h120/qa.png",
                      "https://flagcdn.com/h120/ru.png",
                      "https://flagcdn.com/h120/sa.png",
                      "https://flagcdn.com/h120/sg.png",
                      "https://flagcdn.com/h120/lk.png",
                      "https://flagcdn.com/h120/sy.png",
                      "https://flagcdn.com/h120/tw.png",
                      "https://flagcdn.com/h120/tj.png",
                      "https://flagcdn.com/h120/th.png",
                      "https://flagcdn.com/h120/tl.png",
                      "https://flagcdn.com/h120/tm.png",
                      "https://flagcdn.com/h120/ae.png",
                      "https://flagcdn.com/h120/uz.png",
                      "https://flagcdn.com/h120/vn.png",
                      "https://flagcdn.com/h120/ye.png",
                      );

var img = document.querySelector('.image');
var h1 = document.querySelector('.content h2');
let flagCount = 1;
let randomCountry = "";
let count;
let startVal = 47;
let score = 0;
randomFlag(startVal);

function randomFlag(){
    if (flagCount <= 47){
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
    
    let percent = score / 47 * 100;
    let h1 = document.querySelector('.title1');
    let h2 = document.querySelector('.title2');
    img.style.display = "none";
    percent = percent.toFixed(1);
    if (score >= 37.6){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/47 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/47 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the map game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});