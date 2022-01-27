import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  border: 8px solid ${(props) => props.theme.colors.primary};
  width: 296px;
  padding: 24px 24px 16px;
  background-color: ${(props) => props.theme.colors.white};
  text-align: right;
`;

export const StyledShoppingCartPriceTag = styled.div`
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  line-height: 16px;
  padding: 17px 24px;
  display: inline-block;
  margin-top: 16px;
`;

export const StyledShoppingCartEmpty = styled.div`
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
`