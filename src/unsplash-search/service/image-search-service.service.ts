import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchServiceService {

  constructor (private http:HttpClient) { }


  public getData(searchKey:String): Observable<any>{
    return this.http.get(`${environment.api_url}/search/photos?client_id=${environment.unsplsh_key}&page=1&query=${searchKey}`);
  }
}
