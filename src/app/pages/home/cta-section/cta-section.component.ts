import { Component, Input } from '@angular/core';

@Component({
  selector: 'orbita-cta-section',
  standalone: true,
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
  @Input() calendlyUrl = '';
}
