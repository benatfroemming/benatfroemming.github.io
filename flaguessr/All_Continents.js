//suggestions

let suggestions = new Array ("Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
"Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
"Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
"Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
"San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine",
"United Kingdom", "Vatican City", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
"Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
"Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
"Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
"Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
"Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
"Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", 'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
"North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia",
"Myanmar", "Nepal", "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", 
"Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
"Vietnam", "Yemen", "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
"New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu",
"Vanuatu", 'Antigua and Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belize', 'Bolivia',
'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 
'Dominican Republic', 'Ecuador', 'El Salvador', 'Grenada', 'Guatemala', 'Guyana', 
'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 
'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Suriname', 
'Trinidad and Tobago', 'United States', 'Uruguay', 'Venezuela');

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
                suggBox.scrollBy(0, 140); 
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
            index--;
            let string = emptyArray[index].replace("<li>","").replace("</li>","");
            inputBox.value = string;
            const child2 = children[index];
            child2.style.fontWeight = 'bold'; 
            let a = emptyArray.length % 4;
            if (a == 2 && index == emptyArray.length - 3){
                suggBox.scrollBy(0, -70); 
            }else if (a == 1 && index == emptyArray.length - 2){
                suggBox.scrollBy(0, -35); 
            }else if (a == 3 && index == emptyArray.length - 4){
                suggBox.scrollBy(0, -105); 
            }else if ((index + 1) % 4 == 0 && index > 2){
                suggBox.scrollBy(0, -140); 
            }
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
let countries = new Array ("Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
"Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
"Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
"Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
"San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine",
"United Kingdom", "Vatican City", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
"Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
"Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
"Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
"Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
"Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
"Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", 'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
"North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia",
"Myanmar", "Nepal", "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", 
"Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
"Vietnam", "Yemen", "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
"New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu",
"Vanuatu", 'Antigua and Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belize', 'Bolivia',
'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 
'Dominican Republic', 'Ecuador', 'El Salvador', 'Grenada', 'Guatemala', 'Guyana', 
'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 
'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Suriname', 
'Trinidad and Tobago', 'United States', 'Uruguay', 'Venezuela');

