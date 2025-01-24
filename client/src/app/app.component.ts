import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { DataFetchService } from './services/DataFetchService';
import { TokenService } from './services/TokenService';
import { LocalStorageService } from './services/LocalStorageService';
import { UpdateBase } from './update-base/update-base.component';

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
  token: string | null;

  constructor(
    protected dataFetchService: DataFetchService,
    protected tokenService: TokenService,
    protected localStorageService: LocalStorageService
  ) {
    super(dataFetchService, tokenService, localStorageService);
    this.token = localStorageService.getToken();
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
