import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Hoenn } from './hoenn/hoenn';
import { Pokemart } from './pokemart/pokemart';
import { Cart } from './cart/cart';
import { Products } from './products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: Home },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: 'hoenn', component: Hoenn },
  { path: 'products', component: Products },
  { path: 'pokemart', component: Pokemart },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: 'shop' }
];
