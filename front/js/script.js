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
  const newDiv = document.querySelector("section#items");
  // console.log(newDiv);
  const lienBloc = document.createElement("a");
  lienBloc.setAttribute("href", "./product.html?id=42");
  // console.log(lienBloc);
  newDiv.append(lienBloc);
  const articleDuLienProdt = document.createElement("article");
  lienBloc.append(articleDuLienProdt);
  // console.log(articleDuLienProdt);

  // Noeud img nommé product.img
  const imgArticleBloc = document.createElement("img");
  imgArticleBloc.setAttribute("src", product.imageUrl);
  imgArticleBloc.setAttribute("alt", product.altTxt);

  
  console.log(articleDuLienProdt);
//noeud product.name h3 class
  const nomProduct = document.createElement("h3");
  nomProduct.classList.add("productName");
  nomProduct.innerHTML = product.name;
  
  // Ajout des noeuds en
  articleDuLienProdt.append(imgArticleBloc, nomProduct);
  // document.querySelector('.productName').innerText = product.name;

  //la description du canape en bas
  const phraseCleProdt = document.createElement("p");
  phraseCleProdt.classList.add("productDescription");
  phraseCleProdt.innerText = product.description;
  articleDuLienProdt.append(phraseCleProdt);
  // console.log(lienBloc);
};


// Ajouter titre qui a ete oublie