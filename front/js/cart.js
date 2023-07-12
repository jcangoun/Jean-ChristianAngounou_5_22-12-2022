// recup des infosproduits
const info = window.location.search;
// console.log("valeurs", info);
const urlParams = new URLSearchParams(info);

const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
console.log(cartPanierGet);

const carteArticle = document.querySelector('.cart > #cart__items');

const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    if (!response.ok) {
      throw new Error('Il y a 1 erreur lors de la récupération des données.');
    }
    const dataPanier = await response.json();
    // console.log(dataPanier);

    const detailArticl = document.createElement('article');
    detailArticl.classList.add('cart__item');
    detailArticl.setAttribute('data-id', `${dataPanier._id}`);
    detailArticl.setAttribute('data-color', `${produitPanier.colors}`);
    carteArticle.append(detailArticl);

    const photoArticleCart = document.createElement('div');
    photoArticleCart.classList.add('cart__item__img');
    detailArticl.append(photoArticleCart);

    const imageCartItemArtcl = document.createElement('img');
    imageCartItemArtcl.setAttribute('alt', "Photographie d'un canapé");
    imageCartItemArtcl.setAttribute('src', `${dataPanier.imageUrl}`);
    photoArticleCart.append(imageCartItemArtcl);

    const contenuCartItem = document.createElement('div');
    contenuCartItem.classList.add('cart__item__content');
    detailArticl.append(contenuCartItem);

    const descriptonContenuCartItem = document.createElement('div');
    descriptonContenuCartItem.classList.add('cart__item__content__description');
    contenuCartItem.append(descriptonContenuCartItem);

    const nomProduitCarteItem = document.createElement('h2');
    nomProduitCarteItem.innerHTML = `${dataPanier.name}`;
    descriptonContenuCartItem.append(nomProduitCarteItem);

    const descriptionCouleurProduit = document.createElement('p');
    descriptionCouleurProduit.innerHTML = `${produitPanier.colors}`;
    descriptonContenuCartItem.append(descriptionCouleurProduit);

    const descriptionPrixProduit = document.createElement('p');
    descriptionPrixProduit.innerHTML = `${dataPanier.price}`;
    descriptonContenuCartItem.append(descriptionPrixProduit);

    const fixationContenuCartArticle = document.createElement('div');
    fixationContenuCartArticle.classList.add('cart__item__content_settings');
    contenuCartItem.append(fixationContenuCartArticle);

    const quantiteContenuCarteArticle = document.createElement('div');
    quantiteContenuCarteArticle.classList.add('cart__item__content__settings__quantity');
    fixationContenuCartArticle.append(quantiteContenuCarteArticle);

    const valeurQuantite = document.createElement('p');
    valeurQuantite.innerHTML = 'Qté:';
    fixationContenuCartArticle.append(valeurQuantite);

    const resultatValeurQuantite = document.createElement('input');
    resultatValeurQuantite.classList.add('itemQuantity');
    resultatValeurQuantite.setAttribute('type', 'number');
    resultatValeurQuantite.setAttribute('name', 'itemQuantity');
    resultatValeurQuantite.setAttribute('min', '1');
    resultatValeurQuantite.setAttribute('max', '100');
    resultatValeurQuantite.setAttribute('value', `${produitPanier.quantity}`);
    fixationContenuCartArticle.append(resultatValeurQuantite);

    const caseAnnuleConfigCotenuCartArticl = document.createElement('div');
    caseAnnuleConfigCotenuCartArticl.classList.add('cart__item__content__settings__delete');
    contenuCartItem.append(caseAnnuleConfigCotenuCartArticl);

    const supprimerArticl = document.createElement('p');
    supprimerArticl.classList.add('deleteItem');
    supprimerArticl.innerHTML = 'Supprimer';
    caseAnnuleConfigCotenuCartArticl.append(supprimerArticl);

    
    
    console.log(resultatValeurQuantite.value)
      supprimerArticl.addEventListener('click', function () {
        console.log("ca supprime")

        const cartFilterNot = cartPanierGet.filter(canap => canap._id !== produitPanier._id  && canap.colors !== produitPanier.colors|| canap._id === produitPanier._id  && canap.colors !== produitPanier.colors );
          

        // carteArticle.innerHTML = "";       
          for (let a = 0; a < cartFilterNot.length; a++) {
            const articleCartPanier = cartFilterNot[a];
            console.log(cartFilterNot[a])
            console.log(cartFilterNot.indexOf(cartFilterNot[a]));
            console.log(cartFilterNot)
            console.log(cartPanierGet)


            localStorage.setItem("panier", JSON.stringify(cartFilterNot));        
              console.log(resultatValeurQuantite.Value)

          }
          if (cartFilterNot.length === 1) {
            console.log("il y a 1 produit dans le localS et le panier")
          } else if ( cartFilterNot.length < 1) {
            localStorage.removeItem("panier");
            console.log("il n'y a plus de produits ni dans la page panier, ni dans le localStorage");
          }                               
          location.reload(true)
      });

          // C'est ici que je dois ajouter mes essais du btomm bouton 

      console.log(resultatValeurQuantite.value)

      // Ici articleQuantite ........
      
      // const modifQuantityValue = resultatValeurQuantite.value
      // modifQuantityValue;
      //   const majcart = [...cartPanierGet];
      //   console.log(majcart)
      //           console.log(modifQuantityValue)
      //           majcart.forEach(input => {
      //             console.log("each")

      //           });
