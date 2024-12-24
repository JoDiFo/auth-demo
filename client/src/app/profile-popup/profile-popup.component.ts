import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../types';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css'],
})
export class ProfilePopupComponent implements OnInit {
  @Input() user!: IUser | null;

  @Output() onLogout = new EventEmitter();

  handleClick() {
    fetch(SERVER_URL + '/api/Auth/Logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => {
        this.onLogout.emit();

        return res.json();
      })
      .then(console.log)
      .catch(console.error);
  }

  constructor() {}

  ngOnInit(): void {}
}
