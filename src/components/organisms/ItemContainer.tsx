import { FC, useState } from 'react';
import { ItemGrid, ItemType, PageSelector } from '../components';
import {
  StyledItemContainer,
  StyledItemContainerAligner,
  StyledItemContainerHeadline,
} from '../styles/ItemContainer.styled';

const ItemContainer: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); 
  return (
    <StyledItemContainer>
      <StyledItemContainerAligner>
      <StyledItemContainerHeadline>Products</StyledItemContainerHeadline>
      <ItemType
        clickHandlers={[() => setSelectedIndex(0), () => setSelectedIndex(1)]}
        selectedIndex={selectedIndex}
      />
        </StyledItemContainerAligner>
      <ItemGrid />
      <PageSelector />
    </StyledItemContainer>
  );
};

export default ItemContainer;
