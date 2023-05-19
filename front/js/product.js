
// recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);

const paramId = urlParams.get("id");
// console.log(paramId);

// variable deu formulaire section choix de la couleur
const caseOptionSelectionPAnier = document.querySelector('#colors')

// variable bouton ajoutPanier
const ajoutPanier = document.querySelector("#addToCart");


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

function getArticle(product) {
  const { _id, colors, imageUrl, altTxt, name, description, price } = product;
  console.log(product.colors);

  let panier = [{
    
    _id,
    imageUrl,
    altTxt,
    name,
    description,
    price,
    quantity,
    colors,
  }];
    console.log(panier)
    console.log(panier.colors);
// creation de la page de section de produits avec le DOM 

const blocDeLaPageProduit = () => {


}
// on m mettra toute la section de page qui est en bas ... dans la fonction là dessus.

  let b = document.main;
  const productPhotoArticle = document.querySelector("div.item__img");
  let productImg = document.createElement("img");
  let newProductImg = productPhotoArticle.append(productImg);
  productImg.setAttribute("src", "../images/logo.png");
  productImg.setAttribute("alt", "Photographie d'un canapé");

  // console.log('console suite nom produit');
  const produitNomPrix = document.querySelector("h1#title");
  produitNomPrix.innerHTML = name;

  const valeurPrix = (document.querySelector("span#price").innerHTML = price);

  // console.log("console suite produit explique")
  const phraseDescription = document.querySelector("p#description");
  phraseDescription.innerHTML = description;
  // console.log(phraseDescription)

  const firstSelectForm = document.querySelector("#colors");
  console.log(firstSelectForm);

  console.log(firstSelectForm.children);

  for (let i in colors) {
    // console.log(colors[i]);
    const selectForm = document.createElement("option"[i]);
    const optionValue = document.createElement("option");
    optionValue.setAttribute("value", colors[i]);
    optionValue.innerHTML = colors[i];
    console.log(optionValue)
    firstSelectForm.append(optionValue);    

    // petit test
    // console.log(panier[i]);

  }


  console.log(panier[0]);


const choixKanapCouleur = document.getElementById('colors');

//Debt section btn
  const ajoutBtn = document.querySelector("#addToCart");

    localStorage.setItem("quantité", quantity.value)
    JSON.parse(localStorage.getItem(quantity.value));
    localStorage.setItem('couleur', choixKanapCouleur.value)
    // localStorage.setItem('nom',JSON.stringify(product.description))


    panier._id = product._id;
    panier.imageUrl = product.imageUrl;
    panier.altTxt = product.altTxt;
    panier.name = product.name;
    panier.description = product.description;
    panier.colors = choixKanapCouleur.value;
    console.log(choixKanapCouleur.value);
    panier.quantity = quantity.value;

    console.log(panier._id,
  panier.name,
  choixKanapCouleur.value,
  quantity.value ),

console.log("on sauve" + JSON.parse(localStorage.getItem("quantite")) + "pluss" + quantity.value + "qui donne" + JSON.parse(localStorage.getItem("quantite")) + quantity.value)
const qtelocalStock = JSON.parse(localStorage.getItem("quantite"))
qtelocalStock

localStorage.setItem("couleur choisie", choixKanapCouleur.value)
console.log(localStorage.getItem("couleur choisie"));
  //Gestion du bouton au click sur rajouter au panier
  ajoutBtn.addEventListener("click", function (e) {
    console.log("capasse le bouton");
    e.preventDefault;

    panier._id = product._id;
    panier.imageUrl = product.imageUrl;
    panier.altTxt = product.altTxt;
    panier.name = product.name;
    panier.description = product.description;
    panier.colors = choixKanapCouleur.value;
    console.log(choixKanapCouleur.value);
    panier.quantity = quantity.value;

    const panierId = panier._id;

    localStorage.setItem("couleur choisie", choixKanapCouleur.value)

    let laQteChoisie = quantity.value;
    // console.log(product.colors);

    const leProduit = JSON.parse(localStorage.getItem("le produit"));
console.log("calcul", qtelocalStock + laQteChoisie)

// cette fonction ne veut pâs marcher.
    // function qteProduitType (qtelocalStock, laQteChoisie) {
    //     return qtelocalStock + laQteChoisie;
    // }
    // 
    console.log("on sauve " + qtelocalStock + "pluss " + quantity.value + "qui donnent" + (qtelocalStock + laQteChoisie))
 

    function ajoutArticl (panier, quantity) {

      // là en ajoutant un article si ca correspond a un article du panier, et ben  ....

      for (articles of panier) {
        if (panier._id == panier._id) {
          panier.qute += quantity.value
          return;
        }

        else if (panier._id !== panier._id) {
          panier.push(new Array);
          panier.push(JSON.parse(localStorage.getItem("panier")))
        }
      }
    }

    // Voici l'ancienne version ci dessous

   

    //   if (leProduit === null) {
    //     console.log("Maintenant il y a " + quantity.value + " produit ajouté")
    //   //  stockage de seulement la couleurchoisie  produit choisi dans le localStorage
    //   localStorage.setItem("le produit", JSON.stringify(panier));

    // }
    
    // else if (panier._id === product._id && panier.colors === choixKanapCouleur.value && panier.quantity === quantity.value) { 
    //   panier.quantity =  JSON.parse(localStorage.getItem("quantite")) + quantity.value;

    //   console.log(panier.quantity);
    //   //  const quantiteLeMemeId = panier._id;
    //   // console.log("bien egal à " + quantiteLeMemeId);   
    //   console.log(panier.quantity)
           
    // }

    // // Je souhaite verifier que l'id de product est diiferent du panier en conditions if et tout .id- productt et id panier { pas rajout new line , sauf si === }
    //   else {
    //     panier.push(product)
    //     console.log(panier)
    //     localStorage.setItem("le produit", JSON.stringify(panier));
    //     console.log("paniercolor", choixKanapCouleur.value)
    
    //     // localStorage.setItem("qté produitID", qttyLeproduit)
    //     // console.log(panier.quantity.length);
    //   }


      const panierChoisi = JSON.parse(localStorage.getItem("panier", "panier.name", "panier.imageUrl"));
      panierChoisi;
    // localStorage.setItem("colors", JSON.stringify(choixKanapCouleur.value))
    // const couleurChoisi = JSON.parse(localStorage.getItem("colors"));
    // console.log(couleurChoisi);

    // // Stockage de la quantité du produit choisi a test suppr
    const qteArticle = document.querySelector("#quantity");
    localStorage.setItem("quantite", quantity.value)
    // console.log(panier.quantity.length);
  // const accesImageUrl  =  localStorage.getItem('imageUrl')
  //                         localStorage.setItem('imageUrl', imageUrl)


    // // Et pour la carte on recrute ceci en bas 

    // const nomArticle = document.querySelector("h2 ");
    // localStorage.setItem("quantité", quantity.value)
    // JSON.parse(localStorage.getItem(quantity.value));
    // console.log(quantity.value);

    // localStorage.setItem('couleur', panier.colors)
    // localStorage.setItem('nom', panier.name)

    
  });

}
// localStorage.clear();

