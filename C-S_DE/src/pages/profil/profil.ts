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
  private assos : any;
  private listAssos : Array<string> = new Array() ;

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

  addAssos(){
    const itemRefM : firebase.database.Reference = firebase.database().ref("Association/Aid");
    this.listAssos= [];
    itemRefM.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.listAssos.push(ItemSnap.val());
        return false;
      });
    });

    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    if(this.listAssos.length>=1){
      this.listAssos.forEach(asso =>{
        alert.addInput({
          type: 'checkbox',
          label: asso,
          value: asso,
          checked: false
        });
      });
    }



    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
       this.assos = data;
      }
    });
    alert.present();
  }

  

}
