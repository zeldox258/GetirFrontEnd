import styled from 'styled-components';

export const StyledShoppingCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.shoppingCartSeparator};
  padding: 0 6px 16px;
  margin-top: 16px;

  & img {
    cursor: pointer;
  }
`;

export const StyledShoppingCartItemInfo = styled.div`
  text-align: left;
  max-width: 120px;
  color: ${(props) => props.theme.colors.primary};

  & > div:first-child {
    color: ${(props) => props.theme.colors.itemName};
    font-weight: 400;
  }
`;

export const StyledShoppingCartItemCount = styled.div`
  margin: 0 11px;
  min-width: 32px;
  height: 32px;
  padding: 6px 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
`;
