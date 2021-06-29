import { Component } from '@angular/core';
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
	
	constructor(private languageService: LanguageService) {
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