// En haut  fin de la 1ere version test de muted qui est en bas de fecthVisual


      const elo = () => {
        console.log("elo")
      }
      function ancienlo () {
        console.log("ancienlo");
      }

      function modifQuantite () {
      const allArticleQuantiteInput = document.querySelectorAll('.itemQuantity');
      const majcart = [...cartPanierGet];
      console.log(majcart)
      console.log(allArticleQuantiteInput)
      console.log(resultatValeurQuantite.value)
      const quanteModifiableProductInput = resultatValeurQuantite.value;
      
      resultatValeurQuantite.innerHTML
      // localStorage.setItem('modif prix', JSON.stringify (majcart))
      
      const changeQuantity = (e) => {
      console.log("change egal")
      console.log("test", e.target.value)

      } 
        allArticleQuantiteInput.forEach( input => { 
    
    input.addEventListener( 'change', changeQuantity)
    console.log("change egal", changeQuantity)
    console.log(majcart)
    // localStorage.setItem()
    },  

    // console.log("change egal", changeQuantity)
  ); 

        // for (let linDesChoix = 0; linDesChoix < majcart.length; linDesChoix++) {
        //   const panelPersoChoix = majcart[linDesChoix];
        //   console.log(quanteModifiableProductInput)
        //   console.log(panelPersoChoix.quantity)

        //   if (quanteModifiableProductInput !== panelPersoChoix.quantity) {
        //     console.log("input = " + quanteModifiableProductInput + ", # de local" + panelPersoChoix.quantity)
        //   elo();
        //   ancienlo();
        //   quanteModifiableProductInput;
        //   console.log(quanteModifiableProductInput)

        //   } else { 
        //     console.log("linput est bon dans local")
        //   }

        // }

      }
      modifQuantite ();

      function boutonPanierComander () {
      const ajoutBtn = document.querySelector('#order');
      ajoutBtn.addEventListener('click', function() {
      console.log('ca paniasse');
      // alert("oooh")
      
      // modifQuantite ();
      });

        }  


  }  
};
fetchEtVisualSection();

// Ici dessous etait la zone articleQuzntite

// const allArticleQuantiteInput = document.querySelectorAll('.itemQuantity');
//   const majcart = [...cartPanierGet];
//   console.log(majcart)
//         console.log(allArticleQuantiteInput)

//   allArticleQuantiteInput.forEach( input => { 
    
//     input.addEventListener( 'change', changeQuantity)

//       const changeQuantity = (e) => {
//         console.log("test", e.target.value)
//         alert("oohooo")
//       } 
//     }  
//   ); 

  // const ajoutBtn = document.querySelector('#order');
  // ajoutBtn.addEventListener('click', function() {
  // console.log('ca paniasse');
  // alert("oooh")


  // });

  
  // allArticleQuantiteInput.forEach( input => 
  //   { 
  //       input.addEventListener( 'change', changeQuantity)
  //   }  
  // ); 