const tache = document.getElementById("tache");
const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");

ajouter.onclick = function() {

    if (tache.value.trim() === "") {
        alert("Veuillez entrer une tâche");
        return;
    }

    const li = document.createElement("li");
    li.textContent = tache.value + " ";

    const terminer = document.createElement("button");
    terminer.textContent = "Terminer";

    const supprimer = document.createElement("button");
    supprimer.textContent = "Supprimer";

    terminer.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    supprimer.onclick = function() {
        li.remove();
    };

    li.appendChild(terminer);
    li.appendChild(supprimer);

    liste.appendChild(li);

    tache.value = "";
};