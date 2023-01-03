export class experiencia {
    id?:number;
    nombre:String;
    puesto:String;
    esTrabajoActual:boolean;
    inicio:String;
    fin:String;
    img:String;

    constructor(nombre:String,puesto:String, img:String,inicio:String,fin:String,esTrabajoActual:boolean) {
        this.nombre=nombre;
        this.puesto=puesto;
        this.img=img;
        this.inicio=inicio;
        this.fin=fin;
        this.esTrabajoActual=esTrabajoActual; 
        
    }
}