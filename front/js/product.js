// recup des infosproduits

const info = window.location.search;

// console.log("window Location:", window.location);

const urlParams = new URLSearchParams(info);

// on recup l'id de notre url

const paramId = urlParams.get("id");

 

// variable deu formulaire section choix de la couleur

const caseOptionSelectionPAnier = document.querySelector('#colors');

// variable bouton ajoutPanier

const ajoutPanier = document.querySelector("#addToCart");

const productPhotoArticle = document.querySelector("div.item__img");

 

fetch(`http://localhost:3000/api/products/${paramId}`)

  .then(function (res) {

    if (res.ok === true) {

      return res.json();

    }

  })

  .then(function (product) {

    getArticle(product);

    console.log("produit fetcher",product);

  })

  .catch(function (error) {

    console.error(`probleme : ${error}`);

  });

 

function getArticle(product) {

  const { _id, colors, imageUrl, altTxt, name, description, price } = product;

  console.log(product.colors);

   

  // on recuper le select

  const firstSelectForm = document.querySelector("#colors");

 

  // ici on ajoute a notre balise select les valeurs colors de notre fetch

  for (let i in colors) {

    const optionValue = document.createElement("option");

    optionValue.setAttribute("value", colors[i]);

    optionValue.innerHTML = colors[i];

    console.log(optionValue)

    firstSelectForm.append(optionValue);

  }

 

  let productImg = document.createElement("img");

  productPhotoArticle.append(productImg);

  productImg.setAttribute("src", "../images/logo.png");

  productImg.setAttribute("alt", "Photographie d'un canapé");

 

  const produitNomPrix = document.querySelector("h1#title");

  produitNomPrix.innerHTML = name;

 

  document.querySelector("span#price").innerHTML = price;

 

  // on recup la description

  const phraseDescription = document.querySelector("p#description");

  // on injecte la description a notre balise

  phraseDescription.innerHTML = description;

 

  const choixKanapCouleur = document.getElementById('colors');

  const ajoutBtn = document.getElementById("addToCart");

 

  //Gestion du bouton au click sur rajouter au panier

  ajoutBtn.addEventListener("click", function (e) {

    e.preventDefault;

 

    console.log("color", choixKanapCouleur.value)

    // on prepare un objet vide pour le future produit qui va etre ajouter et on s'assure d'avoir au moin une quantity > 0 et une couleur

    const nouveauProduit = {};

    if (quantity.value > 0 && choixKanapCouleur.value !== undefined) {

      nouveauProduit._id =_id,

      nouveauProduit.name =name,

      nouveauProduit.description =description,

      nouveauProduit.colors = choixKanapCouleur.value,

      nouveauProduit.quantity = quantity.value;

 

      const panier = localStorage.getItem("panier");

 

      // on check si on a déja un panier actif dans le localStorage

      if (panier === null) {

        console.log("ici on a pas de panier")

        // alors si pas de panier on ajoute un panier

        const nouveauPanier = [];

        nouveauPanier.push(nouveauProduit);

        localStorage.setItem("panier", JSON.stringify(nouveauPanier));

      } else {

        console.log("on a deja un panier faut le remplirr");

 

   

        const panierCourant = JSON.parse(panier);

        console.log("panier courant", panierCourant)

 

        const panierCourantFiltrer = panierCourant.filter(item => item._id !== _id);

        // ici on remet l'ancier paniener sans le meme id d'office

        const majPanier = [...panierCourantFiltrer];

       

        // faut verifier qu'on a deja un prduit avec un id sililaire

        const produitExiste = panierCourant.filter(item => item._id === _id)[0];

        if (produitExiste) {

          produitExiste.quantity = parseInt(produitExiste.quantity) + parseInt(quantity.value);

          majPanier.push(produitExiste);

        } else {

          majPanier.push(nouveauProduit);

        }
        localStorage.setItem("panier", JSON.stringify(majPanier));

 
      }
    } else {
      alert("pas de bras pas de chocolat :), sans blaque faut au moin une quatity")
    }
  });