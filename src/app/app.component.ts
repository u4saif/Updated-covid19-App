import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  date=new Date();
  //day=this.date.getDate();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  name = " As of " + this.date.getDate() +", " +this.months[this.date.getMonth()];
  view='updates';



 
}
