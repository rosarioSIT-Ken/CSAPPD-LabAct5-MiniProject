import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private cartService = inject(CartService);

  wordmark = 'POKEDEX';
  notice = 'Free nationwide delivery on orders over P5,000';


  cartCount = this.cartService.totalQuantity;

  menuOpen = signal<boolean>(false);

  toggleMenu = (): void => {
    this.menuOpen.update(v => !v);
  };

  closeMenu = (): void => {
    this.menuOpen.set(false);
  };
}
