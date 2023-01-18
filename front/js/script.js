console.log('test');
const newDiv = document.querySelector("section#items");
console.log(newDiv);
const lienBloc = document.createElement("a");
lienBloc.setAttribute("href", "./product.html?id=42")
console.log(lienBloc);
    newDiv.appendChild(lienBloc);

const articleBloc = document.querySelector("a article");
const imgArticleBloc = document.createElement("img");
// imgArticleBloc.setAttribute("src", "../product01.jpg");
imgArticleBloc.setAttribute("alt", "Lorem ipsum dolor sit amet, Kanap name1");
console.log(imgArticleBloc);
// const nomProdt = document.
// // imgArticleBloc.nextElementSibling("h3");


