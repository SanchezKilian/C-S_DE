import { Administrateur } from "./Administrateur";


export class Stage{

    private heure : Date;
    private theme : string;
    private niveau : string;  // trois choix possibles
    private intervenant : Administrateur;
    private adresse : string;
    private prix : number;
    private idStage : number;
    

    constructor(h : Date, T : string, N : string, I : Administrateur, A : string, P : number){
        
        this.heure = h;
        this.theme = T;
        this.niveau = N;
        this.intervenant = I;
        this.adresse = A;
        this.prix = P;
        this.idStage = Math.random()*100000000000000000;

    }
}