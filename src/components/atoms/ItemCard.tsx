import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Item from '../../api/modals/Item';
import { addItem } from '../../store/actions/shopping-cart';
import { addPrice } from '../../store/actions/totalPrice';
import { Flex } from '../styles/common.styled';
import {
  StyledItemCard, 
  StyledItemCardButton,
  StyledItemCardCurrency,
  StyledItemCardImageFrame,
  StyledItemCardName,
  StyledItemCardPrice,
} from '../styles/ItemCard.styled';

interface Props {
  imageUrl: string;
  item: Item;
}

const ItemCard: FC<Props> = (props) => {
  const dispatch = useDispatch();
  return (
    <StyledItemCard>
      <StyledItemCardImageFrame>
        <img data-testid='item-card-image' src={props.imageUrl} alt='Mug' />
      </StyledItemCardImageFrame>
      <Flex data-testid='item-card-price'>
        <StyledItemCardCurrency>₺</StyledItemCardCurrency>
        <StyledItemCardPrice>{props.item.price}</StyledItemCardPrice>
      </Flex>
      <StyledItemCardName data-testid='item-card-name'>{props.item.name}</StyledItemCardName>
      <StyledItemCardButton
        data-testid='item-card-button'
        onClick={() => {
          dispatch(addItem(props.item));
          dispatch(addPrice(props.item.price));
        }}
      >
        Add
      </StyledItemCardButton>
    </StyledItemCard>
  );
};

export default ItemCard;
