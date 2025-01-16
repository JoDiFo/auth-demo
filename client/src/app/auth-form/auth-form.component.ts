import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IResponse, IUser, TFormMode } from '../types';
import { ESeverEndpoints, SERVER_URL } from '../constants';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  username: string = '';
  password: string = '';

  usernameError: string = '';

  isLoading: boolean = false;

  mode: TFormMode = 'signup';

  @Output() submitUser = new EventEmitter();

  handleUsernameChange(username: string) {
    const matchedSymbols = username.match(/([^A-Za-z0-9])/g);

    if (matchedSymbols) {
      this.usernameError = `You can not use this symbol ${matchedSymbols}`;
    } else {
      this.usernameError = '';
      this.username = username;
    }
  }

  handleLogin() {
    if (this.usernameError) {
      return;
    }

    if (!this.username || !this.password) {
      return;
    }

    const user: IUser = {
      name: this.username,
      password: this.password,
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch(`${SERVER_URL}${ESeverEndpoints.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data: IResponse) => {
        this.submitUser.emit(data.token);
      })
      .catch(console.error)
      .finally(() => {
        this.isLoading = false;
      });
  }

  handleRegister() {
    if (this.usernameError) {
      return;
    }

    if (!this.username || !this.password) {
      return;
    }

    const user: IUser = {
      name: this.username,
      password: this.password,
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch(`${SERVER_URL}${ESeverEndpoints.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data: IResponse) => {
        const token = jwtDecode(data.token);

        this.submitUser.emit({ token, user });
      })
      .catch(console.error)
      .finally(() => {
        this.isLoading = false;
      });
  }

  handleSwitch(mode: TFormMode) {
    this.mode = mode;
  }

  constructor() {}

  ngOnInit(): void {}
}
