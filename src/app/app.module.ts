import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToOrderComponent } from './to-order/to-order.component'

import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AllInfoProductComponent } from './all-info-product/all-info-product.component';
import { AppRoutingNodule } from './app-routing.module';
import { CharacteristicsInfoProductComponent } from './characteristics-info-product/characteristics-info-product.component';
import { PhotoInfoProductComponent } from './photo-info-product/photo-info-product.component';
import { CommentsInfoProductComponent } from './comments-info-product/comments-info-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ToOrderComponent,
    AllInfoProductComponent,
    CharacteristicsInfoProductComponent,
    PhotoInfoProductComponent,
    CommentsInfoProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    AppRoutingNodule
  ],
  providers: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
