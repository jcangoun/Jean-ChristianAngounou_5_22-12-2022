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

// tonton fetchage = 

// async function fetchage() {
//   try {
//   const responseFetch = await fetch(`http://localhost:3000/api/products/${paramId}`);
//   if (!responseFetch.ok) {
//     throw new error('Erreur au moment du fetchage.');
//   }
//   const product = await responseFetch.json();
//   getArticle(product);
//   console.log("c'est l'article que je viens de fetcher", product);
// }
//   catch (error) {console.error('PEtit Problème : ${error')};
// }
// ca va me permettre de recuperer mon fetch test de la feuille de travail , sans la perdre vu que je reprends tout là  

fetch(`http://localhost:3000/api/products/${paramId}`)
  .then(function (res) {
    if (res.ok === true) {
      return res.json();
    }
  })
  .then(function (product) {
    getArticle(product);
    console.log("c'est l'article que je viens de fetcher", product);
  })
.catch(function (error) {
  console.error(`probleme : ${error}`);
});

function getArticle(product) {
  const { _id, colors, imageUrl, altTxt, name, description, price } = product;
  console.log(product.colors);

  let panier = 
    {
      _id,
      imageUrl,
      altTxt,
      name,
      description,
      price,
      quantity,
      colors,
    };
  console.log(panier);
  // console.log(panier.name);
  


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
  // const caseQte = document.querySelector("#quantity");


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
    
  }
  // console.log(panier[0]);
  
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

 console.log(panier.name)
  // panier.push("hello");
  console.log(panier);
  //Gestion du bouton au click sur rajouter au panier
  ajoutBtn.addEventListener("click", function (e) {
    console.log("capasse le bouton");
    e.preventDefault;

    // ======   Nouveau bloc conditon ========================

      
      console.log(choixKanapCouleur.value)
      
      // Là je fais un objet vide qui sera ajouté après si opn a une quantity.value > 0 et une couleur
      // on prepare un objet vide pour le future produit qui va etre ajouter et on s'assure d'avoir au moin une quantity > 0 et une couleur

    const nouveauProduit = {};
    
    if (quantity.value > 0 && choixKanapCouleur.value !== undefined) {
      // Ici je vais essayer de ne pas nommer avec des "nom.qulquechose mais plutot "nom" et c'est tout

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

        // console.log("on a deja un panier faut le remplirr");  

        const panierCourant = JSON.parse(panier);
        // console.log("panier courant", panierCourant)

        const panierCourantFiltrer = panierCourant.filter(item => item._id !== _id);
        
        // ici on remet l'ancier paniener sans le meme id d'office
        const majPanier = [...panierCourantFiltrer];
        // faut verifier qu'on a deja un prduit avec un id sililaire
        const produitExiste = panierCourant.filter(item => item === nouveauProduit)[0];
        console.log(produitExiste)

        const produitPleinExiste = panierCourant.filter(item => item._id === _id,item => item.name === name , 
          item => item.description === description ,item => item.colors === choixKanapCouleur.value,item => item.quantity === quantity.value)[0];

          console.log(produitPleinExiste)
        debugger

        // const produitPasExiste = panierCourant.filter(item =>  item.colors !== choixKanapCouleur )[0]
        // console.log(produitPasExiste)
        if (produitExiste && nouveauProduit._id === _id && nouveauProduit.colors === produitExiste.colors) {
          produitExiste.quantity = parseInt(produitExiste.quantity) + parseInt(quantity.value);

          majPanier.push(produitExiste);
          console.log(panierCourantFiltrer)
          console.log("si produit" + nouveauProduit.colors + "et " + produitExiste.colors )
          
          // gros test en dessous
        } else if ( produitExiste && panierCourant[0]._id === _id && nouveauProduit.colors !== produitPleinExiste.colors ) {
        
          majPanier.push(nouveauProduit);
          console.log("autre",nouveauProduit, panierCourant)
          console.log(produitExiste.colors, nouveauProduit.colors)
        }

        // else { majPanier.push(nouveauProduit);
        //   console.log("else")
        // } 

        localStorage.setItem("panier", JSON.stringify(majPanier));

      }





      
    } 
    else {
      alert("pas de bras pas de chocolat :), sans blaque faut au moin une quatity")
    }
  
  });
}
// localStorage.clear();