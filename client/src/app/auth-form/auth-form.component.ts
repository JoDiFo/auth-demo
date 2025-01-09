import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IResponse, IUser, TFormMode } from '../types';
import { SERVER_URL } from '../constants';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  username: string = '';
  password: string = '';

  isLoading: boolean = false;

  mode: TFormMode = "signup"

  @Output() submitUser = new EventEmitter();

  handleLogin() {
    if (!this.username || !this.password) {
      return;
    }

    const user: Omit<IUser, 'id'> = {
      name: this.username,
      password: this.password,
      description: 'some',
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch(SERVER_URL + '/api/Auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data: IResponse) => {
        console.log(data);

        const token = jwtDecode(data.token);
        console.log('token', token);

        this.submitUser.emit({ token, user });
      })
      .catch(console.error)
      .finally(() => {
        this.isLoading = false;
      });
  }

  handleRegister() {
    if (!this.username || !this.password) {
      return;
    }

    const user: Omit<IUser, 'id'> = {
      name: this.username,
      password: this.password,
      description: 'some',
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch(SERVER_URL + '/api/Registration/Registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data: IResponse) => {
        console.log(data);

        const token = jwtDecode(data.token);
        console.log('token', token);

        this.submitUser.emit({ token, user });
      })
      .catch(console.error)
      .finally(() => {
        this.isLoading = false;
      });
  }

  handleSwitch(mode: TFormMode) {
    this.mode = mode
  }

  constructor() {}

  ngOnInit(): void {}
}
