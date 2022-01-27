import styled from 'styled-components';
import { pixelize } from '../../utils/common';
import { SkeletonLoading } from './common.styled';

const Common = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
`;

export const StyledItemGrid = styled(Common)`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
  grid-gap: 24px;
  margin-bottom: 32px;
  width: 100%;
`;

export const StyledSkeletonItemCard = styled.div``;

export const StyledSkeletonCardImageFrame = styled(SkeletonLoading)`
  width: 124px;
  height: 124px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const StyledSkeletonCardPrice = styled(SkeletonLoading)`
  width: 40px;
`;

export const StyledSkeletonCardName = styled(SkeletonLoading)<{
  $width: number;
  $marginBottom: number;
}>`
  width: ${(props) => pixelize(props.$width)};
  height: 16px;
  margin-bottom: ${(props) => pixelize(props.$marginBottom)};
`;

export const StyledSkeletonCardButton = styled(SkeletonLoading)`
  width: 124px;
  height: 22px;
`;

export const StyledItemNotFound = styled(Common)`
  font-weight: 400;
`;
