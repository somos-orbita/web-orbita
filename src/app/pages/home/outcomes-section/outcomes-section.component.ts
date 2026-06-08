import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-outcomes-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './outcomes-section.component.html',
  styleUrl: './outcomes-section.component.scss'
})
export class OutcomesSectionComponent {
  readonly outcomes = [
    {
      value: '01',
      title: 'Equipos con más foco',
      text: 'Las personas dejan de perseguir datos y recordatorios para concentrarse en clientes, decisiones y crecimiento.'
    },
    {
      value: '02',
      title: 'Procesos más trazables',
      text: 'Cada flujo queda conectado, medible y visible para que la operación no dependa de tareas invisibles.'
    },
    {
      value: '03',
      title: 'IA aplicada con criterio',
      text: 'Automatizamos lo repetitivo y dejamos espacio para que el equipo intervenga donde importa el juicio humano.'
    }
  ];
}
