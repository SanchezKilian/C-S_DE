import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Personne } from '../../model/Personne';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { Evenement } from '../../model/Evenement'
import * as firebase from 'firebase';
import { Administrateur } from '../../model/Administrateur';
import { Association } from '../../model/Association';

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
  private eve : Evenement ;
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

  Add(Nom: string,Date : Date ,Lieu : string  ,Description : string){
    
    this.eve = new Evenement(Nom,Description,Date,"le Mans",Lieu, Date,8,new Administrateur("a","a",true,"adm","c","c",["cc","hey"]));
    this.eve.save();
  }

}
