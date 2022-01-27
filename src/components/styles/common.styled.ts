import styled, { css, keyframes } from 'styled-components';
import { pixelize } from '../../utils/common';
import { mobileQuery } from './mobile-query';

export const StyledImage = styled.img<{ $width: number }>`
  object-fit: contain;
  width: ${(props) => pixelize(props.$width)};
  user-select: none;
`;

export const AnimatedDiv = styled.div`
  transition: all 0.2s ease-in-out;
`;

export const AnimatedInput = styled.input`
  transition: all 0.2s ease-in-out;
`;

export const Flex = styled.div`
  display: flex;
`;

export const DynamicFlexChild = styled.div`
  flex: 1;

  @media ${mobileQuery} {
    width: 100%;
  }
`;

export const CenteredFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const FlexSpaceBetweenCentered = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

const skeletonLoadingAnimation = keyframes`
  from {
    background-color: hsl(200, 20%, 70%);
  }

  to {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const skeletonLoadingCss = css`
  animation: ${skeletonLoadingAnimation} 1s linear infinite alternate;
`;

export const SkeletonLoading = styled.div`
  animation: ${skeletonLoadingAnimation} 1s linear infinite alternate;
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
`;


export const NativeLayout = styled(Flex)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  box-shadow: ${(props) => props.theme.effects.filterFrameShadow};
  padding: 6px 14px;
`