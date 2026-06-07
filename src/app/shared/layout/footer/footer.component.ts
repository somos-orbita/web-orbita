import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'orbita-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly calendlyUrl = environment.calendlyUrl;
  readonly contactEmail = environment.contactEmail;
}
