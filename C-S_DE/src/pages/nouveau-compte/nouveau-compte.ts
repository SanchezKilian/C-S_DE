import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Personne } from '../../model/Personne';
import { HomePage } from '../home/home';
import { Association } from '../../model/Association';
import * as firebase from 'firebase';
import { Administrateur } from '../../model/Administrateur';

/**
 * Generated class for the NouveauComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nouveau-compte',
  templateUrl: 'nouveau-compte.html',
})
export class NouveauComptePage {

  private listAssos : Array<string> = new Array() ;
  private newP : Personne;
  private newA : Administrateur;
  private message1 : string = "Veuillez entrer votre mot de passe puis le confirmer: ";
  private modeGerant : boolean = false;
  private adherent : boolean = false;
  private assoc : Association;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
    

    const itemRefM : firebase.database.Reference = firebase.database().ref("Association/Aid");
    this.listAssos= [];
    itemRefM.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.listAssos.push(ItemSnap.val());
        return false;
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauComptePage');
  }



  inscription(nom: string,prenom: string,mail: string,asso: string[]){
    let prompt = this.alertCtrl.create({   
      cssClass : 'custom-back',
      message: this.message1,
      inputs: [
        {
          name: 'mdp1',
          placeholder: 'mot de passe',
          type :'password'
        },
        {
          name :'mdp2',
          placeholder: 'confirmation',
          type :'password'
        },
      ],
      
      buttons: [
        {
          text: 'Valider',
          handler: data => {
            console.log('Valider clicked');
            if(data.mdp1 == data.mdp2){
              if(asso.length!=0){this.adherent = true}
              if(this.modeGerant){
                this.newA = new Administrateur(nom,prenom,this.adherent,"1",mail,data.mdp1,asso)
                this.newA.SaveAccount();
              }else{
                this.newP = new Personne(nom,prenom,this.adherent,"0",mail,data.mdp1,asso);
                this.newP.SaveAccount();
              }
              this.resentLoadingCrescent();
            }
            else{
              this.message1 = "Les mots de passe ne correspondent pas, veuillez recommencer";
              this.inscription(nom,prenom,mail,asso);
            }
          }
        }
        
      ]
    });
    prompt.present();
  }

  resentLoadingCrescent() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Merci de patienter pendant la création de votre compte',
      duration: 3000
    });

    loading.present();
      setTimeout(() => {
        this.navCtrl.push(HomePage,{admin : this.modeGerant});
          }, 1000);

          setTimeout(() => {
            loading.dismiss();
            
      }, 2000);

}

pageAdmin(){
  this.modeGerant = true;
}  

AjouterAssos(){
  let prompt = this.alertCtrl.create({   
    cssClass : 'custom-back',
    message: "veuillez entrer le nom de l'association et ...",
    inputs: [
      {
        name: 'nom',
        placeholder: 'Nom : ',
        type :'text'
      }
    ],
    
    buttons: [
      {
        text: 'Ajouter',
        handler: data => {
          console.log('Ajouter clicked');
            this.listAssos.push(data.nom);
            this.assoc = new Association(data.nom);
            this.assoc.saveAsso();
          }
        }
      
      
    ]
  });
  prompt.present();
}


}
