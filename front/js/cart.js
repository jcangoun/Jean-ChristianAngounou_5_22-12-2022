// nouvelle cart.js et puis ancien formulaire tout bien
// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);
const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
// console.log("tableau de produits selectionnés", cartPanierGet)

const carteArticle = document.querySelector(".cart > #cart__items");
let totalPanier = [];
let totalTableauQuantity = [];
let totalPrixRow = [];
let onChangeTableauPrix = [];

// console.log("ONT", onChangeTableauPrix)

const fetchEtVisualSection = async () => {
// console.log("2ONT", onChangeTableauPrix)

  // Je recupere les différents canapé choisis deans la page produit
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];
  // A chaque canap qui s'ajoute, on recupere l'id du produit(produit._id) qui ici s'appele aussi produitPanier (produitPAnier._id)
    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    // console.log("icica marchenom",produitPanier.name, produitPanier.price)

    if (!response.ok) {
      throw new Error("Il y a une erreur lors de la récupération des données.");
    }
    const dataPanier = await response.json();
    // console.log(dataPanier)
    // console.log(produitPanier)
    
    // console.log("+ONT", onChangeTableauPrix)
    // Test d ajout
    // console.log("totalPanier au début", totalPanier);
    totalPanier.push(parseInt(dataPanier.price));
    // console.log("les prix", totalPanier);
    totalTableauQuantity.push(parseInt(produitPanier.quantity))

    // console.log(produitPanier.quantity, typeof(produitPanier.quantity))
    const qtyProduit = parseInt(produitPanier.quantity)
    // console.log(produitPanier.quantity, typeof(qtyProduit))
    const firstChangeallsectPrix = parseInt(dataPanier.price) * qtyProduit
    // console.log("firstSectPrix", firstChangeallsectPrix)
    onChangeTableauPrix.push(firstChangeallsectPrix)
    // console.log("onChangeTableauPrix", onChangeTableauPrix)
    // console.log("ONT", onChangeTableauPrix)
    
    // Ce consolelog ci dessous montre le dernier

    // console.log(totalPanier);
    // console.log(produitPanier.quantity);
    // console.log("dataPanier", typeof dataPanier.price, "produit.name >", produitPanier.name, typeof produitPanier.quantity);
    // console.log("dataPanier", dataPanier.name, dataPanier.price, produitPanier.name, produitPanier.quantity);

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
      caseTotalQty.innerHTML = parseInt(affichTotalQuantity.toString());
    }
    qtyTotal();

      //  ----------------  Ici demarche pour  tous le calcul des ptotaux de chaque section de produit -------------------

    // stockage de prix unitaire  et aussi de la quantité du même produit, tous en format nombre 
      const PrixU = parseInt(dataPanier.price)
      const valueParseQty = parseInt(resultatValeurQuantite.value)

      // ci dessous, Formule du total prix par categorie de canapés
      const valueSectionTotaltPrixRow = PrixU * valueParseQty
      totalPrixRow.push(valueSectionTotaltPrixRow)
      console.log(totalPrixRow)

      let montantCommnd = 0;
      for (let produitCanape = 0; produitCanape < totalPrixRow.length; produitCanape++) {
        const prixDuProduit = totalPrixRow[produitCanape]
        console.log(prixDuProduit)
        montantCommnd = montantCommnd + totalPrixRow[produitCanape]
      }
   
      const caseTotalPrice = document.querySelector("#totalPrice");
      caseTotalPrice.innerHTML = montantCommnd;    

    const modifQuantite = () => {
      const unArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const majcart = [...cartPanierGet];
      // console.log(majcart);
      // console.log(produitPanier);
      
      unArticleQuantiteInput.forEach((input, index) => {
        input.addEventListener("change", function (e) {
          console.log(majcart);
          let caseTotalPrice = document.querySelector("#totalPrice");
          caseTotalPrice.textContent = 0;
          
          const quanteModifiableProductInput = e.target.value;
          console.log(quanteModifiableProductInput);
          const panelPersoChoix = majcart[index];
          console.log("panelPersoChoix", panelPersoChoix);
          const toutPanLocal = majcart;
          console.log(toutPanLocal)          
          console.log("Choixquantity =", panelPersoChoix.quantity, quanteModifiableProductInput);
          // Ci dessous valeur qté dans l'input devient ou reste égal a la qté equivalente de son produit dans le local storage
          quanteModifiableProductInput === panelPersoChoix.quantity;
          console.log("Choixquantity =", panelPersoChoix.quantity, quanteModifiableProductInput);          
          localStorage.setItem("panier", JSON.stringify(majcart))
          qtyTotal();
          // caseTotalPrice.textContent = 0;

          // console.log("majcart,", majcart)
          // console.log("cartPanierGet,", cartPanierGet)
          // for (let p = 0; p < majcart.length; p++ ) {
          //               fetch(`http://localhost:3000/api/products/${majcart[p]._id}`)
          //   .then(response => (response.json()))
          //     .then(tablo => {
          //       let storageGet = JSON.parse(localStorage.getItem('panier'))
          //       console.log(storageGet)
          //       console.log(storageGet[p].quantity)
          //       let caseTotalPrice = document.querySelector("#totalPrice");
                
          //       caseTotalPrice.textContent = Number(caseTotalPrice.textContent) + Number(majcart[p].quantity) * Number(tablo.price)

          //       console.log(caseTotalPrice.textContent)
          //     })
          // }

          // JSON.parse(localStorage.getItem('panier'))

          // Nouveauté

          console.log(onChangeTableauPrix)

          if (quanteModifiableProductInput === panelPersoChoix.quantity && localStorage.getItem("panier")) {
            console.log("euh prix au change directement egal")
            // let caseTotalPrice = document.querySelector("#totalPrice");
            // console.log(onChangeTableauPrix)

            // // caseTotalPrice = " ";
            // console.log("(c est IF) donc case a ceci =", "' " + caseTotalPrice.textContent + "' ", "c est ", typeof(caseTotalPrice.textContent));
            // // JSON.parse(localStorage.getItem('panier'))

            // // Tout se passe ici avec le principe de foocntionnement de DataPanier
            // const changeQuantity = parseInt(panelPersoChoix.quantity);
            // const baliseChangePrix = descriptonContenuCartItem.querySelector("p:last-child");
            // const prixDsBalisePrix = parseInt(dataPanier.price);
            // const onChangeSectionTotal = changeQuantity * prixDsBalisePrix;
            // console.log("qty", changeQuantity);
            // console.log("Prix", prixDsBalisePrix);
            // console.log("changeQty", changeQuantity, "prixDsBalisePrix", prixDsBalisePrix )
            // console.log("ca donne onChangeSectionTotal", onChangeSectionTotal);
            // console.log(totalPanier);
            // console.log(panelPersoChoix)

            // console.log(dataPanier.price)
            // console.log(produitPanier.quantity)
            
          }
          else if (quanteModifiableProductInput !== panelPersoChoix.quantity && dataPanier._id === panelPersoChoix._id) {
            console.log("input inegal donc, (else if)");
            console.log(panelPersoChoix._id, panelPersoChoix.name + " = " + dataPanier.name);
            panelPersoChoix.quantity = quanteModifiableProductInput;
            console.log(panelPersoChoix.quantity + " = " + quanteModifiableProductInput);
            console.log("maintenant égal")

            let localStoreSet = localStorage.setItem("panier", JSON.stringify(majcart))            
            console.log(majcart)
            let localGet = JSON.parse(localStorage.getItem('panier'))
            console.log(localGet)

            caseTotalPrice.textContent = 0;

            console.log("majcart,", majcart)
            console.log("cartPanierGet,", cartPanierGet)
            for (let p = 0; p < majcart.length; p++ ) {
                          fetch(`http://localhost:3000/api/products/${majcart[p]._id}`)
              .then(response => (response.json()))
                .then(tablo => {
                  let storageGet = JSON.parse(localStorage.getItem('panier'))
                  console.log(storageGet)
                  console.log(storageGet[p].quantity)
                  let caseTotalPrice = document.querySelector("#totalPrice");
                  
                  caseTotalPrice.textContent = Number(caseTotalPrice.textContent) + Number(majcart[p].quantity) * Number(tablo.price)
  
                  console.log(caseTotalPrice.textContent)
                })
            }
  
            console.log(produitPanier.quantity)
            // ========================================================================================================================

            // caseTotalPrice = " ";
            console.log("case a ceci =", "' " + " mettre la variable du vrai prix total" + "' ");

            qtyTotal();
  
            console.log("icica marchenom",produitPanier.name, produitPanier.price)
        
            if (!response.ok) {
              throw new Error("Il y a une erreur lors de la récupération des données.");
            }
  
          } else {
            console.log("y a un probleme")
          }
          // location.reload(true); 
          JSON.parse(localStorage.getItem('panier')) 
          console.log(totalPrixRow)
        });
              console.log("dans modif", dataPanier.name)
      });

    };
    // Et j'appele en bas la fonction de modification de la quantite.
    modifQuantite();
  }
  // DataPanier a partir d 'ici ne nous voit plus plus parcequ'on n'est plus dans sa zone de visibilité 
  console.log(cartPanierGet)

