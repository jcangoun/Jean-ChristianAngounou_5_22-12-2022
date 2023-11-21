// Grâce à la variable ci dessous, on recupere dans le server les infos de produits disponibles
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
  .catch(err => console.log("fetch erreur là >>>", " /** " + err + " **/ "));
  // Une erreur est survenue
        
  function articles(products) {
    products.forEach((product) => {
      articlePage(product);
      console.log(product);
    });
  }

  // --------------   Création detaillée de la constitution de page Article de produits --------------
  const articlePage = (product) => {
    // variable par principe de decomposition
  const { _id, imageUrl, altTxt, name, description, price, colors } = product;

  // chargement du noeud section ou on va creer la page
  const newDiv = document.querySelector("section#items");

  // creation du noeud <a> pas d'attributs
  const lienBloc = document.createElement("a");
  lienBloc.setAttribute("href", `./product.html?id=${_id}`);
  newDiv.append(lienBloc);
  // console.log(lienBloc);

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

// ---------- PAge d'acceuil finie