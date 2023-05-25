// recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);

const paramId = urlParams.get("id");
// console.log(paramId);

// variable deu formulaire section choix de la couleur
const caseOptionSelectionPAnier = document.querySelector("#colors");

// variable bouton ajoutPanier
const ajoutPanier = document.querySelector("#addToCart");

// là je rajoute le premier élément test
const elemtItemImg = document.querySelector("div.item__img");

fetch(`http://localhost:3000/api/products/${paramId}`)
  .then(function (res) {
    if (res.ok === true) {
      return res.json();
    }
  })
  .then(function (product) {
    getArticle(product);
    console.log("c'est l'article que je viens de fetcher", product);
  });
// .catch(function (error) {
//   console.error(`probleme : ${error}`);
// });

function getArticle(product) {
  const { _id, colors, imageUrl, altTxt, name, description, price } = product;
  console.log(product.colors);

  let panier = [
    {
      _id,
      imageUrl,
      altTxt,
      name,
      description,
      price,
      quantity,
      colors,
    },
  ];
  console.log(panier);
  console.log(panier.colors);
  // creation de la page de section de produits avec le DOM

  const blocDeLaPageProduit = () => {};
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

  const choixKanapCouleur = document.getElementById("colors");

  //Debt section btn
  const ajoutBtn = document.querySelector("#addToCart");

  // Ici, pour notre balise selectavec id = colors, on on ajoute les valeurs color de notre fetch

  for (let i in colors) {
    // console.log(colors[i]);
    const selectForm = document.createElement("option"[i]);
    const optionValue = document.createElement("option");
    optionValue.setAttribute("value", colors[i]);
    optionValue.innerHTML = colors[i];
    // console.log(optionValue);
    firstSelectForm.append(optionValue);

    // petit test, panier[i] là sera undefined
    // console.log(panier[i]);
  }
  console.log(panier[0]);

  // Muitage test de cette section local ci dessous

  // localStorage.setItem("quantité", quantity.value)
  // JSON.parse(localStorage.getItem(quantity.value));
  // localStorage.setItem('couleur', choixKanapCouleur.value)

  // localStorage.setItem('nom',JSON.stringify(product.description))

  panier._id = product._id;
  panier.imageUrl = product.imageUrl;
  panier.altTxt = product.altTxt;
  panier.name = product.name;
  panier.description = product.description;
  panier.colors = choixKanapCouleur.value;
  console.log(choixKanapCouleur.value);
  panier.quantity = quantity.value;

  console.log(panier._id, panier.name, choixKanapCouleur.value, quantity.value),
    console.log("on sauve" + JSON.parse(localStorage.getItem("quantite")) + "pluss" + quantity.value + "qui donne" + JSON.parse(localStorage.getItem("quantite")) + quantity.value);
  const qtelocalStock = JSON.parse(localStorage.getItem("quantite"));
  qtelocalStock;

  // Je mute pour voir ce qu'il se passe avec les new conditions
  // localStorage.setItem("couleur", choixKanapCouleur.value);
  // console.log(localStorage.getItem("couleur"));

  //Gestion du bouton au click sur rajouter au panier

  ajoutBtn.addEventListener("click", function (e) {
    console.log("capasse le bouton");
    e.preventDefault;

    // ======   Nouveau bloc conditon préparé sur ma feuille de travail ========================

    // Là je fais un objet vide qui sera ajouté après si opn a une quantity.value > 0 et une couleur

    const newproduitKanap = {};

    if (quantity.value > 0 && choixKanapCouleur.value !== undefined) {
      // Ici je vais essayer de ne pas nommer avec des "nom.qulquechose mais plutot "nom" et c'est tout
      
      // nouveau bug a debug dans mes conditions 
      // (nouveauProduitKanap.name = name),
      //   (nouveauProduitKanap._id = _id),
      //   (nouveauProduitKanap.description = description),
      //   (nouveauProduitKanap.colors = colors),
      //   (nouveauProduitKanap.quantity = quantity.value);


      panier._id = _id;
      panier.imageUrl = imageUrl;
      panier.altTxt = altTxt;
      panier.name = name;
      panier.description = description;
      panier.colors = choixKanapCouleur.value;
      console.log(choixKanapCouleur.value);
      panier.quantity = quantity.value;
    
      const lePanier = localStorage.getItem("panier");

      // Si on a déjà un panier ds localStoraghe on consoleLog  "y a pas encore panier";

      if (panier === null) {
        console.log("y a pas encore de panier là");

        // Et là si pas de panier on ajoute un panier comme ci dessous

        const leNouveauPanier = [];
        leNouveauPanier.push(nouveauProduitKanap);

        localStorage.setItem("panier", JSON.stringify(leNouveauPanier));
        // 
      } 
      else {
        console.log("il y a déjà un panier il faut juste le remplir    ", panier);


// On regarde le panier actuel ceci est un élément testé récemment =================================

  // Ne pas oublier,  a partir d'ici , panierActuel devrait normalement être egal à
     // const panierActuel = JSON.parse(panier);
        const panierActuel = panier;
        console.log("le panier actuel", panierActuel)

//  Et c'est ici que j'utilise les fameuses methodes de selections
    // Je voies d'abord qu'il y a le meme produit qui existe ou pas 

    const filtragePanierActuel = panierActuel.filter(kanap => kanap._id !== _id);

    // Si le panier n'a pas le même id, Je crée un nouveau tableau où je rajoute les nouveauxtableaux que j'ai créés

    // variable pour nouveautableau const panier rafraichi
        const refreshPanier = [...filtragePanierActuel];

        // On voit si on a un produit identique .......
        //  C'est ici que je m'arrete pour faire un nouveau test sur mon ordi
     const produitPresent = panierActuel.filter(kanap => kanap._id === _id) [0];
     console.log(produitPresent);

        if (produitPresent) {
          // Ci dessous on utilise le fameux parseInt testé en meme temps que les différentes insertions tableaux
          produitPresent.quantity = parseInt(produitPresent.quantity) + parseInt(quantity.value);
          
          refreshPanier.push(produitPresent);
          console.log(produitPresent.quantity);
          return produitPresent.quantity;
        } else {
          refreshPanier.push(newproduitKanap);
        }


        localStorage.setItem("Ce panier", JSON.stringify(refreshPanier));

    // petit test sur filtragePanierActuel
        // console.log(filtragePanierActuel);
        // console.log([filtragePanierActuel]);
        // console.log([...filtragePanierActuel]);

      }
    } else {
      alert("Pas de bras, pas de chocolat :), sans blague faut au moins une quantity quand même!!")
    }
    //  Fin Nouveau bloc conditon préparé sur ma feuille de travail ===============================================================

    // Je mute aussi la copie de panier._id et autres ci dessous, temporairement pour utiliser celui de dessus

    panier._id = product._id;
    panier.imageUrl = product.imageUrl;
    panier.altTxt = product.altTxt;
    panier.name = product.name;
    panier.description = product.description;
    panier.colors = choixKanapCouleur.value;
    console.log(choixKanapCouleur.value);
    panier.quantity = quantity.value;

    const panierId = panier._id;

    // localStorage.setItem("couleur choisie", choixKanapCouleur.value);

    let laQteChoisie = quantity.value;
    // console.log(product.colors);

    const leProduit = JSON.parse(localStorage.getItem("le produit"));
    console.log("calcul", qtelocalStock + laQteChoisie);

    // cette fonction ne veut pâs marcher.
    function qteProduitType (qtelocalStock, laQteChoisie) {
        return qtelocalStock + laQteChoisie;
    }
    
    console.log("on sauve " + qtelocalStock + "pluss " + quantity.value + "qui donnent" + (qtelocalStock + laQteChoisie));

    // Voici l'ensembles des anciennes version dans ce bloc  =====================================================

    // version 2e plus ancienne ==============================================

    // function ajoutArticl (panier, quantity) {

    //   // là en ajoutant un article si ca correspond a un article du panier, et ben  ....

    //   for (articles of panier) {
    //     if (panier._id == panier._id) {
    //       panier.qute += quantity.value
    //       return;
    //     }

    //     else if (panier._id !== panier._id) {
    //       panier.push(new Array);
    //       panier.push(JSON.parse(localStorage.getItem("panier")))
    //     }
    //   }
    // }

    // Fin version la 2e plus ancienne ===============================================

    // Voici l'ancienne version la plus vielle ici en dessous ancienne "1st".

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

    // fin des version ici ======================================================================
    // =============================================================================

    // const panierChoisi = JSON.parse(localStorage.getItem("panier", "panier.name", "panier.imageUrl"));
    // panierChoisi;
    // // localStorage.setItem("colors", JSON.stringify(choixKanapCouleur.value))
    // // const couleurChoisi = JSON.parse(localStorage.getItem("colors"));
    // // console.log(couleurChoisi);

    // // // Stockage de la quantité du produit choisi a test suppr
    // const qteArticle = document.querySelector("#quantity");
    // localStorage.setItem("quantite", quantity.value);
  });
}
// localStorage.clear();
