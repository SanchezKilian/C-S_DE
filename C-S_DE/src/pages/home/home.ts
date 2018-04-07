import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {Evenement} from '../../model/Evenement'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /* Variables liées à l'affichage des annonces de la page d'accueil */
  private listEvent : Array<Evenement> = [];
  private Eve : Evenement;

  /* Variables liées à la connexion de l'utilisateur */
  private notLogged : boolean = true;
  private admin : boolean = true; // utilisateur : false => basique, true => "admin" 



  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.Eve = new Evenement("un super truc", "Une description d'enfer !!");
    this.listEvent.push(this.Eve);

  }




  logIn(){
    let prompt = this.alertCtrl.create({
      title: 'Connexion : ',
      message: "Veuillez entrer vos identifiants de connexion",
      inputs: [
        {
          name: 'id',
          placeholder: 'identifiant'
        },
        {
          name :'mdp',
          placeholder: 'mot de passe'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connexion',
          handler: data => {
            if(data.id == "kilian" && data.mdp == "admin"){
              this.notLogged=false;
            }
            else{
              this.showAlert();
            }
            
          }
        }
      ]
    });
    prompt.present();
  }



  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erreur d identification',
      subTitle: 'Identifiant ou mot de passe incorrect',
      buttons: [
        {
        text: 'Annuler',
        handler: data => {
          
        }
        },{
          text: 'Réessayer',
        handler: data => {
          this.logIn();
        }
        }
      ]
    });
    alert.present();
    
  }

}
