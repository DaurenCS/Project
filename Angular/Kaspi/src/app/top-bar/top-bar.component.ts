import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  value: string = ''
  constructor(private service : ProductService){

  }
  click(){
    window.alert(this.value)

  }
  ngOnInit(): void {
    
  }

  

 
}
// export const res


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/