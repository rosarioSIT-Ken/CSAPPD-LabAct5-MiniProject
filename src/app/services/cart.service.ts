import { Injectable, signal, computed } from '@angular/core';
import { CartProduct, CartLine, Receipt } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {

  private readonly FREE_SHIPPING_FLOOR = 5000;
  private readonly SHIPPING_FEE = 150;

  
  private lines = signal<CartLine[]>([]);
  private lastOrder = signal<Receipt | null>(null);
  private region = signal<string>('Calabarzon');

  
  cart = this.lines.asReadonly();
  receipt = this.lastOrder.asReadonly();
  shippingRegion = this.region.asReadonly();

 
  subtotal = computed(() =>
    this.lines().reduce((sum, line) => sum + line.product.price * line.quantity, 0)
  );

  totalQuantity = computed(() =>
    this.lines().reduce((sum, line) => sum + line.quantity, 0)
  );

  isEmpty = computed(() => this.lines().length === 0);

  freeShipping = computed(() => this.subtotal() >= this.FREE_SHIPPING_FLOOR);

  shipping = computed(() =>
    this.isEmpty() || this.freeShipping() ? 0 : this.SHIPPING_FEE
  );

  total = computed(() => this.subtotal() + this.shipping());

  amountToFreeShipping = computed(() =>
    Math.max(0, this.FREE_SHIPPING_FLOOR - this.subtotal())
  );

 
  add = (product: CartProduct): void => {
    this.lines.update(current => {
      const found = current.find(line => line.product.id === product.id);
      if (found) {
        return current.map(line =>
          line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  };

  removeOne = (id: string): void => {
    this.lines.update(current =>
      current
        .map(line => line.product.id === id ? { ...line, quantity: line.quantity - 1 } : line)
        .filter(line => line.quantity > 0)
    );
  };

  removeLine = (id: string): void => {
    this.lines.update(current => current.filter(line => line.product.id !== id));
  };

  clearCart = (): void => {
    this.lines.set([]);
  };

  setRegion = (value: string): void => {
    this.region.set(value);
  };

  checkout = (): void => {
    if (this.lines().length === 0) { return; }
    this.lastOrder.set({
      reference: 'PKD-' + Date.now().toString().slice(-6),
      lines: this.lines(),
      total: this.total(),
      placedAt: new Date()
    });
    this.lines.set([]);
  };

  dismissReceipt = (): void => {
    this.lastOrder.set(null);
  };
}
