import styled from 'styled-components';

export const StyledSpacer = styled.div<{ $size: number }>`
  width: ${(props) => String(props.$size).concat('px')};
`;
