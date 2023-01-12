import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from 'src/app/model/skills.model';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  sk:Skills[] = [];
  constructor(public skillsService:SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsService.traer().subscribe((data) => {
      this.sk = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('No se pudo borrar la skills');
        }
      );
    }
  }
}
