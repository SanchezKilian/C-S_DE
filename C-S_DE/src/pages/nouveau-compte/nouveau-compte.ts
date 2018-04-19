import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Personne } from '../../model/Personne';
import { HomePage } from '../home/home';

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
  private message1 : string = "Veuillez entrer votre mot de passe puis le confirmer: ";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
    this.listAssos.push("Ahora Salsa");
    this.listAssos.push("La Salsita");
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
              this.newP = new Personne(nom,prenom,true,"",mail,data.mdp1);
              this.newP.SaveAccount();
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
        this.navCtrl.push(HomePage);
          }, 1000);

          setTimeout(() => {
            loading.dismiss();
            
      }, 2000);

}
  
}
