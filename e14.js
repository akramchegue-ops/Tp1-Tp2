const element = document.getElementById("element");
const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");

element.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", element.id);
});

zone1.addEventListener("dragover", function(event) {
    event.preventDefault();
});

zone2.addEventListener("dragover", function(event) {
    event.preventDefault();
});

zone1.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text/plain");
    zone1.appendChild(document.getElementById(id));
});

zone2.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text/plain");
    zone2.appendChild(document.getElementById(id));
});