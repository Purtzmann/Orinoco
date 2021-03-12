const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);

main()

async function main(){
   const product = await getProduct()
   displayProduct(product)
   choiceColor(product)
   choiceNbr(product)
   addBasket(product)

}

//--------------------------------------Récuperation de la donnée API--------------------------------------//
function getProduct(){
   return fetch('http://localhost:3000/api/teddies/'+ id)
   .then(function(response){
      return response.json()
   })
   .then(function(produit){
      return produit
   })
   .catch(function(error){
      error
   })
}

//--------------------------------------Affichage du template HTML----------------------------------------//

function displayProduct(product){

   const templateElt = document.querySelector("#fiche__template")
   const clone = document.importNode(templateElt.content, true)

   clone.getElementById("img").src = product.imageUrl;
   clone.getElementById("description").textContent = product.description;
   clone.getElementById("name").innerHTML = product.name;
   clone.getElementById("price").innerHTML = 'Prix: '+(product.price/100) + '€';

   document.querySelector("#fiche").appendChild(clone)
}

//----------------------------------Selection de la couleur du produits--------------------------------------//
function choiceColor(product){
   

   let choiceColor = document.querySelector('#color-select')
   let colors = (product.colors);
   console.log(colors)
   

   colors.forEach(color => {
      let option = document.createElement('option')
      option.value = color
      option.innerHTML = color
      choiceColor.appendChild(option)
   });
}

//-----------------------------------------Choix du nombre de produits------------------------------------//
function choiceNbr(){
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
}

//-------------------------------------------button ajouter au panier----------------------------------------//
function addBasket(product){
   //selection du boutton ajouter au panier 
   const buttonAddBasket = document.querySelector('#panier')
   console.log(buttonAddBasket)

      //ecouter le bouton
   buttonAddBasket.addEventListener('click', (e) => {
   e.preventDefault();
      //selection du formulaire des couleurs
      const optionColor = document.querySelector('#color-select')
      //selection de la couleur choisie
      const choiceColorProduct = optionColor.value
      //recuperer les infos du produits
      let infoProduit = {
         identifiant: id,
         quantite: document.querySelector('.nbr').value,
         image: product.imageUrl,
         description: product.description,
         price: product.price/100,
         name: product.name,
         color: choiceColorProduct,
         totalPrice: ((product.price)*(document.querySelector('.nbr').value))/100,
      }
   
      //----------------------------------stocker les données pour save localstorage-----------------------------//

      let productLocalStorage = JSON.parse(localStorage.getItem("produit"));
      //console.log(productLocalStorage)

      
      
      if (productLocalStorage === null ||productLocalStorage.length === 0){
         productLocalStorage =[];
         productLocalStorage.push(infoProduit)
         localStorage.setItem("produit", JSON.stringify(productLocalStorage))

      }else if(productLocalStorage != null || productLocalStorage > 0){
         productLocalStorage.push(infoProduit)
         localStorage.setItem("produit", JSON.stringify(productLocalStorage))

      }else if(productLocalStorage != null || productLocalStorage > 0 && productLocalStorage.includes(JSON.stringify(id))){
         console.log('same id')
      }
      
      
      //console.log(productLocalStorage[4].identifiant)

      

      productLocalStorage.forEach(element => {
         console.log(element)
         for (let elt in element){
            console.log(element[elt].identifiant)
         }
      });
      //ATTENTION LE PROBLEME EST QUE PRODUCT EST EN STRING ET NON OBJET

   



   }) 
}