//  ------------------------------- mignonne greffe de  healthy fonction test ------------------- 
console.log ( "test avant greff ici ca marche a coups sur")


zoneForm();
console.log("derniere ligne de fetch et aussi où la console marche");
  // Derniere ligne ici ou tout code est encore lu  
};
console.log(" du coup cette ligne de console.log sans  fonction, n'apparait pas en fonction d 'un certain bug non determnd")
  
// // Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();


function zoneForm() {
  console.log("zoneForm")

  // // LEs éléments pour formulaire
  const form = document.getElementById("order");
  const prenom = document.getElementById("firstName");
  const prenomError = document.getElementById("firstNameErrorMsg");
  const nom = document.getElementById("lastName");
  const nomError = document.getElementById("lastNameErrorMsg")
  const adresse = document.getElementById("address");
  const adresseError = adresse.nextElementSibling;
  const ville = document.getElementById("city");
  const villeError = ville.nextElementSibling;
  const email = document.getElementById("email");
  const emailError = email.nextElementSibling;

 //  LEs évènements pour le bouton d'envoi commande client

  form.addEventListener("click", function (e) {
   e.preventDefault();
   console.log('ca paniasse');
  let controlPrenom;
  let controlNom;
  let controlAdresse;
  let controlVille;
  let controlEmail;
    // ---------------- SECTION PRENOM --------------------------------------------------------
  
   // ---------------  VALIDATION PRENOM ----------------------
    let prenomValue = prenom.value;
    console.log(typeof(prenomValue), "'" + prenomValue + "'")
    if (prenomValue === null || prenomValue === undefined || prenomValue === '') {
    console.log("le prenom est vide . Veuillez remplir son champ")
    alert("le prenom est vide . Veuillez le remplir")
    } else {
     console.log("else, prenom pas NULL et ou UNDEFINED", typeof(prenomValue))

// --------------- Etape De Validation prenom -----------------------------------------
              let regexPrenom = /^[A-Za-z][a-z]+(-[a-zA-Z]+){0,2}$/;
               controlPrenom = regexPrenom.test(prenomValue)
              console.log(regexPrenom.test(prenomValue))
              if (controlPrenom === false) {
                console.log("'" + prenomValue + "'", " est", controlPrenom)
                prenomError.innerHTML = "la valeur dans le champ prénom ne respecte pas le format prenom. Pas de chiffres ou de symboles Ni espaces entre les PRENOMS et TIRET"
              }else if (controlPrenom === true) {
                console.log("'" + prenomValue + "'", " est", controlPrenom)
                prenomError.innerHTML = ""
              }
    }
    // --------------- FIN PRENOM -----------------------------------------------------------

// // // ---------------- DEBUT NOM ------------------------------

    let nomValue = nom.value;
    console.log(typeof(nomValue), "'" + nomValue + "'")
    if (nomValue === null || nomValue === undefined || nomValue === '') {
    console.log("le nom est vide . Veuillez remplir son champ")
    alert("le nom est vide Veuillez remplir son champ NOM")
    } else {
    console.log("else, nom pas NULL et ou UNDEFINED", typeof(nomValue))

    // Etape De validation Nom ---------
    let regexNom = /^[A-Za-z]+(-[a-zA-Z]+){0,3}$/
    controlNom = regexNom.test(nomValue)
    if (controlNom === false) {
      console.log("'" + nomValue + "'", " est", controlNom)
      nomError.innerHTML = "La valeur dans le champ NOM ne respecte le format du nom. Veuillez le re-écrire "
    } else if (controlNom === true) {
      console.log("'" + nomValue + "'", " est", controlNom)
      nomError.innerHTML = "";
    }

    }
     // ------------- FIN NOM ---------------------------------


// //   //  -------------- DEBUT ADRESSE ---------------------------------
    let adresseValue = adresse.value;
    console.log(typeof(adresseValue), "'" + adresseValue + "'")
    if (adresseValue === null || adresseValue === undefined || adresseValue === '') {
  console.log("l'adresse est vide . Veuillez remplir son champ")

    } else {
  console.log("else, ADRESSE pas NULL et ou UNDEFINED", typeof(adresseValue))

  //  ETAPE DE Validation adresse ---------
  let regexAdresse = /(^[0-9]{2,3}[\,\s])?([0-9a-zA-Z])?[a-zA-Z0-9\s\-\_]+([\,\s])?(\s)+?([A-Za-z])?[a-zA-Z0-9]+(((\s)?[\-]{1,2}(\s)?([A-Za-z])[a-zA-Z0-9]+){2,5})?(([\ ])?([\-\_\ ])?([\ ])?)?[0-9]{2,5}/gm;;
  controlAdresse = regexAdresse.test(adresseValue)
  if (controlAdresse === false) {
  console.log("'" + adresseValue + "'", " est", controlAdresse)
  adresseError.innerHTML = "La valeur dans le champ ADRESSE ne respecte le format _adresse_. Veuillez le re-écrire "
  } else if (controlAdresse === true) {
    console.log("'" + adresseValue + "'", " est", controlAdresse)
    adresseError.innerHTML = "";
  }
    }
   // ---------------  FIN ADRESSE -----------------------

// // // ----------- DEBUT VILLE ------------------
   let villeValue = ville.value;
   console.log(typeof(villeValue), "'" + villeValue + "'")
   if (villeValue === null || villeValue === undefined || villeValue === '') {
  console.log("la ville est vide . Veuillez remplir son champ")
   } else {
  console.log("else, VILLE pas NULL et ou UNDEFINED", typeof(villeValue))

  // ETAPE DE VALIDATION Ville
  let regexVille = /[[A-Z][a-z]+([\_\-\ ]?[a-zA-Z]+){2,7}/g;
  controlVille = regexVille.test(villeValue)
  if (controlVille === false) {
    console.log("Aïe '" + villeValue + "'", " est", controlVille)
    villeError.innerHTML = "La valeur dans le champ VILLE ne respecte le format _ville_. Veuillez le re-écrire "
  } else if (controlVille === true) {
    console.log("'" + villeValue + "'", " est", controlVille)
    villeError.innerHTML = "";
  }
   }
    // ------------- FIN VILLE
 
// // // -----------  Debut E-MAIL ---------------------------
   let emailValue = email.value;
   if (emailValue === null || emailValue === undefined || emailValue === '') {
  console.log("le champ email est vide . Veuillez le remplir")
   } else {
  console.log("else, email pas NULL et ou UNDEFINED", typeof(emailValue))

   // Etape De validation d'EMAIL
  let regexEmail = /^[a-zA-Z0-9][a-zA-Z0-9\.\-\_]+[@][a-z\.\-\_]+[\.][a-z]{2,4}$/g;
  controlEmail = regexEmail.test(emailValue)
  if (controlEmail === false) {
    console.log("Aïe email '" + emailValue + "'", " est", controlEmail)   
    emailError.innerHTML = "La valeur dans le champ E-MAIL ne respecte le format _d'E-MAIL_. Veuillez le re-écrire " 
  }else if (controlEmail === true) {
    console.log("'" + emailValue + "'", " est", controlEmail)
    emailError.innerHTML = "";
  }
   }
   // ------------- FIN E-MAIL ----------------------------

   // Conditions de validation selon lesquelles submit envoie les données de formulaires ou appele L'event PreventDefult
    if ( prenomValue === true && nomValue === true && adresseValue === true && villeValue === true && emailValue === true) {
   console.log('Verdict conditions, tout est bon')
   const userFormToSend = {contact, products};

    } else if (prenomValue == undefined && nomValue == undefined && adresseValue == undefined && villeValue == undefined && emailValue == undefined) {
    console.log("J'envoies pas UNDEFINED")
     e.preventDefault(); 
  
    } else if (controlPrenom === false || controlNom === false || controlAdresse === false || controlVille === false || controlEmail === false) {
    console.log("J'envoie pas non plus FALSE")

    e.preventDefault(); 
  
    } else  {
      console.log('La  j envoie ')

      const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value,
      };
      console.log("es infos contact", contact)

       let products = [];
       //   // Sauvegarde localStorage ci dessous juste avant declaration fetch
       for (let lesProduits = 0; lesProduits < cartPanierGet.length; lesProduits++) {
         const leID = cartPanierGet[lesProduits]
         console.log(leID._id, typeof(leID._id))
         products.push(leID._id)
       }
       console.log(products)

      // const produits = JSON.stringify(LesIdProduits)
      const userFormToSend = {contact, products};
      let redirectAvecLeOrder
      // // Grand Fetch2
      fetch('http://localhost:3000/api/products/order', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userFormToSend)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.orderId)
        // recuperer
        redirectAvecLeOrder = window.location.replace(`./confirmation.html?orderId=${data.orderId}`)
      })

    }

    console.log("ADDEVENTzoneForm")
    // fin FormaddEventListenr ds zone form
  });
console.log("Fin zoneForm")
// Fin zoneForm
}

// const contact = {
//   firstName: "jack",
//   lastName: "Joe",
//   address: "11, rue des ers, 11200",
//   city: "Bomvier",
//   email: "dre@gmail.com",
// };
//  let products = ["77711f0e466b4ddf953f677d30b0efc9","107fb5b75607497b96722bda5b504926"]

// // const produits = JSON.stringify(LesIdProduits)
// const userFormToSend = {contact, products};

// // // Grand Fetch2
// fetch('http://localhost:3000/api/products/order', { 
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(userFormToSend)
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data)
// })