let lowerCount = new Array ("albania", "andorra", "austria", "belarus", "belgium", "bosnia and herzegovina", "bulgaria", "croatia",
"cyprus", "czechia", "denmark", "estonia", "finland", "france", "germany", "greece", "hungary", "iceland",
"ireland", "italy", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta", "moldova", "monaco",
"montenegro", "netherlands", "north macedonia", "norway", "poland", "portugal", "romania", "russia",
"san marino", "serbia", "slovakia", "slovenia", "spain", "sweden", "switzerland", "turkey", "ukraine",
"united kingdom", "vatican city", "algeria", "angola", "benin", "botswana", "burkina faso", "burundi", "cameroon", "cape verde",
"central african republic", "chad", "comoros", "republic of the congo", "democratic republic of the congo", "ivory coast",
"djibouti", "egypt", "equatorial guinea", "eritrea", "eswatini", "ethiopia", "gabon", "gambia",
"ghana", "guinea", "guinea-bissau", "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi",
"mali", "mauritania", "mauritius", "morocco", "mozambique", "mamibia", "niger", "nigeria", "rwanda", "sao tome and principe",
"senegal", "seychelles", "sierra leone", "somalia", "south africa", "south sudan", "sudan", "tanzania",
"togo", "tunisia", "uganda", "zambia", "zimbabwe", 'afghanistan', 'armenia', 'azerbaijan', 'bahrain', 'bangladesh', 'bhutan', 'brunei', 'cambodia', 'china',
'georgia', 'india', 'indonesia', 'iran', 'iraq', 'israel', "japan", "jordan", "kazakhstan", 
"north korea", "south korea", "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia", "maldives", "mongolia",
"myanmar", "nepal", "oman", "pakistan", "philippines", "qatar", "russia", "saudi arabia", "singapore", "sri lanka", 
"syria", "tajikistan", "thailand", "timor-leste", "turkmenistan", "united arab emirates", "uzbekistan",
"vietnam", "yemen", "australia", "fiji", "kiribati", "marshall islands", "micronesia", "nauru",
"new zealand", "palau", "papua new guinea", "samoa", "solomon islands", "tonga", "tuvalu",
"vanuatu", 'antigua and barbuda', 'argentina', 'bahamas', 'barbados', 'belize', 'bolivia',
'brazil', 'canada', 'chile', 'colombia', 'costa rica', 'cuba', 'dominica', 
'dominican republic', 'ecuador', 'el salvador', 'grenada', 'guatemala', 'guyana', 
'haiti', 'honduras', 'jamaica', 'mexico', 'nicaragua', 'panama', 'paraguay', 'peru', 
'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'suriname', 
'trinidad and tobago', 'united states', 'uruguay', 'venezuela');

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/al.png",
                    "https://flagcdn.com/h120/ad.png",
                    "https://flagcdn.com/h120/at.png",
                    "https://flagcdn.com/h120/by.png",
                    "https://flagcdn.com/h120/be.png",
                    "https://flagcdn.com/h120/ba.png",
                    "https://flagcdn.com/h120/bg.png",
                    "https://flagcdn.com/h120/hr.png",
                    "https://flagcdn.com/h120/cy.png",
                    "https://flagcdn.com/h120/cz.png",
                    "https://flagcdn.com/h120/dk.png",
                    "https://flagcdn.com/h120/ee.png",
                    "https://flagcdn.com/h120/fi.png",
                    "https://flagcdn.com/h120/fr.png",
                    "https://flagcdn.com/h120/de.png",
                    "https://flagcdn.com/h120/gr.png",
                    "https://flagcdn.com/h120/hu.png",
                    "https://flagcdn.com/h120/is.png",
                    "https://flagcdn.com/h120/ie.png",
                    "https://flagcdn.com/h120/it.png",
                    "https://flagcdn.com/h120/lv.png",
                    "https://flagcdn.com/h120/li.png",
                    "https://flagcdn.com/h120/lt.png",
                    "https://flagcdn.com/h120/lu.png",
                    "https://flagcdn.com/h120/mt.png",
                    "https://flagcdn.com/h120/md.png",
                    "https://flagcdn.com/h120/mc.png",
                    "https://flagcdn.com/h120/me.png",
                    "https://flagcdn.com/h120/nl.png",
                    "https://flagcdn.com/h120/mk.png",
                    "https://flagcdn.com/h120/no.png",
                    "https://flagcdn.com/h120/pl.png",
                    "https://flagcdn.com/h120/pt.png",
                    "https://flagcdn.com/h120/ro.png",
                    "https://flagcdn.com/h120/ru.png",
                    "https://flagcdn.com/h120/sm.png",
                    "https://flagcdn.com/h120/rs.png",
                    "https://flagcdn.com/h120/sk.png",
                    "https://flagcdn.com/h120/si.png",
                    "https://flagcdn.com/h120/es.png",
                    "https://flagcdn.com/h120/se.png",
                    "https://flagcdn.com/h120/ch.png",
                    "https://flagcdn.com/h120/tr.png",
                    "https://flagcdn.com/h120/ua.png",
                    "https://flagcdn.com/h120/gb.png",
                    "https://flagcdn.com/h120/va.png",
                    "https://flagcdn.com/h120/dz.png",
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
                    "https://flagcdn.com/h120/zw.png",
                    "https://flagcdn.com/h120/af.png",
                    "https://flagcdn.com/h120/am.png",
                    "https://flagcdn.com/h120/az.png",
                    "https://flagcdn.com/h120/bh.png",
                    "https://flagcdn.com/h120/bd.png",
                    "https://flagcdn.com/h120/bt.png",
                    "https://flagcdn.com/h120/bn.png",
                    "https://flagcdn.com/h120/kh.png",
                    "https://flagcdn.com/h120/cn.png",
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
                    "https://flagcdn.com/h120/sa.png",
                    "https://flagcdn.com/h120/sg.png",
                    "https://flagcdn.com/h120/lk.png",
                    "https://flagcdn.com/h120/sy.png",
                    "https://flagcdn.com/h120/tj.png",
                    "https://flagcdn.com/h120/th.png",
                    "https://flagcdn.com/h120/tl.png",
                    "https://flagcdn.com/h120/tm.png",
                    "https://flagcdn.com/h120/ae.png",
                    "https://flagcdn.com/h120/uz.png",
                    "https://flagcdn.com/h120/vn.png",
                    "https://flagcdn.com/h120/ye.png",
                    "https://flagcdn.com/h120/au.png",
                    "https://flagcdn.com/h120/fj.png",
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
                    "https://flagcdn.com/h120/vu.png",
                    "https://flagcdn.com/h120/ag.png",
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
    if (flagCount <= 30){
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
    let percent = score / 30 * 100;
    percent = percent.toFixed(1);
    if (score >= 24){
        h1.innerHTML = "Congratulations!🥳"
        h2.innerHTML = "Excellent, you passed the quiz with a score of " + score + "/30 (" + percent +
        "%), you have mastered the world flags!";
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
        h2.innerHTML = "Good try, but you failed the quiz with a score of " + score + "/30 (" + percent +
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
    window.location.assign('All_Continents');
});