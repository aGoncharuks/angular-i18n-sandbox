import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatSelectModule,
		MatListModule,
		MatButtonModule
	],
  providers: [
	  { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
