console.log('test');
const newDiv = document.querySelector("section#items");
console.log(newDiv);
const lienBloc = document.createElement("a");
lienBloc.setAttribute("href", "./product.html?id=42")
console.log(lienBloc);
newDiv.appendChild(lienBloc);
const imgArticleBloc = document.querySelector("a article");
console.log(imgArticleBloc);
