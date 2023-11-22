//America_flashcards.js

//Array that stores all countries in America
let countries = new Array ('Antigua and Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belize', 'Bolivia',
                           'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 
                           'Dominican Republic', 'Ecuador', 'El Salvador', 'Grenada', 'Guatemala', 'Guyana', 
                           'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 
                           'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Suriname', 
                           'Trinidad and Tobago', 'United States', 'Uruguay', 'Venezuela');

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/ag.png",
                      "https://flagcdn.com/h120/ar.png",
                      "https://flagcdn.com/h120/bs.png",
                      "https://flagcdn.com/h120/bb.png",
                      "https://flagcdn.com/h120/bz.png",
                      "https://flagcdn.com/h120/bo.png",
                      "https://flagcdn.com/h120/br.png",
                      "https://flagcdn.com/h120/ca.png",
                      "https://flagcdn.com/h120/cl.png",
                      "https://flagcdn.com/h120/co.png",
                      "https://flagcdn.com/h120/cr.png",
                      "https://flagcdn.com/h120/cu.png",
                      "https://flagcdn.com/h120/dm.png",
                      "https://flagcdn.com/h120/do.png",
                      "https://flagcdn.com/h120/ec.png",
                      "https://flagcdn.com/h120/sv.png",
                      "https://flagcdn.com/h120/gd.png",
                      "https://flagcdn.com/h120/gt.png",
                      "https://flagcdn.com/h120/gy.png",
                      "https://flagcdn.com/h120/ht.png",
                      "https://flagcdn.com/h120/hn.png",
                      "https://flagcdn.com/h120/jm.png",
                      "https://flagcdn.com/h120/mx.png",
                      "https://flagcdn.com/h120/ni.png",
                      "https://flagcdn.com/h120/pa.png",
                      "https://flagcdn.com/h120/py.png",
                      "https://flagcdn.com/h120/pe.png",
                      "https://flagcdn.com/h120/kn.png",
                      "https://flagcdn.com/h120/lc.png",
                      "https://flagcdn.com/h120/vc.png",
                      "https://flagcdn.com/h120/sr.png",
                      "https://flagcdn.com/h120/tt.png",
                      "https://flagcdn.com/h120/us.png",
                      "https://flagcdn.com/h120/uy.png",
                      "https://flagcdn.com/h120/ve.png");

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/ag.png",
                      "https://flagcdn.com/80x60/ar.png",
                      "https://flagcdn.com/80x60/bs.png",
                      "https://flagcdn.com/80x60/bb.png",
                      "https://flagcdn.com/80x60/bz.png",
                      "https://flagcdn.com/80x60/bo.png",
                      "https://flagcdn.com/80x60/br.png",
                      "https://flagcdn.com/80x60/ca.png",
                      "https://flagcdn.com/80x60/cl.png",
                      "https://flagcdn.com/80x60/co.png",
                      "https://flagcdn.com/80x60/cr.png",
                      "https://flagcdn.com/80x60/cu.png",
                      "https://flagcdn.com/80x60/dm.png",
                      "https://flagcdn.com/80x60/do.png",
                      "https://flagcdn.com/80x60/ec.png",
                      "https://flagcdn.com/80x60/sv.png",
                      "https://flagcdn.com/80x60/gd.png",
                      "https://flagcdn.com/80x60/gt.png",
                      "https://flagcdn.com/80x60/gy.png",
                      "https://flagcdn.com/80x60/ht.png",
                      "https://flagcdn.com/80x60/hn.png",
                      "https://flagcdn.com/80x60/jm.png",
                      "https://flagcdn.com/80x60/mx.png",
                      "https://flagcdn.com/80x60/ni.png",
                      "https://flagcdn.com/80x60/pa.png",
                      "https://flagcdn.com/80x60/py.png",
                      "https://flagcdn.com/80x60/pe.png",
                      "https://flagcdn.com/80x60/kn.png",
                      "https://flagcdn.com/80x60/lc.png",
                      "https://flagcdn.com/80x60/vc.png",
                      "https://flagcdn.com/80x60/sr.png",
                      "https://flagcdn.com/80x60/tt.png",
                      "https://flagcdn.com/80x60/us.png",
                      "https://flagcdn.com/80x60/uy.png",
                      "https://flagcdn.com/80x60/ve.png");

