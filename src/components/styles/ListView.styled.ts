import styled from 'styled-components';
import { SkeletonLoading } from './common.styled';

const StyledCommon = styled.div`
  padding-top: 4px;
  padding-left: 4px;
  & > div:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const StyledListView = styled(StyledCommon)`
  height: 132px;
  overflow-y: scroll;
  & > div > div:nth-child(2) {
    max-width: 160px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.searchBarBorder};
  }
`;

export const StyledListViewSkeleton = styled(StyledCommon)`
  display: flex;
`;

export const StyledListViewSkeletonCheckbox = styled(SkeletonLoading)`
  width: 22px;
  height: 22px;
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  margin-right: 8px;
  background-color: blue;
`;

export const StyledListViewSkeletonText = styled(SkeletonLoading)`
  width: 160px;
  height: 22px;
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
`;
