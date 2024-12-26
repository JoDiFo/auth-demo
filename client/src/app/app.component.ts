import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { IResponse, IUser } from './types';
import { JwtPayload } from 'jwt-decode';
import { SERVER_URL } from './constants';

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
  time: number = -1;

  handleLogout() {
    this.user = null;
    this.time = -1;
  }

  handleSubmitUser(data: { token: JwtPayload; user: IUser }) {
    this.user = data.user;

    this.time = data.token.exp || -1;

    this.startLogoutTimer();
  }

  onUserAction() {
    if (this.logoutId) {
      clearTimeout(this.logoutId);
      this.startLogoutTimer();
    }
  }

  startLogoutTimer() {
    const timeout = this.time * 1000 - Date.now();

    this.logoutId = setTimeout(() => {
      fetch(SERVER_URL + '/api/Auth/Logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then((res) => {
          this.handleLogout();
          console.log('logout');
          return res.json();
        })
        .then(console.log)
        .catch(console.error);
    }, timeout);
  }
}
