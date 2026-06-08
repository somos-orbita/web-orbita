import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-cases-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cases-section.component.html',
  styleUrl: './cases-section.component.scss'
})
export class CasesSectionComponent {
  readonly cases = [
    {
      title: 'Equipo comercial',
      label: 'Seguimiento comercial',
      text: 'Un lead entra, se clasifica, se registra en CRM, se asigna responsable y se activa seguimiento.',
      image: '/images/home/case-sales.jpg',
      alt: 'Equipo comercial revisando oportunidades y flujo de seguimiento en una pantalla'
    },
    {
      title: 'Administración',
      label: 'Trabajo asistido por IA',
      text: 'La IA resume documentos, ordena correos, extrae información y reduce tareas repetitivas.',
      image: '/images/home/case-admin-ai.jpg',
      alt: 'Profesional revisando documentos con apoyo de IA para clasificar información'
    },
    {
      title: 'Dirección',
      label: 'Control de gestión',
      text: 'Datos de distintas fuentes se consolidan en reportes automáticos con alertas para decisiones clave.',
      image: '/images/home/case-management.jpg',
      alt: 'Equipo directivo revisando métricas operacionales y alertas en dashboard'
    }
  ];
}
