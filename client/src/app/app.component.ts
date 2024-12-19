import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { IUser } from './User';

const LOGOUT_TIMEOUT = 7000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductFormComponent, AuthFormComponent, ProfilePopupComponent],
})
export class AppComponent {
  user: IUser | null = null;
  logoutId: any | null = null;

  handleLogout() {
    this.user = null;
  }

  handleSubmitUser(user: IUser) {
    this.user = user;

    this.startLogoutTimer();
  }

  onUserAction() {
    if (this.logoutId) {
      clearTimeout(this.logoutId);
      this.startLogoutTimer();
    }
  }

  startLogoutTimer() {
    this.logoutId = setTimeout(() => {
      this.user = null;
    }, LOGOUT_TIMEOUT);
  }
}
