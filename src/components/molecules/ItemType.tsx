import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  ItemType as ItemTypeType,
  updateFilter,
} from '../../store/actions/filter'; 
import { setPageId } from '../../store/actions/pageId';
import {
  BinaryTuple,
  handleOnCondition,
  HandlerFunction,
} from '../../utils/common';
import { ItemSelector } from '../components';
import { Flex } from '../styles/common.styled';
import { StyledItemType } from '../styles/ItemType.styled';

interface Props {
  selectedIndex: number;
  clickHandlers: BinaryTuple<HandlerFunction, HandlerFunction>;
}

const ItemType: FC<Props> = (props) => {
  const findIfActive = (index: number) => index === props.selectedIndex;
  const dispatch = useDispatch();
  return (
    <StyledItemType>
      <Flex>
        {(['mug', 'shirt'] as ItemTypeType[]).map((itemType, index) => (
          <ItemSelector
            handleClick={handleOnCondition(!findIfActive(index), () => {
              dispatch(setPageId(1));
              dispatch(
                updateFilter({
                  itemType,
                })
              );
              props.clickHandlers[index]();
            })}
            key={index}
            text={itemType}
            active={findIfActive(index)}
          />
        ))}
      </Flex>
    </StyledItemType>
  );
};

export default ItemType;
