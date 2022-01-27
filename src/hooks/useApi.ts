import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITEM_PER_PAGE } from '../api/item';
import Item from '../api/modals/Item';
import { updatePageCount } from '../store/actions/page-count';
import { BinaryTuple } from '../utils/common';

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
