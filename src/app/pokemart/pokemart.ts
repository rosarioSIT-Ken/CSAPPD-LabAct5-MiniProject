import { Component, inject, signal, computed } from '@angular/core';
import { PokemartService } from '../services/pokemart.service';
import { CartService } from '../services/cart.service';
import { MartItem } from '../models/product';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class Pokemart {
  private martService = inject(PokemartService);
  private cartService = inject(CartService);

  items = this.martService.items;
  categories = this.martService.categories;

  activeCategory = signal<string>('All');
  broken = signal<number[]>([]);

  // Computed: only the items matching the active category
  visibleItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.items() : this.items().filter(i => i.category === cat);
  });

  setCategory = (cat: string): void => {
    this.activeCategory.set(cat);
  };

  onAdd = (item: MartItem): void => {
    this.cartService.add({
      id: 'item-' + item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      subtitle: item.category,
      kind: 'Item'
    });
  };

  onImageError = (id: number): void => {
    this.broken.update(current => current.includes(id) ? current : [...current, id]);
  };

  isBroken = (id: number): boolean => this.broken().includes(id);
}
