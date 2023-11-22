//Asia_flashcards.js

//Array that stores all countries in America
let countries = new Array ("Australia", "Fiji", "Indonesia", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
                        "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu",
                        "Vanuatu");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/au.png",
                      "https://flagcdn.com/h120/fj.png",
                      "https://flagcdn.com/h120/id.png",
                      "https://flagcdn.com/h120/ki.png",
                      "https://flagcdn.com/h120/mh.png",
                      "https://flagcdn.com/h120/fm.png",
                      "https://flagcdn.com/h120/nr.png",
                      "https://flagcdn.com/h120/nz.png",
                      "https://flagcdn.com/h120/pw.png",
                      "https://flagcdn.com/h120/pg.png",
                      "https://flagcdn.com/h120/ws.png",
                      "https://flagcdn.com/h120/sb.png",
                      "https://flagcdn.com/h120/to.png",
                      "https://flagcdn.com/h120/tv.png",
                      "https://flagcdn.com/h120/vu.png");

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/au.png",
                      "https://flagcdn.com/80x60/fj.png",
                      "https://flagcdn.com/80x60/id.png",
                      "https://flagcdn.com/80x60/ki.png",
                      "https://flagcdn.com/80x60/mh.png",
                      "https://flagcdn.com/80x60/fm.png",
                      "https://flagcdn.com/80x60/nr.png",
                      "https://flagcdn.com/80x60/nz.png",
                      "https://flagcdn.com/80x60/pw.png",
                      "https://flagcdn.com/80x60/pg.png",
                      "https://flagcdn.com/80x60/ws.png",
                      "https://flagcdn.com/80x60/sb.png",
                      "https://flagcdn.com/80x60/to.png",
                      "https://flagcdn.com/80x60/tv.png",
                      "https://flagcdn.com/80x60/vu.png");

//Array that stores all capital cities of American countries
let capitalArray = new Array ("Canberra", "Suva", "Jakarta", "South Tarawa", "Majuro", "Palikir", "Yaren", "Wellington", "Ngerulmud", "Port Moresby",
                              "Apia", "	Honiara", "Nuku'alofa", "Funafuti", "Port Vila");

//Array that stores all populations of American countries
let populationArray = new Array ("25 627 280 (2020)", "884 887 (2017)", "266 911 900 (2019)", "120 100 (2018)", "55 500 (2018)", "104 468 (2019)", "11 000 (2018)",
                                "4 961 213 (2020)", "17 900 (2018)", "8 935 000 (2020)", "200 874 (2019)", "680 806 (2019)", "100 651 (2016)", "10 200", "304 500 (2018)");

//Array that stores all total areas of American countries
let areaArray = new Array ("7 692 020", "18 272", "1 910 930", "811", "181", "702", "21", "270 467", "459", "462 840", "2 842", "28 896", "747", "26", "12 189");

//Array that stores all languages of American countries
let languageArray = new Array ("English", "Fijian, English", "Indonesian", "Gilbertese, English", "Marshallese, English", "English", "Nauruan, English", "Maori, English",
                               "Palauan, English", "Hiri Motu, English", "Samoan", "English", "Tongan, English", "Tuvaluan, English", "French, Bislama");


