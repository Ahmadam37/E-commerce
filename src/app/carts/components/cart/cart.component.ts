import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:CartService) { }

  cartProducts:any[] = [];
  total: any;
  success: boolean = false;
  ngOnInit(): void {
    this.getProduct()
  }


  getProduct(){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getTotal();
  }

  addQuantity(index: any){
    this.cartProducts[index].quantity++;
    this.getTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }

  minQuantity(index: any){
    this.cartProducts[index].quantity--;
    this.getTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }
  detectChange(){
    this.getTotal()
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))

  }
  deleteProduct(index:number){
    this.cartProducts.splice(index , 1);
    this.getTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  }
  clearCart(){
    this.cartProducts = [];
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.getTotal();
  }
  getTotal(){
    this.total = 0;
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  sendCart(){
    let Cartproducts = this.cartProducts.map(item => {
      return {product: item.item.id ,quantity: item.quantity}
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: Cartproducts
    }
    this.service.createNewCart(model).subscribe(res => {
      this.success = true;
    })
  }
}
