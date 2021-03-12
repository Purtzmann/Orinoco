

const getInformations = fetch()
   .then((response) => {
      console.log(response)

      const data = response.json();
      console.log(data)

      data.then((infos) =>{
         console.log(infos)

         infos.forEach(info => {

            let name = info.name;
            let image = info.imageUrl;
            let description = info.description;
            let price = info.price;
            let amount = 1;
            let id = info._id;

            

            console.log(name)

            let template = document.querySelector("#produits__template");
            let clone = document.importNode(template.content, true);
   
            clone.getElementById("img").src = image;
            clone.getElementById("name").textContent = name;
            clone.getElementById("price").textContent = (price/100) + '€';
            const link = clone.querySelector('a')
            link.setAttribute('href', 'fiche.html?id=' + info._id)

            document.getElementById("produits").appendChild(clone)

            const infoPanier = {
               identifiant: id,
               quantité: amount,
               image: image,
               description: description,
               price: price,
               name: name,
            }
   
            document.getElementById("panier").addEventListener('click', (e) => {
               e.preventDefault();
               
               localStorage.setItem('codeArticle', JSON.stringify(infoPanier))
            })
         });
      })
})

/*let name = [];
            let image = [];
            let description = [];
            let price = [];
            let amount = [];
            let id = [];*/