
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyComponent } from './body/body.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import {MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,MatExpansionModule,
  MatProgressSpinnerModule} from '@angular/material';
  import {MatToolbarModule} from '@angular/material/toolbar';
 import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';


import {HttpClient} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents,
    LoginComponent,
    SignupComponent,
    ChatbotComponent,
    
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    // NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
    MatToolbarModule,
    
  ],
  // providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent,routingComponents]

})
export class AppModule { }




