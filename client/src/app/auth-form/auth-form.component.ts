import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @Input() username!: string
  @Input() password!: string

  @Output() usernameChangeEventEmitter = new EventEmitter()
  @Output() passwordChangeEventEmitter = new EventEmitter()

  changeUsername(event: any) {
    this.usernameChangeEventEmitter.emit(event)
  }

  changePassword(event: any) {
    this.passwordChangeEventEmitter.emit(event)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
