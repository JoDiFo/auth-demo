import { Component } from '@angular/core';
import {
  DataFetchService,
  TokenService,
  LocalStorageService,
} from '../services';

@Component({
  selector: 'update-base',
  templateUrl: './update-base.component.html',
  providers: [DataFetchService, TokenService, LocalStorageService],
})
export class UpdateBase {
  token: string | null;

  constructor(
    protected dataFetchService: DataFetchService,
    protected tokenService: TokenService,
    protected localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  onUserAction() {
    const token = this.localStorageService.getToken();

    if (!token) return;

    this.tokenService.isTokenValid(token).then((isValid) => {
      if (isValid) {
        this.tokenService.getRefreshedToken(token).then((newToken) => {
          this.localStorageService.setToken(newToken);
          this.token = newToken;
        });
      } else {
        this.dataFetchService.logout();
        this.localStorageService.deleteToken();
        this.token = null;
      }
    });
  }
}
