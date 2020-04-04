export class StateUpdateAPI{
  

  getStateUpdate(){
  let api='https://api.covid19india.org/data.json';
  var stateObj=[
  ];
  
  fetch(api)
        .then(function(response){
            let data=response.json();
            return data;
        }).then(function(data){
          
           
         for(let i=1; i<37;i++){
           stateObj.push(data.statewise[i]);
         } 

           
        })
      return stateObj;
       
  }
  
  
}