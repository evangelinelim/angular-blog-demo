import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accountRoutes } from '../routing/account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputsComponent } from './text-inputs/text-inputs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    TextInputsComponent,
    LoginComponent,
    SignupComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(accountRoutes),
      ReactiveFormsModule
    ],
  exports: [
    ReactiveFormsModule,
    TextInputsComponent]
    })
    export class AccountModule { }
    