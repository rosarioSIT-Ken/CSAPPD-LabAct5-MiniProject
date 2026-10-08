import { Component, input, output } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  
  pokemon = input.required<Pokemon>();
  isOpen = input<boolean>(false);

 
  detailsToggled = output<number>();

  onToggle = (): void => {
    this.detailsToggled.emit(this.pokemon().id);
  };
}
