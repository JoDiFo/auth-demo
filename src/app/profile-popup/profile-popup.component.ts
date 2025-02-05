import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IUserData } from '../../../projects/auth-lib/src/lib/types';
import { DataFetchService } from 'auth-lib';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css'],
  providers: [DataFetchService],
})
export class ProfilePopupComponent implements OnInit, OnChanges {
  username: string = '';
  passwordHash: string = '';

  loading: boolean = false;

  @Input() token!: string | null;

  @Output() onLogout = new EventEmitter();

  constructor(protected dataFetchService: DataFetchService) {}

  handleClick() {
    this.dataFetchService
      .logout()
      .then(() => this.onLogout.emit())
      .catch(console.error);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.token) {
      this.loading = true;

      this.dataFetchService
        .getUserData(this.token)
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
      this.dataFetchService
        .getUserData(this.token)
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
