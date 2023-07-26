// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);

const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));

const carteArticle = document.querySelector('.cart > #cart__items');
    const tabloPrix = [];
const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    
    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    console.log("icica marchenom",produitPanier.name, produitPanier.price)
    
    if (!response.ok) {
      throw new Error('Il y a une erreur lors de la récupération des données.');
    }
    
    const dataPanier = await response.json();
    console.log(dataPanier.price)
    tabloPrix.push(dataPanier.price)
    console.log(tabloPrix)

    console.log("avatpage aussi",dataPanier.price)
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


    console.log("fin1 page",dataPanier.price)
    console.log(dataPanier)

          // const totalPrice = tableauPrix.reduce((acc, curr) => acc + curr, 0);
          // console.log(dataPanier.price)

          const tableo = [];
          const lePrix = descriptonContenuCartItem.querySelector("p:last-child")
          console.log(lePrix)
          const valeurPrixProdt = lePrix.textContent;
          const indvPrix = tableo.valeurPrixProdt;
          console.log(valeurPrixProdt)


          const prixDescendt = document.querySelector(".cart #cart__items .cart__item .cart__item__content__description p:last-child")         
          console.log(prixDescendt.textContent)

          console.log(valeurPrixProdt)
          tableo.push(valeurPrixProdt)
          console.log(tableo)
          
          // if (dataPanier !== undefined && dataPanier._id !== indivProdt._id) {
          //   tableo.push(valeurPrixProdt)
          // }
          
    console.log("fin 2 avant les functions",dataPanier.price)
    localStorage.setItem("les prix", tableo)

    // A  suivre là mais c'est un peu rude  :D  lol a guetter les elements et enfants et tout 

    // const tablo = [];
    // console.log(tablo)
    // for  (let elDataPan =0; elDataPan < dataPanier.length; elDataPan++) {
    //   tablo.push(elDataPan)
    //   console.log("tablo",tablo)
    //   console.log("eldata", elDataPan)
    // }
    

    const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll('.itemQuantity');
      const majcart = [...cartPanierGet];
      console.log(majcart);
     
      allArticleQuantiteInput.forEach((input, index) => {
        input.addEventListener('change', function(e) {
          const quanteModifiableProductInput = e.target.value;
          const panelPersoChoix = majcart[index];
          if (quanteModifiableProductInput !== panelPersoChoix.quantity && localStorage.getItem("panier")) {           
            panelPersoChoix.quantity = quanteModifiableProductInput;
            localStorage.setItem("panier", JSON.stringify(majcart));

          }
      });
      });

    };
    // Et j'appele en bas la fonction de modification de la quantite. 
    modifQuantite();

    // bouton supprimé créé ci dessous
    supprimerArticl.addEventListener('click', function () {
        console.log("ca supprime")

        const cartFilterNot = cartPanierGet.filter(canap => canap._id !== produitPanier._id  && canap.colors !== produitPanier.colors|| canap._id === produitPanier._id  && canap.colors !== produitPanier.colors );
              
          for (let a = 0; a < cartFilterNot.length; a++) {
            const articleCartPanier = cartFilterNot[a];
            console.log(articleCartPanier)
            console.log(cartFilterNot.indexOf(articleCartPanier));
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
          function qtyTotal () {

            const caseTotalQty = document.querySelector("#totalQuantity")  
            const affichTotalQuantity = cartPanierGet.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);    
            caseTotalQty.innerHTML = affichTotalQuantity.toString()
            // console.log(produitPanier)
          }     
          qtyTotal();

          // const lePrix = descriptonContenuCartItem.querySelector("p:last-child")
          // const valeurPrixProdt = lePrix.textContent;
          // console.log(valeurPrixProdt)
          
          // const qtePanierPrixTotal = JSON.parse(localStorage.getItem("panier"))
          // // console.log(qtePanierPrixTotal[1].)
          // const tableauPrix = cartPanierGet.map((dataPanier) => dataPanier.price);
          // const totalPrice = tableauPrix.reduce((acc, curr) => acc + curr, 0);
          // console.log(dataPanier.price)

          const caseTotalPrice = document.querySelector("#totalPrice");
          caseTotalPrice.innerHTML = valeurPrixProdt.toString();
          
          // function prixTotal () {    
          //   caseTotalPrice.innerHTML = "2"

          // }
          // prixTotal ();

  //   function panierFinal () {
  //     console.log("bam")
  //     // const cartPanierGet = JSON.parse(localStorage.getItem("panier"))
  //     // cartPanierGet;
 
  //     console.log("bout")
  // }
  //   panierFinal();


    // zone de test
    // Quand j'aurai fini la configuration du bouton panierCommander je mettrai modifQuantite ci dessus , et ben dans functi boutoncommandeur
    
    
    function boutonPanierComander () {
      const ajoutBtn = document.querySelector('#order');
      ajoutBtn.addEventListener('click', function(e) {
      console.log('ca paniasse');
      e.preventDefault();
  
      // modifQuantite ();

      // valeurs du formulaire dans contact 
        const contact = {
        prénom: document.querySelector("#firstName").value,
        nom: document.querySelector("#lastName").value,
        addresse: document.querySelector("#address").value,
        ville: document.querySelector("#city").value,
        email: document.querySelector("#email").value
        
      }
      localStorage.setItem("contact", JSON.stringify(contact))


      // Ici en bas je peux regrouper les objets que je dois transmettre
      const userFormToSend = {
        cartPanierGet, contact
      }
      console.log("userFormToSend");
      console.log(userFormToSend);
      
      });
  

    } 
    boutonPanierComander ();
  }
    const laDescriptonContenuCartItem = document.querySelector("div.cart__item__content__description")
    const lePrix = laDescriptonContenuCartItem.querySelector("p:last-child")
    console.log(lePrix)
    const valeurPrixProdt = lePrix.textContent;
    console.log(valeurPrixProdt)
  // for (let entrees = 0; entrees < allArticlePrixInput.length; entrees++) {
  //   console.log(entrees)
  // }
};

// tous les éléments de l'user a envoyer au serveur


// Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();
