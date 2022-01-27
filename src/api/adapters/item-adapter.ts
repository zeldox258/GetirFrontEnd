import { Filter } from '../../store/actions/filter';
import { BinaryTuple, EntityMap } from '../../utils/common';
import Item from '../modals/Item';
import ApiAdapter from './api-adapter';
 
export default interface ItemAdapter extends ApiAdapter {
  getAllItems(): Promise<Item[]>;
  getFilteredItems(filter: Filter): Promise<Item[]>;
  getFilteredItemsByPageId(
    pageId: number,
    filter: Filter
  ): Promise<BinaryTuple<Item[], number>>;
  getTagMap(): Promise<EntityMap>;
  getTotalNumberOfFilteredItems(filter: Filter): Promise<number>;
}
