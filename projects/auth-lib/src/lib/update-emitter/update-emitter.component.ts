import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  templateUrl: './update-emitter.component.html',
})
export class UpdateEmitter implements OnInit {
  @Output() onAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    merge(fromEvent(document, 'keyup'), fromEvent(document, 'change'))
      .pipe(
        debounceTime(300),
        tap(() => this.onAction.emit())
      )
      .subscribe(() => {});
  }
}
