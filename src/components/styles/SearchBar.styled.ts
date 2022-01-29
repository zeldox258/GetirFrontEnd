import styled from 'styled-components';
import { AnimatedInput } from './common.styled';

export const StyledSearchBar = styled(AnimatedInput)`
  margin-bottom: 16px;
  font-family: Inter, sans-serif;
  padding: 12px 16px;
  line-height: 24px;
  font-weight: 400;
  border: ${(props) => `2px solid ${props.theme.colors.searchBarBorder}`};
  border-radius: 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.filterText};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.inputPlaceholder};
  }
`;
