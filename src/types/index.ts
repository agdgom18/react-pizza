export interface iPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  count?: number;
}

export interface iCartSlice {
  totalPrice: number;
  items: Array<{ id: number; count: number; price: number }>;
}

export interface iCartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  types: string;
  sizes: number[];
}
