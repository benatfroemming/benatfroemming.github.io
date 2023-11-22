//suggestions

let suggestions = new Array ("Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
                           "Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
                           "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
                           "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
                           "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
                           "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
                           "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe");

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
let countries = new Array ("Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
                           "Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
                           "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
                           "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
                           "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
                           "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
                           "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe");

let lowerCount = new Array ("algeria", "angola", "benin", "botswana", "burkina faso", "burundi", "cameroon", "cape verde",
                           "central african republic", "chad", "comoros", "republic of the congo", "democratic republic of the congo", "ivory coast",
                           "djibouti", "egypt", "equatorial guinea", "eritrea", "eswatini", "ethiopia", "gabon", "gambia",
                           "ghana", "guinea", "guinea-bissau", "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi",
                           "mali", "mauritania", "mauritius", "morocco", "mozambique", "mamibia", "niger", "nigeria", "rwanda", "sao tome and principe",
                           "senegal", "seychelles", "sierra leone", "somalia", "south africa", "south sudan", "sudan", "tanzania",
                           "togo", "tunisia", "uganda", "zambia", "zimbabwe");

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
                      "https://flagcdn.com/h120/ma.png",
                      "https://flagcdn.com/h120/mz.png",
                      "https://flagcdn.com/h120/na.png",
                      "https://flagcdn.com/h120/ne.png",
                      "https://flagcdn.com/h120/ng.png",
                      "https://flagcdn.com/h120/rw.png",
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
                      "https://flagcdn.com/h120/zm.png",
                      "https://flagcdn.com/h120/zw.png");

                

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
    if (flagCount <= 54){
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
    let percent = score / 54 * 100;
    percent = percent.toFixed(1);
    if (score >= 43.2){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/54 (" + percent +
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/54 (" + percent +
        "%). You need a score of 80% to pass! We encourage you to keep practicing and review the flags you missed in the flashcards game mode!";
    }
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});

//code for restart button
button2.addEventListener('click', () => {
    window.location.assign('Africa_Quiz');
});