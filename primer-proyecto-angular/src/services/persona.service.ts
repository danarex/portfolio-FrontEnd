import { Injectable } from '@angular/core';
import { Persona } from 'src/app/models/Persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[]= []
  constructor() { }

  getAllPersonas(): Persona[] {
    let persona1= new Persona("Hernan","Borre",28)
    this.personas.push(persona1)
    this.personas.push(new Persona("Alejandro","Fantino",50))
    this.personas.push(new Persona("Nicky","Nicole",20));

    return this.personas
  }
}
