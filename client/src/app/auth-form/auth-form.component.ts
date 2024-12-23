import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../User';

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

    const user: IUser = {
      id: 0,
      name: this.username,
      password: this.password,
      description: 'some',
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch('http://192.168.5.32:5433/api/Auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);

      this.isLoading = false;

      if (res.status < 400) {
        this.submitUser.emit(user);
      } else {
        console.error('some error');
      }
      return res.json()
    }).then(console.log);
  }

  handleRegister() {
    if (!this.username || !this.password) {
      return;
    }

    const user: IUser = {
      id: 0,
      name: this.username,
      password: this.password,
      description: 'some',
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    fetch('http://192.168.5.32:5433/api/Registration/Registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);

      this.isLoading = false;

      if (res.status < 400) {
        this.submitUser.emit(user);
      } else {
        console.error('some error');
      }
      return res.json()
    }).then(console.log);
  }

  constructor() {}

  ngOnInit(): void {}
}
