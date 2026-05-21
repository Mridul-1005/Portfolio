import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';
export type ColorScheme = 'navy' | 'charcoal';

export type Theme = `dark-${ThemeMode}` | `light-${ColorScheme}`;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly MODE_KEY = 'portfolio-mode';
  private readonly COLOR_KEY = 'portfolio-color';

  mode = signal<ThemeMode>(this.getStoredMode());
  colorScheme = signal<ColorScheme>(this.getStoredColor());

  constructor() {
    this.applyTheme();
  }

  private getStoredMode(): ThemeMode {
    const stored = localStorage.getItem(this.MODE_KEY);
    return (stored as ThemeMode) || 'dark';
  }

  private getStoredColor(): ColorScheme {
    const stored = localStorage.getItem(this.COLOR_KEY);
    if (stored === 'purple') {
      return 'charcoal';
    }

    return (stored as ColorScheme) || 'charcoal';
  }

  toggleMode(): void {
    this.mode.update(m => m === 'dark' ? 'light' : 'dark');
    localStorage.setItem(this.MODE_KEY, this.mode());
    this.applyTheme();
  }

  setColorScheme(color: ColorScheme): void {
    this.colorScheme.set(color);
    localStorage.setItem(this.COLOR_KEY, color);
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = `${this.mode()}-${this.colorScheme()}` as Theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  get currentTheme(): string {
    return `${this.mode()}-${this.colorScheme()}`;
  }
}