const ouvrir = document.getElementById("ouvrir");
const fermer = document.getElementById("fermer");
const modal = document.getElementById("modal");

ouvrir.onclick = function() {
    modal.style.display = "flex";
};

fermer.onclick = function() {
    modal.style.display = "none";
};