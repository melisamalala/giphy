import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Giphy} from '../giphy';
import {GiphyRequestService} from '../giphy-request.service';



@Component({
  selector: 'app-giphyview',
  templateUrl: './giphyview.component.html',
  styleUrls: ['./giphyview.component.css'],
  providers: [GiphyRequestService]
})
export class GiphyviewComponent implements OnInit {

  giphy$
  // apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, giphypullService: GiphyRequestService) {
  }

  ngOnInit() {
    this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=5pNaT1oW8U0FW0iaR4zdnSsTStS1nYCS&limit=30&rating=G').subscribe(
      data => {
        console.log(data.data);
        this.giphy$ = data.data
        // console.log(data.data[1].images.preview_gif.url)
      }
    );

  }

}
