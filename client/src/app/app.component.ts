import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { SERVER_URL } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductFormComponent, AuthFormComponent, ProfilePopupComponent],
})
export class AppComponent {
  token: string | null = null;

  handleLogout() {
    this.token = null;
  }

  handleSubmitUser(token: string) {
    this.token = token;
  }

  onUserAction() {
    fetch(SERVER_URL + '/api/Token/CheckTokenTime')
      .then((res) => res.json())
      .then((data: { timeRemaining: number }) => {
        if (data.timeRemaining <= 0) {
          fetch(SERVER_URL + '/api/Auth/Logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          })
            .then(() => this.handleLogout())
            .catch(console.error);
        }
      })
      .catch(console.error);
  }
}
