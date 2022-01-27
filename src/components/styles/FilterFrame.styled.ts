import styled from 'styled-components';

export const StyledFilterFrameTitle = styled.div`
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 17.7px;
  color: ${(props) => props.theme.colors.filterTitle};
`;

export const StyledFilterFrameBody = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.effects.filterFrameShadow};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  padding: 24px;
  width: 296px;
`;
