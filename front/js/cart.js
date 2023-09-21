// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);
const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));

const carteArticle = document.querySelector(".cart > #cart__items");
tableauPrix = [];
totalPanier = [];
let totalChange = [];
const fetchEtVisualSection = async () => {
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];

    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    // console.log("icica marchenom",produitPanier.name, produitPanier.price)

    if (!response.ok) {
      throw new Error("Il y a une erreur lors de la récupération des données.");
    }
    const dataPanier = await response.json();

    console.log(totalPanier);
    totalPanier.push(parseInt(dataPanier.price));
    console.log(totalPanier);
    for (let u = 0; u < dataPanier.length; u++) {
      lemDeTotalPanier = dataPanier[u];
      console.log(lemDeTotalPanier);
    }
    // Ce consolelog ci dessous montre lde dernier
    console.log(dataPanier);
    console.log(totalPanier);
    console.log(produitPanier);

    console.log("dataPanier", typeof dataPanier.price, "produit.name >", produitPanier.name, typeof produitPanier.quantity);
    console.log("dataPanier", dataPanier.name, dataPanier.price, produitPanier.name, produitPanier.quantity);
    const detailArticl = document.createElement("article");
    detailArticl.classList.add("cart__item");
    detailArticl.setAttribute("data-id", `${dataPanier._id}`);
    detailArticl.setAttribute("data-color", `${produitPanier.colors}`);
    carteArticle.append(detailArticl);

    const photoArticleCart = document.createElement("div");
    photoArticleCart.classList.add("cart__item__img");
    detailArticl.append(photoArticleCart);

    const imageCartItemArtcl = document.createElement("img");
    imageCartItemArtcl.setAttribute("alt", "Photographie d'un canapé");
    imageCartItemArtcl.setAttribute("src", `${dataPanier.imageUrl}`);
    photoArticleCart.append(imageCartItemArtcl);

    const contenuCartItem = document.createElement("div");
    contenuCartItem.classList.add("cart__item__content");
    detailArticl.append(contenuCartItem);

    const descriptonContenuCartItem = document.createElement("div");
    descriptonContenuCartItem.classList.add("cart__item__content__description");
    contenuCartItem.append(descriptonContenuCartItem);

    const nomProduitCarteItem = document.createElement("h2");
    nomProduitCarteItem.innerHTML = `${dataPanier.name}`;
    descriptonContenuCartItem.append(nomProduitCarteItem);

    const descriptionCouleurProduit = document.createElement("p");
    descriptionCouleurProduit.innerHTML = `${produitPanier.colors}`;
    descriptonContenuCartItem.append(descriptionCouleurProduit);

    const descriptionPrixProduit = document.createElement("p");
    descriptionPrixProduit.innerHTML = `${dataPanier.price}`;
    descriptonContenuCartItem.append(descriptionPrixProduit);

    const fixationContenuCartArticle = document.createElement("div");
    fixationContenuCartArticle.classList.add("cart__item__content_settings");
    contenuCartItem.append(fixationContenuCartArticle);

    const quantiteContenuCarteArticle = document.createElement("div");
    quantiteContenuCarteArticle.classList.add("cart__item__content__settings__quantity");
    fixationContenuCartArticle.append(quantiteContenuCarteArticle);

    const valeurQuantite = document.createElement("p");
    valeurQuantite.innerHTML = "Qté:";
    fixationContenuCartArticle.append(valeurQuantite);

    const resultatValeurQuantite = document.createElement("input");
    resultatValeurQuantite.classList.add("itemQuantity");
    resultatValeurQuantite.setAttribute("type", "number");
    resultatValeurQuantite.setAttribute("name", "itemQuantity");
    resultatValeurQuantite.setAttribute("min", "1");
    resultatValeurQuantite.setAttribute("max", "100");
    resultatValeurQuantite.setAttribute("value", `${produitPanier.quantity}`);
    fixationContenuCartArticle.append(resultatValeurQuantite);

    const caseAnnuleConfigCotenuCartArticl = document.createElement("div");
    caseAnnuleConfigCotenuCartArticl.classList.add("cart__item__content__settings__delete");
    contenuCartItem.append(caseAnnuleConfigCotenuCartArticl);

    const supprimerArticl = document.createElement("p");
    supprimerArticl.classList.add("deleteItem");
    supprimerArticl.innerHTML = "Supprimer";
    caseAnnuleConfigCotenuCartArticl.append(supprimerArticl);

    const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const unArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const majcart = [...cartPanierGet];
      // console.log(majcart);
      console.log(totalPanier);
      console.log(produitPanier);

      unArticleQuantiteInput.forEach((input, index) => {
        input.addEventListener("change", function (e) {
          const quanteModifiableProductInput = e.target.value;
          const panelPersoChoix = majcart[index];
          const toutPanLocal = majcart;
          console.log(panelPersoChoix.colors);
          console.log(panelPersoChoix.quantity);
          //----------- Ici, j'ai rajoute ce for let pour essayer de regler le bug du problème de quantité ,et malgré tout, il ne se passe rien de bon, je ne voies pas mon erreur
          // for (let indice = 0; indice < majcart.length; indice++) {
          //   const majcartTablIndice = majcart[indice];
          //   const lastMajcartTablIndice = majcart.length;
          //   console.log(majcartTablIndice);
          //   console.log(majcartTablIndice);
          //   if (lastMajcartTablIndice) {
          //     if (panelPersoChoix._id === produitPanier._id) {
          //       console.log("id sont pareils")
          //       if (panelPersoChoix.quantity !== produitPanier.quantity && panelPersoChoix.colors === produitPanier.colors) {
          //         quanteModifiableProductInput === panelPersoChoix.quantity;
          //       }
          //     }
          //   }
          //   console.log(majcartTablIndice);
          //   console.log(majcartTablIndice.quantity);

          //   // return majcartPointIndice.quantity
          // }

          //         quanteModifiableProductInput === panelPersoChoix.quantity;

          // ------------------------------------ Fin du for let d essai ci dessus ----------------------------------------

                     if (quanteModifiableProductInput !== panelPersoChoix.quantity && dataPanier._id === panelPersoChoix._id) {
                       // localStorage.setItem("panier", JSON.stringify('panier'))

                      console.log("input inegal");
                      console.log(panelPersoChoix._id, panelPersoChoix.name + " = " + dataPanier.name);

                      panelPersoChoix.quantity = quanteModifiableProductInput;
                      console.log(panelPersoChoix.quantity = quanteModifiableProductInput);
                      console.log(panelPersoChoix._id, panelPersoChoix.name)
          // ========================================================================================================================
                      let caseTotalPrice = document.querySelector("#totalPrice");
                      caseTotalPrice = " ";
                      console.log("case a ceci =", "' " + caseTotalPrice + "' ");
                      // localStorage.getItem(JSON.parse('panier'))
                      // const changeQuantity = parseInt(panelPersoChoix.quantity);
                      // const baliseChangePrix = laDescriptonContenuCartItem.querySelector("p:last-child");
                      // const prixDsBalisePrix = parseInt(baliseChangePrix.textContent);
                      // const onChangeSectionTotal = changeQuantity * prixDsBalisePrix;
                      // console.log(baliseChangePrix);
                      // console.log(onChangeSectionTotal);
                      // console.log(totalPanier);
                  //           //============================= ====================
                  //     totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                  //     console.log("1", typeof totalPanier[0] + "2", typeof totalPanier[1]);
                  //     const totalSupreme = totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                  //     console.log(totalPanier);
                  //     console.log(totalSupreme);

                  //     console.log("totaPrix", caseTotalPrice.textContent);
                  //     caseTotalPrice = `${totalSupreme}`;
                  //     console.log(caseTotalPrice.textContent);
                  // //          ===============================================
                  //     // tableauPrixFinal.push(onChangeSectionTotal)
                  //     // console.log(tableauPrixFinal)
                  //     qtyTotal();
                      // toutTotalPrix ();
                      // console.log("chargelocale");
                      console.log(totalPanier);
                      localStorage.setItem("panier", JSON.stringify(majcart));
                    }
                    else if (quanteModifiableProductInput === panelPersoChoix.quantity && localStorage.getItem("panier")) {
                      console.log("input quantite client dejà egal qt input");
                      console.log(totalPanier);
                    }
          // location.reload(true);
        });
      });
      //  On dirait que je pourrai faire mes calculs ici a voir au plus vite
      console.log(totalPanier);
    };
    // Et j'appele en bas la fonction de modification de la quantite.
    modifQuantite();

    // bouton "supprimé" créé ci dessous
    supprimerArticl.addEventListener("click", function () {
      console.log("ca supprime");
      const cartFilterNot = cartPanierGet.filter(
        (canap) => (canap._id !== produitPanier._id && canap.colors !== produitPanier.colors) || (canap._id === produitPanier._id && canap.colors !== produitPanier.colors)
      );

      for (let a = 0; a < cartFilterNot.length; a++) {
        const articleCartPanier = cartFilterNot[a];
        console.log(articleCartPanier);
        console.log(cartFilterNot.indexOf(articleCartPanier));
        console.log(cartFilterNot);
        console.log(cartPanierGet);
        localStorage.setItem("panier", JSON.stringify(cartFilterNot));
        console.log(resultatValeurQuantite.Value);
      }
      if (cartFilterNot.length === 1) {
        console.log("il y a 1 produit dans le localS et le panier");
      } else if (cartFilterNot.length < 1) {
        localStorage.removeItem("panier");
        console.log("il n'y a plus de produits ni dans la page panier, ni dans le localStorage");
      }
      location.reload(true);
    });

    // C'est ici que je dois ajouter mes essais du btomm bouton
    function qtyTotal() {
      const caseTotalQty = document.querySelector("#totalQuantity");
      const affichTotalQuantity = cartPanierGet.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.quantity), 0);
      const quantiteTotaleParsee = parseInt(affichTotalQuantity);
      caseTotalQty.innerHTML = parseInt(affichTotalQuantity.toString());
      const ledatapanier = JSON.parse(localStorage.getItem("dataPanier"));
    }
    qtyTotal();
    console.log(totalPanier);
    //  Ici demarche pour trouver  tous les ptotaux de chaque section de produit
    const prixElemt = parseInt(dataPanier.price);
    const vlueQtenumerisee = parseInt(resultatValeurQuantite.value);
    console.log(typeof resultatValeurQuantite.value, typeof dataPanier);
    const totlprixTypProduit = vlueQtenumerisee * prixElemt;
    console.log(totlprixTypProduit);
    console.log("datapanier1", prixElemt, dataPanier.name);
    console.log(totalPanier);

    const laDescriptonContenuCartItem = document.querySelector("div.cart__item__content__description");
    const lePrix = laDescriptonContenuCartItem.querySelector("p:last-child");
    console.log("datapanier", dataPanier, "cartPanierGet", cartPanierGet, "totalPanier", totalPanier);
    // on dirait que cest tableaufinal qui double quelquechose
    const tableauPrixFinal = [];

    console.log(totalPanier, "contre", tableauPrixFinal);
    // Ici ca prend les vlue et prixElement
    for (let prod = 0; prod < totalPanier.length; prod++) {
      const prixCatProdt = totalPanier[prod];
      console.log(prixCatProdt);
      console.log(totalPanier, "contre", tableauPrixFinal);

      const finalPrice = prixCatProdt * vlueQtenumerisee;
      console.log("Qte", vlueQtenumerisee, "prix", prixCatProdt, " = final", finalPrice);
      console.log("totalPanier", totalPanier, "tableauPrixFinal", tableauPrixFinal);
      tableauPrixFinal.push(finalPrice);
      console.log(finalPrice);
      console.log(tableauPrixFinal);
    }
    console.log(totalPanier, "contre", tableauPrixFinal);
    totalPanier = tableauPrixFinal;
    console.log("totalPanier", totalPanier, "egal", "tableauPrixFinal", tableauPrixFinal);
    console.log(totalPanier);

    function toutTotalPrix() {
      totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log("1", typeof totalPanier[0] + "2", typeof totalPanier[1]);
      const totalSupreme = totalPanier.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log(totalPanier);
      console.log(totalSupreme);
      // En haut on dirait que cest tableaufinal qui double quelquechose
      const caseTotalPrice = document.querySelector("#totalPrice");
      caseTotalPrice.innerHTML = totalSupreme;
      // caseTotalPrice.innerHTML = "4";
    }
    toutTotalPrix();
  }

  // tous les éléments de l'user a envoyer au serveur
};
// Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();

