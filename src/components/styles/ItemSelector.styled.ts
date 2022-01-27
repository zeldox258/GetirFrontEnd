import styled from 'styled-components';

export const StyledItemSelector = styled.div<{ active: boolean }>`
  padding: 6px 16px;
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  user-select: none;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.primaryLight};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.primary};
`;
