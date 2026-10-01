import { Component, inject } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { PokemonService } from '../services/pokemon.service';
import { CartService } from '../services/cart.service';
import { Pokemon } from '../models/product';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [Carousel],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class Hoenn {
  private pokemonService = inject(PokemonService);
  private cartService = inject(CartService);

  regionName = 'Hoenn Region';
  slides = this.pokemonService.hoenn;

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
