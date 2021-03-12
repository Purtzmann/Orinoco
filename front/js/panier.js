

   
   console.log(JSON.parse(localStorage.getItem('produit'[0])))
   
   const objets = JSON.parse(localStorage.getItem('produit'));
   console.log(objets)

   

   let image = objets.image;
   let id = objets.identifiant;
   let price = objets.price;
   let quantite = objets.quantité;
   let name = objets.name;

   let template = document.querySelector("#panier__template");
   let clone = document.importNode(template.content, true);

   clone.getElementById("img").src = image;
   clone.getElementById("name").textContent = name;
   clone.getElementById("price").textContent = (price/100) + '€';

   document.getElementById("panier").appendChild(clone)
      
//Augmentation du nombre de produits

   document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
   let valueCount

   document.querySelector(".plus-btn").addEventListener("click", function(){
   valueCount = document.getElementById("quantity").value;
   valueCount++;
   document.getElementById("quantity").value = valueCount
   if(valueCount > 1)
      document.querySelector(".minus-btn").removeAttribute("disabled")
   if(valueCount == 10)
      document.querySelector(".plus-btn").setAttribute("disabled", "disabled")
})

   document.querySelector(".minus-btn").addEventListener("click", function(){
   valueCount = document.getElementById("quantity").value;
   valueCount--;
   document.getElementById("quantity").value = valueCount

   if(valueCount == 1)
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
   if(valueCount < 10)
      document.querySelector(".plus-btn").removeAttribute("disabled")
})


//stockage données formulaire
// localStorage.setItem("firstName", document.querySelector('#prenom').value)
// console.log(document.querySelector('#prenom').value)
function formulaire() {
   localStorage.setItem("lastName", document.querySelector('#nom').value)
   localStorage.setItem("adresse", document.querySelector('#adresse').value)
   localStorage.setItem("city", document.querySelector('#ville').value)
   localStorage.setItem("email", document.querySelector('#email').value)   
}

function idPanier() {
   localStorage.setItem("product_id", )
}

const btnFormulaire = document.querySelector("#validationFormulaire");
console.log(btnFormulaire)

btnFormulaire.addEventListener('click', () => {
   //récupérer les données du formulaire
   formulaire()
   //récupérer les données id du paniers
   idPanier()
})









         
         

//Envoi des informations à l'API 

//Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
//firstName, lastName, address, city et email. Le tableau des produits envoyé au
//backend doit être un array de strings product_id. Les types de ces champs et leur
//présence doivent être validés avant l’envoi des données au serveur.

//firstName: "francis",
//lastName:"Martin",
//adresse:"",
//city:"",
//email:"",
//var obj = {prop: [element0, element1, ...., elementN]}

