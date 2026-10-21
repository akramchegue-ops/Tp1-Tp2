const carre = document.getElementById("carre");

carre.addEventListener("mouseover", function() {
    carre.style.backgroundColor = "black";
});

carre.addEventListener("mouseout", function() {
    carre.style.backgroundColor = "blue";
});