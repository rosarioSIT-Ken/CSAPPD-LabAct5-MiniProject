import { Injectable, signal, computed } from '@angular/core';
import { MartItem } from '../models/product';

@Injectable({ providedIn: 'root' })
export class PokemartService {

  // ---- Private signal: the PokeMart stock ----
  private stock = signal<MartItem[]>([
    { id: 101, name: 'Poke Ball', category: 'Poke Balls', price: 200,
      description: 'The standard ball for catching wild Pokemon.', image: '/images/items/poke-ball.jpg' },
    { id: 102, name: 'Great Ball', category: 'Poke Balls', price: 600,
      description: 'A better ball with a higher catch rate than a Poke Ball.', image: '/images/items/great-ball.jpg' },
    { id: 103, name: 'Ultra Ball', category: 'Poke Balls', price: 1200,
      description: 'High performance ball built for catching tough Pokemon.', image: '/images/items/ultra-ball.jpg' },
    { id: 104, name: 'Potion', category: 'Healing', price: 300,
      description: 'Restores 20 HP to a single Pokemon.', image: '/images/items/potion.jpg' },
    { id: 105, name: 'Super Potion', category: 'Healing', price: 700,
      description: 'Restores 60 HP to a single Pokemon.', image: '/images/items/super-potion.jpg' },
    { id: 106, name: 'Hyper Potion', category: 'Healing', price: 1200,
      description: 'Restores 120 HP to a single Pokemon.', image: '/images/items/hyper-potion.jpg' },
    { id: 107, name: 'Revive', category: 'Healing', price: 1500,
      description: 'Revives a fainted Pokemon with half of its HP.', image: '/images/items/revive.jpg' },
    { id: 108, name: 'Antidote', category: 'Status', price: 100,
      description: 'Cures a Pokemon that has been poisoned.', image: '/images/items/antidote.jpg' },
    { id: 109, name: 'Paralyze Heal', category: 'Status', price: 200,
      description: 'Cures a Pokemon that has been paralyzed.', image: '/images/items/paralyze-heal.jpg' },
    { id: 110, name: 'Full Heal', category: 'Status', price: 600,
      description: 'Cures any status problem a Pokemon is suffering from.', image: '/images/items/full-heal.jpg' },
    { id: 111, name: 'Escape Rope', category: 'Field', price: 550,
      description: 'Takes you straight back out of a cave or dungeon.', image: '/images/items/escape-rope.jpg' },
    { id: 112, name: 'Repel', category: 'Field', price: 350,
      description: 'Keeps weak wild Pokemon away for one hundred steps.', image: '/images/items/repel.jpg' }
  ]);

  // ---- Read-only access ----
  items = this.stock.asReadonly();

  // ---- Computed: category list built from the stock itself ----
  categories = computed(() => ['All', ...new Set(this.stock().map(i => i.category))]);
}
