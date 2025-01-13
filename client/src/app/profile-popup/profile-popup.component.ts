import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../types';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css'],
})
export class ProfilePopupComponent implements OnInit {
  username: string = '';
  passwordHash: string = '';

  loading: boolean = false;

  @Input() token!: string | null;

  @Output() onLogout = new EventEmitter();

  handleClick() {
    fetch(SERVER_URL + '/api/Auth/Logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(() => this.onLogout.emit())
      .catch(console.error);
  }

  constructor() {}

  ngOnInit(): void {
    this.loading = true;

    if (this.token) {
      fetch(SERVER_URL + '/api/Auth/GetUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then((res) => res.json())
        .then((data: IUser) => {
          this.username = data.name;
          this.passwordHash = data.password;
        })
        .catch(console.error)
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
