const progression = document.getElementById("progression");
const pourcentage = document.getElementById("pourcentage");
const demarrer = document.getElementById("demarrer");

let interval;

demarrer.onclick = function() {

    let valeur = 0;

    progression.style.width = "0%";
    pourcentage.textContent = "0%";

    demarrer.disabled = true;

    interval = setInterval(function() {

        valeur++;

        progression.style.width = valeur + "%";
        pourcentage.textContent = valeur + "%";

        if (valeur >= 100) {
            clearInterval(interval);
            demarrer.disabled = false;
        }

    }, 50);
};