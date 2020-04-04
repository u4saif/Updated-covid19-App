import { Component } from '@angular/core';
import { UpdateAPI} from './update.service';

@Component({
  selector:'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class Update{
  data="HelpLine";
  update;
  finddate1=this.finddate();
  constructor( service:UpdateAPI){
    this.update=service.getUpdate();
  }
  icon="https://raw.githubusercontent.com/u4saif/Corona-Virus-Dashboard-COVID19-/master/icon.jpg";
  finddate(){
     // One day Time in ms (milliseconds) 
    var one_day = 1000 * 60 * 60 * 24 
  
// To set present_dates to two variables 
var present_date = new Date(); 
  
// 0-11 is Month in JavaScript 
var lockdown_day = new Date(present_date.getFullYear(), 2, 22) 
  
// To Calculate next year's lockdown if passed already. 
if (present_date.getMonth() == 2 && present_date.getDate() > 22) 
    lockdown_day.setFullYear(lockdown_day.getFullYear() + 1) 
  
// To Calculate the result in milliseconds and then converting into days 
var Result = Math.round(present_date.getTime()-lockdown_day.getTime() ) / (one_day); 
  
// To remove the decimals from the (Result) resulting days value 
var Final_Result = Result.toFixed(0); 
 return Final_Result;
}

}