const info = window.location.search;
console.log(info)
const urlConfirmParam = new URLSearchParams(info);
console.log("id de l'order dans l'url", urlConfirmParam);

const orderIdparams = urlConfirmParam.get("orderId");
console.log(orderIdparams);

const caseNumeroCommande = document.getElementById("orderId");
console.log(caseNumeroCommande)

caseNumeroCommande.innerHTML = orderIdparams
console.log(caseNumeroCommande.textContent)