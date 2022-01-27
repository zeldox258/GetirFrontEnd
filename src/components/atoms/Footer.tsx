import { FC } from 'react';
import { StyledDot, StyledFooter } from '../styles/Footer.styled';

const Footer: FC = () => {
  return (
    <StyledFooter data-testid='footer-text'> 
      ©2021 Omer Market <StyledDot>•</StyledDot> Privacy Policy
    </StyledFooter>
  );
};

export default Footer;
