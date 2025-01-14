import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IUser, IUserData } from '../types';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css'],
})
export class ProfilePopupComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.token) {
      this.loading = true;

      fetch(SERVER_URL + '/api/Token/GetUserData' + `?token=${this.token}`)
        .then((res) => res.json())
        .then((data: IUserData) => {
          this.username = data.username;
          this.passwordHash = data.passwordHash;
        })
        .catch(console.error)
        .finally(() => {
          this.loading = false;
        });
    }
  }

  ngOnInit(): void {
    this.loading = true;

    if (this.token) {
      fetch(SERVER_URL + '/api/Token/GetUserData' + `?token=${this.token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then((res) => res.json())
        .then((data: IUserData) => {
          this.username = data.username;
          this.passwordHash = data.passwordHash;
        })
        .catch(console.error)
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
