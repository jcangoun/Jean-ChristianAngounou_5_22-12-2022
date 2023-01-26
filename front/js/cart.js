console.log('test')

const carteArticle = document.querySelector('.cart > #cart__items')
const detailArticl = document.createElement('article')
detailArticl.classList.add('cart__item')
detailArticl.setAttribute ('data-id', '{product-ID}"')
detailArticl.setAttribute ('data-color', '{product-color}')
 carteArticle.append(detailArticl)
 console.log(carteArticle)