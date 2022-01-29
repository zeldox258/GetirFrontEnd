import styled from 'styled-components';
import { Flex } from './common.styled';
import { mobileQuery } from './mobile-query';

export const StyledPriceBanner = styled.div`
  background-color: #92a8d1;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  display: inline-flex;
  height: 80%;
`;

export const StyledPriceBannerText = styled.div`
  color: lightblue;
`;

export const StyledPriceBannerMask = styled(Flex)`
  @media ${mobileQuery} {
    display: none;
  }
`;
