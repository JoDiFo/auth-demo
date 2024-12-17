import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductFormComponent, AuthFormComponent, ProfilePopupComponent],
})
export class AppComponent {
  username: string = '';
  password: string = '';
}
