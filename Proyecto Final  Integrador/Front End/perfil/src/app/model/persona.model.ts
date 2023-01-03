export class persona {
    id?:number;
    nombre:String;
    apellido:String;
    img:String;
    email:String;
    sobreMi:String;

    constructor(nombre:String,apellido:String, img:String,email:String,sobreMi:String) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.email=email;
        this.sobreMi=sobreMi;
        
    }
}