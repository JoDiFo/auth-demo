import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { IRefreshTime } from './types';
import { DataFetchService } from './services/DataFetchService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ProductFormComponent,
    AuthFormComponent,
    ProfilePopupComponent,
    DataFetchService,
  ],
})
export class AppComponent {
  token: string | null = null;

  constructor(protected dataFetchService: DataFetchService) {}

  handleLogout() {
    this.token = null;
  }

  handleSubmitUser(token: string) {
    this.token = token;
  }

  onUserAction() {
    if (!this.token) return;

    this.dataFetchService
      .checkTokenTime(this.token)
      .then((res) => res.json())
      .then((data: IRefreshTime) => {
        if (data.timeRemaining <= 0) {
          this.dataFetchService
            .logout()
            .then(() => {
              this.token = null;
            })
            .catch(console.error);
        } else {
          if (!this.token) return;

          this.dataFetchService
            .refreshToken(this.token)
            .then((res) => res.json())
            .then((data: { token: string }) => {
              this.token = data.token;
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }
}
