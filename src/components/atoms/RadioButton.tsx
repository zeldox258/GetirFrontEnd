import { FC, memo } from 'react';
import { getSvgUrl, HandlerFunction, nullFn } from '../../utils/common';
import { StyledImage } from '../styles/common.styled';
import {
  StyledRadioButton,
  StyledRadioButtonIcon,
  StyledRadioButtonText,
} from '../styles/RadioButton.styled';

interface Props {
  active?: boolean; 
  text: string;
  handleClick: HandlerFunction;
}

const RadioButton: FC<Props> = (props) => {
  return (
    <StyledRadioButton>
      <StyledRadioButtonIcon
      data-testid='radio-button-icon'
        onClick={!props.active ? props.handleClick : nullFn}
        $active={props.active}
      >
        {props.active && (
          <StyledImage
            $width={8}
            src={getSvgUrl('check-blue')}
            alt='Check Icon'
          />
        )}
      </StyledRadioButtonIcon>
      <StyledRadioButtonText data-testid='radio-button-text'>{props.text}</StyledRadioButtonText>
    </StyledRadioButton>
  );
};

export default memo(
  RadioButton,
  (prevProps, nextProps) =>
    prevProps.text === nextProps.text && prevProps.active === nextProps.active
);
