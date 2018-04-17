
import * as firebase from 'firebase';

export class Personne{

    /* information liés à la personne */
    private nom : string;
    private prenom : string;
    private adherent : boolean;
    private admin : string;
    private contact : string;
    private password : string;
    private identifiant : number;

    /* construction des requetes */
    private requete : string;
    private reference : firebase.database.Reference;
    private slash : string ="/"; 

    constructor(N : string, p : string, ad : boolean, adm : string, c : string, pass : string){
        this.nom = N;
        this.prenom =p;
        this.adherent = ad;
        this.admin = adm;
        this.contact = c;
        this.password = pass;
        this.identifiant = Math.random()*100000000000000000;
    }

    SaveAccount(){
        this.reference = firebase.database().ref('User/USERIDS/'+this.nom);
        this.reference.set({
            id : this.identifiant 
                            });
        this.reference = firebase.database().ref('User/USER/'+this.identifiant);
        this.reference.set({
            nom : this.nom, 
            prenom : this.prenom, 
            adherent : this.adherent, 
            admin : this.admin,
            contact : this.contact,
            password : this.password,
            identifiant: this.identifiant,
                            });
                
        
    }
    private perso :Personne;
    SaveObjectP(){
       this.perso = new Personne("az","az",true,"adm","qsd","azer");
       this.reference = firebase.database().ref('User/USER/');
       this.reference.set({personne : this.perso});
    }



}