import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() calendlyUrl = '';

  readonly proofPoints = [
    'Diagnóstico comercial, operacional y estratégico',
    'Automatizaciones a medida',
    'Operación asistida por IA',
    'Integraciones entre tus sistemas actuales'
  ];

  readonly ecosystemNodes = [
    'Personas',
    'CRM',
    'ERP',
    'WhatsApp',
    'Reportes',
    'IA'
  ];
}
