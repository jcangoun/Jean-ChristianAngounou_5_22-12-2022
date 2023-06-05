
   
   const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
   console.log(JSON.parse(cartPanierGet))
   console.log(cartPanierGet.altTxt)


  const cartNbreProdts = JSON.parse(localStorage.getItem("quantite"));
  console.log(JSON.parse(localStorage.getItem("quantite")))
console.log(typeof cartPanierGet)

   cartPanierGet.forEach(produit => {
    fetch(`http://localhost:3000/api/products/${produit._id}`)
    .then (response => response.json() )
    .then (data => {
      console.log(data)
    })
 console.log(produit._id)
  } ) 

//ici il semble bien qu'on va devoir faire une variable de tout ce qui est crée pour  le html ici en bas 

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
 const imageCArtItemArtcl = document.createElement("img")
 imageCArtItemArtcl.setAttribute("alt", "Photographie d'un canapé")

                                       
 photoArticleCart.append(imageCArtItemArtcl)
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
  nomProduitCarteItem.innerHTML = `${cartPanierGet[0].name}`;
 
 descriptonContenuCartItem.append(nomProduitCarteItem)

 const descriptionCouleurProduit = document.createElement('p')
 descriptionCouleurProduit.innerHTML = 'Vert';


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
 resultatValeurQuantite.setAttribute('value', cartNbreProdts)
//  en haut là cartNbreProdts a remplace '42'
 fixationContenuCartArticle.append(resultatValeurQuantite)

 const caseAnnuleConfigCotenuCartArticl = document.createElement('div')
 caseAnnuleConfigCotenuCartArticl.classList.add('cart__item__content__settings__delete')  
 contenuCartItem.append(caseAnnuleConfigCotenuCartArticl)
 
 const supprimerArticl = document.createElement('p')
 supprimerArticl.classList.add('deleteItem')
  supprimerArticl.innerHTML = 'Supprimer'
 caseAnnuleConfigCotenuCartArticl.append(supprimerArticl)


// localStorage.getItem("colors")
if (localStorage.getItem("colors") != null)
descriptionCouleurProduit.innerHTML = `${localStorage.getItem("colors")}.`;


if (localStorage.getItem("quantite.value") != null)
itemQuantity.innerHTML = `${localStorage.getItem("quantite.value")};`
// localStorage.getItem("imageUrl");
localStorage.getItem("name");
if (localStorage.getItem("name") != null)
itemQuantity.innerHTML = `${localStorage.getItem("panier.name")};`
// localStorage.getItem("name");
localStorage.getItem("name");


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