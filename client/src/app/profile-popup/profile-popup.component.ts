import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../User';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css'],
})
export class ProfilePopupComponent implements OnInit {
  @Input() user!: IUser | null;

  @Output() onLogout = new EventEmitter();

  handleClick() {
    this.onLogout.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
