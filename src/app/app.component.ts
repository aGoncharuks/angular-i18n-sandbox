import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, Inject, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { LanguageService } from './providers/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	locales = this.languageService.locales;
	minutes: number = 0;
	gender: 'male' | 'female' | 'other' = 'male';
	name: string = 'John Smith';
	today: number = Date.now();
	todayWithPipeConstructor = new DatePipe(this.localeId).transform(new Date(), 'full');
	amount: number = 5555555555.55;
	amountWithPipeConstructor = new CurrencyPipe(this.localeId).transform(this.amount, this.defaultCurrencyCode);
	number: number = 7777777777.77;
	numberWithPipeConstructor = new DecimalPipe(this.localeId).transform(this.number);
	numberToPercent: number = 0.33;
	numberToPercentWithPipeConstructor = new PercentPipe(this.localeId).transform(this.numberToPercent);
	
	constructor(private languageService: LanguageService,
	            @Inject(LOCALE_ID) private localeId: string,
	            @Inject(DEFAULT_CURRENCY_CODE) private defaultCurrencyCode: string) {
	}
	
  form = new FormGroup({
	  locale: new FormControl(this.languageService.currentLocale)
  });
	
	changeLocale({value: locale}: MatSelectChange): void {
		this.languageService.navigateToNewLocale(locale);
	}
	
	incrementMinutes(value: number): void {
		this.minutes += value;
	}
	
	selectGender(gender: 'male' | 'female' | 'other'): void {
		this.gender = gender;
	}
}
