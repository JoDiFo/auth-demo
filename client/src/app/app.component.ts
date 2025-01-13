import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { IResponse, IUser } from './types';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { SERVER_URL } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductFormComponent, AuthFormComponent, ProfilePopupComponent],
})
export class AppComponent {
  user: IUser | null = null;
  refresh: string = '';

  handleLogout() {
    this.user = null;
  }

  handleSubmitUser(data: { access: JwtPayload; refresh: string; user: IUser }) {
    this.user = data.user;
    this.refresh = data.refresh;
  }

  onUserAction() {
    fetch(SERVER_URL + '/api/Token/CheckTokenTime')
      .then((res) => res.json())
      .then(
        (data: { expiration: string; timeRemainingMilliSeconds: number }) => {
          if (data.timeRemainingMilliSeconds <= 0) {
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
          } else {
            fetch(
              SERVER_URL +
                '/api/Token/RefreshTokenTime' +
                `?refreshToken=${this.refresh}`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8',
                },
              }
            )
              .then((res) => res.json())
              .then((data: IResponse) => {
                this.refresh = data.refresh;
              })
              .catch(console.error);
          }
        }
      )
      .catch(console.error);
  }
}
