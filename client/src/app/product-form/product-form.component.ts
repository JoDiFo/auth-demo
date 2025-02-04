import { Component } from '@angular/core';
import { UpdateEmitter } from 'auth-lib';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent extends UpdateEmitter {
  productName: string = '';
  productPrice: string = '';
  productType: string = '';
  productDescription: string = '';

  constructor() {
    super();
  }
}
