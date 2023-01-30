console.log('test')

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
//  imageCArtItemArtcl.setAttribute("src", "../images/product01.jpg") voir avec 
//  http://localhost:3000/images/kanap01.jpeg
                                       
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
 nomProduitCarteItem.innerHTML = 'Nom du produit'
 descriptonContenuCartItem.append(nomProduitCarteItem)

 const descriptionCouleurProduit = document.createElement('p')
 descriptionCouleurProduit.innerHTML = 'Vert'

 descriptonContenuCartItem.append(descriptionCouleurProduit)

 const descriptionPrixProduit = document.createElement('p')
 descriptionPrixProduit.innerHTML = '42'
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
 resultatValeurQuantite.setAttribute('value', 42)
 fixationContenuCartArticle.append(resultatValeurQuantite)

 const caseAnnuleConfigCotenuCartArticl = document.createElement('div')
 caseAnnuleConfigCotenuCartArticl.classList.add('cart__item__content__settings__delete')  
 contenuCartItem.append(caseAnnuleConfigCotenuCartArticl)
 
 const supprimerArticl = document.createElement('p')
 supprimerArticl.classList.add('deleteItem')
 supprimerArticl.innerHTML = 'Supprimer'
 caseAnnuleConfigCotenuCartArticl.append('supprimerArticl')
    console.log(detailArticl.contenuCartItem)

