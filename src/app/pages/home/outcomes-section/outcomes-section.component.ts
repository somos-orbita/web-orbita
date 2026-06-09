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
  readonly metrics = [
    {
      value: 'Menos',
      label: 'tareas manuales',
      text: 'Flujos que reducen copias de datos, seguimientos repetidos y trabajo operativo invisible.'
    },
    {
      value: 'Más',
      label: 'trazabilidad',
      text: 'Procesos conectados para saber qué pasó, quién intervino y dónde se requiere acción.'
    },
    {
      value: 'Mejor',
      label: 'tiempo de respuesta',
      text: 'Información ordenada y alertas oportunas para que las decisiones no lleguen tarde.'
    },
    {
      value: 'Todo',
      label: 'conectado',
      text: 'Personas, sistemas e IA trabajando alrededor de la operación real de tu empresa.'
    }
  ];
}
