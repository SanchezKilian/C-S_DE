

export class Evenement{

    /* information liés à l'évenement */
    private title : string;
    private description : string;

    constructor(T : string, D : string){
        this.title = T;
        this.description = D;
    }


    /* sauvegarder l'evenement en ligne */
    save(){

    }

    /* getter&setter */

    public getTitle(){
        return this.title;
    }
    public getDescription(){
        return this.description;
    }
}