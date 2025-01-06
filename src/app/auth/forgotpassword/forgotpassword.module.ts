import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {path : '', component : ForgotpasswordComponent}
]

@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ]
})
export class ForgotpasswordModule { }
