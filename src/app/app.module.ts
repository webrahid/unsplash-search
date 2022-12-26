import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnsplashSearchModule } from 'src/unsplash-search/unsplash-search.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UnsplashSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
