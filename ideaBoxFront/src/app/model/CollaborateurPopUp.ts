export class CollaborateurPopUp {
    private _pseudo: string; 
    private _img: string;

    constructor() {
    }

    get pseudo(){
        return this._pseudo;
    }

    set pseudo(value : string){
        this._pseudo = value;
    }

    get img(){
        return this._img;
    }
    set img (value : string){
        this._img = value;
    }
    
    
}