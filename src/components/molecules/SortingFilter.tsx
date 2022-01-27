import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Sorting, updateFilter } from '../../store/actions/filter';
import { BinaryTuple } from '../../utils/common';
import { RadioButton } from '../components';
import { StyledSortingFilterChild } from '../styles/SortingFilter.styled';

const sortingTuple = [
  ['Price low to high', Sorting.PRICE_LOW_TO_HIGH],
  ['Price high to low', Sorting.PRICE_HIGH_TO_LOW],
  ['New to old', Sorting.NEW_TO_OLD], 
  ['Old to new', Sorting.OLD_TO_NEW],
] as BinaryTuple<string, Sorting>[];

const SortingFilter: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      {sortingTuple.map(([label, sorting], index) => (
        <StyledSortingFilterChild key={index}>
          <RadioButton
            text={label}
            handleClick={() => {
              setCurrentIndex(index);
              dispatch(
                updateFilter({
                  sorting,
                })
              );
            }}
            active={currentIndex === index}
          />
        </StyledSortingFilterChild>
      ))}
    </>
  );
};

export default SortingFilter;
