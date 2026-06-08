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
      title: 'Más foco comercial',
      text: 'Menos tiempo ordenando información y más tiempo vendiendo, atendiendo clientes o abriendo crecimiento.'
    },
    {
      title: 'Menos dependencia manual',
      text: 'Menos recordatorios, planillas, copias de datos y tareas invisibles sosteniendo la operación.'
    },
    {
      title: 'Mejor control',
      text: 'Procesos más medibles, trazables y fáciles de mejorar con datos concretos.'
    }
  ];
}
