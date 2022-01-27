import { FC, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'slugify';
import { updateFilter } from '../../store/actions/filter';
import { setPageId } from '../../store/actions/pageId';
import { ArrayUtils, BinaryTuple } from '../../utils/common';
import { Checkbox } from '../components'; 
import {
  StyledListView,
  StyledListViewSkeleton,
  StyledListViewSkeletonCheckbox,
  StyledListViewSkeletonText,
} from '../styles/ListView.styled';

interface Props {
  list: BinaryTuple<string, number>[];
  isPartial: boolean;
  totalCount: number;
  filterProp: string;
}

const SkeletonListView = () => {
  return (
    <Fragment>
      {ArrayUtils.range(1, 3).map((n) => (
        <StyledListViewSkeleton key={n}>
          <StyledListViewSkeletonCheckbox />
          <StyledListViewSkeletonText />
        </StyledListViewSkeleton>
      ))}
    </Fragment>
  );
};

const ListView: FC<Props> = (props) => {
  const [textIndex, setTextIndex] = useState('');
  const dispatch = useDispatch();
  const allOption = ['All', props.totalCount] as BinaryTuple<string, number>;
  return !ArrayUtils.isEmpty(props.list) ? (
    <StyledListView>
      {(props.isPartial ? [] : [allOption])
        .concat(props.list)
        .map(([text, count], index) => (
          <Checkbox
            key={index}
            handleClick={() => {
              dispatch(setPageId(1));
              dispatch(
                updateFilter({
                  [props.filterProp]:
                    index === 0 && !props.isPartial
                      ? ''
                      : props.filterProp === 'brand'
                      ? slugify(text)
                      : text,
                })
              );
              setTextIndex(text === 'All' ? '' : text);
            }}
            text={text}
            count={count}
            active={
              index || props.isPartial ? textIndex === text : textIndex === ''
            }
          />
        ))}
    </StyledListView>
  ) : (
    <SkeletonListView />
  );
};

export default ListView;
