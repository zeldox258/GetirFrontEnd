import styled from 'styled-components';
import { CenteredFlex } from './common.styled';
import { mobileQuery } from './mobile-query';

export const StyledItemContainer = styled(CenteredFlex)`
  padding: 0 16px;
  margin: 10px;
  flex: 1;
  flex-direction: column;
  border-radius: 15px;
  background-color: #92a8d1;
`;

export const StyledItemContainerHeadline = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.headline};
`;

export const StyledItemContainerAligner = styled.div`
  align-self: flex-start;

  @media ${mobileQuery} {
    align-self: center;
    text-align: center;
  }
`
