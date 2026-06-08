import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../../shared/seo/seo.service';
import { environment } from '../../../environments/environment';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'orbita-home',
  standalone: true,
  imports: [NgFor, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly calendlyUrl = environment.calendlyUrl;

  readonly services = [
    {
      title: 'Automatización operacional',
      text: 'Convertimos tareas repetitivas, traspasos manuales y seguimientos internos en flujos automáticos.'
    },
    {
      title: 'Operación asistida por IA',
      text: 'Diseñamos asistentes internos que resumen, clasifican, priorizan y ayudan a tomar mejores decisiones.'
    },
    {
      title: 'Integración de sistemas',
      text: 'Conectamos CRM, ERP, formularios, WhatsApp, correo, planillas, bases de datos y APIs.'
    },
    {
      title: 'Diseño estratégico de procesos',
      text: 'Ordenamos oportunidades por impacto comercial, esfuerzo técnico y valor operacional.'
    }
  ];

  readonly steps = [
    ['01', 'Analizamos la operación', 'Entendemos cómo vende, atiende, administra y decide tu equipo.'],
    ['02', 'Detectamos fricción', 'Identificamos tareas que consumen tiempo, duplican trabajo o dependen demasiado de personas clave.'],
    ['03', 'Diseñamos la solución', 'Definimos qué automatizar, qué asistir con IA y qué mantener bajo criterio humano.'],
    ['04', 'Implementamos y medimos', 'Construimos, conectamos, entrenamos al equipo y ajustamos según resultados reales.']
  ];

  readonly analysisAreas = [
    'Procesos comerciales y seguimiento de oportunidades',
    'Traspaso de información entre equipos y plataformas',
    'Reportes, control de gestión y alertas operacionales',
    'Tareas administrativas repetitivas',
    'Documentos, correos y conversaciones que requieren clasificación o resumen',
    'Decisiones que hoy dependen de información dispersa'
  ];

  readonly outcomes = [
    {
      title: 'Más foco comercial',
      text: 'El equipo dedica menos tiempo a ordenar información y más tiempo a vender, atender clientes o abrir crecimiento.'
    },
    {
      title: 'Menos dependencia manual',
      text: 'La operación deja de sostenerse en recordatorios, planillas, copias de datos y tareas invisibles.'
    },
    {
      title: 'Mejor control',
      text: 'Los procesos se vuelven medibles, trazables y más fáciles de mejorar con datos concretos.'
    }
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Órbita | Automatización e IA para empresas en Chile y LATAM',
      description: 'Órbita analiza operaciones comerciales, administrativas y estratégicas para diseñar automatizaciones e IA aplicada a empresas.',
      path: ''
    });
  }
}
