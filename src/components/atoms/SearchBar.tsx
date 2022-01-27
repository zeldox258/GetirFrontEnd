import debounce from 'lodash.debounce';
import { ChangeEvent, FC } from 'react';
import { StyledSearchBar } from '../styles/SearchBar.styled';

interface Props {
  placeholder: string;
  updateSearchWord: (searchWord: string) => void;
}

const SearchBar: FC<Props> = (props) => {
  const debouncedUpdateSearchWord = debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchWord = e.target.value;
      props.updateSearchWord(searchWord);
    },
    250 
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedUpdateSearchWord(e);
  };
  return (
    <StyledSearchBar
      onChange={handleChange}
      placeholder={props.placeholder}
    ></StyledSearchBar>
  );
};

export default SearchBar;
