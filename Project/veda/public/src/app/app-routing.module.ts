import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ChatbotComponent} from './chatbot/chatbot.component';
import { AuthGuard } from './auth/auth-guard';
const routes: Routes = [
{path:'',component: BodyComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'chatbot',component:ChatbotComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,
  BodyComponent,SignupComponent,ChatbotComponent]
