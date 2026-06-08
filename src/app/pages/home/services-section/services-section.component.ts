import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-services-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  readonly services = [
    {
      title: 'Automatización operacional',
      text: 'Flujos para tareas repetitivas, traspasos manuales y seguimientos internos.'
    },
    {
      title: 'Operación asistida por IA',
      text: 'Asistentes internos que resumen, clasifican, priorizan y apoyan decisiones.'
    },
    {
      title: 'Integración de sistemas',
      text: 'Conexión entre CRM, ERP, formularios, WhatsApp, correo, planillas y APIs.'
    },
    {
      title: 'Diseño de procesos',
      text: 'Priorización por impacto, esfuerzo técnico y valor operacional.'
    }
  ];
}
