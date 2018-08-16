import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Giphy} from '../giphy';


@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {

  giphy: Giphy;

  constructor(private http: HttpClient) {
      this.giphy = new Giphy ('', '');
   }
   giphyRequest() {

     interface ApiResponse {
             images: object;
             original: string;
             url: string;
   }

   let promise =new Promise((resolve, reject)=> {
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=> {

            this.giphy.images = response.images;
            this.giphy.original= response.original;
            this.giphy.url = response.url;

            resolve()
        },
        error => {
                this.giphy.images = "No Image Found";
                this.giphy.url = "No Url found";
                this.giphy.original = "Nothing found";
                reject(error)
            }
        );
    });

    return promise;
  }



}
