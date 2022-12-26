import { Component, OnInit, ɵbypassSanitizationTrustUrl } from '@angular/core';
import { ImageSearchServiceService } from 'src/unsplash-search/service/image-search-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public searchImage: any[] | undefined;
  public isSubmitted: boolean = false;
  public showFirstMessage: boolean = false;
  public numberOfImageFound:any = 0;
  public searchKeywords:any="";



  constructor(public imageSearchService:ImageSearchServiceService) { }

  ngOnInit(): void {
    this.showFirstMessage = true;
  }


  public imageSearchFormSubmit(inputSearchValue:any,$event:any){
    $event.preventDefault();


    // Get Images from Service API
    this.imageSearchService.getData(inputSearchValue).subscribe((data:any) =>{
      this.searchImage = data.results;
      this.isSubmitted = true;
      this.showFirstMessage = false;
      this.numberOfImageFound = this.searchImage?.length;
      this.searchKeywords = inputSearchValue;
  });
    


  }



}
