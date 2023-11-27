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
  items: iCartItem[];
}

export type CartItemProps = {
  id: string;
  name: string;
  types: string;
  price: number;
  count: number;
  imageUrl: string;
  sizes: string;
};

export interface CategoriesProps {
  category: number;
  onClickCategory: (arg: number) => void;
}

export type SortTypeItem = {
  name: string;
  sortProperty: string;
};

export type PagitationProps = {
  onChangePage: (pageNumber: number) => void;
};

export type PizzaBlockProps = {
  id: string;
  name: string;
  sizes: number[];
  price: number;
  imageUrl: string;
  types: number[];
};

export interface Pizza {
  id: string;
  imageUrl: string;
  name: string;
  types: string[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
  count?: number;
}
export interface iCartItem {
  id: string;
  imageUrl: string;
  name: string;
  size: number;
  type: string;
  price: number;
  count?: number;
}
