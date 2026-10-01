import { Component, input, output } from '@angular/core';
import { MartItem } from '../models/mart-item';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  // Modern signal input
  item = input.required<MartItem>();

  // Modern signal output
  added = output<MartItem>();

  onAdd = (): void => {
    this.added.emit(this.item());
  };
}
