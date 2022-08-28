import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
  AppRoutingModule,
  RouterModule,
    BrowserModule,
    SharedModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
