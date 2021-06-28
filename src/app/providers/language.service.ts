import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALES } from '../constants';
import { Locale } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
	locales: Locale[] = LOCALES;
	currentLocale: Locale = LOCALES.find(({localeId}) =>
		localeId === this.localeId.split('-')[0]
	) || LOCALES[0];

  constructor(private readonly router: Router,
              @Inject(LOCALE_ID) private readonly localeId: string) {
  }
	
	navigateToNewLocale(locale: Locale): void {
    window.location.href = locale.rootUrl + this.router.url;
	}
}
