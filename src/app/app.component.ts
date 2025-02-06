import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import {
  DataFetchService,
  TokenService,
  LocalStorageService,
  AuthFormComponent,
  UpdateBase,
} from 'auth-lib';

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
    LocalStorageService,
  ],
})
export class AppComponent extends UpdateBase {
  constructor(
    protected dataFetchService: DataFetchService,
    protected tokenService: TokenService,
    protected localStorageService: LocalStorageService
  ) {
    super(dataFetchService, tokenService, localStorageService);
  }

  handleLogout() {
    this.token = null;
    this.localStorageService.deleteToken();
  }

  handleSubmitUser(token: string) {
    this.token = token;
    this.localStorageService.setToken(token);
  }
}
