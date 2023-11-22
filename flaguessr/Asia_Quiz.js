//suggestions

let suggestions = new Array ('Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
                             'Egypt', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
                             "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia",
                             "Myanmar", "Nepal", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "Sri Lanka", 
                             "Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
                             "Vietnam", "Yemen");

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const alert = document.querySelector(".alert");
const content = document.querySelector(".card");

// if user press any key and release

var index;
let emptyArray;
let userData;
let allList;
function getInput(){
    inputBox.onkeyup = (event)=>{
        if ((event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z' || event.key == 'Backspace' || event.key == ' ') && event.key != 'ArrowDown' && event.key != 'ArrowUp') {
            emptyArray = [];
            index = -1;
            if (inputBox.value === ""){
                alert.classList.remove('show');
            }
            userData = event.target.value; //user enetered data
            if(userData){
                emptyArray = suggestions.filter((data)=>{
                    //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                    return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                });
                emptyArray = emptyArray.map((data)=>{
                    // passing return data inside li tag
                    return data = `<li>${data}</li>`;
                });
                searchWrapper.classList.add("active"); //show autocomplete box               
                showSuggestions(emptyArray);
                allList= [];
                allList = suggBox.querySelectorAll("li");
                for (let i = 0; i < allList.length; i++) {
                    //adding onclick attribute in all li tag
                    allList[i].setAttribute("onclick", "select(this)");
                }
            }else{
                searchWrapper.classList.remove("active"); //hide autocomplete box
            }
        }
    }
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'ArrowDown'){
        arrow1();
    }else if (name === 'ArrowUp'){
        arrow2();
        event.preventDefault();
    }
});

function arrow1(){
    if (emptyArray.length > 0){
        if (index == emptyArray.length - 1){
            const children = document.getElementById('parent').children;
            const child1 = children[index];
            child1.style.fontWeight = 'normal';
            inputBox.value = userData;
            index = -1;
            suggBox.scrollBy(0, -1000);
        }else if (index == -1){
            index++;
            let string = emptyArray[index].replace("<li>","").replace("</li>","");
            inputBox.value = string;
            const children = document.getElementById('parent').children;
            const child2 = children[index];
            child2.style.fontWeight = 'bold';    
        }else{
            const children = document.getElementById('parent').children;
            const child1 = children[index];
            child1.style.fontWeight = 'normal';
            index++;
            let string = emptyArray[index].replace("<li>","").replace("</li>","");
            inputBox.value = string;
            const child2 = children[index];
            child2.style.fontWeight = 'bold'; 
            if (index % 4 == 0 && index > 3){
                suggBox.scrollBy(0, 180); 
            }   
        }
    }
}

function arrow2(){
    if (emptyArray.length > 0){
        if (index == -1){
            index = emptyArray.length -1;
            let string = emptyArray[index].replace("<li>","").replace("</li>","");
            inputBox.value = string;
            const children = document.getElementById('parent').children;
            const child1 = children[index];
            child1.style.fontWeight = 'bold';
            suggBox.scrollBy(0, 1000);
        }else if (index == 0){
            const children = document.getElementById('parent').children;
            const child1 = children[index];
            child1.style.fontWeight = 'normal';
            inputBox.value = userData;
            index--;
        }else{
            const children = document.getElementById('parent').children;
            const child1 = children[index];
            child1.style.fontWeight = 'normal';
            if (index % 4 == 0 && index > 3){
                suggBox.scrollBy(0, -180); 
            } 
            index--;
            let string = emptyArray[index].replace("<li>","").replace("</li>","");
            inputBox.value = string;
            const child2 = children[index];
            child2.style.fontWeight = 'bold';    
        }
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
    inputBox.focus();
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        alert.classList.remove('show');
        alert.classList.toggle('show');
        searchWrapper.classList.remove("active");
    }
    else{
        listData = list.join('');
        alert.classList.remove('show');
        suggBox.innerHTML = listData;
    }
}   


//Array that stores all countries in America
let countries = new Array ('Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
                           'Egypt', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
                           "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia",
                           "Myanmar", "Nepal", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "Sri Lanka", 
                           "Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
                           "Vietnam", "Yemen");

let lowerCount = new Array ('afghanistan', 'armenia', 'azerbaijan', 'bahrain', 'bangladesh', 'bhutan', 'brunei', 'cambodia', 'china',
                            'egypt', 'georgia', 'india', 'indonesia', 'iran', 'iraq', 'israel', "japan", "jordan", "kazakhstan", 
                            "north korea", "south korea", "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia", "maldives", "mongolia",
                            "nyanmar", "nepal", "oman", "pakistan", "philippines", "qatar", "russia", "saudi arabia", "singapore", "sri lanka", 
                            "syria", "tajikistan", "thailand", "timor-leste", "turkey", "turkmenistan", "united arab emirates", "uzbekistan",
                            "vietnam", "yemen");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/af.png",
                      "https://flagcdn.com/h120/am.png",
                      "https://flagcdn.com/h120/az.png",
                      "https://flagcdn.com/h120/bh.png",
                      "https://flagcdn.com/h120/bd.png",
                      "https://flagcdn.com/h120/bt.png",
                      "https://flagcdn.com/h120/bn.png",
                      "https://flagcdn.com/h120/kh.png",
                      "https://flagcdn.com/h120/cn.png",
                      "https://flagcdn.com/h120/eg.png",
                      "https://flagcdn.com/h120/ge.png",
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
                      "https://flagcdn.com/h120/my.png",
                      "https://flagcdn.com/h120/mv.png",
                      "https://flagcdn.com/h120/mn.png",
                      "https://flagcdn.com/h120/mm.png",
                      "https://flagcdn.com/h120/np.png",
                      "https://flagcdn.com/h120/om.png",
                      "https://flagcdn.com/h120/pk.png",
                      "https://flagcdn.com/h120/ph.png",
                      "https://flagcdn.com/h120/qa.png",
                      "https://flagcdn.com/h120/ru.png",
                      "https://flagcdn.com/h120/sa.png",
                      "https://flagcdn.com/h120/sg.png",
                      "https://flagcdn.com/h120/lk.png",
                      "https://flagcdn.com/h120/sy.png",
                      "https://flagcdn.com/h120/tj.png",
                      "https://flagcdn.com/h120/th.png",
                      "https://flagcdn.com/h120/tl.png",
                      "https://flagcdn.com/h120/tr.png",
                      "https://flagcdn.com/h120/tm.png",
                      "https://flagcdn.com/h120/ae.png",
                      "https://flagcdn.com/h120/uz.png",
                      "https://flagcdn.com/h120/vn.png",
                      "https://flagcdn.com/h120/ye.png",
                      );

                