//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Australia/@-26.1772288,133.4170119,3z/data=!3m1!4b1!4m5!3m4!1s0x2b2bfd076787c5df:0x538267a1955b1352!8m2!3d-25.274398!4d133.775136",
                           "https://www.google.com/maps/place/Fiji/@-16.495224,174.9546133,6z/data=!3m1!4b1!4m5!3m4!1s0x6e1990fd703cdc5d:0x9e9c319946ef5b93!8m2!3d-17.713371!4d178.065032",
                           "https://www.google.com/maps/place/Indonesia/@-2.44565,117.8888,3z/data=!3m1!4b1!4m5!3m4!1s0x2c4c07d7496404b7:0xe37b4de71badf485!8m2!3d-0.789275!4d113.921327",
                           "https://www.google.com/maps/place/Kiribati/@-3.751388,-177.2005114,5z/data=!3m1!4b1!4m5!3m4!1s0x65647c91c2028703:0x84327d040152c307!8m2!3d1.8368976!4d-157.3768317",
                           "https://www.google.com/maps/place/Marshall+Islands/@9.5713514,161.7201444,6z/data=!3m1!4b1!4m5!3m4!1s0x650119b22129ca2b:0x8b3e03e8aa09b776!8m2!3d7.131474!4d171.184478",
                           "https://www.google.com/maps/place/Micronesia/@5.1726137,141.1526299,5z/data=!3m1!4b1!4m5!3m4!1s0x65d9b5c5ac58c813:0x547a8dcdfaa46525!8m2!3d7.425554!4d150.550812",
                           "https://www.google.com/maps/place/Nauru/@-0.5279799,166.935153,13z/data=!3m1!4b1!4m5!3m4!1s0x6f7d1c1f1de45b4d:0x59d99df4c5d40a81!8m2!3d-0.522778!4d166.931503",
                           "https://www.google.com/maps/place/New+Zealand/@-40.5565506,165.9969682,5z/data=!3m1!4b1!4m5!3m4!1s0x6d2c200e17779687:0xb1d618e2756a4733!8m2!3d-40.900557!4d174.885971",
                           "https://www.google.com/maps/place/Palau/@5.4403439,130.7942274,983844m/data=!3m2!1e3!4b1!4m5!3m4!1s0x328445b4a2af0399:0x12ed1edd39a1ebbb!8m2!3d7.51498!4d134.58252",
                           "https://www.google.com/maps/place/Papua+New+Guinea/@-6.3457362,145.8928814,6z/data=!3m1!4b1!4m5!3m4!1s0x6859e8afbf0e9eaf:0xdaf0e50d8e9c127a!8m2!3d-6.314993!4d143.95555",
                           "https://www.google.com/maps/place/Samoa/@-13.7518231,-172.1029365,498968m/data=!3m1!1e3!4m5!3m4!1s0x71a513a364ec1003:0xa6870c9674617872!8m2!3d-13.759029!4d-172.104629",
                           "https://www.google.com/maps/place/Solomon+Islands/@-9.3665849,159.3219454,7z/data=!3m1!4b1!4m5!3m4!1s0x68d351e0555009d1:0xb44cc0a017442980!8m2!3d-9.64571!4d160.156194",
                           "https://www.google.com/maps/place/Tonga/@-18.6210147,-174.6057129,973605m/data=!3m1!1e3!4m5!3m4!1s0x7193b644bb9fd01d:0xf36dcccac55ee2a9!8m2!3d-21.178986!4d-175.198242",
                           "https://www.google.com/maps/place/Tuvalu/@-8.3096325,177.7807617,1016601m/data=!3m1!1e3!4m5!3m4!1s0x6fc19cb959b1a04d:0x8f6754680707122e!8m2!3d-7.109535!4d177.64933",
                           "https://www.google.com/maps/place/Vanuatu/@-16.6707611,168.2803344,984205m/data=!3m1!1e3!4m5!3m4!1s0x6e89605ec8926013:0x348339cfbed0266a!8m2!3d-15.376706!4d166.959158");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Australia",
                           "https://en.wikipedia.org/wiki/Fiji",
                           "https://en.wikipedia.org/wiki/Indonesia",
                           "https://en.wikipedia.org/wiki/Kiribati",
                           "https://en.wikipedia.org/wiki/Marshall_Islands",
                           "https://en.wikipedia.org/wiki/Micronesia",
                           "https://en.wikipedia.org/wiki/Nauru",
                           "https://en.wikipedia.org/wiki/New_Zealand",
                           "https://en.wikipedia.org/wiki/Palau",
                           "https://en.wikipedia.org/wiki/Papua_New_Guinea",
                           "https://en.wikipedia.org/wiki/Samoa",
                           "https://en.wikipedia.org/wiki/Solomon_Islands",
                           "https://en.wikipedia.org/wiki/Tonga",
                           "https://en.wikipedia.org/wiki/Tuvalu",
                           "https://en.wikipedia.org/wiki/Vanuatu");                           


