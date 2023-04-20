import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, Category} from "./products";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'http://localhost:8000/api'


  constructor(private http : HttpClient) { }

  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/products`)
  }
  getProduct(product_id : number):Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/products/${product_id}`)
  }
  addProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.BASE_URL}/products`,product)
  }



  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`)
  }
  getCategory(category_id:number):Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/categories/${category_id}`)
  }
  addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(`${this.BASE_URL}/categories`,category)
  }
}
