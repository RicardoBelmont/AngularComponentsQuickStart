import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

// Routes
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { ShowComponent } from './components/show/show.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    Ng2HandySyntaxHighlighterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
