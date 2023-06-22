   // recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);

const paramIdDePage = urlParams.get("id");
// console.log(paramIdDePage);


   const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
   console.log(cartPanierGet)

  //  puis onremettra ces fetch quand les 
  //  function fetchElementsDeLocalStoragePanier() {
    
  //   for (let canap = 0; canap < cartPanierGet.length; canap++ ) {
  //     const canapChoisi = cartPanierGet[canap];
  //     const panierParamId = canapChoisi.panierParamId;

    for ( let canap = 0; canap < cartPanierGet.length; canap++) {
      let produitPanier = cartPanierGet[canap];
      // const panierParamId = produitPanier.panierParamId;

      console.log(produitPanier);
    console.log(cartPanierGet[canap].name)
    console.log(produitPanier.name)








  //       cartPanierGet.forEach(canap => {
  //         fetch(`http://localhost:3000/api/products/${canap._id}`)
  //         .then (response => response.json() )
  //         .then (dataPanier => {
  //           console.log(dataPanier)
  //           console.log(dataPanier.imageUrl, dataPanier.name , "prix égal " + dataPanier.price + " euros")
          
  //           // Je vais insérer ci dessous les données dataPanier pour le htmlpanier , ici ca marcheet très peu dehors

  //   console.log("fetch", dataPanier.imageUrl, dataPanier.name , "prix égal " + dataPanier.price + " euros")
  //         })
  //       })

  //     // les infos de localStorage 
  //   console.log("local", cartPanierGet[canap].name, cartPanierGet[canap].quantity, cartPanierGet[canap].description, cartPanierGet[canap].colors)
    
  //   }
  // }
  //  fetchElementsDeLocalStoragePanier();

      
// const cartLoc

//On crée une fonction articlePAnier ligne 25 a 109
const articlePanier = function () {


// crée l'article de classe cart__item d'attribut data-id et aussi data-color
const carteArticle = document.querySelector('.cart > #cart__items')
const detailArticl = document.createElement('article')
detailArticl.classList.add('cart__item')
detailArticl.setAttribute ('data-id', '{product-ID}"')
detailArticl.setAttribute ('data-color', '{product-color}')
 carteArticle.append(detailArticl)
 console.log(carteArticle)

// ci dessous crée la div de class "cart__item__img"
 const photoArticleCart = document.createElement("div")
 photoArticleCart.classList.add("cart__item__img")
 detailArticl.append(photoArticleCart)

//  ci dessous créée l'img enfant avec attribut >> alt photo canapé, et src >> ../images/product01.jpg
 const imageCartItemArtcl = document.createElement("img")
 imageCartItemArtcl.setAttribute("alt", "Photographie d'un canapé")
// imageCartItemArtcl.setAttribute("src", "../images/product01.jpg")
                                       
 photoArticleCart.append(imageCartItemArtcl)
    console.log(detailArticl)

    // crée la div de class cart__item__content, enfant de cart__items
 const contenuCartItem = document.createElement('div')
 contenuCartItem.classList.add("cart__item__content")
 detailArticl.append(contenuCartItem)


 const descriptonContenuCartItem = document.createElement("div")
 descriptonContenuCartItem.classList.add("cart__item__content__description")
 contenuCartItem.append(descriptonContenuCartItem)

 const nomProduitCarteItem = document.createElement("h2")
 nomProduitCarteItem.innerHTML = 'Nom Produit';
//  En test en haut on remplacera par ceci en bas
  nomProduitCarteItem.innerHTML = `${cartPanierGet[canap].name}`;
 
 descriptonContenuCartItem.append(nomProduitCarteItem)

 const descriptionCouleurProduit = document.createElement('p')
 descriptionCouleurProduit.innerHTML = `${cartPanierGet[canap].colors}`;


//  descriptionCouleurProduit.innerHTML = `${cartPanierGet[0].colors}`;

 descriptonContenuCartItem.append(descriptionCouleurProduit)

 const descriptionPrixProduit = document.createElement('p')
 descriptionPrixProduit.innerHTML = '42'
//  descriptionPrixProduit.innerHTML = `${cartPanierGet[0].price}`
 descriptonContenuCartItem.append(descriptionPrixProduit)

 const fixationContenuCartArticle = document.createElement('div')
 fixationContenuCartArticle.classList.add('cart__item__content_settings')
 contenuCartItem.append(fixationContenuCartArticle)

 const quantiteContenuCarteArticle = document.createElement('div')
 quantiteContenuCarteArticle.classList.add('cart__item__content__settings__quantity')
 fixationContenuCartArticle.append(quantiteContenuCarteArticle)

 const valeurQuantite = document.createElement('p')
 valeurQuantite.innerHTML = 'Qté:'
 fixationContenuCartArticle.append(valeurQuantite)


 const resultatValeurQuantite = document.createElement('input')
 resultatValeurQuantite.classList.add('itemQuantity')
 resultatValeurQuantite.setAttribute('type', 'number')
 resultatValeurQuantite.setAttribute('name', 'itemQuantity')
 resultatValeurQuantite.setAttribute('min', '1')
 resultatValeurQuantite.setAttribute('max', '100')
 //  en bas là y a la variable de quantite pour remplace '42'
 resultatValeurQuantite.setAttribute('value', `${cartPanierGet[canap].quantity}`)

 fixationContenuCartArticle.append(resultatValeurQuantite)

 const caseAnnuleConfigCotenuCartArticl = document.createElement('div')
 caseAnnuleConfigCotenuCartArticl.classList.add('cart__item__content__settings__delete')  
 contenuCartItem.append(caseAnnuleConfigCotenuCartArticl)
 
 const supprimerArticl = document.createElement('p')
 supprimerArticl.classList.add('deleteItem')
  supprimerArticl.innerHTML = 'Supprimer'
 caseAnnuleConfigCotenuCartArticl.append(supprimerArticl)

}

    articlePanier();


// nomProduitCarteItem.innerHTML = `${cartPanierGet[canap].name}`;

  // nomProduitCarteItem.innerHTML = `${canapChoisi.name}`;
  // descriptionCouleurProduit.innerHTML = 'Vert';

  // descriptionPrixProduit.innerHTML = '42'

  // valeurQuantite.innerHTML = 'Qté:'
  
}

// // localStorage.getItem("colors")
// if (localStorage.getItem("colors") != null)
// descriptionCouleurProduit.innerHTML = `${localStorage.getItem("colors")}.`;

// if (localStorage.getItem("quantite.value") != null)
// itemQuantity.innerHTML = `${localStorage.getItem("quantite.value")};`
// // localStorage.getItem("imageUrl");
// localStorage.getItem("name");
// if (localStorage.getItem("name") != null)
// // itemQuantity.innerHTML = `${localStorage.getItem("panier.name")};`
// // localStorage.getItem("name");
// localStorage.getItem("name");


const btnEffacer = document.getElementsByClassName('deleteItem');
console.log(btnEffacer)

// btnEffacer.addEventListener("click", function () {
    // localStorage.clear();
//     console.log('ca supprime')
// })

const ajoutBtn = document.querySelector('#order');
ajoutBtn.addEventListener('click', function () {

    console.log('ca paniasse');

//   const panierChoisi = JSON.parse(localStorage.getItem('panier'));

})

// localStorage.clear();