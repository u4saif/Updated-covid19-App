import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name:'inshort'
})

export class Inshort implements PipeTransform{  
  transform(value: any, args?:any){
    if(!value) return null;
    return value.substr(0,200)+ "...";
  }

}