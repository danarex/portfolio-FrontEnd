// Import stylesheets
import './style.css';

class Persona{
  public nombre:string;
  public apellido:string;
  private añoNac:number;
  Constructor(nombre:string,apellido:string) {
    this.nombre = nombre;
    this.apellido= apellido;
  }
}
  public toString():string
{
  return this.nombre + this.apellido;
}

  public edad(añoActual:number):number
  {
    return añoActual - this.añoNac;
  }

appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;