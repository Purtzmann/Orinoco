main ()

async function main() {
   const articles = await getArticles()
  
   for (i=0; i<articles.length; i++){
      const article = articles[i];
      displayArticles(article)
   }
}

function getArticles(){
   return fetch ('http://localhost:3000/api/teddies')
      .then(function(response){
         return response.json()
      })
      .then(function(articles){
         return articles
      })
      .catch(function(error){
         alert(error)
      })
}


function displayArticles(article){
   const templateElt = document.getElementById("produits__template")
   const clone = document.importNode(templateElt.content, true)

   //clone.getElementById("img").src = article.imageUrl;
   clone.getElementById("name").textContent = article.name;
   clone.getElementById("price").textContent = article.price;

   const link = clone.querySelector('a')
   link.setAttribute('href', 'fiche.html?id=' + article._id)

   document.getElementById("produits").appendChild(clone)
}

