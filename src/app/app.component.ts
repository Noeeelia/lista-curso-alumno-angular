import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TablaAlumnosComponent, TablaCursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
