import { Component } from '@angular/core';
import {FormComponent} from "./form/form.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormComponent]
})
export class AppComponent {
  title = 'client';
}
