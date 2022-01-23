import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
