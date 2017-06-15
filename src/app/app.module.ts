import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConsoleDbsComponent } from './console-dbs/console-dbs.component';
import {ConsoleDbsService} from './console-dbs/console-dbs.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleDbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConsoleDbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
