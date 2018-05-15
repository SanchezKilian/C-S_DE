import { Personne } from "./Personne";


export class Administrateur extends Personne { 

    


    constructor( N : string, p : string, ad : boolean, adm : string, c : string, pass : string, asso : string[]){
        super(N,p,ad,adm,c,pass,asso);
    }

    SaveAccount(){
        super.SaveAccount();
    }

}