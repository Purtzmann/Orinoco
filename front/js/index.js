
const main = document.getElementById("produits");
const getInformations = fetch('http://localhost:3000/api/teddies');
getInformations
   .then((response) => {
      const data = response.json();
      console.log(data);
      data.then((infos) =>{
         let image = infos[0].imageUrl
         let name = infos[0].name
         let price = infos[0].price

         let template = document.querySelector("#produits__product");
         let clone = document.importNode(template.content, true);

         clone.getElementById("img").src = image;
         clone.getElementById("name").textContent = name;
         clone.getElementById("price").textContent = (price/100) + '€';


         main.appendChild(clone)
      })
})

