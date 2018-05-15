import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Personne } from '../../model/Personne';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import * as firebase from 'firebase';

/**
 * Generated class for the CreatEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creat-event',
  templateUrl: 'creat-event.html',
})
export class CreatEventPage {

  private perso : Personne;

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.perso = this.navParams.get("user");
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatEventPage');
  }


  ajouterEvent(){
    
  }

}
