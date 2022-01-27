import styled from 'styled-components';
import { CenteredFlex, NativeLayout } from './common.styled';
import { mobileQuery } from './mobile-query';

export const StyledPageSelector = styled.div`
  color: ${(props) => props.theme.colors.filterTitle};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPageSelectorButtons = styled(CenteredFlex)`
  margin: 0 45px;
`;

export const StyledPageSelectorButton = styled.a<{
  $active: boolean;
}>`
  & {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 40px;
    background-color: ${(props) =>
      props.$active ? props.theme.colors.primary : 'transparent'};
    color: ${(props) =>
      props.$active
        ? props.theme.colors.white
        : props.theme.colors.filterTitle};
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
    cursor: pointer;
  }

  &:hover {
    color: ${(props) =>
      props.$active ? props.theme.colors.white : props.theme.colors.primary};
  }

  @media ${mobileQuery} {
    min-width: 32px;
  }
`;

export const StyledPageSelectorDirection = styled.a<{ $active: boolean }>`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.primary
      : props.theme.colors.filterTitle};
`;

export const StyledPageSlider = styled(NativeLayout)`
  overflow-x: scroll;
  display: 'inline-block';
  max-width: 100%;
`;
