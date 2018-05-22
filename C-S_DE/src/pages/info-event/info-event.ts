import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evenement } from '../../model/Evenement';
import { Stage } from '../../model/Stage';
import { Administrateur } from '../../model/Administrateur';

@IonicPage()
@Component({
  selector: 'page-info-event',
  templateUrl: 'info-event.html',
})
export class InfoEventPage {

  public event : Evenement;
  public userID : string;

  public stage : Stage;
  public listeS : any ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.event = this.navParams.get("event");
    this.userID = this.navParams.get("userID");

    this.stage =new Stage(new Date(12,15),"intit1","cc",new Administrateur("Ahora Salsa","coucou",true,"Ahora Salsa","azertyuiop","a",[]),"azert",789);
 /*   
    this.listeS.push(this.stage);
    this.listeS.push(this.stage);
    this.listeS.push(this.stage);


   
    this.listeS.push(this.stage);
    this.event.stages.push(this.listeS);
*/
    this.event.stages.push(this.stage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventPage');
  }

}
