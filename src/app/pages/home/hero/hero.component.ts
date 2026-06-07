import { Component, Input } from '@angular/core';

@Component({
  selector: 'orbita-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() calendlyUrl = '';
}
