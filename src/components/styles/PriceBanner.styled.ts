import styled from 'styled-components';
import { Flex } from './common.styled';
import { mobileQuery } from './mobile-query';

export const StyledPriceBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  display: inline-flex;
  height: 100%;
`;

export const StyledPriceBannerText = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledPriceBannerMask = styled(Flex)`
  @media ${mobileQuery} {
    display: none;
  }
`;
