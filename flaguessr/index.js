//Dropdown 1

const content = document.querySelector('.content');
const dropdowns = document.querySelector('.dropdown');
const content2 = document.querySelector('.content');
const dropdowns1 = document.querySelector('.dropdown1');

var check = false;
var check1 = false;
if (check === false){
    const select = dropdowns.querySelector('.select');
    const caret = dropdowns.querySelector('.caret');
    const menu = dropdowns.querySelector('.menu');
    const options = dropdowns.querySelectorAll('.menu li');
    const selected = dropdowns.querySelector('.selected');

    select.addEventListener('click', (e) => {
            e.stopPropagation();
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open'); 
            check = true;
    });

    content.addEventListener('click', (e) => {
        e.stopPropagation();
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open'); 
        check = false;
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
}

// Dropdown 2

if (check1 === false){
    const select1 = dropdowns1.querySelector('.select1');
    const caret1 = dropdowns1.querySelector('.caret1');
    const menu1 = dropdowns1.querySelector('.menu1');
    const options1 = dropdowns1.querySelectorAll('.menu1 li');
    const selected1 = dropdowns1.querySelector('.selected1');

    select1.addEventListener('click', (e) => {
        
        e.stopPropagation();
        select1.classList.toggle('select1-clicked');
        caret1.classList.toggle('caret1-rotate');
        menu1.classList.toggle('menu1-open'); 
        check1 = true;
        
    });

    content2.addEventListener('click', (e) => {
        e.stopPropagation();
        select1.classList.remove('select1-clicked');
        caret1.classList.remove('caret1-rotate');
        menu1.classList.remove('menu1-open'); 
    });

    options1.forEach(option => {
        option.addEventListener('click', () => {
            selected1.innerText = option.innerText;
            select1.classList.remove('select1-clicked');
            caret1.classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
            options1.forEach(option => {
                option.classList.remove('active1');
            });
            option.classList.add('active1');
        });
    });
}

//Flashcards America

const dropdown1 = document.querySelector('.dropdown');
const selected = dropdown1.querySelector('.selected');
const dropdown2 = document.querySelector('.dropdown1');
const selected1 = dropdown2.querySelector('.selected1');
const button = document.querySelector('.button1');
button.addEventListener('click', () => {
    if (selected.innerText == 'Choose a continent' || selected1.innerText == 'Game Mode'){
        alert("Please select a continent and game mode to start!");
    }else if (selected.innerText == 'North & South America' && selected1.innerText == 'Quiz'){
        window.location.assign('America_Quiz');
    }else if (selected.innerText == 'North & South America' && selected1.innerText == 'Flashcards'){
        window.location.assign('America_Flashcards');
    }else if (selected.innerText == 'Asia' && selected1.innerText == 'Flashcards'){
        window.location.assign('Asia_Flashcards');
    }else if (selected.innerText == 'Asia' && selected1.innerText == 'Quiz'){
        window.location.assign('Asia_Quiz');
    }else if (selected.innerText == 'Oceania' && selected1.innerText == 'Flashcards'){
        window.location.assign('Oceania_Flashcards');
    }else if (selected.innerText == 'Oceania' && selected1.innerText == 'Quiz'){
        window.location.assign('Oceania_Quiz');
    }else if (selected.innerText == 'Europe' && selected1.innerText == 'Flashcards'){
        window.location.assign('Europe_Flashcards');
    }else if (selected.innerText == 'Europe' && selected1.innerText == 'Quiz'){
        window.location.assign('Europe_Quiz');
    }else if (selected.innerText == 'Africa' && selected1.innerText == 'Flashcards'){
        window.location.assign('Africa_Flashcards');
    }else if (selected.innerText == 'Africa' && selected1.innerText == 'Quiz'){
        window.location.assign('Africa_Quiz');
    }else if (selected.innerText == 'All continents' && selected1.innerText == 'Quiz'){
        window.location.assign('All_Continents');
    }else if (selected.innerText == 'All continents' && selected1.innerText == 'Flashcards'){
        alert("Flashcards not available for your selection!");
    }else if (selected.innerText == 'U.S. States' && selected1.innerText == 'Flashcards'){
        window.location.assign('States_Flashcards');
    }else if (selected.innerText == 'U.S. States' && selected1.innerText == 'Quiz'){
        window.location.assign('States_Quiz');
    }else if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
        if (selected.innerText == 'North & South America' && selected1.innerText == 'Map'){
        window.location.assign('America_Map');
    }else if (selected.innerText == 'North & South America' && selected1.innerText == 'Map Quiz'){
        window.location.assign('America_Map_Quiz');
    }else if (selected.innerText == 'Asia' && selected1.innerText == 'Map'){
        window.location.assign('Asia_Map');
    }else if (selected.innerText == 'Asia' && selected1.innerText == 'Map Quiz'){
        window.location.assign('Asia_Map_Quiz');
    }else if (selected.innerText == 'Oceania' && selected1.innerText == 'Map'){
        window.location.assign('Oceania_Map');
    }else if (selected.innerText == 'Oceania' && selected1.innerText == 'Map Quiz'){
        window.location.assign('Oceania_Map_Quiz');
    }else if (selected.innerText == 'Europe' && selected1.innerText == 'Map'){
        window.location.assign('Europe_Map');
    }else if (selected.innerText == 'Europe' && selected1.innerText == 'Map Quiz'){
        window.location.assign('Europe_Map_Quiz');
    }else if (selected.innerText == 'Africa' && selected1.innerText == 'Map'){
        window.location.assign('Africa_Map');
    }else if (selected.innerText == 'Africa' && selected1.innerText == 'Map Quiz'){
        window.location.assign('Africa_Map_Quiz');
    }else if (selected.innerText == 'All continents' && selected1.innerText == 'Map'){
        alert("Map not available for your selection!");
    }else if (selected.innerText == 'All continents' && selected1.innerText == 'Map Quiz'){
        alert("Map Quiz not available for your selection!");
    }else if (selected.innerText == 'U.S. States' && selected1.innerText == 'Map'){
        window.location.assign('US_Map');
    }else if (selected.innerText == 'U.S. States' && selected1.innerText == 'Map Quiz'){
        window.location.assign('US_Map_Quiz');
    }
    }else{
        alert("This game mode is not available on phones and Ipads, please try playing on a computer or tablet! 😢💻");
    }
    
    
});

//settings

const settings1 = document.querySelector('.settings1');
settings1.addEventListener('click', (e) => {
    window.location.assign('Settings');
});

const settings2 = document.querySelector('.settings2');
settings2.addEventListener('click', (e) => {
    window.open('https://linktr.ee/flaguessr', '_blank');
});

const settings3 = document.querySelector('.settings3');
settings3.addEventListener('click', (e) => {
    window.open('https://www.buymeacoffee.com/flaguessr', '_blank');
});