import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { PokemonService } from '../services/pokemon.service';
import { CartService } from '../services/cart.service';
import { Pokemon } from '../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private pokemonService = inject(PokemonService);
  private cartService = inject(CartService);

  featured = this.pokemonService.all;
  kanto = this.pokemonService.kanto;
  johto = this.pokemonService.johto;
  hoenn = this.pokemonService.hoenn;
  totalPokemon = this.pokemonService.totalPokemon;

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
