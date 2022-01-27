import styled from 'styled-components';
import { mobileQuery } from './mobile-query';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 104px;
  margin: 0 -104px 40px;
  height: 76px;

  @media ${mobileQuery} {
    padding: 0;
    margin: 0 0 40px;
    
  }
`;

export const StyledCustomImage = styled.img`
  object-fit: contain;
  width: 141.25px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`;