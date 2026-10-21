const desktop = document.getElementById("desktop");
const mobile = document.getElementById("mobile");
const taille = document.getElementById("taille");
const container = document.querySelector(".container");

function responsive() {

    let largeur = window.innerWidth;

    taille.textContent = "Largeur : " + largeur + " px";

    if (largeur < 600) {
        desktop.style.display = "none";
        mobile.style.display = "block";
        container.style.flexDirection = "column";
    }
    else {
        desktop.style.display = "block";
        mobile.style.display = "none";
        container.style.flexDirection = "row";
    }
}

window.addEventListener("resize", responsive);

responsive();