import { Component, input, output, signal, viewChild, ElementRef } from '@angular/core';
import { Pokemon } from '../models/product';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  // Modern signal inputs
  slides = input.required<Pokemon[]>();
  heading = input<string>('');

  // Modern signal output
  added = output<Pokemon>();

  // The scrolling element
  private track = viewChild.required<ElementRef<HTMLDivElement>>('track');

  atStart = signal<boolean>(true);
  atEnd = signal<boolean>(false);
  broken = signal<number[]>([]);

  scrollLeft = (): void => this.slide(-1);
  scrollRight = (): void => this.slide(1);

  private slide = (direction: number): void => {
    const el = this.track().nativeElement;
    el.scrollBy({ left: direction * (el.clientWidth / 2), behavior: 'smooth' });
  };

  onScroll = (): void => {
    const el = this.track().nativeElement;
    this.atStart.set(el.scrollLeft <= 4);
    this.atEnd.set(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  onAdd = (mon: Pokemon): void => {
    this.added.emit(mon);
  };

  onImageError = (id: number): void => {
    this.broken.update(current => current.includes(id) ? current : [...current, id]);
  };

  isBroken = (id: number): boolean => this.broken().includes(id);
}
