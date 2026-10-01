import { Component, inject } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { PokemonService } from '../services/pokemon.service';
import { CartService } from '../services/cart.service';
import { Pokemon } from '../models/product';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [Carousel],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {
  private pokemonService = inject(PokemonService);
  private cartService = inject(CartService);

  regionName = 'Kanto Region';
  slides = this.pokemonService.kanto;

  onAdded = (mon: Pokemon): void => {
    this.cartService.add({
      id: 'mon-' + mon.id,
      name: mon.name,
      price: mon.price,
      image: mon.image,
      subtitle: mon.type,
      kind: 'Pokemon'
    });
  };
}
