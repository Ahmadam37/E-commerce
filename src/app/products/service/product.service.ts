import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllProducts(){
   return this.http.get( environment.baseAPI+'products');
  }

  getAllCategories(){
    return this.http.get(environment.baseAPI+'products/categories')
  }

  getSpecificCategories(keyword:string){
    return this.http.get(environment.baseAPI+'products/category/'+keyword)
  }

  getProductById(id:any){
    return this.http.get(environment.baseAPI+'products/'+id);
  }
}

