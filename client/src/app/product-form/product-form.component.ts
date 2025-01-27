import { Component, Input } from '@angular/core';
import { UpdateEmitter } from '../update-emitter/update-emitter.component';

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

  @Input() token!: string | null;

  constructor() {
    super();
  }
}
