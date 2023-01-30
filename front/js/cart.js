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
    console.log(detailArticl)

