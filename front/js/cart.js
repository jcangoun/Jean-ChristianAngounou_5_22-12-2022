// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);
const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));

const carteArticle = document.querySelector('.cart > #cart__items');
tableauPrix = [];
totalPanier = [];
let totalChange = [];
const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    
    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    // console.log("icica marchenom",produitPanier.name, produitPanier.price)
    
    if (!response.ok) {
      throw new Error('Il y a une erreur lors de la récupération des données.');
    }
    const dataPanier = await response.json();
    
    totalPanier.push(parseInt(dataPanier.price)) 

    for (let u = 0; u < dataPanier.length; u++) {
      lemDeTotalPanier = dataPanier[u]
      console.log(lemDeTotalPanier)
    }
    // Ce consolelog ci dessous montre lde dernier
     console.log(dataPanier)
     console.log(totalPanier)
     console.log(produitPanier)
     
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
            
            let caseTotalPrice = document.querySelector("#totalPrice");
            caseTotalPrice = ''
            console.log(caseTotalPrice)
            // localStorage.getItem(JSON.parse('panier'))
            const changeQuantity = parseInt(panelPersoChoix.quantity)
            const baliseChangePrix = laDescriptonContenuCartItem.querySelector("p:last-child")
            const prixDsBalisePrix = parseInt(baliseChangePrix.textContent)
            const onChangeSectionTotal = changeQuantity * prixDsBalisePrix
            console.log(onChangeSectionTotal)
            console.log(baliseChangePrix)
            
            totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log("1", typeof(totalPanier[0]) + "2", typeof(totalPanier[1]))
            const totalSupreme = totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log(totalPanier)
            console.log(totalSupreme)
              
            console.log("totaPrix", caseTotalPrice.textContent)
            caseTotalPrice = `${totalSupreme}` 
            console.log(caseTotalPrice.textContent)
            
            // tableauPrixFinal.push(onChangeSectionTotal)
            // console.log(tableauPrixFinal)            
            qtyTotal();
            // toutTotalPrix ();            
            console.log("chargelocale")
            localStorage.setItem("panier", JSON.stringify(majcart));
          } else  {
            
            console.log("quantite client dejà egal qt input")
          }
          location.reload(true)
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
      // const ledatapanier = JSON.parse(localStorage.getItem("dataPanier"))
    }     
    qtyTotal();
    
    //  Ici demarche pour trouver  tous les ptotaux de chaque section de produit
    const prixElemt =  parseInt(dataPanier.price)
    const vlueQtenumerisee = parseInt(resultatValeurQuantite.value)    
    console.log(typeof(resultatValeurQuantite.value), typeof(dataPanier))      
    const totlprixTypProduit = vlueQtenumerisee * prixElemt
    console.log(totlprixTypProduit)
    console.log("datapanier1", prixElemt, dataPanier.name,)
    console.log(totalPanier)
    
    const laDescriptonContenuCartItem = document.querySelector("div.cart__item__content__description")
    const lePrix = laDescriptonContenuCartItem.querySelector("p:last-child")
  console.log("datapanier", dataPanier, "cartPanierGet", cartPanierGet, "totalPanier", totalPanier)
  
    const tableauPrixFinal = [];
    // Ici ca prend les vlue et prixElement
    console.log(totalPanier)
    for(let prod = 0; prod < totalPanier.length; prod++) {
      const prixCatProdt = totalPanier[prod]            

      const finalPrice = prixCatProdt * vlueQtenumerisee
      console.log(vlueQtenumerisee, prixCatProdt, ' = ', finalPrice)
      console.log("totalPanier",totalPanier, "tableauPrixFinal" , tableauPrixFinal)
      tableauPrixFinal.push(finalPrice)
      console.log(finalPrice)
      console.log(tableauPrixFinal)

    }
    totalPanier = tableauPrixFinal;
    console.log("totalPanier",totalPanier,"egal", "tableauPrixFinal" , tableauPrixFinal)        
    console.log(totalPanier)

    function toutTotalPrix () {
    totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("1", typeof(totalPanier[0]) + "2", typeof(totalPanier[1]))
    const totalSupreme = totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(totalPanier)
    console.log(totalSupreme)
      
    const caseTotalPrice = document.querySelector("#totalPrice");
    caseTotalPrice.innerHTML = totalSupreme;
    // caseTotalPrice.innerHTML = "4";
        
    }
    toutTotalPrix ();
    
    
    // là je vais tester les funstions pour les input regex ------------------------------------------------------
    
    // Je créé une fonction la partie du form qui n'acceptera pas de chiffres
    function pasDeChiffres (value) {
      return /^[^\d]*$/.test(value);
    }
    // Je créé là une fonction la partie du form qui sera composé de un prénom ou alors de deux ou plusieurs prénoms composés
    // avec un tiret 
    function prenomCompose (value) {
      // return /^[\p{L}]+[- ]+[\p{L}]+$/.test(value);
      return /^[a-zéèïîçA-Z]+([-\s][a-zéèïîçA-Z])?/.test(value)
    }    
    // Je créé une fonction la partie du form qui n'acceptera pas de chiffres
    function addresseValide(value) {
      return /^[0-9\s\p{Lu}]+$/.test(value);
    }
    function debutdeMajuscule(value) {
    // 
      return /^[A-Z]+$/.test(value) 
    }
    
    function aSymbole () {
      return /@/.test(value);
    }

    const form = document.querySelector("#order");
    const prenom = document.querySelector("#firstName").value
    const nom = document.querySelector("#lastName").value
    const adresse =  document.querySelector("#address").value          
    const ville = document.querySelector("#city").value
    const email = document.querySelector("#email").value 

    function boutonPanierComander () {
      const commanderBtn = document.querySelector('#order');
      commanderBtn.addEventListener('click', function(e) {
      // console.log('ca paniasse');
      e.preventDefault();

      // valeurs du formulaire qui seront sauvegardés dans localstorage key contact 
        const contact = {
        prenom: document.querySelector("#firstName").value,
        nom: document.querySelector("#lastName").value,
        addresse: document.querySelector("#address").value,
        ville: document.querySelector("#city").value,
        email: document.querySelector("#email").value
      }
      // Vérif prénom voir le regex de de prenomcomposé là
      
        if (!pasDeChiffres(prenom.value) || !prenomCompose(prenom.value)) {
          console.log(" prenom, hey ton prenom n'est pas que lettre et ou de prenoms composés")
          return;
        } else if ( prenomCompose(prenom.value) && (pasDeChiffres(prenom.value))){
          console.log("prénom ok")
          return
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



};

// tous les éléments de l'user a envoyer au serveur


// Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();