import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  quantity: number = 1;

  incrementQuantity(): void {
    this.quantity += 1;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
