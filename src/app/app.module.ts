import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { HomeModule } from './home/home.module';

@NgModule({
  // Components in this module.
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    BookModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
