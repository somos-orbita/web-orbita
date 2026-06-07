import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'orbita-home-metodo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.scss']
})
export class MetodoComponent {
  @Input() steps: Array<[string, string, string]> = [];
}
