import { Component } from '@angular/core';
import { News } from './tips.service';

@Component({
  selector:'tips',
  templateUrl:'./tips.component.html',
  styleUrls:['./tips.component.css']
})

export class Tips{
 // tipsData="HI all";
  newsData;
  constructor(service: News){
    this.newsData=service.getnews();
  }
}