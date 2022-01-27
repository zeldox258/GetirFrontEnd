import { createAction } from '@reduxjs/toolkit';

export type ItemType = 'mug' | 'shirt';

export enum Sorting {
  NO_FILTER = '',
  PRICE_LOW_TO_HIGH = '_sort=price&_order=asc&',
  PRICE_HIGH_TO_LOW = '_sort=price&_order=desc&',
  NEW_TO_OLD = '_sort=added&_order=desc&',
  OLD_TO_NEW = '_sort=added&_order=asc&',
}

export interface Filter {
  sorting: Sorting;
  itemType: ItemType;
  tag: string;
  brand: string;
}
 
export const updateFilter = createAction<Partial<Filter>>('filter/update');
