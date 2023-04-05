
const info = window.location.search;
console.log("valeurs", info);
// console.log("window Location:", window.location);
const urlParams = new URLSearchParams(info);
console.log(urlParams);

const paramId = urlParams.get("id");
console.log(paramId);


// fetch(`http://localhost:3000/api/products/${paramId}`)

const api = fetch(`http://localhost:3000/api/products`)
  .then(function (res) {
    if (res.ok) {

      return res.json();
    }
  })
  .then(function (products) {
    articles(products);
          console.log(products);
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

function articles(products) {
  products.forEach((product) => {
    console.log(product);
    articlePage(product);
  });
}


const articlePage = (product) => {
  const { _id, imageUrl, altTxt, name, description, price, colors } = product;

  // chargement du noeud section ou on va creer la page
  const newDiv = document.querySelector("section#items");

  // creation du noe <a> pas d'attributs
  const lienBloc = document.createElement("a");
  //  a revoir
  lienBloc.setAttribute("href", `./product.html?id=${_id}`);
  console.log(lienBloc);
  newDiv.append(lienBloc);

  // creation du noeud <article>, pas attributs
  const articleDuLienProdt = document.createElement("article");
  // ci dessous ajout de <img>
  lienBloc.append(articleDuLienProdt);
  // console.log(articleDuLienProdt);

  // Noeud img nommé product.img
  const imgArticleBloc = document.createElement("img");
  imgArticleBloc.setAttribute("src", imageUrl);
  imgArticleBloc.setAttribute("alt", altTxt);
  // console.log(articleDuLienProdt);

  //noeud <h3> class product.name
  const nomProduct = document.createElement("h3");
  nomProduct.classList.add("productName");
  nomProduct.innerHTML = name;

  // Ajout des noeuds en
  articleDuLienProdt.append(imgArticleBloc, nomProduct);
  // document.querySelector('.productName').innerText = product.name;

  //la description du canape en bas
  const phraseCleProdt = document.createElement("p");
  phraseCleProdt.classList.add("productDescription");
  phraseCleProdt.innerText = description;
  articleDuLienProdt.append(phraseCleProdt);
};


// recuperation d infos pour le panier
// const extractInfo = res.json.stringitfy();
// console.log(extractInfo);
