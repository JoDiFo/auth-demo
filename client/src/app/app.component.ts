import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { IUser } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductFormComponent, AuthFormComponent, ProfilePopupComponent],
})
export class AppComponent {
  user: IUser = {username: "", password: ""}

  handleSubmitUser(user: IUser) {
    this.user = user
  }
}
