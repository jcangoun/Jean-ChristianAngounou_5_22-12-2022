// nouvelle cart.js et puis ancien formulaire tout bien
// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);
const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
console.log("tableau de produits selectionnés", cartPanierGet)

const carteArticle = document.querySelector(".cart > #cart__items");
let totalPanier = [];
let totalTableauQuantity = [];
let totalPrixRow = [];
let onChangeTableauPrix = [];

console.log("ONT", onChangeTableauPrix)


const fetchEtVisualSection = async () => {
console.log("2ONT", onChangeTableauPrix)
  // Je recupere les différents canapé choisis deans la page produit
  for (let canap = 0; canap < cartPanierGet.length; canap++) {
    const produitPanier = cartPanierGet[canap];
  // A chaque canap qui s'ajoute, on recupere l'id du produit(produit._id) qui ici s'appele aussi produitPanier (produitPAnier._id)
    const response = await fetch(`http://localhost:3000/api/products/${produitPanier._id}`);
    console.log("icica marchenom",produitPanier.name, produitPanier.price)

    if (!response.ok) {
      throw new Error("Il y a une erreur lors de la récupération des données.");
    }
    const dataPanier = await response.json();
    console.log(dataPanier)
    console.log(produitPanier)
    
    console.log("+ONT", onChangeTableauPrix)
    // Test d ajout
    console.log("totalPanier au début", totalPanier);
    totalPanier.push(parseInt(dataPanier.price));
    console.log("les prix", totalPanier);
    totalTableauQuantity.push(parseInt(produitPanier.quantity))


    
// --------- premiere partie d ajout finie 

    console.log(produitPanier.quantity, typeof(produitPanier.quantity))
    const qtyProduit = parseInt(produitPanier.quantity)
    console.log(produitPanier.quantity, typeof(qtyProduit))
    const firstChangeallsectPrix = parseInt(dataPanier.price) * qtyProduit
    console.log("firstSectPrix", firstChangeallsectPrix)
    onChangeTableauPrix.push(firstChangeallsectPrix)
    console.log("onChangeTableauPrix", onChangeTableauPrix)
    console.log("ONT", onChangeTableauPrix)
    
    // Ce consolelog ci dessous montre lde dernier
    console.log(totalPanier);
    console.log(produitPanier.quantity);
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

    console.log(totalPrixRow)

      //  ----------------  Ici demarche pour  tous les ptotaux de chaque section de produit -------------------

    // stockage de prix unitaire  et aussi de la quantité du même produit, tous en format nombre 
      const PrixU = parseInt(dataPanier.price)
      const valueParseQty = parseInt(resultatValeurQuantite.value)
      console.log(PrixU)
      console.log(valueParseQty)

      // ci dessous, Formule du total prix par categorie de canapés
      const valueSectionTotaltPrixRow = PrixU * valueParseQty
      console.log("prixU",PrixU ,"valuParseQty", valueParseQty)
      console.log("valueSectionTotalRow", valueSectionTotaltPrixRow)
      
      console.log(totalPrixRow)
      totalPrixRow.push(valueSectionTotaltPrixRow)
      console.log(totalPrixRow)

      let montantCommnd = 0;
      for (let produitCanape = 0; produitCanape < totalPrixRow.length; produitCanape++) {
        const prixDuProduit = totalPrixRow[produitCanape]
        console.log(prixDuProduit)
        montantCommnd = montantCommnd + totalPrixRow[produitCanape]
      }
      console.log("Et total", montantCommnd)    
      const caseTotalPrice = document.querySelector("#totalPrice");
      caseTotalPrice.innerHTML = montantCommnd;    

    const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
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

  // tous les éléments de l'user a envoyer au serveur
  
  let LesIdProduits = [];
  //   // Sauvegarde localStorage ci dessous juste avant declaration fetch
  for (let lesProduits = 0; lesProduits < cartPanierGet.length; lesProduits++) {
    const leID = cartPanierGet[lesProduits]
    console.log(leID._id, typeof(leID._id))
    LesIdProduits.push(leID._id)
  }
  // SOIT!!!!! ce contact là  Ici c est juste un CONTACT de TEST
  let contact = {"firstName":"Jean","lastName":"Fzgj","address":"11, rue des ers, 11200","city":"Bombier","email":"dre@gmail.com"}

  // SOIT!!!!! ce contact ci function des infos de contact qui va être donné lors du submit, juste là il est submit apparemment malgré un ptoentiel problème non décrit
  // const contact = {
  //   firstName: document.querySelector("#firstName").value,
  //   lastName: document.querySelector("#lastName").value,
  //   address: document.querySelector("#address").value,
  //   city: document.querySelector("#city").value,
  //   email: document.querySelector("#email").value,
  // };

  const produits = JSON.stringify(LesIdProduits)
  const userFormToSend = {contact, produits};
  console.log("userFormToSend", userFormToSend);
  console.log("typeuserFormToSend", typeof(userFormToSend));
  console.log(JSON.stringify(userFormToSend))
  console.log("et là autre typage userFormToSend", typeof(userFormToSend));
  
  console.log(typeof(contact), "contaact", typeof(produits), "produits")
  console.log(contact, produits)
  console.log(contact, JSON.stringify(produits))

  
  // localStorage.setItem("contact", JSON.stringify(contact))
  // localStorage.setItem("produits", JSON.stringify(produits))
  console.log("contact et produits ", contact, produits)
  
  // Grand Fetch1
  fetch('http://localhost:3000/api/products/order', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userFormToSend)
  });

