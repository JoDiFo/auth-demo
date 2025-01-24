import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { DataFetchService } from './services/DataFetchService';
import { TokenService } from './services/TokenService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ProductFormComponent,
    AuthFormComponent,
    ProfilePopupComponent,
    DataFetchService,
    TokenService,
  ],
})
export class AppComponent {
  token: string | null = null;

  constructor(
    protected dataFetchService: DataFetchService,
    protected tokenService: TokenService
  ) {}

  handleLogout() {
    this.token = null;
  }

  handleSubmitUser(token: string) {
    this.token = token;
  }

  onUserAction() {
    this.tokenService.isTokenValid(this.token).then((isValid) => {
      if (isValid) {
        this.tokenService.getRefreshedToken(this.token).then((data) => {
          this.token = data ? data.token : null;
        });
      } else {
        this.dataFetchService.logout();
        this.token = null;
      }
    });
  }
}
