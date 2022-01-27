import styled from 'styled-components';

export const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRadioButtonIcon = styled.div<{ $active?: boolean }>`
  border: ${({ $active, theme }) =>
    `${theme.dimensions.borderRadius} solid ${
      $active ? theme.colors.primary : theme.colors.radioBorder
    }`};
  width: 22px;
  height: 22px;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  cursor: pointer;
  user-select: none;
`;

export const StyledRadioButtonText = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme.colors.filterText};
`;
