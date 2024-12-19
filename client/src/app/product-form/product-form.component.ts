import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productName: string = '';
  productPrice: string = '';
  productType: string = '';
  productDescription: string = '';

  @Output() onAction = new EventEmitter()

  emitAction() {
    this.onAction.emit()
  }

  constructor() {}

  ngOnInit(): void {}
}
