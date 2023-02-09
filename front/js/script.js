// fetch a faire en first line
fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (tablo) {
    test(tablo);
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

function test(tablo) {
  tablo.forEach((element) => {
    console.log(element.imageUrl);
    
  });
}
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

// imgArticleBloc.setAttribute("src", "../product01.jpeg");
imgArticleBloc.setAttribute("alt", "Lorem ipsum dolor sit amet, Kanap name1");

articleDuLienProdt.append(imgArticleBloc);
console.log(articleDuLienProdt);

const nomProduct = document.createElement("h3");
nomProduct.classList.add("productName");
articleDuLienProdt.append(nomProduct);

const phraseCleProdt = document.createElement("p");
phraseCleProdt.classList.add("productDescription");
phraseCleProdt.innerHTML = "Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.";

articleDuLienProdt.append(phraseCleProdt);
console.log(lienBloc);
