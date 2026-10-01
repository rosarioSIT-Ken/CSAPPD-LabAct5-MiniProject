export interface Pokemon {
  id: number;
  name: string;
  type: string;
  heldItem: string;
  description: string;
  price: number;
  region: string;
  tag: string;
  image: string;
}

export interface MartItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

// Anything that is allowed in the cart
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  subtitle: string;
  kind: string;
}

export interface CartLine {
  product: CartProduct;
  quantity: number;
}

export interface Receipt {
  reference: string;
  lines: CartLine[];
  total: number;
  placedAt: Date;
}