//Array that stores all capital cities of American countries
let capitalArray = new Array ("Saint John's", "Buenos Aires", "Nassau", "Bridgetown", "Belmopan", "Sucre", "Brasília", "Ottawa",
                         "Santiago", "Bogotá", "San José", "Havana", "Roseau", "Santo Domingo", "Quito", "San Salvador",
                         "St. George's", "Guatemala City", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Kingston",
                         "Mexico City", "Managua", "Panama City", "Asunción", "Lima", "Basseterre", "Castries", "Kingstown", 
                         "Paramaribo", "Port of Spain", "Washington D.C.", "Montevideo", "Caracas");

//Array that stores all populations of American countries
let populationArray = new Array ("96 453 (2019)", "44 938 712 (2019)", "385 340 (2019)", "287 025 (2019)", "408 487 (2019)",
                            "11 469 896 (2019)", "211 173 432 (2020)", "37 935 814 (2020)", "19 107 216 (2019)", "49 395 678 (2019)",
                            "5 058 007 (2019)", "11 209 628 (2018)", "71 808 (2019)", "10 358 320 (2019)", "17 431 712 (2020)",
                            "6 704 864 (2019)", "112 003 (2019)", "16 604 026 (2019)", "782 766 (2019)", "11 577 779 (2019)",
                            "9 158 345 (2019)", "2 726 667 (2018)", "126 577 691 (2019)", "6 460 411 (2018)", "4 218 808 (2019)",
                            "7 152 703 (2019)", "32 131 400 (2019)", "52 823 (2019)", "178 696 (2018)", "110 608 (2019)", "581 372 (2019)",
                            "1 363 985 (2019)", "329 345 637 (2020)", "3 518 552 (2019)", "32 219 521 (2019)");

//Array that stores all total areas of American countries
let areaArray = new Array ("442", "2 780 400", "13 943", "430", "22 966", "1 098 580", "8 515 770", "9 984 670",
                      "756 102", "1 141 750", "51 100", "109 884", "751", "48 671", "276 841", "21 041",
                      "344", "108 889", "214 969", "27 750", "112 492", "10 991", "1 964 380", "130 373",
                      "75 417", "406 752", "1 285 220", "261", "616", "389", "163 820", "5 130", "9 833 520",
                      "176 215", "916 445");

//Array that stores all languages of American countries
let languageArray = new Array ("English", "Spanish", "English", "English", "English", "Bolivian Spanish, Aymara Language", "Portuguese",
                          "French, English", "Spanish", "Spanish", "Spanish", "Cuban Spanish", "English", "Dominican Spanish", "Spanish",
                          "Salvadoran Spanish", "English", "Guatemalan Spanish", "English", "French, Haitian Creole", "Spanish",
                          "Jamaican English", "Spanish", "Spanish", "Spanish", "Spanish, Guarani", "Spanish", "English", "English",
                          "English", "Dutch", "English", "English", "Spanish", "Spanish");


