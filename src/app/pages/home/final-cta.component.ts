import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'orbita-home-final-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final-cta.component.html',
  styleUrls: ['./final-cta.component.scss']
})
export class FinalCtaComponent {
  @Input() calendlyUrl = '';
}
