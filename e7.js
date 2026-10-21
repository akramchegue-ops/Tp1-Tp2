const temps = document.getElementById("temps");

let secondes = 0;

setInterval(function() {
    secondes++;
    temps.textContent = "Temps écoulé : " + secondes + " secondes";
}, 1000);