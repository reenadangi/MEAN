import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {AddrestaurantComponent} from './addrestaurant/addrestaurant.component';
import {RestaurantEditComponent} from './restaurant-edit/restaurant-edit.component'
import{ResComponent} from './res/res.component'
import {ReviewsComponent} from './reviews/reviews.component'
import {AddReviewsComponent} from './add-reviews/add-reviews.component'
import { AuthGuard } from './auth/auth-guard';
const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'',component: RestaurantsComponent},
{path:'addrestaurant', component: AddrestaurantComponent},
{path:'edit/:id',component: RestaurantEditComponent},
{path:'reviews/:id',component: ReviewsComponent},
{path:'addreview/:id',component: AddReviewsComponent},
{path:'res',component: ResComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,BodyComponent,SignupComponent,
  RestaurantsComponent,AddrestaurantComponent,RestaurantEditComponent,ReviewsComponent,
  AddReviewsComponent,ResComponent]

