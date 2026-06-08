import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { environment } from '../../../environments/environment';
import { HeroComponent } from './hero/hero.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { DiagnosisSectionComponent } from './diagnosis-section/diagnosis-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { MethodSectionComponent } from './method-section/method-section.component';
import { CasesSectionComponent } from './cases-section/cases-section.component';
import { OutcomesSectionComponent } from './outcomes-section/outcomes-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';

@Component({
  selector: 'orbita-home',
  standalone: true,
  imports: [
    HeroComponent,
    IntroSectionComponent,
    DiagnosisSectionComponent,
    ServicesSectionComponent,
    MethodSectionComponent,
    CasesSectionComponent,
    OutcomesSectionComponent,
    CtaSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly calendlyUrl = environment.calendlyUrl;

  ngOnInit(): void {
    this.seo.update({
      title: 'Órbita | Automatización e IA para empresas en Chile y LATAM',
      description: 'Órbita analiza operaciones comerciales, administrativas y estratégicas para diseñar automatizaciones e IA aplicada a empresas.',
      path: ''
    });
  }
}
