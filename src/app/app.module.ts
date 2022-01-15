import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookModule } from './book/book.module';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';


const routes = [
  {path: '',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  // Components in this module.
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    AuthModule,
    // Make module aware of routing path,
    RouterModule.forRoot(routes),
    HomeModule,
    BookModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
