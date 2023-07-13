// recup des infos produits
const info = window.location.search;
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
      throw new Error('Il y a une erreur lors de la récupération des données.');
    }
    const dataPanier = await response.json();

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

      const elo = () => {
        console.log("elo premier type d essais")
      }
      function ancienlo () {
        console.log("ancienlo c est un 2e essai");
      }

      const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll('.itemQuantity');
      const majcart = [...cartPanierGet];
      console.log(majcart);

      console.log(allArticleQuantiteInput);
      
      console.log(resultatValeurQuantite.value);

      allArticleQuantiteInput.forEach((input, index) => {
      input.addEventListener('change', function(e) {
        const quanteModifiableProductInput = e.target.value;
        const panelPersoChoix = majcart[index];

        if ( quanteModifiableProductInput !== panelPersoChoix.quantity && localStorage.getItem("panier")) 
        { 
          panelPersoChoix.quantity = quanteModifiableProductInput;
          localStorage.setItem("panier", JSON.stringify(majcart));

        }
      });
      });

    };

    // J'appele en bas la fonction de modification de la quantite. 
    modifQuantite();
    
// Quand j'aurai fini la configuration du bouton panierCommander je mettrai modifQuantite ci dessus , et ben dans functi boutoncommandeur
    function boutonPanierComander () {
      const ajoutBtn = document.querySelector('#order');
      ajoutBtn.addEventListener('click', function(e) {
      console.log('ca paniasse');
      e.preventDefault();
  
      // modifQuantite ();

      let firstNameUserForm = localStorage.setItem("firstName", document.querySelector("#firstName").value)
      let lastNameUserForm =  localStorage.setItem("lastName", document.querySelector("#lastName").value)
      let addressUserForm =  localStorage.setItem("address", document.querySelector("#address").value)
      let cityUserForm =  localStorage.setItem("city", document.querySelector("#city").value)
      let emailUserForm =  localStorage.setItem("email", document.querySelector("#email").value)

        const formulaireUser = {
        prénom: localStorage.getItem("firstName"),
        nom: localStorage.getItem("lastNameUserForm"),
        addresse: localStorage.getItem("addressUserForm"),
        ville: localStorage.getItem("cityUserForm"),
        email: localStorage.getItem("emailUserForm")
        
      }

      // Ici je peux regrouper les objets que je dois transmettre
      const userFormToSend = {
        cartPanierGet, formulaireUser
      }
      console.log("userFormToSend");
      console.log(userFormToSend);
      
      });
  

    } 
    boutonPanierComander ();
  }
};

// tous les éléments de l'user a envoyer au serveur


// Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();
