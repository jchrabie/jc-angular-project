import { Injectable } from '@angular/core';
import { Theme, light, dark } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private active: Theme = dark;
    private availableThemes: Theme[] = [light, dark];

    getAvailableThemes(): Theme[] {
        return this.availableThemes;
    }

    getActiveTheme(): Theme {
        return this.active;
    }

    isDarkTheme(): boolean {
        return this.active.name === dark.name;
    }

    setDarkTheme(): void {
        this.setActiveTheme(dark);
        document.body.classList.remove('light-theme');
    }

    setLightTheme(): void {
        this.setActiveTheme(light);
        document.body.classList.add('light-theme');
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}
