
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
         let template = document.querySelector("#fiche");
         let clone = document.importNode(template.content, true);

         let name = infos.name;
         let image = infos.imageUrl;
         let description = infos.description;
         let price = infos.price;

         clone.getElementById("img").src = image;
         clone.getElementById("description").innerHTML = description;
         clone.getElementById("name").innerHTML = name;
         clone.getElementById("price").innerHTML = (price/100) + '€';

         document.getElementById("main").appendChild(clone)
         
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
         
         let nombre = document.querySelector('#fiche__nombre')

         let less = document.createElement('input')
         less.type ="button";
         less.value = "-";
         less.onclick = decNumber;
         less.className = "btn";

         let more = document.createElement('input')
         more.type ="button";
         more.value = "+";
         more.onclick = incNumber;
         more.className = "btn";

         let nb = document.createElement('p')
         nb.className = "nbr";
         nb.id = "display";
         nb.innerHTML ="1";

         let amount = 1;
         function incNumber() {
            if (amount >= 1) {
               amount++;
            } else if (amount = 10) {
               amount = amount;
            }  
         document.getElementById("display").innerHTML = amount; }
         function decNumber() {
            if (amount > 1) {
                  --amount;
            } else if (iamount = 1) {
               amount = amount;
            }
         document.getElementById("display").innerHTML = amount;}
         

         nombre.appendChild(less)
         nombre.appendChild(nb)
         nombre.appendChild(more)

         //Ajouter l'article au panier => dans le local storage

         const infoPanier = {
            identifiant: id,
            quantité: amount,

         }

         document.getElementById("panier").addEventListener('click', (e) => {
            e.preventDefault();
            
            localStorage.setItem('codeArticle', JSON.stringify(infoPanier))
         })
         
})});



