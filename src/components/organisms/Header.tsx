import { FC } from 'react';
import { useMobile } from '../../hooks/useMobile';
import { getSvgUrl } from '../../utils/common';
import { PriceBanner, Spacer } from '../components';
import { StyledCustomImage, StyledHeader } from '../styles/Header.styled';

const Header: FC = () => {
  const isMobile = useMobile();
  return (
  <StyledHeader>
    {!isMobile && <Spacer size={1} />}
    <StyledCustomImage src={getSvgUrl('brand')} alt='Brand' />
    {!isMobile && <PriceBanner />}
  </StyledHeader>
)};

export default Header;