//Flip card when clicked on it
let state = 0;
const card = document.querySelector('.card_inner');
card.addEventListener('click', () => {
    card.classList.remove('is-flipped1');
    card.style.transition = '0.8s';
    card.classList.toggle('is-flipped');
    if (state == 0){
        state = 1;
    }else{
        state = 0;
    }
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === ' '){
        card.classList.remove('is-flipped1');
        card.style.transition = '0.8s';
        card.classList.toggle('is-flipped');
        if (state == 0){
            state = 1;
        }else{
            state = 0;
        }
    }
});

//selects card image and creates variable
const front_ = document.querySelector('.face--front');
var img = front_.querySelector('.image');
const back_ = document.querySelector('.face--back');
var img2 = back_.querySelector('.image2');
//selects card title and creates variable
const back = document.querySelector('.content');
var title = back.querySelector('.content h1');
//selects card data and creates variables
const info = document.querySelector('.info');
const capital = info.querySelector('.capital');
const population = info.querySelector('.population');
const area = info.querySelector('.area');
const language = info.querySelector('.language');
const map = info.querySelector('.maps');
const wiki = info.querySelector('.wiki');
//selects arrows and creates variables
const arrow1 = document.querySelector('.arrow1');
var arr1 = arrow1.querySelector('.arrow i');
const arrow2 = document.querySelector('.arrow2');
var arr2 = arrow2.querySelector('.arrow i');

//initializes the first card with correct data and creates a count variable 0
//that will indicate in which card the user is.
var count = 0;
arrow1.classList.toggle('hide');
img.src = links[count];
img2.src = links2[count];
title.textContent = countries[count];
capital.textContent = capitalArray[count];
population.textContent = populationArray[count];
area.textContent = areaArray[count];
language.textContent = languageArray[count];
map.href = mapsArray[count];
wiki.href = wikiArray[count];

//code that restarts the flashcards by going to card in index 0.
const button2 = document.querySelector('.start');
button2.addEventListener('click', () => {
    if (count != 0){
        count = 0;
        arrow1.classList.toggle('hide');
        arrow2.classList.remove('hide');
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }else{
        card.style.transition = '0.0s';
        card.classList.remove('is-flipped');
    }
});

//restarts the key 'r'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'r' || code == 'R'){
        if (count != 0){
            count = 0;
            arrow1.classList.toggle('hide');
            arrow2.classList.remove('hide');
            card.style.transition = '0.0s';
            if (state == 1){
                card.classList.remove('is-flipped');
                state = 0;
            }else{
                card.classList.toggle('is-flipped1');
                state = 0; 
            }
            img.src = "";
            img.src = links[count];
            title.textContent = countries[count];
            capital.textContent = capitalArray[count];
            population.textContent = populationArray[count];
            area.textContent = areaArray[count];
            language.textContent = languageArray[count];
            map.href = mapsArray[count];
            wiki.href = wikiArray[count];
            img2.src = "";
            img2.src = links2[count];
        }else{
            card.style.transition = '0.0s';
            card.classList.remove('is-flipped');
        }
    }
});

//code for right arrow that increases index by 1 to go to next card
arrow2.addEventListener('click', () => {

    count = count + 1;
    if (count == 1){
        arrow1.classList.remove('hide');
    }
    if (count == links.length - 1){
        arrow2.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    language.textContent = languageArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowRight' && count < links.length - 1) {
        count = count + 1;
        if (count == 1){
            arrow1.classList.remove('hide');
        }
        if (count == links.length - 1){
            arrow2.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for left arrow that decreases index by 1 to go to previous card
arrow1.addEventListener('click', () => {
    count = count - 1;
    if (count == links.length - 2){
        arrow2.classList.remove('hide');
    }
    if (count == 0){
        arrow1.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    language.textContent = languageArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowLeft' && count > 0) {
        count = count - 1;
        if (count == links.length - 2){
            arrow2.classList.remove('hide');
        }
        if (count == 0){
            arrow1.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});

//exit when pressed the key 'e'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'e' || code == 'E'){
        window.location.assign('index');
    }
});

//opens map when pressed the key 'm'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'm' || code == 'M') && state == 1){
        window.open(mapsArray[count], '_blank');
    }
});

//opens wikipedia when pressed the key 'w'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'w' || code == 'W') && state == 1){
        window.open(wikiArray[count], '_blank');
    }
});

