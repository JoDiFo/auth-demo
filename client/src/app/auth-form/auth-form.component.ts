import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() username!: string
  @Input() password!: string

  @Output() usernameChange = new EventEmitter()
  @Output() passwordChange = new EventEmitter()

  changeUsername(value: string) {
    this.username = value
    this.usernameChange.emit(this.username)
  }

  changePassword(value: string) {
    this.password = value
    this.passwordChange.emit(this.password)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
