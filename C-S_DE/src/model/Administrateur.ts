import { Personne } from "./Personne";


export class Administrateur extends Personne{

    private nom : string;


    constructor( N:string){
        super();
        this.nom = N;
    }
}