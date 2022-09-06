import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent,
    SpinnerComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    NavbarComponent,
    SpinnerComponent,
    SelectorComponent,
    FormsModule
  ]
})
export class SharedModule { }
