import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'orbita-method-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './method-section.component.html',
  styleUrl: './method-section.component.scss'
})
export class MethodSectionComponent {
  readonly steps = [
    ['01', 'Analizamos', 'Entendemos cómo vende, atiende, administra y decide tu equipo.'],
    ['02', 'Priorizamos', 'Identificamos fricciones por impacto, urgencia y complejidad técnica.'],
    ['03', 'Diseñamos', 'Definimos qué automatizar, qué asistir con IA y qué mantener bajo criterio humano.'],
    ['04', 'Implementamos', 'Construimos, conectamos, entrenamos al equipo y ajustamos con datos reales.']
  ];
}
