import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> 😷 Dashboard <br>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; text-align:center; margin-top:10px;}`]
})
export class HelloComponent  {
  @Input() name: string;
}
