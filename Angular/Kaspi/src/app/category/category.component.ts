import {Component, EventEmitter, Input, OnInit, Output,ViewEncapsulation} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Product, products} from '../products'

export interface category{
  name: string;
  photoUrl:string;
}

export const categories = [
  {
    name : 'all',
    photoUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png'
  },
  {
    name : 'Phones',
    photoUrl:'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png'
  },
  {
    name : 'PC',
    photoUrl:'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png'
  },
  {
    name : 'TV',
    photoUrl:'https://resources.cdn-kaspi.kz/img/m/p/h7e/h04/65560390959134.jpg?format=preview-medium'
  },
  {
    name : 'appliances',
    photoUrl:'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home%20App.png'
  }
]
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  // encapsulation: ViewEncapsulation.None

})


export class CategoryComponent {
  @Input() product!: Product;
  @Output() getCategory = new EventEmitter();
  productList : Product[] = []
  categories = [...categories]
  currentCategory :String =""

  getValue(buttonValue: string) {
    this.currentCategory = buttonValue
  }

}




