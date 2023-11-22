//exit

const settings = document.querySelector('.exit');
settings.addEventListener('click', (e) => {
    window.location.assign('index');
});

//accordions

const accordion = document.querySelectorAll('.contentBx');

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', () => {
        accordion[i].classList.toggle('active');
    }
)};
