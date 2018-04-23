import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {Evenement} from '../../model/Evenement'

import * as firebase from 'firebase';
import { Personne } from '../../model/Personne';

import { NouveauComptePage } from '../nouveau-compte/nouveau-compte'
import { CreatEventPage } from '../creat-event/creat-event'


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
  private perso : Personne;
  private idUser : number;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {



  }




  logIn(){
    let prompt = this.alertCtrl.create({   
      cssClass : 'custom-back',
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
          text: 'Nouveau compte',
          handler: data => {
            console.log('New account clicked');
            this.NouveauCompte();
          }
        },
        {
          text: 'Connexion',
          handler: data => {
            if(data.mdp != null || data.id !=null || (data.mdp != null && data.id != null)){
              this.requete = "User/USERIDS/"+data.id+"/id";
              const getID : firebase.database.Reference = firebase.database().ref(this.requete);

              getID.on('value',PassSnapshot=>{
              this.idUser = PassSnapshot.val();
              
              this.requete = "User/USER/"+this.idUser.toString()+"/password" ;
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
            });

              })
              }
            
          }
        }
      ]
    });
    prompt.present();
  }

  logOut(){
    this.notLogged = true;
    this.mess1 = "Veuillez entrer vos identifiants de connexion";
  }

  NouveauCompte(){
    this.navCtrl.push(NouveauComptePage);
  }

  AddEvent(){
    this.navCtrl.push(CreatEventPage);

  }

}

