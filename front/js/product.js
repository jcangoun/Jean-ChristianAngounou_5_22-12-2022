

// recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);
console.log(urlParams);

const paramId = urlParams.get("id");
console.log(paramId);


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
    console.log(product);
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

  // console.log('console  derniere suite pour page product');
  const firstSelectForm = document.querySelector("#colors");
  console.log(firstSelectForm);

  console.log(firstSelectForm.children);

  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);

    const selectForm = document.createElement("option"[i]);
    const optionValue = document.createElement("option");
    optionValue.setAttribute("value", colors[i]);
    optionValue.innerHTML = colors[i];
    firstSelectForm.append(optionValue);

  }


  const colorPanierSelected = panier.colors;
  console.log(panier[0]);


const choixKanapCouleur = document.getElementById('colors');

//Debt section btn
  const ajoutBtn = document.querySelector("#addToCart");

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

    const leProduit = JSON.parse(localStorage.getItem("le produit"));
    console.log(leProduit);
      if (leProduit === null) {

      //  stockage de seulement la couleurchoisie  produit choisi dans le localStorage
      localStorage.setItem("le produit", JSON.stringify(panier));

    }
    else if (panier.id === product.id ) { 
      if (panier.colors === product.colors && panier.quantity ) {

        console.log("bien egal")
       panier.quantity++;
      }
      
    }


    // Je souhaite verifier que l'id de product est diiferent du panier en conditions if et tout .id- productt et id panier { pas rajout new line , sauf si === }
      else {panier.push(product)
        console.log(panier)
        localStorage.setItem("le produit", JSON.stringify(panier));

        
      }



      const panierChoisi = JSON.parse(localStorage.getItem("panier", "panier.name", "panier.imageUrl"));
      panierChoisi;
    // localStorage.setItem("colors", JSON.stringify(choixKanapCouleur.value))
    // const couleurChoisi = JSON.parse(localStorage.getItem("colors"));
    // console.log(couleurChoisi);

    // // Stockage de la quantité du produit choisi a test suppr
    const qteArticle = document.querySelector("#quantity");
    localStorage.setItem("quantite", quantity.value)
    JSON.parse(localStorage.getItem(quantity.value));
    console.log(panier.quantity);
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