// responsePost.then(async(reponse) => {
//     try {
//         console.log(reponse);
//       } catch (e) {
//           console.log(e)
//         }
//       })

zoneForm();

console.log("derniere ligne de fetch et aussi où la console marche");
  // Derniere ligne ici ou tout code est encore lu  
};
console.log(" du coup cette ligne de console.log sans  fonction, n'apparaitra'ra pas")
  
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

 // A REMETTRE Peut etre PLUS TARD EN BAS DANS LE BOUTON
 //  LEs évènements pour le bouton d'envoi commande client

  form.addEventListener("submit", function (e) {
   // e.preventDefault();
   console.log('ca paniasse');
  
    // ---------------- SECTION PRENOM --------------------------------------------------------
  
   // ---------------  VALIDATION PRENOM ----------------------
    let prenomValue = prenom.value;
    console.log(typeof(prenomValue), "'" + prenomValue + "'")
    if (prenomValue === null || prenomValue === undefined) {
    console.log("le prenom est vide . Veuillez remplir son champ")
    alert("le prenom est vide . Veuillez le remplir")
    } else {
     console.log("else, prenom pas NULL et ou UNDEFINED", typeof(prenomValue))

// --------------- Etape De Validation prenom -----------------------------------------
              let regexPrenom = /^[A-Za-z][a-z]+(-[a-zA-Z]+){0,2}$/;
              let controlPrenom = regexPrenom.test(prenomValue)
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
    if (nomValue === null || nomValue === undefined) {
    console.log("le nom est vide . Veuillez remplir son champ")
    alert("le nom est vide Veuillez remplir son champ NOM")
    } else {
    console.log("else, nom pas NULL et ou UNDEFINED", typeof(nomValue))

    // Etape De validation Nom ---------
    let regexNom = /^[A-Za-z]+(-[a-zA-Z]+){0,3}$/
    let controlNom = regexNom.test(nomValue)
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
    if (adresseValue === null || adresseValue === undefined) {
  console.log("l'adresse est vide . Veuillez remplir son champ")

    } else {
  console.log("else, ADRESSE pas NULL et ou UNDEFINED", typeof(adresseValue))

  //  ETAPE DE Validation adresse ---------
  let regexAdresse = /(^[0-9]{2,3}[\,\s])?([0-9a-zA-Z])?[a-zA-Z0-9\s\-\_]+([\,\s])?(\s)+?([A-Za-z])?[a-zA-Z0-9]+(((\s)?[\-]{1,2}(\s)?([A-Za-z])[a-zA-Z0-9]+){2,5})?(([\ ])?([\-\_\ ])?([\ ])?)?[0-9]{2,5}/gm;;
  let controlAdresse = regexAdresse.test(adresseValue)
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
   if (villeValue === null || villeValue === undefined) {
  console.log("la ville est vide . Veuillez remplir son champ")
   } else {
  console.log("else, VILLE pas NULL et ou UNDEFINED", typeof(villeValue))

  // ETAPE DE VALIDATION Ville
  let regexVille = /[[A-Z][a-z]+([\_\-\ ]?[a-zA-Z]+){2,7}/g;
  let controlVille = regexVille.test(villeValue)
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
   if (emailValue === null || emailValue === undefined) {
  console.log("le champ email est vide . Veuillez le remplir")
   } else {
  console.log("else, email pas NULL et ou UNDEFINED", typeof(emailValue))

   // Etape De validation d'EMAIL
  let regexEmail = /^[a-zA-Z0-9][a-zA-Z0-9\.\-\_]+[@][a-z\.\-\_]+[\.][a-z]{2,4}$/g;
  let controlEmail = regexEmail.test(emailValue)
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
//    console.log('Verdict conditions, tout est bon')
  

    } else if (prenomValue == undefined && nomValue == undefined && adresseValue == undefined && villeValue == undefined && emailValue == undefined) {
    console.log("Verdict conditions, un truc est undefined")
     // e.preventDefault(); 
  

    } else if (prenomValue === false || nomValue === false || adresseValue === false || villeValue === false || emailValue === false) {
  console.log("Verdict conditions, un truc est false")
  // normalement je ne devrais pas mettre le formulaire ici, 
 // mais ca donne une idée de principe de fonctionnement
  e.preventDefault(); 
  
    } else  {
      console.log('Autre VAlidation verdict  .... contact pas bon',"prenomValue =",
      typeof(prenomValue), "nomValue", typeof(nomValue), "adresseValue", typeof(adresseValue), "villeValue", typeof(villeValue), "emailValue", typeof(emailValue) )
      // e.preventDefault(); 

  // Ici normalement il n'ya pas l'appel  leContact. MAis c'est pour le faire marcher en attendant de resoudre l'erreur
  
    
      // localStorage.setItem("contact", JSON.stringify(contact))
      // localStorage.setItem("produits", JSON.stringify(produits))
      console.log("contact et produits ", contact, produits)
    

      // Grand Fetch2
      // fetch('http://localhost:3000/api/products/order', { 
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify({
      //     body: userFormToSend
      //   })
      // });

  //     responsePost.then(async(reponse) => {
  // try {
  //   console.log(reponse);
  // } 
  // catch(e) {
  //   console.log(e)
  // }
  //     })
  //     return responsePost.json();
    }

  });
}

