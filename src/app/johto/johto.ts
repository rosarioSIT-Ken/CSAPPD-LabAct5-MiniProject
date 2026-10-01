import { Component, inject } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { PokemonService } from '../services/pokemon.service';
import { CartService } from '../services/cart.service';
import { Pokemon } from '../models/product';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [Carousel],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class Johto {
  private pokemonService = inject(PokemonService);
  private cartService = inject(CartService);

  regionName = 'Johto Region';
  slides = this.pokemonService.johto;

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
