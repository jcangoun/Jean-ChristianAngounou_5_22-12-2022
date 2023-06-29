// recup des infosproduits
const info = window.location.search;
// console.log("valeurs", info);
const urlParams = new URLSearchParams(info);

const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
console.log(cartPanierGet);

const carteArticle = document.querySelector('.cart > #cart__items');

const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    if (!response.ok) {
      throw new Error('Il y a 1 erreur lors de la récupération des données.');
    }
    const dataPanier = await response.json();
    console.log(dataPanier);

    const detailArticl = document.createElement('article');
    detailArticl.classList.add('cart__item');
    detailArticl.setAttribute('data-id', `${dataPanier._id}`);
    detailArticl.setAttribute('data-color', `${produitPanier.colors}`);
    carteArticle.append(detailArticl);

    const photoArticleCart = document.createElement('div');
    photoArticleCart.classList.add('cart__item__img');
    detailArticl.append(photoArticleCart);

    const imageCartItemArtcl = document.createElement('img');
    imageCartItemArtcl.setAttribute('alt', "Photographie d'un canapé");
    imageCartItemArtcl.setAttribute('src', `${dataPanier.imageUrl}`);
    photoArticleCart.append(imageCartItemArtcl);

    const contenuCartItem = document.createElement('div');
    contenuCartItem.classList.add('cart__item__content');
    detailArticl.append(contenuCartItem);

    const descriptonContenuCartItem = document.createElement('div');
    descriptonContenuCartItem.classList.add('cart__item__content__description');
    contenuCartItem.append(descriptonContenuCartItem);

    const nomProduitCarteItem = document.createElement('h2');
    nomProduitCarteItem.innerHTML = `${dataPanier.name}`;
    descriptonContenuCartItem.append(nomProduitCarteItem);

    const descriptionCouleurProduit = document.createElement('p');
    descriptionCouleurProduit.innerHTML = `${produitPanier.colors}`;
    descriptonContenuCartItem.append(descriptionCouleurProduit);

    const descriptionPrixProduit = document.createElement('p');
    descriptionPrixProduit.innerHTML = `${dataPanier.price}`;
    descriptonContenuCartItem.append(descriptionPrixProduit);

    const fixationContenuCartArticle = document.createElement('div');
    fixationContenuCartArticle.classList.add('cart__item__content_settings');
    contenuCartItem.append(fixationContenuCartArticle);

    const quantiteContenuCarteArticle = document.createElement('div');
    quantiteContenuCarteArticle.classList.add('cart__item__content__settings__quantity');
    fixationContenuCartArticle.append(quantiteContenuCarteArticle);

    const valeurQuantite = document.createElement('p');
    valeurQuantite.innerHTML = 'Qté:';
    fixationContenuCartArticle.append(valeurQuantite);

    const resultatValeurQuantite = document.createElement('input');
    resultatValeurQuantite.classList.add('itemQuantity');
    resultatValeurQuantite.setAttribute('type', 'number');
    resultatValeurQuantite.setAttribute('name', 'itemQuantity');
    resultatValeurQuantite.setAttribute('min', '1');
    resultatValeurQuantite.setAttribute('max', '100');
    resultatValeurQuantite.setAttribute('value', `${produitPanier.quantity}`);
    fixationContenuCartArticle.append(resultatValeurQuantite);

    const caseAnnuleConfigCotenuCartArticl = document.createElement('div');
    caseAnnuleConfigCotenuCartArticl.classList.add('cart__item__content__settings__delete');
    contenuCartItem.append(caseAnnuleConfigCotenuCartArticl);

    const supprimerArticl = document.createElement('p');
    supprimerArticl.classList.add('deleteItem');
    supprimerArticl.innerHTML = 'Supprimer';
    caseAnnuleConfigCotenuCartArticl.append(supprimerArticl);


 // const produitPanier = cartFilterNot[canap];
//  console.log(produitPanier)



    supprimerArticl.addEventListener('click', function () {
      console.log("ca supprime")
    
      // console.log(cartFilterNot.length)
               
   const john =   localStorage.setItem("panier", JSON.stringify(cartFilterNot));
console.log(john)

const cartFilterNot = cartPanierGet.filter(canap => canap._id !== produitPanier._id  && canap.colors !== produitPanier.colors );
    
    console.log(cartPanierGet.filter(canap=> canap._id == produitPanier._id && canap.colors === produitPanier.colors))

    
    console.log(cartFilterNot)
    console.log(cartPanierGet)
 



       
        // for (let a = 0; a < cartFilterNot.length; a++) {
        //   const articleCartPanier = cartFilterNot[a];
        //   console.log(cartFilterNot[a])
        //   console.log(cartFilterNot.indexOf(cartFilterNot[a]));

          
        //   //  const newCartPanierGet = localStorage.setItem("lepanier", JSON.stringify(cartFilterNot))

        //   localStorage.setItem("panier", JSON.stringify(cartFilterNot))
        //   // localStorage.removeItem("lepanier")
        //   // cartPanierGet;



        //   // location.reload(true)
        //   // est ce quil faut le rappeler en bas pour qu'il s allume 
        //   // newCartPanierGet;

        //   // nomProduitCarteItem.innerHTML = `${dataPanier.name}`;
        //   //           descriptionCouleurProduit.innerHTML = `${produitPanier.colors}`;
        //   //           descriptionPrixProduit.innerHTML = `${dataPanier.price}`;
        //   //           resultatValeurQuantite.setAttribute('value', `${produitPanier.quantity}`);


        //   return articleCartPanier;
        // }

  // console.log(cartPanierGet[canap])
      //  const cartFilterNotApresSup = localStorage.setItem("lepanier", JSON.stringify(cartFilterNot));
    });
  }
};

fetchEtVisualSection();

const ajoutBtn = document.querySelector('#order');
ajoutBtn.addEventListener('click', function() {
  console.log('ca paniasse');
});
