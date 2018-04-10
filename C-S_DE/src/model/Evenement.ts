import * as firebase from 'firebase';
import {Administrateur} from '../model/Administrateur'

export class Evenement {

    /* information liés à l'évenement */
    private title : string;
    private description : string;
    private date :Date;
    private ville : string;
    private adresse : string;
    private heure : Date;
    private tarifs : number;
    private admin : Administrateur;

    private idEvent : number;

    /* construction des requetes */
    private requete : string;
    private reference : firebase.database.Reference;
    private slash : string ="/"; 


    constructor(T : string, D : string, da :Date, V : string, A : string, h : Date, t : number, Ad : Administrateur ){
        this.title = T;
        this.description = D;
        this.date = da;
        this.ville = V;
        this.adresse = A;
        this.heure = h;
        this.tarifs = t;
        this.admin = Ad;
        this.idEvent = Math.random()*100000000000000000;
    }


    /* sauvegarder l'evenement en ligne */
    save(){
        this.reference = firebase.database().ref('/Evenement/'+this.idEvent);
        this.reference.set({titre : this.title, 
                            description : this.description, 
                            date : this.date, 
                            ville : this.ville,
                            adresse : this.adresse,
                            heure : this.heure,
                            tarif: this.tarifs,
                            admin : this.admin,
                            idEvent : this.idEvent});
        
    }

    /* getter&setter */

    public getTitle(){
        return this.title;
    }
    public getDescription(){
        return this.description;
    }
}