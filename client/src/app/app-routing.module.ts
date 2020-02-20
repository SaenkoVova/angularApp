import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToOrderComponent } from './to-order/to-order.component';
import { AllInfoProductComponent } from './all-info-product/all-info-product.component';
import { CharacteristicsInfoProductComponent } from './characteristics-info-product/characteristics-info-product.component';
import { PhotoInfoProductComponent } from './photo-info-product/photo-info-product.component';
import { CommentsInfoProductComponent } from './comments-info-product/comments-info-product.component';
import {SignupComponent} from './signup/signup.component';
import {SignupGuard} from './guards/signup.guard';
import {ProfileComponent} from './profile/profile.component';
import {ProfileGuard} from './guards/profile.guard';

const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailsComponent, children: [
        {path: '', component: AllInfoProductComponent, data: {path: ''}},
        {path: 'characteristics', component: CharacteristicsInfoProductComponent, data: {path: 'characteristics'}},
        {path: 'photo', component: PhotoInfoProductComponent, data: {path: 'photo'}},
        {path: 'comments', component: CommentsInfoProductComponent, data: {path: 'comments'}},
    ]},
    {path: 'cart', component: CartComponent},
    {path: 'signup', component: SignupComponent, canActivate: [SignupGuard]},
    {path: 'order', component: ToOrderComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingNodule {

}
