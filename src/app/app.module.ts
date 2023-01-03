import { CartsModule } from './carts/carts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
  AppRoutingModule,
  RouterModule,
  BrowserModule,
  SharedModule,
  CartsModule,
  ProductsModule,
  CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
