import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Personne } from '../../model/Personne'
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  public perso : Personne;
  public userID : string;

  private requete : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.perso = new Personne("wx","wx",true,"0","wx","wx",["az","qs"]);



    this.userID = this.navParams.get("userID");


    
    this.requete = "User/USER/"+this.userID.toString();
    const persoRef : firebase.database.Reference = firebase.database().ref(this.requete);
    persoRef.on('value', PassSnapshot=>{
      this.perso = PassSnapshot.val();
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
    
  }

  editPass(){
    let prompt = this.alertCtrl.create({
      cssClass : 'custom-back',
      message : "Veuillez entrer votre nouveau mot de passe : ",
      inputs : [
        {
          name:'mdp',
          placeholder:'mot de passe',
          type:'password'
        },
        {
          name:'mdp2',
          placeholder:'confirmation',
          type: 'password'
        },
      ],

      buttons:[
        {
          text:'Valider',
          handler : data =>{
            console.log('valider clicked');
            if(data.mdp == data.mdp2){
              //this.perso.editPassword(data.mdp);
            }
          }
        },
        {
          text:'Annuler',
          handler : data =>{
            console.log('Cancel clicked')
          }
        }
      ]
    });
    prompt.present();
  }

}