const wrapper_ = document.querySelector('.wrapper');
const card = document.querySelector('.card');
var img = card.querySelector('.image');
const icon = searchWrapper.querySelector(".icon");
const h1 = card.querySelector('.card h1');
const h2 = card.querySelector('.card a');

let score = 0;
let startVal = countries.length;
let  flagCount = 1;
let randomCountry = "";
getInput();
randomFlag(startVal);
inputBox.focus();


function randomFlag(length){
    if (flagCount <= 48){
        let count = Math.floor(Math.random() * length);
        randomCountry = countries[count];
        img.src = "";
        img.src = links[count];
        links.splice(count, 1);
        countries.splice(count, 1);
        flagCount = flagCount + 1;
    }else{
        finishQuiz();
    }
}

icon.addEventListener('click', () => {
    if (lowerCount.includes(inputBox.value.toLowerCase()) || suggestions.includes(inputBox.value)){
        searchWrapper.classList.remove("active");
        content.focus();
        window.scrollTo({ top: 0});
        if (randomCountry.toLowerCase() === inputBox.value.toLowerCase()){
            content.classList.toggle('correct');
            score = score + 1;
            inputBox.value = "";
            setTimeout(function(){
                content.classList.remove('correct');
                startVal = startVal - 1;  
                randomFlag(startVal);
                inputBox.focus();
            }, 500);
        }else{
            content.classList.toggle('wrong');
            inputBox.value = "";
            setTimeout(function(){
                content.classList.remove('wrong'); 
                startVal = startVal - 1; 
                randomFlag(startVal);
                inputBox.focus();
            }, 500);
        }
        emptyArray = [];

    }
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name == "Enter"){
        if (lowerCount.includes(inputBox.value.toLowerCase()) || suggestions.includes(inputBox.value)){
            searchWrapper.classList.remove("active");
            content.focus();
            window.scrollTo({ top: 0});
            if (randomCountry.toLowerCase() === inputBox.value.toLowerCase()){
                content.classList.toggle('correct');
                score = score + 1;
                inputBox.value = "";
                setTimeout(function(){
                    content.classList.remove('correct');
                    startVal = startVal - 1;  
                    randomFlag(startVal);
                    inputBox.focus();
                }, 500);
            }else{
                content.classList.toggle('wrong');
                inputBox.value = "";
                setTimeout(function(){
                    content.classList.remove('wrong'); 
                    startVal = startVal - 1; 
                    randomFlag(startVal);
                    inputBox.focus();
                }, 500);
            }
        }
        emptyArray = [];
    }
});
const button2 = document.querySelector('.start');

function finishQuiz(){
    button2.classList.toggle('finished__');
    img.classList.toggle('finished');
    wrapper_.classList.toggle('finished_');
    let percent = score / 48 * 100;
    percent = percent.toFixed(1);
    if (score >= 38.4){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/48 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/48 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the flashcards game mode!";
        content.classList.remove('wrong'); 
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});

//code for restart button
button2.addEventListener('click', () => {
    window.location.assign('Asia_Quiz');
});