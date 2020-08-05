import { Component } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animation';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent {
  private fabButtons = [
    {
      text: 'france',
      lang: 'fr',
      tooltip: 'Français'
    },
    {
      text: 'english',
      lang: 'en',
      tooltip: 'English'
    },
  ];

  public selectedLang: string;
  public buttons = [];
  public fabTogglerState = 'inactive';

  constructor(
    private translate: TranslateService
  ) {
    this.selectedLang = translate.currentLang;
  }

  public showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  public hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  public onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  public changeTranslation(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
    this.hideItems();
  }
}
