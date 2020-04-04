import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Update } from './updates/update.component';
import { UpdateAPI } from './updates/update.service';
import { StateUpdate } from './statesUpdate/statesUpdate.component';
import { StateUpdateAPI} from './statesUpdate/stateupdate.service';
import { Tips } from './tips/tips.component';
import { News } from './tips/tips.service';
import { Inshort } from './tips/tips.pipe';
import { Faq } from './faq/faq.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Update, StateUpdate, Tips, Inshort, Faq ],
  bootstrap:    [ AppComponent ],
  providers: [ UpdateAPI, StateUpdateAPI, News]
})
export class AppModule { }
