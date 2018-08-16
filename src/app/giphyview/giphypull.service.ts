import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphypullService {


  constructor(private http: HttpClient ) { }
}
