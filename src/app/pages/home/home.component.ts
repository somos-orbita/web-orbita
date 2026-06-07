import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../../shared/seo/seo.service';
import { environment } from '../../../environments/environment';
import { HeroComponent } from "./hero/hero.component";

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
      title: 'Automatización de procesos',
      text: 'Transformamos tareas repetitivas en flujos automáticos que reducen errores y liberan tiempo.'
    },
    {
      title: 'Integración de plataformas',
      text: 'Conectamos CRM, ERP, formularios, WhatsApp, correo, bases de datos y APIs.'
    },
    {
      title: 'Agentes de IA operacionales',
      text: 'Creamos asistentes que clasifican, resumen, priorizan y apoyan a tu equipo.'
    },
    {
      title: 'Diagnóstico de fricción',
      text: 'Detectamos oportunidades concretas para automatizar y priorizamos por impacto.'
    }
  ];

  readonly steps = [
    ['01', 'Mapeamos tu operación', 'Entendemos cómo trabaja tu equipo y dónde se pierde tiempo.'],
    ['02', 'Priorizamos oportunidades', 'Elegimos procesos simples, medibles y de alto impacto.'],
    ['03', 'Implementamos el flujo', 'Construimos integraciones, automatizaciones o agentes según el caso.'],
    ['04', 'Medimos y escalamos', 'Optimizamos los resultados y repetimos donde exista valor.']
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Órbita | Automatización e IA para empresas en Chile y LATAM',
      description: 'Órbita ayuda a empresas a reducir fricción operacional conectando procesos, plataformas e inteligencia artificial.',
      path: ''
    });
  }
}
