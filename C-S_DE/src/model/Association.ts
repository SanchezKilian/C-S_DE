import * as firebase from 'firebase';

export class Association{

    /* parametre de l'assocoation */
    public nom : string;
    private identifiant : number;

     /* construction des requetes */
     private requete : string;
     private reference : firebase.database.Reference;
     private slash : string ="/"; 


    constructor(n : any){
        this.nom = n;
        this.identifiant = Math.random()*1000000000000000000;
    }

    saveAsso(){
        this.reference = firebase.database().ref('Association/Aid/'+this.nom);
        this.reference.set({
            id : this.identifiant,
            nom : this.nom
                            });

        this.reference = firebase.database().ref('Association/Aname/'+ this.identifiant);
        this.reference.set({
            nom : this.nom,
            id : this.identifiant
        });
    }

}