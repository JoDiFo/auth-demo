import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { FormsModule } from '@angular/forms';
import { AuthFormModule } from 'auth-lib';

@NgModule({
  declarations: [AppComponent, ProductFormComponent, ProfilePopupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AuthFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
