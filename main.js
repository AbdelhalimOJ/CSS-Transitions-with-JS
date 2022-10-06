let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone){
    img.src = phone
    img.style.transition = '0.5s';
}

function colors(color){
container.style.background = color;
}