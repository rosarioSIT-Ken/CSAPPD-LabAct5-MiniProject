import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CartLine } from '../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  private cartService = inject(CartService);


  lines = this.cartService.cart;
  subtotal = this.cartService.subtotal;
  shipping = this.cartService.shipping;
  total = this.cartService.total;
  totalQuantity = this.cartService.totalQuantity;
  isEmpty = this.cartService.isEmpty;
  freeShipping = this.cartService.freeShipping;
  amountToFreeShipping = this.cartService.amountToFreeShipping;
  shippingRegion = this.cartService.shippingRegion;
  receipt = this.cartService.receipt;

  broken = signal<string[]>([]);
  regions = ['Calabarzon', 'Metro Manila', 'Central Luzon', 'Visayas', 'Mindanao'];

  addOne = (line: CartLine): void => {
    this.cartService.add(line.product);
  };

  removeOne = (id: string): void => {
    this.cartService.removeOne(id);
  };

  removeLine = (id: string): void => {
    this.cartService.removeLine(id);
  };

  clearCart = (): void => {
    this.cartService.clearCart();
  };

  checkout = (): void => {
    this.cartService.checkout();
  };

  dismissReceipt = (): void => {
    this.cartService.dismissReceipt();
  };

  onRegionChange = (event: Event): void => {
    this.cartService.setRegion((event.target as HTMLSelectElement).value);
  };

  onImageError = (id: string): void => {
    this.broken.update(current => current.includes(id) ? current : [...current, id]);
  };

  isBroken = (id: string): boolean => this.broken().includes(id);
}
