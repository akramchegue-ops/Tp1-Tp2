const photo = document.getElementById("photo");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");

const images = ["naruto1.png", "naruto2.jpeg", "naruto3.jpeg","naruto4.jpeg"];

let index = 0;

suivant.onclick = function() {
    index++;

    if (index === images.length) {
        index = 0;
    }

    photo.src = images[index];
};

precedent.onclick = function() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    photo.src = images[index];
};