const searchBox = document.querySelector(".search-box");
const blogBoxes = document.querySelectorAll(".blog-box");
const message = document.querySelector(".message");
const button = document.querySelector(".button");
document.addEventListener("keyup", e => {
    if (e.key == "Enter"){
        let count = 0;
        message.classList.remove('show');
        button.classList.remove('show');
        const userInput = searchBox.value.toLowerCase();
        blogBoxes.forEach(blogBox => {
            blogBox.style.display = "flex";
        });
        blogBoxes.forEach(blogBox => {
            const blogTitle = blogBox.querySelector(".blog-title").innerHTML.toLowerCase();
            if(!(blogTitle.includes(userInput))){
                blogBox.style.display = "none";
            }else{
                count = count + 1;
            }
        });
        if (count == 0){
            message.innerHTML = "No results found for \"" + userInput + "\"";
        }else if (count == 1){
            message.innerHTML = count + " flag was found that contains \"" + userInput + "\"";
        }else{
            message.innerHTML = count + " flags were found that contain \"" + userInput + "\"";
        }
        message.classList.toggle('show');
        button.classList.toggle('show');
    }
});

const icon = document.querySelector(".icon");

icon.addEventListener('click', () => {
    let count = 0;
    message.classList.remove('show');
    button.classList.remove('show');
    const userInput = searchBox.value.toLowerCase();
    blogBoxes.forEach(blogBox => {
        blogBox.style.display = "flex";
    });
    blogBoxes.forEach(blogBox => {
        const blogTitle = blogBox.querySelector(".blog-title").innerHTML.toLowerCase();
        if(!(blogTitle.includes(userInput))){
            blogBox.style.display = "none";
        }else{
            count = count + 1;
        }
    });
    if (count == 0){
        message.innerHTML = "No results found for \"" + userInput + "\"";
    }else if (count == 1){
        message.innerHTML = count + " flag was found that contains \"" + userInput + "\"";
    }else{
        message.innerHTML = count + " flags were found that contain \"" + userInput + "\"";
    }
    message.classList.toggle('show');
    button.classList.toggle('show');
});

button.addEventListener('click', () => {
    blogBoxes.forEach(blogBox => {
        blogBox.style.display = "flex";
    });
    message.classList.remove('show');
    button.classList.remove('show');
    searchBox.value = "";
    searchBox.focus();
});

const title = document.querySelectorAll(".blog-title");
for (var i = 0; i< title.length; i++){
    title[i].addEventListener('click', () => {
        alert("We are currently working on creating an individual page for each flag! 🌎");
    });
}

for (var i = 0; i< blogBoxes.length; i++){
    blogBoxes[i].addEventListener('click', () => {
        alert("We are currently working on creating an individual page for each flag! 🌎");
    });
}
