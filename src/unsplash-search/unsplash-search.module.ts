import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UnsplashSearchComponent } from './unsplash-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchResultComponent,
    UnsplashSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnsplashSearchComponent
  ]
})
export class UnsplashSearchModule { }
