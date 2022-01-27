import styled from 'styled-components';
import { CenteredFlex } from './common.styled';
import { mobileQuery } from './mobile-query';

export const StyledItemContainer = styled(CenteredFlex)`
  padding: 0 16px;
  flex: 1;
  flex-direction: column;
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
