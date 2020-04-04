import { Component } from '@angular/core';
import { StateUpdateAPI} from './stateupdate.service';

@Component({
  selector: 'stateupdate',
  templateUrl:'./statesUpdate.component.html',
  styleUrls:['./statesUpdate.component.css']
})

export class StateUpdate{
  stateData="State Wise";
  stateupdate;
  constructor( service:StateUpdateAPI){
    this.stateupdate=service.getStateUpdate();
  }
}