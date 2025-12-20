import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  activeWeight: string = '250g';
  quantity: number = 1;
  reviews = [1,2,4,5,4,6];

  setActiveWeight(weight: string): void {
    this.activeWeight = weight;
  }

  incrementQuantity(): void {
    this.quantity += 1;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
