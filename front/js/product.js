// recup des infosproduits
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);
console.log(urlParams);

const paramId = urlParams.get("id");
console.log(paramId);

// utiliser searchParams pour recupere l'id d'un produit dans l'url Au fait await cause probleme
fetch(`http://localhost:3000/api/products/${paramId}`)
  .then(function (res) {
    if (res.ok === true) {
      return res.json();
    }
  })
  .then(function (product) {
    getArticle(product);
    console.log(product);
  })
  .catch(function (error) {
    console.error(`probleme : ${error}`);
  });

function getArticle(product) {
  const { _id, colors, imageUrl, altTxt, name, description, price } = product;
  console.log(product.colors);

  const panier = {
    _id,
    imageUrl,
    altTxt,
    name,
    description,
    price,
    colors,
  };

  // localStorage.setItem("panier", JSON.stringify(panier));
  // const panierChoisi = JSON.parse(localStorage.getItem('panier'));
  // console.log(panierChoisi);

  // const colorPanierSelected = panierChoisi.colors;
  // console.log(panierChoisi.colors);

  // const namePanierSelected = panierChoisi.name;
  // console.log(panierChoisi.name)
  
  // const pricePanierSelected = panierChoisi.name;
  // console.log(panierChoisi.price)

  let b = document.main;
  const productPhotoArticle = document.querySelector("div.item__img");
  let productImg = document.createElement("img");
  let newProductImg = productPhotoArticle.append(productImg);
  productImg.setAttribute("src", "../images/logo.png");
  productImg.setAttribute("alt", "Photographie d'un canapé");
  // console.log(newProductImg)

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

    // const selectForm = document.createElement("option"[i]);
    const optionValue = document.createElement("option");
    optionValue.setAttribute("value", colors[i]);
    optionValue.innerHTML = colors[i];
    firstSelectForm.append(optionValue);
  }

  // const accesImageUrl  =  localStorage.getItem('imageUrl')
  //                         localStorage.setItem('imageUrl', imageUrl)

  // const accesAltTxt  = localStorage.getItem('altTxt')
  //                      localStorage.setItem('altTxt', altTxt)

  // const accesDescription  = localStorage.getItem('description')
  //                      localStorage.setItem('description', description)

  console.log(colors);

  const ajoutBtn = document.querySelector('button');
  ajoutBtn.addEventListener('click', function () {
    console.log('capasse');

    const colorPanierSelected = panier.colors;
    console.log(panier.colors);
  
    const namePanierSelected = panier.name;
    console.log(panier.name)
    
    const pricePanierSelected = panier.name;
    console.log(panier.price)

              })
}
