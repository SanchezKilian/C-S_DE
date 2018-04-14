import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {Evenement} from '../../model/Evenement'

import * as firebase from 'firebase';

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
  private admin : boolean = false; // utilisateur : false => basique, true => "admin" 
  private verifAdmin : string; //1 : true, 0 : false
  private mess1 : string = "Veuillez entrer vos identifiants de connexion"
  private messErr : string ="Identifiant ou mot de passe incorrect, veuillez recommencer"
  private passWord : string;
  private requete : string;
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    //this.Eve = new Evenement("un super truc", "Une description d'enfer !!");
    this.listEvent.push(this.Eve);

/*
    const personRefTemp: firebase.database.Reference = 
      firebase.database().ref(`/User/USERPN`); 
      var id = Math.random()*10000000000000000000;
      personRefTemp.set({ID : id });
*/
  }




  logIn(){
    let prompt = this.alertCtrl.create({
      title: 'Connexion : ',
     
      message: this.mess1,
      inputs: [
        {
          name: 'id',
          placeholder: 'identifiant'
        },
        {
          name :'mdp',
          placeholder: 'mot de passe',
          type :'password'
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
          text: 'Nouveau compte',
          handler: data => {
            console.log('Nex account clicked');
            this.NouveauCompte();
          }
        },
        {
          text: 'Connexion',
          handler: data => {
            if(data.mdp != null){
              this.requete = "User/USERPN/"+data.id+"/Password" ;
              const passwordRef : firebase.database.Reference = firebase.database().ref(this.requete);
              passwordRef.on('value',PassSnapshot=>{
              this.passWord = PassSnapshot.val(); 
              if( data.mdp == this.passWord){
                this.notLogged=false;
                this.requete = "User/USERPN/"+data.id+"/admin";
                const adminRef : firebase.database.Reference = firebase.database().ref(this.requete);
                adminRef.on('value', PassSnapshot=>{
                  this.verifAdmin = PassSnapshot.val();
                  if(this.verifAdmin == "1"){
                    this.admin = true;
                  }
                  else{
                    this.admin = false;
                  }
                })

              }
              else{
                this.mess1 = this. messErr;
                this.logIn();
              }
            });}
            
          }
        }
      ]
    });
    prompt.present();
  }

  NouveauCompte(){

  }

}