// LEs éléments pour formulaire
const form = document.getElementById("order");
const prenom = document.getElementById("firstName");
const prenomError = prenom.nextElementSibling;
const nom = document.getElementById("lastName");
const nomError = prenom.nextElementSibling;
const adresse = document.getElementById("address");
const adresseError = adresse.nextElementSibling;
const ville = document.getElementById("city");
const villeError = ville.nextElementSibling;
const email = document.getElementById("email");
const emailError = email.nextElementSibling;

// --------------------------------------------------- A démuter ci dessous plus tard: valeurs du formulaire qui seront sauvegardés dans localstorage key contact
// const contact = {
//   prenom: document.querySelector("#firstName"),
//   nom: document.querySelector("#lastName"),
//   addresse: document.querySelector("#address"),
//   ville: document.querySelector("#city"),
//   email: document.querySelector("#email"),
// };

// A REMETTRE PEut etre PLUS TARD EN BAS DANS LE BOUTON

//  LEs évènements pour le bouton d'envoi commande client

const commanderBtn = document.getElementById("order");
commanderBtn.addEventListener("submit", function (e) {
  // console.log('ca paniasse');
  // e.preventDefault();
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const adresseValue = adresse.value.trim();
  const villeValue = ville.value.trim();
  const emailValue = email.value.trim();
  console.log(prenomValue, nomValue, adresseValue, villeValue, emailValue )
  
  if (prenomValue === "" || nomValue === "" || adresseValue === "" || villeValue === "" || emailValue === "") {
    alert("remplir le formulaire lààààà");
    e.preventDefault();
    // e.stopPropagation();
  }
  // ----------------------------------------------------------

  // localStorage.setItem("contact", JSON.stringify(contact))

  // là  input regex ------------------------------------------------------

  //  Exemplaire de Regex en forme FUNCTION
  // verifNom();
  
  // Ici en bas je peux regrouper les objets que je dois transmettre
  const userFormToSend = {
    cartPanierGet,
    contact,
  };
  console.log("userFormToSend");
  console.log(userFormToSend);
  
  // ICi en bas on va mettre des conditions aavnt de permettre le localSotrage .
  // localStorage.setItem("contact", JSON.stringify(contact))
  
  // const formulaireValide =
  // J'ecoute la modification du prenom
  form.prenom.addEventListener('change', function() {
    validPrenom(this);
  });
  
  // J'ecoute la modification du nom
  form.nom.addEventListener('change', function() {
    validNom(this);
  });
  
  
  // J'ecoute la modification de l'adresse
  form.adresse.addEventListener('change', function() {
    validAdresse(this);
  });
  
  // J'ecoute la modification de la ville
  form.ville.addEventListener('change', function() {
    validVille(this);
  });
  
  // J'ecoute la modification d'E-MAiL
  form.email.addEventListener('change', function() {
    validEmail(this);
  });


  
  
  // function verifNom(nomValue) {
    //   console.log("nom", "+", nomValue)
    //   const regexNomValue = /[A-Za-z][a-z]+([\s\-\_][A-Za-z][a-z]+)?/;
    //   console.log(regexNomValue.test(nomValue));
    //   if (regexNomValue.test(nomValue)) {
      //     return nomValue;
      //   } else {
        //     nomError.textContent = "Vérifiez le nom vous avez sûrement mis des chiffres ou symboles. ";
        //   }
        // }
        
        
        
        // ------------------------------ VALIDATION PRENOM ------------------------
        
        const validPrenom = function(prenom) {
          // creation regex pour valider le prenom 
          let regexPrenom = new RegExp('^[A-Za-z][a-z]+(([\ ])?[\s\-\_]([\ ])?[A-Za-z][a-z]+)+', 'g');
          // Je prends la balise de message error "firstNameErrorMsg"
          let prenomError = prenom.nextElementSibling;
          
          // Je testeavec l'expression réguliere
          if (regexPrenom.test(prenom.value)) {
            console.log('prenom ok')
            prenomError.innerHTML = "";
            prenomError.classList.remove('text-bad');
            prenomError.classList.add('text-success')
            prenomError.style.display = "none";
            return true;
          } else {
            console.log(' validprenom ne va pas bien là')
            prenomError.innerHTML = "Prenom non conforme au format prenom";
            prenomError.classList.add('text-bad');
            return false;
          }
        }
        
        // ------------------------------- VALIDATION NOM ----------------------------------------------
        
        const validNom = function(nom) {
          // creation regex pour valider le nom
          let regexNom = new RegExp('[A-Za-z][a-z]+([\s\-\_][A-Za-z][a-z]+)?', 'g')
          // Balise message error "lastNameErrorMsg"
          let nomError = nom.nextElementSibling;
          
          if (regexNom.test(nom.value)) {
            console.log("nom ok")
            nomError.innerHTML = "";
            nomError.classList.remove('text-bad');
            nomError.classList.add('text-success');
            prenomError.style.display = "none";
            return true;
          } else {    
            console.log("validnom ne va pas là")
            nomError.innerHTML = "nom non conforme au format nom";
            nomError.innerHTML.classList.add('text-bad');
            return false;
          }
        }
        
        //  ---------------------------- VALIDATION ADRESSE ---------------------------------------------
        
        const validAdresse = function(adresse) {
  // je crée un regex qui valide l'adresse
  let regexAdresse = new RegExp('(^[0-9]{2,3}[\,\s])?([0-9a-zA-Z])?[a-zA-Z0-9\s\-\_]+([\,\s])?(\s)+?([A-Za-z])?[a-zA-Z0-9]+(((\s)?[\-]{1,2}(\s)?([A-Za-z])[a-zA-Z0-9]+){2,5})?(([\ ])?([\-\_\ ])?([\ ])?)?[0-9]{2,5}', 'g')
  // stock de la balise message error "addressErrorMsg"
  let adresseError = adresse.nextElementSibling;
  
  if (regexAdresse.test(adresse.value)) {
    console.log("adresse ok")
    adresseError.innerHTML = "";
    adresseError.classList.remove('text-bad');
    adresseError.classList.add('text-success');
    adresseError.style.display = "none";
    return true;
  } else {
    console.log("validprenom ne va pas là")
    adresseError.innerHTML = "adresse non conforme au format adresse";
    adresseError.innerHTML.classList.add('text-bad');
    return false;
  }
}

// ------------------------------ VLIDATION VILLE ---------------------------

const validVille = function(ville) {
  // creation d'un regex pour valider la ville
  let regexVille = new RegExp('^[A-Z][a-z]+(([\-\ ])(([A-Z])?[a-z]+))+', 'g')
  // Stockage de la balise message error "cityErrorMsg"
  let villeError = ville.nextElementSibling;
  
  if (regexVille.test(ville.value)) {
    console.log("ville ok")
    villeError.innerHTML = "";
    villeError.classList.remove('text-bad');
    villeError.classList.add('text-success');
    villeError.style.display = "none";
    return true;
  } else {
    console.log("validville ne va pas là")
    villeError.innerHTML = "ville non conforme au format ville";
    villeError.innerHTML.classList.add('text-bad');
    return false;
  }
}

//  ---------------------------- VALIDATION E-MAIL -----------------

const validEmail = function(email) {
  // JE fais du coup une regex pour la valider l'email
  let regexEmail = new RegExp(
    '^[a-zA-Z0-9][a-zA-Z0-9\.\-\_]+[@]{1}[a-z\.\-\_]+[\.]{1}[a-z]{2,10}$', 'g'
    );
    // Là je recupere la balise de message error "emailErrormsg"
    let emailError = email.nextElementSibling;
    
    // Là je teste l'expression reguliere
    if (regexEmail.test(email.value)) {
      console.log("email ok")
      emailError.innerHTML = "";
      emailError.classList.remove('text-bad')
      emailError.classList.add('text-success')
      emailError.style.display = "none";
      return true;
    } else {
      console.log("validemail ne va pas là")
      emailError.innerHTML = "email non conforme au format email";
      emailError.classList.add('text-bad')
      return false;
    }
  }
});