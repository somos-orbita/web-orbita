import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-diagnosis-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diagnosis-section.component.html',
  styleUrl: './diagnosis-section.component.scss'
})
export class DiagnosisSectionComponent {
  readonly analysisAreas = [
    'Procesos comerciales y seguimiento de oportunidades',
    'Traspaso de información entre equipos y plataformas',
    'Reportes, control de gestión y alertas operacionales',
    'Tareas administrativas repetitivas',
    'Documentos, correos y conversaciones que requieren clasificación',
    'Decisiones que hoy dependen de información dispersa'
  ];
}
