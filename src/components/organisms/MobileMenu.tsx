import { FC, useState } from 'react';
import { StyledMobileMenu, StyledMobileMenuButton, StyledMobileMenuButtons, StyledMobileMenuMask } from '../styles/MobileMenu.styled';
import FilterGroup from './FilterGroup';
import ShoppingCart from './ShoppingCart';

const MobileMenu: FC = () => {
  const [activeIndex, setActiveIndex] = useState<-1|0|1>(-1);
  return (
    <StyledMobileMenu>
      <StyledMobileMenuButtons>
        <StyledMobileMenuButton onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)} $active={activeIndex === 0}>
          Filter
        </StyledMobileMenuButton>
        <StyledMobileMenuButton onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)} $active={activeIndex === 1}>
          Shopping Cart
        </StyledMobileMenuButton>
      </StyledMobileMenuButtons>
      <StyledMobileMenuMask $visible={activeIndex === 0}>
        <FilterGroup />
      </StyledMobileMenuMask>
      <StyledMobileMenuMask $visible={activeIndex === 1}>
        <ShoppingCart />
      </StyledMobileMenuMask>
    </StyledMobileMenu>
  )
}

export default MobileMenu;