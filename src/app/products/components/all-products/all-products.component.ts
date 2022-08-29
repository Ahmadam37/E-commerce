import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  products:any [] = [];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  this.getProduct()
  }


  getProduct(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
    })
  }

}
