import { FC } from 'react';
import {
  StyledFilterFrameBody,
  StyledFilterFrameTitle, 
} from '../styles/FilterFrame.styled';

interface Props {
  title: string;
}

const FilterFrame: FC<Props> = (props) => {
  return (
    <div>
      <StyledFilterFrameTitle data-testid='filter-frame-title'>{props.title}</StyledFilterFrameTitle>
      <StyledFilterFrameBody>{props.children}</StyledFilterFrameBody>
    </div>
  );
};

export default FilterFrame;
