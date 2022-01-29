import Item from '../api/modals/Item';

export class ArrayUtils {
  static sum(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  static isEmpty<T = any>(arr: T[]): boolean {
    return arr.length === 0;
  }

  static mapToArray<V = number>(map: EntityMap<V>): BinaryTuple<string, V>[] {
    return Object.keys(map).map((key) => [key, map[key]]);
  }

  static range(start: number, end: number): number[] {
    return Array.from({ length: end }, (_, i) => i + start);
  }
}

export const assetUrl = process.env.PUBLIC_URL.concat('/assets/');
export const getImageUrl = (imageName: string) =>
  assetUrl.concat(`images/${imageName}.png`);
export type EntityMap<V = number> = Record<string, V>;
export const getSvgUrl = (svgName: string) =>
  assetUrl.concat(`icons/${svgName}.svg`);
export const pixelize = (num: number) => String(num).concat('px');
export type GenericFunction<R = void> = (...args: any[]) => R;
export type HandlerFunction = () => void;
export type BinaryTuple<T, U> = [T, U];
export const nullFn = () => null;

export interface CompanyMapPayload {
  slug: string;
  count: number;
}

export interface ShoppingCartPayload {
  item: Item;
  count: number;
}

export type Nullable<T> = T | null;

export const handleOnCondition = (cond: boolean, fn: GenericFunction, args?: any[]) => () =>
  cond ? fn(...args || []) : nullFn();
