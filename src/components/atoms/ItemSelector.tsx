import React, { FC } from 'react';
import { HandlerFunction } from '../../utils/common';
import { StyledItemSelector } from '../styles/ItemSelector.styled';

interface Props {
  text: string;
  active: boolean; 
  handleClick: HandlerFunction;
}

const ItemSelector: FC<Props> = (props) => {
  return (
    <StyledItemSelector data-testid='item-selector' onClick={props.handleClick} active={props.active}>
      {props.text}
    </StyledItemSelector>
  );
};

export default ItemSelector;
