import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    AllProductsComponent
  ]
})
export class ProductsModule { }
