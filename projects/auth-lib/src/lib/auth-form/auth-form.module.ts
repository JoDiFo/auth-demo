import { NgModule } from '@angular/core';
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  imports: [FormsModule, BrowserModule],
})
export class AuthFormModule {}
