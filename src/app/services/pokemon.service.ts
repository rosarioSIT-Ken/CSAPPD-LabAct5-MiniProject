import { Injectable, signal, computed } from '@angular/core';
import { Pokemon } from '../models/product';

@Injectable({ providedIn: 'root' })
export class PokemonService {

  
  private kantoList = signal<Pokemon[]>([
    { id: 1, name: 'Charizard', type: 'Fire / Flying', heldItem: 'Charcoal', price: 4200, region: 'Kanto', tag: 'Collector Pick',
      description: 'A proud Fire dragon whose flames melt boulders. It turns its fire on worthy opponents only.',
      image: '/images/pokemon/charizard.jpg' },
    { id: 2, name: 'Pikachu', type: 'Electric', heldItem: 'Light Ball', price: 1800, region: 'Kanto', tag: 'Best Seller',
      description: 'Stores electricity in its cheeks and releases it when startled. The face of the entire series.',
      image: '/images/pokemon/pikachu.jpg' },
    { id: 3, name: 'Gengar', type: 'Ghost / Poison', heldItem: 'Black Sludge', price: 3100, region: 'Kanto', tag: '',
      description: 'Hides in shadows and steals the warmth of anything near it. It grins right before it strikes.',
      image: '/images/pokemon/gengar.jpg' },
    { id: 4, name: 'Snorlax', type: 'Normal', heldItem: 'Chesto Berry', price: 2700, region: 'Kanto', tag: '',
      description: 'Eats four hundred kilograms a day, then sleeps. Children use its belly as a playground.',
      image: '/images/pokemon/snorlax.jpg' },
    { id: 5, name: 'Dragonite', type: 'Dragon / Flying', heldItem: 'Lum Berry', price: 4800, region: 'Kanto', tag: 'Rare',
      description: 'A kind hearted dragon that patrols the open sea and guides lost ships safely back to shore.',
      image: '/images/pokemon/dragonite.jpg' },
    { id: 6, name: 'Alakazam', type: 'Psychic', heldItem: 'Twisted Spoon', price: 3400, region: 'Kanto', tag: '',
      description: 'Its brain never stops growing. It is said to remember everything that has happened to it.',
      image: '/images/pokemon/alakazam.jpg' }
  ]);

 
  private johtoList = signal<Pokemon[]>([
    { id: 7, name: 'Typhlosion', type: 'Fire', heldItem: 'Charcoal', price: 3600, region: 'Johto', tag: '',
      description: 'Hides behind a shimmering heat haze, then sets off blasts that burn everything to ash.',
      image: '/images/pokemon/typhlosion.jpg' },
    { id: 8, name: 'Umbreon', type: 'Dark', heldItem: 'Leftovers', price: 3900, region: 'Johto', tag: 'Best Seller',
      description: 'Evolved under moonlight. The rings along its body glow just before it moves to attack.',
      image: '/images/pokemon/umbreon.jpg' },
    { id: 9, name: 'Tyranitar', type: 'Rock / Dark', heldItem: 'Smooth Rock', price: 5200, region: 'Johto', tag: 'Heavyweight',
      description: 'Strong enough to topple mountains and reshape the land. Its armor turns away almost any hit.',
      image: '/images/pokemon/tyranitar.jpg' },
    { id: 10, name: 'Scizor', type: 'Bug / Steel', heldItem: 'Metal Coat', price: 3300, region: 'Johto', tag: '',
      description: 'Pincers harder than steel. It waves them as a warning before any fight actually begins.',
      image: '/images/pokemon/scizor.jpg' },
    { id: 11, name: 'Lugia', type: 'Psychic / Flying', heldItem: 'Mystic Water', price: 9800, region: 'Johto', tag: 'Legendary',
      description: 'Guardian of the seas. One beat of its wings can stir a storm that lasts forty days.',
      image: '/images/pokemon/lugia.jpg' },
    { id: 12, name: 'Ampharos', type: 'Electric', heldItem: 'Magnet', price: 2500, region: 'Johto', tag: '',
      description: 'The light on its tail can be seen from space. It once carried signals across the region.',
      image: '/images/pokemon/ampharos.jpg' }
  ]);

  
  private hoennList = signal<Pokemon[]>([
    { id: 13, name: 'Blaziken', type: 'Fire / Fighting', heldItem: 'Life Orb', price: 4100, region: 'Hoenn', tag: '',
      description: 'Flames burst from its wrists in a serious fight. It clears a thirty storey building in one leap.',
      image: '/images/pokemon/blaziken.jpg' },
    { id: 14, name: 'Metagross', type: 'Steel / Psychic', heldItem: 'Occa Berry', price: 5400, region: 'Hoenn', tag: 'Collector Pick',
      description: 'Four brains linked as one. It out thinks a supercomputer while pinning a foe with its body.',
      image: '/images/pokemon/metagross.jpg' },
    { id: 15, name: 'Gardevoir', type: 'Psychic / Fairy', heldItem: 'Twisted Spoon', price: 4600, region: 'Hoenn', tag: '',
      description: 'Senses the feelings of its trainer. It will open a small black hole to protect the one it loves.',
      image: '/images/pokemon/gardevoir.jpg' },
    { id: 16, name: 'Salamence', type: 'Dragon / Flying', heldItem: 'Lum Berry', price: 5000, region: 'Hoenn', tag: '',
      description: 'It wished for wings for generations until its cells changed. Now it flies in a joyful rage.',
      image: '/images/pokemon/salamence.jpg' },
    { id: 17, name: 'Rayquaza', type: 'Dragon / Flying', heldItem: 'Life Orb', price: 12000, region: 'Hoenn', tag: 'Legendary',
      description: 'Lives in the ozone layer and has never touched the ground. It settles the fights of land and sea.',
      image: '/images/pokemon/rayquaza.jpg' },
    { id: 18, name: 'Milotic', type: 'Water', heldItem: 'Flame Orb', price: 4400, region: 'Hoenn', tag: 'Rare',
      description: 'Said to be the most beautiful Pokemon. Its scales shift color and calm the anger of anyone near.',
      image: '/images/pokemon/milotic.jpg' }
  ]);


  kanto = this.kantoList.asReadonly();
  johto = this.johtoList.asReadonly();
  hoenn = this.hoennList.asReadonly();

  
  all = computed(() => [...this.kantoList(), ...this.johtoList(), ...this.hoennList()]);

  totalPokemon = computed(() => this.all().length);
}
