import { FC, Fragment, useState } from 'react';
import useStateWithProp from '../../hooks/useStateWithProp';
import { BinaryTuple } from '../../utils/common';
import obtainFilter from '../../utils/search-engine';
import { ListView, SearchBar } from '../components';

interface Props {
  placeholder: string;
  list: BinaryTuple<string, number>[];
  totalCount: number; 
  filterProp: string;
}

const SearchFragment: FC<Props> = (props) => {
  const [searchList, setSearchList] = useStateWithProp(props.list);
  const [isPartial, setPartial] = useState(false);
  return (
    <Fragment>
      <SearchBar
        updateSearchWord={(searchWord) => {
          if (!searchWord) {
            setSearchList(props.list);
            setPartial(false);
            return;
          }
          setPartial(true);
          setSearchList(
            props.list.filter((searchItem) =>
              obtainFilter(searchWord)(searchItem[0])
            )
          );
        }}
        placeholder={props.placeholder}
      />
      <ListView
        filterProp={props.filterProp}
        list={searchList}
        isPartial={isPartial}
        totalCount={props.totalCount}
      />
    </Fragment>
  );
};

export default SearchFragment;
