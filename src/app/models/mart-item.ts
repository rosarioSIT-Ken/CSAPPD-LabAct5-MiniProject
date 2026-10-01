export interface MartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  emoji: string;
  description: string;
}

export interface CartLine {
  item: MartItem;
  quantity: number;
}
