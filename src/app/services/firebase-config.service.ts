import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConfigService {


  firebaseConfig = {
    apiKey: "AIzaSyBexmNkI4-cmL05KmJyp8wCCdN4Q6GpNE8",
    authDomain: "myangularapp-fc21b.firebaseapp.com",
    databaseURL: "https://myangularapp-fc21b.firebaseio.com",
    projectId: "myangularapp-fc21b",
    storageBucket: "myangularapp-fc21b.appspot.com",
    messagingSenderId: "482512188884",
    appId: "1:482512188884:web:05dbc7584f7b19a910d241",
    measurementId: "G-1W0ZJSYSQV"
  };
  constructor() { }

  getFirebaseConfig() {
    return this.firebaseConfig;
  }
 
}
