// Créer un objet à ajouter au localStorage

const objet = {
 nom: "Mon objet",
 couleur: "rouge",
 taille: "moyenne"

};


// Convertir l'objet en chaîne JSON

const objetEnJson = JSON.stringify(objet);


// Ajouter l'objet au localStorage

localStorage.setItem("monObjet", objetEnJson);


// Récupérer l'objet depuis le localStorage

const objetRecupereEnJson = localStorage.getItem("monObjet");


// Convertir la chaîne JSON en objet

const objetRecupere = JSON.parse(objetRecupereEnJson);


// Modifier la couleur de l'objet récupéré

objetRecupere.couleur = "vert";


// Convertir l'objet modifié en chaîne JSON

const objetModifieEnJson = JSON.stringify(objetRecupere);


// Mettre à jour l'objet dans le localStorage

localStorage.setItem("monObjet", objetModifieEnJson);

