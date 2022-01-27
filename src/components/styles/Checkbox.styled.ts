import styled from 'styled-components';

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckboxIcon = styled.div<{ $active?: boolean }>`
  box-shadow: ${(props) => props.theme.effects.checkboxShadow};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.white};
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
  user-select: none;
`;

export const StyledCheckboxText = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.colors.filterText};
  margin-right: 4px;
`;

export const StyledCheckboxCount = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.colors.inputPlaceholder};
`;
