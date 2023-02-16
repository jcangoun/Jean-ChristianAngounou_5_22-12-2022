// fetch a faire en first line
fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (products) {
    articles(products);
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
  // je vais pouvoir ajouter un produit mais en haut tu remplaces element par un nom du genre produit
  const newDiv = document.querySelector("section#items");
  console.log(newDiv);
  const lienBloc = document.createElement("a");
  lienBloc.setAttribute("href", "./product.html?id=42");
  console.log(lienBloc);
  newDiv.append(lienBloc);
  const articleDuLienProdt = document.createElement("article");
  lienBloc.append(articleDuLienProdt);
  console.log(articleDuLienProdt);

  const imgArticleBloc = document.createElement("img");
  //   Ici il y a un problème avec le lien product 01 mettre le bon code avec fetch plus tard quand ce sera faisable!!!!!!!!!!!
  // http://localhost:3000/images/kanap01.jpeg

  imgArticleBloc.setAttribute("src", product.imageUrl);
  imgArticleBloc.setAttribute("alt", product.altTxt);

  articleDuLienProdt.append(imgArticleBloc);
  console.log(articleDuLienProdt);

  const nomProduct = document.createElement("h3");
  nomProduct.classList.add("productName");
  articleDuLienProdt.append(nomProduct);

  const phraseCleProdt = document.createElement("p");
  phraseCleProdt.classList.add("productDescription");
  phraseCleProdt.innerHTML = product.description;

  articleDuLienProdt.append(phraseCleProdt);
  console.log(lienBloc);
};


// Ajouter titre qui a ete oublie