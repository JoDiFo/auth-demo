import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../User';

const TIMEOUT = 2000;

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

  handleSubmit() {
    if (!this.username || !this.password) {
      return;
    }

    const user: IUser = {
      username: this.username,
      password: this.password,
    };

    this.username = '';
    this.password = '';

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.submitUser.emit(user);
    }, TIMEOUT);
  }

  constructor() {}

  ngOnInit(): void {}
}
