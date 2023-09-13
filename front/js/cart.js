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

    console.log(totalPanier)
    totalPanier.push(parseInt(dataPanier.price));
    console.log(totalPanier)
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
          // for (let numLoc = 0; numLoc < majcart.length; numLoc++) {
          //   const majcartPointNumLoc = majcart[numLoc];
          //   console.log(majcartPointNumLoc)
          //   console.log(majcartPointNumLoc.quantity)
          //   // return marche
          //   return majcartPointNumLoc.quantity
          // } 
          
          // if (panelPersoChoix._id === majcartPointNumLoc.quantity) {
          //   console.log("return marche et majcartaussi")
          // } else {console.log("y aun truc")}

           if (quanteModifiableProductInput !== panelPersoChoix.quantity) {
             // localStorage.setItem("panier", JSON.stringify('panier'))
             // qtyTotal();
            console.log("input inegal");
            console.log(panelPersoChoix._id, panelPersoChoix.name + " = " + dataPanier.name);
            // if (panelPersoChoix._id === ) {}
            panelPersoChoix.quantity = quanteModifiableProductInput;
            // console.log(panelPersoChoix._id, panelPersoChoix.name)
// ========================================================================================================================
        //     let caseTotalPrice = document.querySelector("#totalPrice");
        //     caseTotalPrice = " ";
        //     console.log("case a ceci =", "' " + caseTotalPrice + "' ");
        //     // localStorage.getItem(JSON.parse('panier'))
        //     const changeQuantity = parseInt(panelPersoChoix.quantity);
        //     const baliseChangePrix = laDescriptonContenuCartItem.querySelector("p:last-child");
        //     const prixDsBalisePrix = parseInt(baliseChangePrix.textContent);
        //     const onChangeSectionTotal = changeQuantity * prixDsBalisePrix;
        //     console.log(baliseChangePrix);
        //     console.log(onChangeSectionTotal);
        //     console.log(totalPanier);
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
          location.reload(true);
        });
        
      });
      //  On dirait que je pourrai faire mes calculs ici a voir au plus vite
      console.log(totalPanier)
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
      const ledatapanier = JSON.parse(localStorage.getItem("dataPanier"))
    }
    qtyTotal();
    console.log(totalPanier)
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
    
    console.log(totalPanier, "contre", tableauPrixFinal)
    // Ici ca prend les vlue et prixElement
    for (let prod = 0; prod < totalPanier.length; prod++) {
      const prixCatProdt = totalPanier[prod];
     console.log(prixCatProdt)
      console.log(totalPanier, "contre", tableauPrixFinal)

      const finalPrice = prixCatProdt * vlueQtenumerisee;
      console.log("Qte",vlueQtenumerisee, "prix", prixCatProdt, " = final", finalPrice);
      console.log("totalPanier", totalPanier, "tableauPrixFinal", tableauPrixFinal);
      tableauPrixFinal.push(finalPrice);
      console.log(finalPrice);
      console.log(tableauPrixFinal);
    }
    console.log(totalPanier, "contre", tableauPrixFinal)
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

    const form = document.querySelector("#order");
    
    const prenom = document.querySelector("#firstName").value;
    prenom;
    const prenomError = document.getElementById("firstNameErrorMsg");

    const nom = document.querySelector("#lastName").value;
    nom;
    const nomError = document.getElementById("lastNameErrorMsg");

    const adresse = document.querySelector("#address").value;
    const addresseError = document.getElementById("addressErrorMsg");

    const ville = document.querySelector("#city").value;
    ville;
    const villeError = document.querySelector("#city") 
    
    const email = document.querySelector("#email").value;
    email;
    const emailError = document.querySelector("#email")

    // const prenomEcout = document.querySelector("#firstName")
    // prenomEcout.addEventListener ( 'change', function(e){
    //   const onEcout = e.target.value
    //   console.log(onEcout)
    // })

    // A REMETTRE PLUS TARD EN BAS DANS LE BOUTON

    // a REMETTRE PLUS TARD L0 JUSTE EN BAS DANS LE BOUTON

    function boutonPanierComander() {
      const commanderBtn = document.querySelector("#order");
      commanderBtn.addEventListener("click", function (e) {
        // console.log('ca paniasse');
        e.preventDefault;

        // valeurs du formulaire qui seront sauvegardés dans localstorage key contact
        const contact = {
          prenom: document.querySelector("#firstName"),
          nom: document.querySelector("#lastName"),
          addresse: document.querySelector("#address"),
          ville: document.querySelector("#city"),
          email: document.querySelector("#email"),          
        };

        let prenomValue = document.querySelector("#firstName").value;
        let nomValue = document.querySelector("#lastName").value;
        let addresseValue = document.querySelector("#address").value;
        let villeValue = document.querySelector("#city").value;
        let emailValue = document.querySelector("#email").value;

        console.log("aV", addresseValue)
        console.log("vV", villeValue)
        console.log("eV", emailValue)
        // C 'est  ici qu on remmetrtrra les infos formulaires
        // ----------------------------------------------------------       

        // localStorage.setItem("contact", JSON.stringify(contact))

      // là je vais tester les funstions pour les input regex ------------------------------------------------------
     
      // PRENOM
      const regexPrenomValue = /^[A-Za-z][a-z]+(-[a-zA-Z]+){0,2}$/;
      // regexPrenomValue.test(prenomValue)
      console.log(regexPrenomValue.test(prenomValue))
      if (regexPrenomValue.test(prenomValue)) {
        return prenomValue;
      } else {
        prenomError.textContent = "Vérifiez le prénom vous avez sûrement mis des chiffres ou symboles. ";
      };

      // NOM
      const regexNomValue = /^[A-Za-z]+(-[a-zA-Z]+){0,3}$/;
      console.log(regexNomValue.test(nomValue));
      if (regexNomValue.test(nomValue)) {
        if (nomError.textContent !== null) {
          nomError.textContent = ""
          console.log(nomError.textContent)
        } else {
          console.log('nomerror est dejà vide donc ce <p> ne se fera pas' )
        }
        return nomValue;
      } else {
        nomError.textContent = "Vérifiez le nom vous avez sûrement mis des chiffres ou symboles. ";
      };


    //  Exemplaire de Regex en forme FUNCTION  
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
        // verifNom();

        // Je créé une fonction la partie du form qui n'acceptera pas de chiffres
        function addresseFrValide(addresseValue) {
          console.log("addresse", "+", addresseValue)
          const regexAddresseValue = /(^[0-9]{2,3}[\,\s])?([0-9a-zA-Z])?[a-zA-Z0-9\s\-\_]+([\,\s])?(\s)+?([A-Za-z])?[a-zA-Z0-9]+(((\s)?[\-]{1,2}(\s)?([A-Za-z])[a-zA-Z0-9]+){2,5})?(([\ ])?([\-\_\ ])?([\ ])?)?[0-9]{2,5}/gm;
          console.log(regexAddresseValue.test(addresseValue));
          if (regexAddresseValue.test(addresseValue)) {
            return addresseValue;
          } else {
            addresseError.textContent = "Vérifiez que votre adresse est bien écrite au format d'addresses francaises"
          }
        }
        addresseFrValide();

        function addresseFrValide(addresseValue) {
          console.log("addresse", "+", addresseValue)
          const regexAddresseValue = /(^[0-9]{2,3}[\,\s])?([0-9a-zA-Z])?[a-zA-Z0-9\s\-\_]+([\,\s])?(\s)+?([A-Za-z])?[a-zA-Z0-9]+(((\s)?[\-]{1,2}(\s)?([A-Za-z])[a-zA-Z0-9]+){2,5})?(([\ ])?([\-\_\ ])?([\ ])?)?[0-9]{2,5}/gm;
          console.log(regexAddresseValue.test(addresseValue));
          if (regexAddresseValue.test(addresseValue)) {
            return addresseValue;
          } else {
            addresseError.textContent = "Vérifiez que votre adresse est bien écrite au format d'addresses francaises"
          }
        }
        addresseFrValide();

        function villeValide (villeValue) {
          console.log("ville + ",villeValue )
          const regexVilleValue = /^[A-Z][a-z]+(([\-\ ])(([A-Z])?[a-z]+))+/g
          console.log(regexVilleValue.test(villeValue))
          if (regexEmailValue.test(villeValue)) {
            return villeValue;
          } else {
            villeError.textContent = "Vérifiez que votre ou vos noms de la ville débutent par une majuscule"
          }
        }

        function aLeMail(emailValue) {
          console.log("email", "+", emailValue)
          const regexEmailValue = /^[a-zA-Z0-9][a-zA-Z0-9]+[A-Za-z0-9]+(([\ \-\_])?([\-\_\.])?([\ \-\_])?)?([A-Za-z0-9])?[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{2,3}/g;
          console.log(regexEmailValue.test(emailValue));
          if (regexEmailValue.test(emailValue)) {
            return emailValue;
          } else {
            emailError.textContent = "Vérifiez que votre email est bien écrite au format email"
          }
        }
        aLeMail();

        // exemplaire en function des logiques regex 

        function aLeMail(emailValue) {
          console.log("email", "+", emailValue)
          const regexEmailValue = /^[a-zA-Z0-9][a-zA-Z0-9]+[A-Za-z0-9]+(([\ \-\_])?([\-\_\.])?([\ \-\_])?)?([A-Za-z0-9])?[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{2,3}/g;
          console.log(regexEmailValue.test(emailValue));
          if (regexEmailValue.test(emailValue)) {
            return emailValue;
          } else {
            emailError.textContent = "Vérifiez que votre email est bien écrite au format email"
          }
        }
        aLeMail();
        
        function aSymbole(value) {
          return /[^a-zA-Z0-9_]/g.test(value);
        }
        aSymbole();

        const prenomValide = regexPrenomValue.test(prenomValue);
        const nomValide = regexNomValue.test(nomValue);
        const adresseValide = regexAddresseValue.test(addresseValue);
        const lavilleValide = regexVilleValue.test(villeValue);
        const emailValide =      regexEmailValue.test(emailValue)  ;   
        const formValide = {
          prenomValide,
          nomValide,
          adresseValide,
          lavilleValide,
          emailValide,      
        }
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
      });
    }
    boutonPanierComander();
