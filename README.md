# getir-frontend-assignment
A simple product listing React app.

<img src="https://i.ibb.co/Q6b9LR7/Screen-Shot-2021-10-31-at-20-43-09.png" alt="App Image">

## Documentation
### Composition and Atomic Design
Composition is indeed one of the crucial pillars of React programming. To achieve this neat goal I utilized [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/). I was careful about not exceeding a predefined number of lines in any function to increase readability and maintainability.
### Handling API Requests
I improved my view of the idea of handling API requests. I, first, created two `Adapter` interfaces for `Item` and `Company` which extend `ApiAdapter`. `ApiAdapter` is an empty interface and its sole purpose is to enforce programmers to keep in mind that interfaces that extend this interface should conduct API calls. In a way, it is like the `@PureFunction` annotation. In these two adapters, I have defined methods I will need in the future. Then I created `modals` to increase the typing system and to get more autocomplete hints. Then I've created two concrete implementations of these adapters. I pondered the structure of this adapter pattern in detail. After a time, I realized I would need no more of it.
### Constructing a Store
After handling the API bridge, I've started shaping an idea for the store. I've written the structure on paper. Then I put in work. I've not been using Redux for a while, so I was a bit rusty. I saw Redux Toolkit and gave it a shot. Learning it was comparably easier than the old Redux. So after getting the basics, I have created actions, reducers, and store structure. I was completely convinced that it would be enough.
### Forging Components
The way for me to create components has always been like this: First I look upon the design document until there is no gap in my mind about the component structure. Then I think about which one of those are atoms and which one of those are composed of the atoms, etc. It's been like this in this case too. I've first written the left filter part starting from the atoms until the organisms are formed. Then repeated the same process for other organisms until nothing is left.
### Filtering
Filtering was in the heart of the application since nearly all functionality was relying on it. So I've spent most of my time trying to find a method to implement it in the best way possible. Luckily I have created a filter function before. And I have used `debounce` to reduce the number of renders. However, there were some obstacles. First I tried to use number indices to update the store based on the filter action. That was easy but not efficient and highly prone to cause major bugs in the application. Then a subtle idea kindled in my mind about using string indices. It was perfect for the scenario. I didn't lose the tract of the searched item even though its index was changed. So this very solution has sealed the filtering problem.
### Custom Hooks
The domain of the application was not that tremendous. So using a custom hook may seem like a bit too much. Yet I need some of them for detecting mobile screens and getting an Api response. There are four custom hooks I've created for the application:
#### 1. `useApi`
```ts
export type ApiReturnType<T> = BinaryTuple<T, boolean>;

export default function useApi<T>(
  apiCall: () => Promise<T>,
  init: T,
  shouldUpdatePageCount = false
): ApiReturnType<T> {
  const [apiData, setApiData] = useState(init);
  const [isResponseEmpty, setResponseEmpty] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    apiCall().then((response) => {
      setApiData(response);
      if (shouldUpdatePageCount) {
        const modifiedResponse: BinaryTuple<Item[], number> = response as any;
        setResponseEmpty(modifiedResponse[0].length === 0);
        dispatch(
          updatePageCount(Math.ceil(modifiedResponse[1] / ITEM_PER_PAGE))
        );
      }
    });
  }, [apiCall, shouldUpdatePageCount, dispatch]);
  return [apiData, isResponseEmpty];
}
```
This hook is the bread and butter for the app considering nearly all components rely on Api calls. But this one does more than this. If the third parameter `shouldUpdatePageCount` is given `true` than this hook will update `isResponseEmpty` value based on a response header which is sent from the server `X-Total-Count` and update `pageCount` according to this value.
#### 2. useMobile
```ts
export function useMobile() {
  const [isMobile, setMobile] = useState(false);
  const detectDevice = useCallback(() => {
    const currentWidth = window.innerWidth;
    setMobile(currentWidth < tabletSize);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', detectDevice);
    detectDevice();
    return () => window.removeEventListener('resize', detectDevice);
  }, [detectDevice]);
  return isMobile;
}
```
A special hook that detects if the current device is a mobile screen using window width and a predefined table size(768px) to update some of the parts in the application for mobile devices. (*Hint*: It's a special implementation of the [useWindowSize](https://usehooks.com/useWindowSize/) hook)
#### 3. useStateWithProp
```ts
export default function useStateWithProp<T = any>(
  propValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(propValue);
  useEffect(() => {
    setValue(propValue);
  }, [propValue]);
  return [value, setValue];
}
```
A specialized version of `useState` to get the fresh state every time when prop changed.
### Library API
```ts
ArrayUtils.sum(arr: number[]): number;
```
Adds all elements in the array together and returns the result.

```ts
ArrayUtils.isEmpty<T>(arr: T[]): boolean;
```
Decides if an array is empty.

```ts
ArrayUtils.mapToArray<V = number>(map: EntityMap<V>): BinaryTuple<string, V>[];
```
Takes an object(EntityMap) and returns the array representation (array of tuples) of the map.

```ts
ArrayUtils.range(start: number, end: number): number[];
```
Returns a range, an array starting from `start` and increments until `end` including.

```ts
getImageUrl(imageName: string): string;
getSvgUrl(svgName: string): string;
```
Returns resource url with the given name.

```ts
pixelize(num: number): string;
```
Converts a number to a pixel value. Like `3` to `'3px'`.

```ts
handleOnCondition(cond: boolean, fn: GenericFunction, args?: any[]): (() => void | null);
```
Runs a function on the condition. If condition is not met then runs a null function.
