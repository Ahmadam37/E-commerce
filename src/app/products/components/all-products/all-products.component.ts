import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  products:any [] = [];
  Categories:any []= [];
  loading:boolean = false;
  cartProduct: any [] = [];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  this.getProduct()
  this.getCategories()
  }


  getProduct(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
    }, err => {
      this.loading = false
      alert(err.message)
    })
  }


  getCategories(){
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.Categories = res;
      this.loading = false
    }, err => {
      this.loading = false
      alert(err.message)
    })
  }

  getFilter(event:any){
    let value = event.target.value;
    (value == 'all') ? this.getProduct() : this.getFilterCategories(value);
  }

  getFilterCategories(keyword:string){
    this.loading = true
    this.service.getSpecificCategories(keyword).subscribe((res:any) =>{
      this.products = res;
      this.loading = false
    }, err => {
      this.loading = false
      alert(err.messsage);
    })
  }

  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduct.find(item => item.item.id === event.item.id);
      if(exist){
        alert("The item already exist in your cart");
      }else{
        this.cartProduct.push(event);
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct)); //This means update the localStorage
      }
    }else{
      this.cartProduct.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct)); //This means update the localStorage
    }
  }
}
