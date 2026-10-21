const recherche = document.getElementById("recherche");
const produits = document.querySelectorAll("#liste li");

recherche.oninput = function() {

    const texte = recherche.value.toLowerCase();

    produits.forEach(function(produit) {

        const nom = produit.textContent.toLowerCase();

        if (nom.includes(texte)) {
            produit.style.display = "list-item";
        }
        else {
            produit.style.display = "none";
        }

    });
};