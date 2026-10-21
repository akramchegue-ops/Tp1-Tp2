const changer = document.getElementById("changer");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    changer.textContent = "Mode clair";
}

// Changer le thème
changer.onclick = function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        changer.textContent = "Mode clair";
        localStorage.setItem("theme", "dark");

    }
    else {

        changer.textContent = "Mode sombre";
        localStorage.setItem("theme", "light");

    }
};