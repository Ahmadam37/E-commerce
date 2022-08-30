import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  products:any [] = [];
  Categories:any []= [];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  this.getProduct()
  this.getCategories()
  }


  getProduct(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
    }, err => {
      alert(err.message)
    })
  }


  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.Categories = res;
      console.log(res)
    }, err => {
      alert(err.message)
    })
  }

  getFilter(event:any){
    let value = event.target.value;
    (value == 'all') ? this.getProduct() : this.getFilterCategories(value);

  }

  getFilterCategories(keyword:string){
    this.service.getSpecificCategories(keyword).subscribe((res:any) =>{
      this.products = res;
    }, err => {
      alert(err.messsage);
    })
  }
}
