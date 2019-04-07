import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recievedItem = 'brand';

  onNavigate(menuItem: string) {
    this.recievedItem = menuItem;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAvgY_0K-XGwlKMcq-cTXA0WkfzZWb20ZA',
      authDomain: 'autopr-7c31f.firebaseapp.com'
    });
  }
}
