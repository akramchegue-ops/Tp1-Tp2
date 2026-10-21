const bt = document.getElementById("bt");
const menu = document.getElementById("menu");

bt.onclick = function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};