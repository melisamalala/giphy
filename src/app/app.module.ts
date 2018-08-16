import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GiphyviewComponent } from './giphyview/giphyview.component';
import { GiphyFormComponent } from './giphy-form/giphy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyviewComponent,
    GiphyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
