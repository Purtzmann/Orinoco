//-----PANIER----------//

//Panier de l'utilisateur
let panier = JSON.parse(localStorage.getItem("produit"));

//Affichage du nombre d'article dans le panier
function nombreIndexPanier() {
  let indexPanier = document.getElementById("indexPanier");
  indexPanier.textContent = panier.length;
}

function nombreProduitPanier() {
  let produitPanier = document.getElementById("produitPanier");
  produitPanier.textContent = panier.length;
}

//Vérification et initialisation du panier

if (localStorage.getItem("produit")) {
  console.log(panier);
} else {
  console.log("Le panier va être initalisé");
  let panierInit = [];
  localStorage.setItem("produit", JSON.stringify(panierInit));
}

//------Page Panier-------//

function panierCreation () {
  if (panier.length > 0) {
    
      //Boucle FOR pour affichage des articles dans le panier
     
   for (let i = 0; i<panier.length; i++) {
    
      let template = document.querySelector("#panier__template");
      let clone = document.importNode(template.content, true);

      clone.querySelector(".panier__img").src = panier[i].image;
      clone.querySelector(".panier__titre").textContent = panier[i].name;
      clone.querySelector(".produits__details--price").textContent = 'Prix unitaire ' +(panier[i].price) + '€';
      clone.querySelector(".produits__details--Totalprice").textContent = 'Prix Total: ' +((panier[i].price*panier[i].quantite)) + '€';
      clone.querySelector(".nbr").value = panier[i].quantite;
      clone.querySelector('.color').textContent = panier[i].color;

      document.getElementById("panier").appendChild(clone)
      
   };


   let btnsuppr = document.querySelectorAll('.btn__suppr');
   console.log(btnsuppr)

   for (let f = 0; f<btnsuppr.length; f++) {
      let test = btnsuppr[f]
      console.log(test)

      btnsuppr[f].addEventListener('click', (e) => {
         e.preventDefault()

         let idSelect = panier[f].identifiant
         console.log(idSelect)

         panier = panier.filter(el => el.identifiant !== idSelect);

         localStorage.setItem("produit", JSON.stringify(panier));
         window.location.reload();
        
      })
   }






  }
  
};



panierCreation ()

function annulerArticle(i){
 panier.splice(i, 1);
  localStorage.clear();
  // Mise à jour du nouveau panier avec suppression de l'article
  localStorage.setItem("produit", JSON.stringify(panier));
  //Mise à jour de la page pour affichage de la suppression au client
  window.location.reload();
};  


