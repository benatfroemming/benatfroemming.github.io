var box = document.querySelector(".blog-box");
var img = document.querySelector(".img");
var title = document.querySelector(".blog-title");
const land = document.querySelectorAll(".land");

const onMouseMove = (e) =>{
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


for (i = 0; i < land.length; i++) {
    land[i].addEventListener('mouseover', (e) => {
        let elementId = e.target.id;
        var split = elementId.split(",");
        box.classList.toggle("show");
        title.innerHTML = split[0];
        img.src = split[1];
    });
}
for (i = 0; i < land.length; i++) {
    land[i].addEventListener('mouseout', (e) => {
        box.classList.remove("show");
    });
}

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});