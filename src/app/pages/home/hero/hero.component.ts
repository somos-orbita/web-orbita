import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'orbita-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() calendlyUrl = '';

  readonly phrases = [
    'Menos fricción operacional. Más tiempo para crecer.',
    'Automatizamos tareas repetitivas para que tu equipo se enfoque en lo estratégico.',
    'Conectamos tus herramientas para crear flujos que funcionan sin intervención manual.',
    'Agentes de IA que resumen, priorizan y aceleran la toma de decisiones.',
    'Diagnósticos rápidos para identificar oportunidades de alto impacto.'
  ];

  visiblePhrase = this.phrases[0];
  isFading = false;
  private intervalId: any = null;
  private readonly fadeDuration = 600; // ms - keep in sync with CSS

  ngOnInit(): void {
    // rotate phrases every 7 seconds with a fade transition
    this.intervalId = setInterval(() => {
      this.isFading = true;
      setTimeout(() => {
        const currentIndex = this.phrases.indexOf(this.visiblePhrase);
        const nextIndex = (currentIndex + 1) % this.phrases.length;
        this.visiblePhrase = this.phrases[nextIndex];
        this.isFading = false;
      }, this.fadeDuration);
    }, 7000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
