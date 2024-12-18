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

  @Output() submitUser = new EventEmitter();

  handleSubmit() {
    const user: IUser = {
      username: this.username,
      password: this.password,
    };

    this.username = '';
    this.password = '';

    this.submitUser.emit(user);
  }

  constructor() {}

  ngOnInit(): void {}
}
