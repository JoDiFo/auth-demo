import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  templateUrl: './update-emitter.component.html',
})
export class UpdateEmitter implements OnInit {
  @Output() onAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    fromEvent(document, 'keyup')
      .pipe(
        debounceTime(300),
        tap(() => this.onAction.emit())
      )
      .subscribe(() => {});
  }
}
