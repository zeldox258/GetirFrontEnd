import { FC } from 'react';
import { StyledSpacer } from '../styles/Spacer.styled';

interface Props {
  size: number;
}

const Spacer: FC<Props> = (props) => (
  <StyledSpacer $size={props.size}>
    <div></div>
  </StyledSpacer>
);

export default Spacer; 
