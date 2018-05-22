import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    var config = {
      apiKey: "AIzaSyDkwmQeQXW38b3RjCkr3dVPgzgC07VJjqo",
    authDomain: "d-s-de.firebaseapp.com",
    databaseURL: "https://d-s-de.firebaseio.com",
    projectId: "d-s-de",
    storageBucket: "d-s-de.appspot.com",
    messagingSenderId: "259045726337"

    };
    firebase.initializeApp(config);
    

  }
}

