
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);

//appel api recup détail d'un produit

const getInformations = fetch('http://localhost:3000/api/teddies/'+ id)
   .then((response) => {
      const data = response.json();
      console.log(data);
      data.then((infos) =>{
         
         //Création du template HTML
         let template = document.querySelector("#fiche__template");
         let clone = document.importNode(template.content, true);

         let name = infos.name;
         let image = infos.imageUrl;
         let description = infos.description;
         let price = infos.price;

         clone.getElementById("img").src = image;
         clone.getElementById("description").innerHTML = description;
         clone.getElementById("name").innerHTML = name;
         clone.getElementById("price").innerHTML = (price/100) + '€';

         document.getElementById("fiche").appendChild(clone)
         
         //Selection de la couleur du produits
         let colors = (infos.colors);
         console.log(colors)
         let select = document.querySelector('#color-select')

         colors.forEach(color => {
            let option = document.createElement('option')
            option.value = color
            option.innerHTML = color
            select.appendChild(option)
         });

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





         //Ajouter l'article au panier => dans le local storage

         const infoPanier = {
            identifiant: id,
            quantite:1,
            image: image,
            description: description,
            price: price,
            name: name,

         }

         document.getElementById("panier").addEventListener('click', (e) => {
            e.preventDefault();
            
            localStorage.setItem('codeArticle', JSON.stringify(infoPanier))
         })
         
})});



