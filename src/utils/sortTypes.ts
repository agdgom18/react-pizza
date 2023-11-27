import { SortTypeItem } from '../types';

export const sortType: SortTypeItem[] = [
  { name: 'popularity A-Z', sortProperty: 'rating' },
  { name: 'popularity Z-A', sortProperty: '-rating' },
  { name: 'price A-Z', sortProperty: 'price' },
  { name: 'price Z-A', sortProperty: '-price' },
  { name: 'alphabetically A-Z', sortProperty: 'name' },
  { name: 'alphabetically Z-A', sortProperty: '-name' },
];
