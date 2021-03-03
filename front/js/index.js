

const getInformations = fetch('http://localhost:3000/api/teddies')
   .then((response) => {
      const data = response.json();
      console.log(data);
      data.then((infos) =>{
         infos.forEach(info => {
            let template = document.querySelector("#produits__product");
            let clone = document.importNode(template.content, true);
   
            clone.getElementById("img").src = info.imageUrl;
            clone.getElementById("name").textContent = info.name;
            clone.getElementById("price").textContent = (info.price/100) + '€';
            const link = clone.querySelector('a')
            link.setAttribute('href', 'fiche.html?id=' + info._id)

            document.getElementById("produits").appendChild(clone)
         });
      })
})

