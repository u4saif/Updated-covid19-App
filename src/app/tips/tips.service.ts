export class News{

  getnews(){
    var newsObj=[];
      console.log(newsObj);
    var newsApi="https://newsapi.org/v2/top-headlines?country=in&apiKey=37bed5bdd29e4849958cf5a0a89a9bd2"

    fetch(newsApi)
    .then(function(response){
      let data=response.json();
      return data;
    })
    .then(function(data){
            for(let i=0; i<16;i++){
                          newsObj.push((data.articles[i]));

            }
            
    })
  return newsObj;
  }
}