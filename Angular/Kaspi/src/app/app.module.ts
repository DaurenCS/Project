import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {path: 'home', component: HomePageComponent},
      {path: 'products/:productId',component: ProductDetailsComponent},
      {path: 'cart', component:CartComponent},
      // {path:'category',component: CategoryComponent},
      {path:'category/:category.name',component: ProductListComponent},
      {path: '', redirectTo:'home', pathMatch: "full"},
      {path:'auth',component: AuthComponent},


    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CategoryComponent,
    HomePageComponent,
    AuthComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at https://angular.io/license
// */