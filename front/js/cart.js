// nouvelle cart.js et puis ancien formulaire tout bien
// recup des infos produits ici c'est l'id
const info = window.location.search;
const urlParams = new URLSearchParams(info);
const paramIdDePage = urlParams.get("id");

const cartPanierGet = JSON.parse(localStorage.getItem("panier"));
console.log(cartPanierGet)

const carteArticle = document.querySelector(".cart > #cart__items");
totalPanier = [];
let totalPrixRow = [];
onChangeTableauPrix = [];

const fetchEtVisualSection = async () => {
  console.log("avantPendant")

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

    console.log(totalPanier);
    totalPanier.push(parseInt(dataPanier.price));
    console.log(totalPanier);

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
    // function ensembleTotalPrix() {

  //  ----------------  Ici demarche pour trouver  tous les ptotaux de chaque section de produit -------------------

    // stockage de prix unitaire  et aussi de la quantité du même produit, tous en format nombre 
      const PrixU = parseInt(dataPanier.price)
      const valueParseQty = parseInt(resultatValeurQuantite.value)

      // ci dessous, Formule du total prix par categorie de canapés
      const valueSectionTotaltPrixRow = PrixU * valueParseQty
      console.log("prixU",PrixU ,"valuParseQty", valueParseQty)
      console.log("valueSectionTotalRow", valueSectionTotaltPrixRow)
      
      totalPrixRow.push(valueSectionTotaltPrixRow)
    console.log(totalPrixRow)

    let montantCommnd = 0;
    for (let produitCanape = 0; produitCanape < totalPrixRow.length; produitCanape++) {
      const prixDuProduit = totalPrixRow[produitCanape]
      console.log(totalPrixRow)
      montantCommnd = montantCommnd + totalPrixRow[produitCanape]
    }
    console.log(montantCommnd)    
    const caseTotalPrice = document.querySelector("#totalPrice");
    caseTotalPrice.innerHTML = montantCommnd;    
  // } 
  // ensembleTotalPrix();

    const modifQuantite = () => {
      const allArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const unArticleQuantiteInput = document.querySelectorAll(".itemQuantity");
      const majcart = [...cartPanierGet];
      // console.log(majcart);
      // console.log(produitPanier);

      unArticleQuantiteInput.forEach((input, index) => {
        input.addEventListener("change", function (e) {
          console.log(majcart);
          
          const quanteModifiableProductInput = e.target.value;
          console.log(quanteModifiableProductInput);
          const panelPersoChoix = majcart[index];
          console.log("panelPersoChoix", panelPersoChoix);
          const toutPanLocal = majcart;
          
          console.log("Choixquantity =", panelPersoChoix.quantity, quanteModifiableProductInput);
       // Ci dessous valeur qté dans l'input devient ou reste égal a la qté equivalente de son produit dans le local storage
          quanteModifiableProductInput === panelPersoChoix.quantity;
          console.log("Choixquantity =", panelPersoChoix.quantity, quanteModifiableProductInput);          
          localStorage.setItem("panier", JSON.stringify(majcart))

          console.log(onChangeTableauPrix)
          let ifChangeQty = [];
          ifChangeQty = majcart
          console.log(ifChangeQty);
          console.log(dataPanier);

          if (quanteModifiableProductInput !== panelPersoChoix.quantity && dataPanier._id === panelPersoChoix._id) {
          console.log("input inegal");
          console.log(panelPersoChoix._id, panelPersoChoix.name + " = " + dataPanier.name);

          panelPersoChoix.quantity = quanteModifiableProductInput;
          console.log(panelPersoChoix.quantity + " = " + quanteModifiableProductInput);
          console.log("maintenant égal")

          localStorage.setItem("panier", JSON.stringify(majcart))

          // ========================================================================================================================

          let caseTotalPrice = document.querySelector("#totalPrice");
          // caseTotalPrice = " ";
          console.log("case a ceci =", "' " + " mettre la variable du vrai prix total" + "' ");

          qtyTotal();

       console.log("chargelocale");

      console.log(totalPrixRow)
       
       const onChangePrixPiece = parseInt(dataPanier.price)
       const onChangeValueParsedQty = parseInt(resultatValeurQuantite.value)
       const onChangeSectionTotaltPrix = onChangePrixPiece * onChangeValueParsedQty

       console.log("onChangePrixPiece" ,onChangePrixPiece,"onChangeValueParsedQty", onChangeValueParsedQty)
       console.log("onChangeSectionTotaltPrix", onChangeSectionTotaltPrix)

       console.log("lastNewTotal", onChangeSectionTotaltPrix)
       console.log(totalPrixRow)
       totalPrixRow.pop();
       totalPrixRow.push(onChangeSectionTotaltPrix)
       console.log("lastNewTotal mis", onChangeSectionTotaltPrix)
       console.log(totalPrixRow)

       let changeMontantByLastProd = 0;
       console.log("debutchangemontant", changeMontantByLastProd)
       for (let changeSurProduit = 0; changeSurProduit < totalPrixRow.length; changeSurProduit++) {
        const totalLastProduit = totalPrixRow[changeSurProduit]
        console.log(totalPrixRow)
        changeMontantByLastProd = changeMontantByLastProd + totalPrixRow[changeSurProduit]

       console.log(changeMontantByLastProd)    
       const caseTotalPrice = document.querySelector("#totalPrice");
       caseTotalPrice.innerHTML = changeMontantByLastProd; 
       
      }




      //  let montantCommnd = 0;
      //  for (let produitCanape = 0; produitCanape < totalPrixRow.length; produitCanape++) {
      //    const prixDuProduit = totalPrixRow[produitCanape]
      //    console.log(totalPrixRow)
      //    montantCommnd = montantCommnd + totalPrixRow[produitCanape]
      //  }
      //  console.log(montantCommnd)    
      //  const caseTotalPrice = document.querySelector("#totalPrice");
      //  caseTotalPrice.innerHTML = montantCommnd; 



       console.log(totalPrixRow)


     let changedPrixtotal = 0;
     
     for (let p = 0; p < majcart.length; p++); {
       
      console.log(majcart)

    }
    
  }
  else if (quanteModifiableProductInput === panelPersoChoix.quantity && localStorage.getItem("panier")) {
    
  }
  // location.reload(true);  
        });

      });

    };
    // Et j'appele en bas la fonction de modification de la quantite.
    modifQuantite();
  }
  // tous les éléments de l'user a envoyer au serveur