//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Antigua+and+Barbuda/@17.3263572,-62.29108,10z/data=!3m1!4b1!4m5!3m4!1s0x8c0d6eb96db8d1c1:0x276a3788e18b7994!8m2!3d17.060816!4d-61.796428",
                           "https://www.google.com/maps/place/Argentina/@-37.0555048,-81.626494,4z/data=!3m1!4b1!4m5!3m4!1s0x95bccaf5f5fdc667:0x3d2f77992af00fa8!8m2!3d-38.416097!4d-63.616672",
                           "https://www.google.com/maps/place/Bahamas/@24.1668865,-84.9897566,5z/data=!3m1!4b1!4m5!3m4!1s0x88d69a3bb2480f3d:0x133eb4836ac779e5!8m2!3d25.03428!4d-77.39628",
                           "https://www.google.com/maps/place/Barbados/@13.1881386,-59.6753415,11z/data=!3m1!4b1!4m5!3m4!1s0x8c43f1fbae321aa3:0xeec51b38cf4362b!8m2!3d13.193887!4d-59.543198",
                           "https://www.google.com/maps/place/Belize/@17.1902926,-89.4442083,8z/data=!3m1!4b1!4m5!3m4!1s0x8f5c5b3ec112faf9:0xf64a8a4d3f1ee34e!8m2!3d17.189877!4d-88.49765",
                           "https://www.google.com/maps/place/Bolivia/@-16.0919719,-72.585013,5z/data=!3m1!4b1!4m5!3m4!1s0x915edf8977bba295:0x1c9ec2bb0115edbf!8m2!3d-16.290154!4d-63.588653",
                           "https://www.google.com/maps/place/Brazil/@-13.657133,-69.719916,4z/data=!3m1!4b1!4m5!3m4!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-14.235004!4d-51.92528",
                           "https://www.google.com/maps/place/Canada/@54.7142968,-113.7780794,4z/data=!3m1!4b1!4m5!3m4!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!8m2!3d56.130366!4d-106.346771",
                           "https://www.google.com/maps/place/Chile/@-31.042026,-124.6781062,3z/data=!3m1!4b1!4m5!3m4!1s0x9662c5410425af2f:0x505e1131102b91d!8m2!3d-35.675147!4d-71.542969",
                           "https://www.google.com/maps/place/Colombia/@4.5878237,-83.3844284,5z/data=!3m1!4b1!4m5!3m4!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333",
                           "https://www.google.com/maps/place/Costa+Rica/@8.3325163,-89.3061579,6z/data=!3m1!4b1!4m5!3m4!1s0x8f92e56221acc925:0x6254f72535819a2b!8m2!3d9.748917!4d-83.753428",
                           "https://www.google.com/maps/place/Cuba/@21.2726685,-88.591035,5z/data=!3m1!4b1!4m5!3m4!1s0x88cd49070f7a4cb5:0x798cf7529110a41a!8m2!3d21.521757!4d-77.781167",
                           "https://www.google.com/maps/place/Dominica/@15.4261976,-61.6376979,10z/data=!3m1!4b1!4m5!3m4!1s0x8c14d2faf2155a15:0x49b39109053afd3c!8m2!3d15.414999!4d-61.370976",
                           "https://www.google.com/maps/place/Dominican+Republic/@18.6691592,-71.2541121,8z/data=!3m1!4b1!4m5!3m4!1s0x8eaf8838def1b6f5:0xa6020f24060df7e0!8m2!3d18.735693!4d-70.162651",
                           "https://www.google.com/maps/place/Ecuador/@-1.2906111,-102.3216555,4z/data=!3m1!4b1!4m5!3m4!1s0x902387dda89a4bd5:0x9d76af04119c3702!8m2!3d-1.831239!4d-78.183406",
                           "https://www.google.com/maps/place/El+Salvador/@13.7388316,-91.1745693,7z/data=!3m1!4b1!4m5!3m4!1s0x8f6327a659640657:0x6f9a16eb98854832!8m2!3d13.794185!4d-88.89653",
                           "https://www.google.com/maps/place/Grenada/@12.2603308,-61.8711807,10z/data=!3m1!4b1!4m5!3m4!1s0x8c381789f4877bd1:0x36d8c7015a1f4f8e!8m2!3d12.1165!4d-61.679",
                           "https://www.google.com/maps/place/Guatemala/@15.6768385,-94.731289,6z/data=!3m1!4b1!4m5!3m4!1s0x8588135036e7506b:0x35982b375b84d5bb!8m2!3d15.783471!4d-90.230759",
                           "https://www.google.com/maps/place/Guyana/@4.9283131,-63.4487494,6z/data=!3m1!4b1!4m5!3m4!1s0x8dafefaf60d8c2b3:0x48e38867b6e54440!8m2!3d4.860416!4d-58.93018",
                           "https://www.google.com/maps/place/Haiti/@19.0343984,-74.2390322,8z/data=!3m1!4b1!4m5!3m4!1s0x8eb6c6f37fcbbb11:0xb51438b24c54f6d3!8m2!3d18.971187!4d-72.285215",
                           "https://www.google.com/maps/place/Honduras/@15.1796151,-90.7058676,6z/data=!3m1!4b1!4m5!3m4!1s0x8f6a751a73b731cf:0x7ed1de82b6fb8264!8m2!3d15.199999!4d-86.241905",
                           "https://www.google.com/maps/place/Jamaica/@18.1063437,-79.5203085,7z/data=!3m1!4b1!4m5!3m4!1s0x8eda2a1bc6cf719d:0x59a0d1c0b5120efa!8m2!3d18.109581!4d-77.297508",
                           "https://www.google.com/maps/place/Mexico/@23.3126726,-111.6684217,5z/data=!3m1!4b1!4m5!3m4!1s0x84043a3b88685353:0xed64b4be6b099811!8m2!3d23.634501!4d-102.552784",
                           "https://www.google.com/maps/place/Nicaragua/@12.8305922,-89.514654,6z/data=!3m1!4b1!4m5!3m4!1s0x8f10c200ceff22cd:0xc8faa7e53fac15b5!8m2!3d12.865416!4d-85.207229",
                           "https://www.google.com/maps/place/Panama/@8.3788295,-81.2296282,8z/data=!3m1!4b1!4m5!3m4!1s0x8fa61583c8be2be3:0x79eee04d1fa59bcf!8m2!3d8.537981!4d-80.782127",
                           "https://www.google.com/maps/place/Paraguay/@-23.1878646,-67.4752242,5z/data=!3m1!4b1!4m5!3m4!1s0x945c083490f13d63:0xb3faff611d582ef3!8m2!3d-23.442503!4d-58.443832",
                           "https://www.google.com/maps/place/Peru/@-9.1082646,-84.0837934,5z/data=!3m1!4b1!4m5!3m4!1s0x9105c850c05914f5:0xf29e011279210648!8m2!3d-9.189967!4d-75.015152",
                           "https://www.google.com/maps/place/St+Kitts+%26+Nevis/@17.2498787,-62.8370293,11z/data=!3m1!4b1!4m5!3m4!1s0x8c12196ec68a720d:0xdee99ac69a1d86e8!8m2!3d17.357822!4d-62.782998",
                           "https://www.google.com/maps/place/St+Lucia/@13.9131459,-61.1109457,11z/data=!3m1!4b1!4m5!3m4!1s0x8c406065f12da31d:0x6e7486c4e8399df5!8m2!3d13.909444!4d-60.978893",
                           "https://www.google.com/maps/place/St+Vincent+and+the+Grenadines/@12.9721014,-61.5642807,10z/data=!3m1!4b1!4m5!3m4!1s0x8c40ace29e3935bb:0x31fdd3e88dd2a1b1!8m2!3d12.984305!4d-61.287228",
                           "https://www.google.com/maps/place/Suriname/@3.9858783,-58.2566829,7z/data=!3m1!4b1!4m5!3m4!1s0x8d0836d5d9d3d551:0x1037e1c0712936b2!8m2!3d3.919305!4d-56.027783",
                           "https://www.google.com/maps/place/Trinidad+and+Tobago/@10.6975474,-61.7735519,9z/data=!3m1!4b1!4m5!3m4!1s0x8c3607976350b6c5:0xff082855c639f127!8m2!3d10.691803!4d-61.222503",
                           "https://www.google.com/maps/place/United+States/@36.2407014,-113.7585915,4z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891",
                           "https://www.google.com/maps/place/Uruguay/@-32.5405209,-60.2768122,6z/data=!3m1!4b1!4m5!3m4!1s0x9575073afb5fde09:0x4a5596616016524a!8m2!3d-32.522779!4d-55.765835",
                           "https://www.google.com/maps/place/Venezuela/@6.575072,-75.6591602,5z/data=!3m1!4b1!4m5!3m4!1s0x8c2853cb36cbd801:0xdca0f2587cd54dd3!8m2!3d6.42375!4d-66.58973");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
                           "https://en.wikipedia.org/wiki/Argentina",
                           "https://en.wikipedia.org/wiki/The_Bahamas",
                           "https://en.wikipedia.org/wiki/Barbados",
                           "https://en.wikipedia.org/wiki/Belize",
                           "https://en.wikipedia.org/wiki/Bolivia",
                           "https://en.wikipedia.org/wiki/Brazil",
                           "https://en.wikipedia.org/wiki/Canada",
                           "https://en.wikipedia.org/wiki/Chile",
                           "https://en.wikipedia.org/wiki/Colombia",
                           "https://en.wikipedia.org/wiki/Costa_Rica",
                           "https://en.wikipedia.org/wiki/Cuba",
                           "https://en.wikipedia.org/wiki/Dominica",
                           "https://en.wikipedia.org/wiki/Dominican_Republic",
                           "https://en.wikipedia.org/wiki/Ecuador",
                           "https://en.wikipedia.org/wiki/El_Salvador",
                           "https://en.wikipedia.org/wiki/Grenada",
                           "https://en.wikipedia.org/wiki/Guatemala",
                           "https://en.wikipedia.org/wiki/Guyana",
                           "https://en.wikipedia.org/wiki/Haiti",
                           "https://en.wikipedia.org/wiki/Honduras",
                           "https://en.wikipedia.org/wiki/Jamaica",
                           "https://en.wikipedia.org/wiki/Mexico",
                           "https://en.wikipedia.org/wiki/Nicaragua",
                           "https://en.wikipedia.org/wiki/Panama",
                           "https://en.wikipedia.org/wiki/Paraguay",
                           "https://en.wikipedia.org/wiki/Peru",
                           "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
                           "https://en.wikipedia.org/wiki/Saint_Lucia",
                           "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
                           "https://en.wikipedia.org/wiki/Suriname",
                           "https://en.wikipedia.org/wiki/Trinidad_and_Tobago",
                           "https://en.wikipedia.org/wiki/United_States",
                           "https://en.wikipedia.org/wiki/Uruguay",
                           "https://en.wikipedia.org/wiki/Venezuela");                           


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

