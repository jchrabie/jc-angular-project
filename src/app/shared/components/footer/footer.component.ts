import { Component } from '@angular/core';
import { socials, Social } from '../../constants/socials.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get socials(): Social[] {
    return socials;
  }
}
