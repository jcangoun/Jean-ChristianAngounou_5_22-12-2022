console.log('ca marche et a suivre product bloc')
let b = document.body;
const productPhotoArticle = document.querySelector("div.item__content")
let productImg = document.createElement("img")
let newProductImg = productPhotoArticle.appendChild(productImg)
productImg.setAttribute("src", "../images/logo.png")
productImg.setAttribute("alt","Photographie d'un canapé")
console.log(newProductImg)



// console.log('console suite nom produit');

const produitNomPrix = document.querySelector("h1#title")
produitNomPrix.innerHTML = "Nom Produit"
    console.log(produitNomPrix.innerHTML)



    // console.log("console suite produit explique")

const phraseDescription = document.querySelector("p#description")
phraseDescription.innerHTML = 'Dis enim malesuada risus sapien gravida nulla nisl arcu.';
    console.log(phraseDescription.innerHTML)



// console.log('console  derniere suite pour page product');
const firstSelectForm = document.querySelector("select.color-select");
const optionValue = document.createElement('option');
optionValue.setAttribute("value", "vert")
optionValue.innerHTML = 'vert';

document.querySelectorAll('.value')




