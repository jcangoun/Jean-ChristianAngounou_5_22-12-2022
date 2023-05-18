function recupInfoGlobl () {
  
// recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);

const paramId = urlParams.get("id");
// console.log(paramId);

}

recupInfoGlobl();
console.log (recupO);


// variable deu formulaire section choix de la couleur
const caseOptionSelectionPAnier = document.querySelector('#colors')

// variable bouton ajoutPanier
const ajoutPanier = document.querySelector("#addToCart");



// ici en bas toute la section fetch copiée dans product.js

fetch(`http://localhost:3000/api/products/${paramId}`)
  .then(function (res) {
    if (res.ok === true) {
      return res.json();
    }
  })
  .then(function (product) {
    getArticle(product);
    // console.log(product);
  });
// .catch(function (error) {
//   console.error(`probleme : ${error}`);
// });

// Fin section fetch copiée chez product.js
