import { Filter } from '../store/actions/filter';
import { BinaryTuple, EntityMap } from '../utils/common';
import ItemAdapter from './adapters/item-adapter';
import { API_URL } from './common';
import Item from './modals/Item';

export const itemPath = 'items';
export const ITEM_PER_PAGE = 16; 

export default class ItemAPI implements ItemAdapter {
  public static instance = new ItemAPI();

  private constructor() {}

  getAllItems = async () => {
    const response = await fetch(API_URL.concat(itemPath));
    return (await response.json()) as Item[];
  };

  getFilteredItems = async (filter: Filter) => {
    const response = await fetch(
      `${API_URL.concat(itemPath)}?${filter.sorting}&itemType=${
        filter.itemType
      }`
        .concat(filter.brand ? `&manufacturer=${filter.brand}` : '')
        .concat(filter.tag ? `&tags_like=${filter.tag}` : '')
    );
    return (await response.json()) as Item[];
  };

  getFilteredItemsByPageId = async (pageId: number, filter: Filter) => {
    const response = await fetch(
      `${API_URL.concat(itemPath)}?${
        filter.sorting
      }_page=${pageId}&_limit=${ITEM_PER_PAGE}&itemType=${filter.itemType}`
        .concat(filter.brand ? `&manufacturer=${filter.brand}` : '')
        .concat(filter.tag ? `&tags_like=${filter.tag}` : '')
    );
    return [
      (await response.json()) as Item[],
      Number(response.headers.get('X-Total-Count')),
    ] as BinaryTuple<Item[], number>;
  };

  getTagMap = async () => {
    const response = await fetch(API_URL.concat(itemPath));
    return ((await response.json()) as Item[])
      .map((item) => item.tags)
      .reduce(
        (acc, tagSet) =>
          tagSet.reduce(
            (_, tag) =>
              (acc = {
                ...acc,
                [tag]: acc[tag] ? acc[tag] + 1 : 1,
              }),
            {}
          ),
        {} as EntityMap
      );
  };

  getTotalNumberOfFilteredItems = async (filter: Filter) => {
    const filteredItems = await this.getFilteredItems(filter);
    return filteredItems.length;
  };
}
