import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  urlPortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.urlPortal = 'http://loiane.training';
    this.nomePortal = 'Loiane Training';
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
