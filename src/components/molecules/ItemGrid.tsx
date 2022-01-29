import { FC, Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ItemAPI from '../../api/item';
import Item from '../../api/modals/Item';
import useApi, { ApiReturnType } from '../../hooks/useApi';
import { selectFilter, selectPageId } from '../../store/selectors';
import { ArrayUtils, BinaryTuple } from '../../utils/common';
import { ItemCard } from '../components';
import {
  StyledItemGrid,
  StyledItemNotFound,
  StyledSkeletonCardButton,
  StyledSkeletonCardImageFrame,
  StyledSkeletonCardName,
  StyledSkeletonCardPrice,
  StyledSkeletonItemCard,
} from '../styles/ItemGrid.styled';

const SkeletonItemCards = () => {
  return (
    <Fragment>
      {ArrayUtils.range(1, 16).map((n) => (
        <StyledSkeletonItemCard key={n}>
          <StyledSkeletonCardImageFrame />
          <StyledSkeletonCardPrice />
          <StyledSkeletonCardName $width={116} $marginBottom={4} />
          <StyledSkeletonCardName $width={32} $marginBottom={8} />
          <StyledSkeletonCardButton />
        </StyledSkeletonItemCard>
      ))}
    </Fragment>
  );
};

const ItemGrid: FC = () => {
  const pageId = useSelector(selectPageId);
  const filter = useSelector(selectFilter);
  const memoizedGetFilteredItemsByPageId = useCallback(
    () => ItemAPI.instance.getFilteredItemsByPageId(pageId, filter),
    [pageId, filter]
  );
  const [[items], isResponseEmpty] = useApi(
    memoizedGetFilteredItemsByPageId,
    [[], 0],
    true
  ) as ApiReturnType<BinaryTuple<Item[], number>>;
  return isResponseEmpty ? (
    <StyledItemNotFound>
      There is no item with the given filter
    </StyledItemNotFound>
  ) : (
    <StyledItemGrid>
      {!ArrayUtils.isEmpty(items) ? (
        items.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            imageUrl={
              filter.itemType === 'mug'
                ? 'https://kazanfederaluniversitesi.com/wp-content/uploads/2018/08/2.jpg'
                : 'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-warm-travel-shirt-bordeaux.jpg?format=auto&f=800x800'
            }
          />
        ))
      ) : (
        <SkeletonItemCards />
      )}
    </StyledItemGrid>
  );
};

export default ItemGrid;
