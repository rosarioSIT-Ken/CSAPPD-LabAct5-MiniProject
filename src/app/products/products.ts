import { Component, inject, signal, computed } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemartService } from '../services/pokemart.service';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  private pokemonService = inject(PokemonService);
  private martService = inject(PokemartService);
  private cartService = inject(CartService);

  // Local UI state
  filter = signal<string>('All');
  selected = signal<string[]>([]);
  broken = signal<string[]>([]);

  filters = ['All', 'Pokemon', 'Item'];

  // Computed: one flat catalogue built from both services
  catalogue = computed<CartProduct[]>(() => {
    const mons = this.pokemonService.all().map(m => ({
      id: 'mon-' + m.id,
      name: m.name,
      price: m.price,
      image: m.image,
      subtitle: m.region,
      kind: 'Pokemon'
    }));

    const items = this.martService.items().map(i => ({
      id: 'item-' + i.id,
      name: i.name,
      price: i.price,
      image: i.image,
      subtitle: i.category,
      kind: 'Item'
    }));

    return [...mons, ...items];
  });

  visible = computed(() => {
    const f = this.filter();
    return f === 'All' ? this.catalogue() : this.catalogue().filter(p => p.kind === f);
  });

  selectedCount = computed(() => this.selected().length);

  selectedTotal = computed(() =>
    this.catalogue()
      .filter(p => this.selected().includes(p.id))
      .reduce((sum, p) => sum + p.price, 0)
  );

  setFilter = (value: string): void => {
    this.filter.set(value);
  };

  toggle = (id: string): void => {
    this.selected.update(current =>
      current.includes(id) ? current.filter(x => x !== id) : [...current, id]
    );
  };

  isSelected = (id: string): boolean => this.selected().includes(id);

  addOne = (product: CartProduct): void => {
    this.cartService.add(product);
  };

  addSelected = (): void => {
    this.catalogue()
      .filter(p => this.selected().includes(p.id))
      .forEach(p => this.cartService.add(p));
    this.selected.set([]);
  };

  clearSelection = (): void => {
    this.selected.set([]);
  };

  onImageError = (id: string): void => {
    this.broken.update(current => current.includes(id) ? current : [...current, id]);
  };

  isBroken = (id: string): boolean => this.broken().includes(id);
}
