import {Component, OnInit} from '@angular/core';
import { products,Product,Category } from '../products';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})



export class ProductListComponent implements OnInit {
  
  category: string = '';
  productss =[...products] ;
  productList: Product[]=[];
  
  constructor(private route: ActivatedRoute, private service: ProductService) {
   }
  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category.name')??'';
 
  }
  getRes(): void{
    this.category = this.route.snapshot.paramMap.get('category.name')??'';
    this.productList = this.getProduct()
  }
 
 

  getProduct(): Product[]{
    if(this.category==='all'){
      this.productList=[]
      for (let product of this.productss){
        this.productList.push(product)
      }
    }
    else {
      this.productList=[]
      for (let product of products){
        if(this.category === product.category)
        this.productList.push(product)
      }
    }
    return this.productList;
  }

 
  onCategorySelected(categoryName: string) {
    this.category = categoryName
   
  }

  


}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
