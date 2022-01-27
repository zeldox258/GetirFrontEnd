import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/actions/shopping-cart';
import { addPrice, subtractPrice } from '../../store/actions/totalPrice';
import { getSvgUrl, ShoppingCartPayload } from '../../utils/common';
import { Flex, StyledImage } from '../styles/common.styled';
import {
  StyledShoppingCartItem,
  StyledShoppingCartItemCount,
  StyledShoppingCartItemInfo,
} from '../styles/ShoppingCartItem.styled';

interface Props { 
  shoppingCartPayload: ShoppingCartPayload;
}

const ShoppingCartItem: FC<Props> = (props) => {
  const dispatch = useDispatch();
  return (
    <StyledShoppingCartItem>
      <StyledShoppingCartItemInfo data-testid='shopping-cart-item-info'>
        <div>{props.shoppingCartPayload.item.name}</div>
        <div>₺{props.shoppingCartPayload.item.price}</div>
      </StyledShoppingCartItemInfo>
      <Flex>
        <StyledImage
          data-testid='shopping-cart-remove-item-button'
          onClick={() => {
            dispatch(subtractPrice(props.shoppingCartPayload.item.price));
            dispatch(removeItem(props.shoppingCartPayload.item.slug));
          }}
          $width={10}
          src={getSvgUrl('minus')}
          alt='Minus Sign'
        />
        <StyledShoppingCartItemCount data-testid='shopping-cart-item-count'>
          {props.shoppingCartPayload.count}
        </StyledShoppingCartItemCount>
        <StyledImage
        data-testid='shopping-cart-add-item-button'
          onClick={() => {
            dispatch(addPrice(props.shoppingCartPayload.item.price));
            dispatch(addItem(props.shoppingCartPayload.item));
          }}
          $width={10}
          src={getSvgUrl('plus')}
          alt='Plus Sign'
        />
      </Flex>
    </StyledShoppingCartItem>
  );
};

export default ShoppingCartItem;