console.log("dernierle ligne de fetch et aussi où console marche");
};

// // function des infos de contact qui va être donné lors du submit, juste là il est submit apparemment malgré un ptoentiel problème non décrit
  const contact = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    email: document.querySelector("#email").value,
  };
//   // Sauvegarde localStorage ci dessous juste avant declaration fetch

  // const userFormToSend = { cartPanierGet, contact };
  // console.log("userFormToSend", userFormToSend);

// // Affichage de toutes les procedures incluses quand on appele le fetch
fetchEtVisualSection();
console.log("hey")
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

 // --------------------------------------------------- A démuter ci dessous plus tard: valeurs du formulaire qui seront sauvegardés dans localstorage key contact

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
  
  // [{"_id":"8906dfda133f4c20a9d0e34f18adcf06","name":"Kanap Eurydomé","description":"Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.","colors":"Grey","quantity":1},{"_id":"77711f0e466b4ddf953f677d30b0efc9","name":"Kanap Hélicé","description":"Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.","colors":"Grey","quantity":1}]  //  fetch('https://jsonplaceholder.typicode.com/users')
    //  fetch('https://jsonplaceholder.typicode.com/users')

  fetch(': http://localhost:3000/api/products/order', { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(cartPanierGet)
});

console.log(typeof(userFormToSend))

// responsePost.then(async(reponse) => {
//   try {
//     console.log(reponse);
//   } catch (e) {
//     console.log(e)
//   }
// })

//  return apiResult.json();

}

});

console.log('eghyuiop')