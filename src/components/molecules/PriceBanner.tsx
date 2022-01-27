import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/selectors';
import { getSvgUrl } from '../../utils/common';
import { Spacer } from '../components';
import { StyledImage } from '../styles/common.styled';
import {
  StyledPriceBanner,
  StyledPriceBannerMask,
  StyledPriceBannerText,
} from '../styles/PriceBanner.styled'; 

const PriceBanner: FC = () => {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <StyledPriceBanner >
      <StyledImage $width={13} src={getSvgUrl('bag')} alt='Shopping Cart' />
      <StyledPriceBannerMask>
        <Spacer size={14} />
        <StyledPriceBannerText data-testid='price-banner-text'>₺ {totalPrice}</StyledPriceBannerText>
      </StyledPriceBannerMask>
    </StyledPriceBanner>
  );
};

export default PriceBanner;
