import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-giphy-form',
  templateUrl: './giphy-form.component.html',
  styleUrls: ['./giphy-form.component.css']
})
export class GiphyFormComponent implements OnInit {
  onSubmit(f: NgForm) {
   console.log(f.value);  // { first: '', last: '' }
   console.log(f.valid);  // false
 }

  constructor() { }

  ngOnInit() {
  }

}
