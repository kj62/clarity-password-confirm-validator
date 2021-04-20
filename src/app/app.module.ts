import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
