import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:Experiencia[] = [];
  constructor(public experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.traer().subscribe(data2 => {
      this.experiencia=data2;
    });
  }

}
