const newDiv = document.querySelector("section#items");
    console.log(newDiv);
let lienBloc = document.createElement("a");
lienBloc.setAttribute("href", "./product.html?id=42")
    console.log(lienBloc);
    
const articleBloc = document.querySelector("a article");
let imgArticleBloc = document.createElement("img");
// imgArticleBloc.setAttribute("src", "../product01.jpg");
imgArticleBloc.setAttribute("alt", "Lorem ipsum dolor sit amet, Kanap name1");
    console.log(imgArticleBloc);
const nomProduct = document.createElement("h3");
nomProduct.classList.add("productName");
// articleBloc.append(nomProduct);

newDiv.append(lienBloc);
console.log(newDiv);
// articleBloc.appendChild(imgArticleBloc);

