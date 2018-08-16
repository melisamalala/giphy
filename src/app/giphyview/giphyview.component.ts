import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Giphy} from '../giphy';



@Component({
  selector: 'app-giphyview',
  templateUrl: './giphyview.component.html',
  styleUrls: ['./giphyview.component.css']
})
export class GiphyviewComponent implements OnInit {

  giphy: Giphy;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    interface ApiResponse {
            images: object;
            original: string;
            url: string;
          }

    this.http.get$<ApiResponse>("https://api.giphy.com/v1/gifs/trending?api_key=5pNaT1oW8U0FW0iaR4zdnSsTStS1nYCS&limit=30&rating=G").subscribe(data => {

        // Successful API request.


        this.giphy = new Giphy (data.images, data.original, data.url);
  });

}
}
