import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useStateWithProp<T = any>(
  propValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(propValue);
  useEffect(() => {
    setValue(propValue);
  }, [propValue]);
  return [value, setValue];
}
 
