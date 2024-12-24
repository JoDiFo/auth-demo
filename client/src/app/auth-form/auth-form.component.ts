import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../types';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  username: string = '';
  password: string = '';

  isLoading: boolean = false;

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
      .then((res) => {
        this.submitUser.emit(user);

        return res.json();
      })
      .then(console.log)
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
      .then((res) => {
        this.submitUser.emit(user);

        return res.json();
      })
      .then(console.log)
      .catch(console.error)
      .finally(() => {
        this.isLoading = false;
      });
  }

  constructor() {}

  ngOnInit(): void {}
}
