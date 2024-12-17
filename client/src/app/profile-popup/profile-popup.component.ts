import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent implements OnInit {
  username: string = ""
  password: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
