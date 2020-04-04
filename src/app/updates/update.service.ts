 export class UpdateAPI{
  

  getUpdate(){
  let api='https://api.covid19india.org/data.json';
  var updateObj={
    active:1,
    confirmed:1,
     deaths:1,
   

    lastupdatedtime: "04/04/2020 14:27:24",
    recovered:1

  };
  fetch(api)
        .then(function(response){
            let data=response.json();
            return data;
        }).then(function(data){
            updateObj.confirmed=data.statewise[0].confirmed;
            updateObj.active=data.statewise[0].active;
            updateObj.recovered=data.statewise[0].recovered;
            updateObj.deaths=data.statewise[0].deaths;
            updateObj.lastupdatedtime=data.statewise[0].lastupdatedtime;
        })
        
   return updateObj; 

  }  
  
}