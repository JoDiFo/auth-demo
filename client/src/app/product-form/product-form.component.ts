import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Input() token!: string | null;

  @Output() onAction = new EventEmitter();

  handleNameChange(value: string) {
    if (!this.token) return;

    this.productName = value;

    this.onAction.emit();
  }

  handlePriceChange(value: string) {
    if (!this.token) return;

    this.productPrice = value;

    this.onAction.emit();
  }

  handleTypeChange(value: string) {
    if (!this.token) return;

    this.productType = value;

    this.onAction.emit();
  }

  handleDescriptionChange(value: string) {
    if (!this.token) return;

    this.productDescription = value;

    this.onAction.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
