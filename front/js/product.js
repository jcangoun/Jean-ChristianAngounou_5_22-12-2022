console.log("ca marche et a suivre product bloc");

// var tesse = "https://waytolearnx.com/t.html?name=alex-babtise&age=25&address=paris";
// var url = new URL(tesse);
// const idhet = url.searchParams.get("id");
// // console.log("test window Location:", window.location);

// const str = "http://localhost:3000/api/products/";
// const url = new URL(str);
// const search_params = new URLSearchParams(url.search);
// if(search_params.has('name')) {
//   const name = search_params.get('name');
//   console.log(name)
// }

const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);
console.log(urlParams);

// const general = urlParams.get(info);

// const ParamAltTxt = urlParams.get("altTxt");
// const ParamColors = urlParams.get("colors");
// const ParamDexcription = urlParams.get("description");
// const ParamimageUrl = urlParams.get("imageUrl");
// const ParamName = urlParams.get("name");
// const ParamPrice = urlParams.get("price");
const paramId = urlParams.get("id");
console.log(paramId);

// utiliser searchParams pour recupere l'id d'un produit dans l'url Au fait await cause probleme
fetch(`http://localhost:3000/api/products/${paramId}`)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (product) {
    getArticle(product);
    console.log(product)
  })
  .catch(function (error) {
    console.error(`probleme : ${error}`);
  });


  function getArticle (product) 
  {
    const { _id, colors, imageUrl, altTxt, name, description, price } = product;
    
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
// console.log(firstSelectForm)
const premiereOptionValue = document.createElement("option");
premiereOptionValue.setAttribute("value", "vert");
                        premiereOptionValue.innerHTML = "vert";
firstSelectForm.append(premiereOptionValue);

const deuxiemeOptionValue = document.createElement("option");
deuxiemeOptionValue.setAttribute("value", "blanc");
                        deuxiemeOptionValue.innerHTML = "blanc";
firstSelectForm.append(deuxiemeOptionValue);

  }



// console.log(firstSelectForm)
// console.log(b)

// const articlProdt = document.querySelector('article')
// const detailProdt = document.createElement('div')
//   detailProdt.classList.add('detail-produit')
//   articlProdt.append(detailProdt)

//   console.log(articles)
