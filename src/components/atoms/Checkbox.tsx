import { FC, memo } from 'react';
import { getSvgUrl, HandlerFunction, nullFn } from '../../utils/common';
import {
  StyledCheckBox,
  StyledCheckboxCount,
  StyledCheckboxIcon,
  StyledCheckboxText, 
} from '../styles/Checkbox.styled';
import { StyledImage } from '../styles/common.styled';

interface Props {
  active: boolean;
  text: string;
  count: number;
  handleClick: HandlerFunction;
}

const Checkbox: FC<Props> = (props) => {
  return (
    <StyledCheckBox>
      <StyledCheckboxIcon
        data-testid='checkbox-icon'
        onClick={!props.active ? props.handleClick : nullFn}
        $active={props.active}
      >
        <StyledImage $width={11} src={getSvgUrl('check-white')} />
      </StyledCheckboxIcon>
      <StyledCheckboxText data-testid='checkbox-text'>
        {props.text} <StyledCheckboxCount>({props.count})</StyledCheckboxCount>
      </StyledCheckboxText>
    </StyledCheckBox>
  );
};

export default memo(
  Checkbox,
  (prevProps, nextProps) =>
    prevProps.text === nextProps.text &&
    prevProps.active === nextProps.active &&
    prevProps.count === nextProps.count
);
