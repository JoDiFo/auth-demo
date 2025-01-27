import {
  Component,
  DoCheck,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  templateUrl: './update-emitter.component.html',
})
export class UpdateEmitter implements OnInit, OnChanges, DoCheck {
  @Output() onAction = new EventEmitter();

  handleUserAction() {
    this.onAction.emit();
  }

  constructor() {}

  ngOnInit(): void {
    of(Object.keys(this)).forEach((property) => property);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngDoCheck(): void {
    Object.keys(this).map(console.log);
  }
}
