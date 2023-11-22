//suggestions

let suggestions = new Array ("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
                            "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan","Minnesota", "Mississippi", "Missouri",
                            "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
                            "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
                            "West Virginia", "Wisconsin", "Wyoming");

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
let countries = new Array ("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
                            "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan","Minnesota", "Mississippi", "Missouri",
                            "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
                            "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
                            "West Virginia", "Wisconsin", "Wyoming");

let lowerCount = new Array ("alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois",
                            "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan","minnesota", "mississippi", "missouri",
                            "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma",
                            "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington",
                            "west virginia", "wisconsin", "wyoming");

//Array that stores all links to American flags
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
    if (flagCount <= 50){
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
    let percent = score / 50 * 100;
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
    window.location.assign('States_Quiz');
});