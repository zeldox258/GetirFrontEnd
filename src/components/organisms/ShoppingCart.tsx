import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectShoppingCart, selectTotalPrice } from '../../store/selectors';
import { ArrayUtils } from '../../utils/common';
import { ShoppingCartItem } from '../components';
import {
  StyledShoppingCart,
  StyledShoppingCartEmpty,
  StyledShoppingCartPriceTag,
} from '../styles/ShoppingCart.styled';

const ShoppingCart: FC = () => {
  const shoppingCartPayloads = Object.values(useSelector(selectShoppingCart));
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <StyledShoppingCart>
      {!ArrayUtils.isEmpty(shoppingCartPayloads) ?
      <Fragment>
      {shoppingCartPayloads.map((shoppingCartPayload, index) => (
        <ShoppingCartItem
          key={index}
          shoppingCartPayload={shoppingCartPayload}
        />
      ))}
      <StyledShoppingCartPriceTag>₺{totalPrice}</StyledShoppingCartPriceTag>
      </Fragment> : <StyledShoppingCartEmpty>No items added to the cart</StyledShoppingCartEmpty> }
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
