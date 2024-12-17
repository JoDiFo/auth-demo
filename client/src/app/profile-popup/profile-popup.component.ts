import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent implements OnInit {
  @Input() username: string = ""
  @Input() password: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
