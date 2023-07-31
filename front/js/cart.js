// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);

const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));

const carteArticle = document.querySelector('.cart > #cart__items');
tableauPrix = [];

const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    
    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    // console.log("icica marchenom",produitPanier.name, produitPanier.price)
    
    if (!response.ok) {
      throw new Error('Il y a une erreur lors de la récupération des données.');
    }
    
    const dataPanier = await response.json();


    console.log("dataPanier",typeof(dataPanier.price), "produit.name >", produitPanier.name, typeof(produitPanier.quantity))
    console.log("dataPanier", dataPanier.name, dataPanier.price, produitPanier.name , produitPanier.quantity)
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

    const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const majcart = [...cartPanierGet];
      // console.log(majcart);
     
      allArticleQuantiteInput.forEach((input, index) => {
        input.addEventListener('change', function(e) {
          const quanteModifiableProductInput = e.target.value;
          const panelPersoChoix = majcart[index];
          if (quanteModifiableProductInput !== panelPersoChoix.quantity && localStorage.getItem("panier")) {           
            panelPersoChoix.quantity = quanteModifiableProductInput;
            qtyTotal();
            // prixTtlPrProduit (); 
            // location.reload(true)           

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
      const affichTotalQuantity = cartPanierGet.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.quantity), 0);   
      const quantiteTotaleParsee = parseInt(affichTotalQuantity)       
      caseTotalQty.innerHTML = parseInt(affichTotalQuantity.toString())
    }     
    qtyTotal();

    // const ledatapanier = JSON.parse(localStorage.getItem("dataPanier"))
    const prixElemt =  parseInt(dataPanier.price)


    const tableauCalculTest = [];
    function calculTest (vlueQtenumerisee, prixElemt) {
      const calculTest = vlueQtenumerisee * prixElemt;
      return calculTest

    }

    function prixTtlPrProduit () {      
      console.log(prixElemt)
      // console.log(typeof(resultatValeurQuantite.value), typeof(dataPanier))      
      // console.log("resultatValeurQuantite.value =", typeof(resultatValeurQuantite.value), "/", "dataPanier =", typeof(prixElemt))  
    const vlueQtenumerisee = parseInt(resultatValeurQuantite.value)
      // console.log(typeof(vlueQtenumerisee), typeof(prixElemt))
      console.log(vlueQtenumerisee, prixElemt)
      // console.log(calculTest)
      console.log(tableauCalculTest);
      calculTest();
      // tableauCalculTest.push(calculTest)

      console.log(tableauCalculTest)
    }
    prixTtlPrProduit ();

    const leTabloDeTableau = [] 
    
    console.log("datapanier1", prixElemt, dataPanier.name,)

    function prixTotal () {    
      for (let selections = 0; selections < cartPanierGet.length; selections++) {
        const qteSelections = cartPanierGet[selections].quantity
        console.log(cartPanierGet[selections]._id, cartPanierGet[selections].name, qteSelections)
        console.log("datapanier", prixElemt, dataPanier.name,)
        
      }
      
      const caseTotalPrice = document.querySelector("#totalPrice");

      console.log(prixElemt)
      // console.log(typeof(resultatValeurQuantite.value), typeof(dataPanier))      
      // console.log("resultatValeurQuantite.value =", typeof(resultatValeurQuantite.value), "/", "dataPanier =", typeof(prixElemt))  
    const vlueQtenumerisee = parseInt(resultatValeurQuantite.value)
      // console.log(typeof(vlueQtenumerisee), typeof(prixElemt))

      // console.log(vlueQtenumerisee, prixElemt)
      // const calculTest = vlueQtenumerisee * prixElemt

      // console.log(calculTest)
      // console.log(tableauCalculTest);
      // tableauCalculTest.push(calculTest)
      // console.log(tableauCalculTest)

      console.log(tableauCalculTest)
      leTabloDeTableau.push(tableauCalculTest)
      // console.log(leTabloDeTableau)
      // const lePrixTotal = tableauCalculTest.reduce((acc, curr) => acc + curr, 0);            
      // caseTotalPrice.innerHTML = lePrixTotal.toString();


      caseTotalPrice.innerHTML = "2";
      
    }
    prixTotal ();
            

    //   function panierFinal () {
    //     console.log("bam")
    //     // const cartPanierGet = JSON.parse(localStorage.getItem("panier"))
    //     // cartPanierGet;
            
    //     console.log("bout")
    // }
    //   panierFinal();

    // là je vais tester les funstions pour les input regex

    const prenom =document.querySelector("#firstName").value
    const nom = document.querySelector("#lastName").value
    const adresse =  document.querySelector("#address").value          
    const ville = document.querySelector("#city").value
    const email = document.querySelector("#email").value 



    function boutonPanierComander () {
      const ajoutBtn = document.querySelector('#order');
      ajoutBtn.addEventListener('click', function(e) {
      console.log('ca paniasse');
      e.preventDefault();
  
      // modifQuantite ();

      function noNumber () { }
      function prenomComposed () {}
      function addresseValide () {}
      function contientMajuscule () {}


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

    // Ici on devrait avoir tous les produits sous condition de promesses
    // for (let ess = 0; ess < dataPanier.length; ess++) {
    //   console.log(ess)
    // }

};

// tous les éléments de l'user a envoyer au serveur


// Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();
