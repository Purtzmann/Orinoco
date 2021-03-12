



//--------------------------------------------------------------------------------//
const localstorage = JSON.parse(localStorage.getItem('produit'));
console.log(localstorage)
console.log(localstorage[0].identifiant)

let idStorage = []
let priceStorage = []


for(let i=0; i<localstorage.length; i++){
   let idstorage = localstorage[i].identifiant;
   let pricestorage = localstorage[i].totalPrice;
   
   idStorage.push(idstorage)
   priceStorage.push(pricestorage)
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//----------------------------------------------------------------------------------//



//----------------------------------------------------------------------------------//
function infoFormulaire (){

   const contact = {
      firstname: document.querySelector('#prenom').value,
      lastName: document.querySelector('#nom').value,
      address: document.querySelector('#adresse').value,
      city: document.querySelector('#ville').value,
      email:  document.querySelector('#email').value,
   }

   localStorage.setItem("infoclient", JSON.stringify(contact))
}
const btnFormulaire = document.querySelector("#validationFormulaire");

btnFormulaire.addEventListener('click', (e) => {
   e.preventDefault()
   infoFormulaire()

})

//----------------------------------------------------------------------------------//
main()

async function main(){
   const infoPanier = await getInfoPanier()
   console.log(infoPanier)
   //console.log(infoPanier)
   for (i=0; i<infoPanier.length; i++){
      const info = infoPanier[i];
      console.log(info.identifiant)
      displayInfoPanier(info)
   }
}

function getInfoPanier(){
   return JSON.parse(localStorage.getItem('produit'));
}

function displayInfoPanier(info){
   let template = document.querySelector("#panier__template");
   let clone = document.importNode(template.content, true);

   clone.querySelector(".panier__img").src = info.image;
   clone.querySelector(".panier__titre").textContent = info.name;
   clone.querySelector(".produits__details--price").textContent = 'Prix unitaire ' +(info.price) + '€';
   clone.querySelector(".produits__details--Totalprice").textContent = 'Prix Total: ' +((info.price*info.quantite)) + '€';
   clone.querySelector(".nbr").value = info.quantite;
   clone.querySelector('.color').textContent = info.color;
   
   document.getElementById("panier").appendChild(clone)
   //-------------------------------------------------------------------------------//
   let totalPrice = document.querySelector('.recapCommande__prixTotal')
   totalPrice.innerHTML = priceStorage.reduce(reducer)  + '€'
   //-------------------------------------------------------------------------------//
   let totalCommande = document.querySelector('.recapCommande__nombreArticles')
   totalCommande.innerHTML = "Nombre d'articles dans le panier: " + priceStorage.length
   //-------------------------------------------------------------------------------//
   let idfichepanier = info.identifiant;
   console.log(idfichepanier)
   //-------------------------------------------------------------------------------//
   let btnsuppr = document.querySelectorAll('.btn__suppr');
   console.log(btnsuppr)

   btnsuppr.addEventListener('click', (e) => {
      e.preventDefault()
      annulerArticle(i)
   })
   

} 









