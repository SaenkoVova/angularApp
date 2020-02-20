import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToOrderComponent } from './to-order/to-order.component';

import { AllInfoProductComponent } from './all-info-product/all-info-product.component';
import { AppRoutingNodule } from './app-routing.module';
import { CharacteristicsInfoProductComponent } from './characteristics-info-product/characteristics-info-product.component';
import { PhotoInfoProductComponent } from './photo-info-product/photo-info-product.component';
import { CommentsInfoProductComponent } from './comments-info-product/comments-info-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import {AuthService} from "./services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";

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
    CommentsInfoProductComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingNodule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    NgProgressModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
