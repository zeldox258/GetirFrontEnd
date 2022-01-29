import styled from 'styled-components';

export const StyledFilterFrameTitle = styled.div`
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 17.7px;
  color: ${(props) => props.theme.colors.filterTitle};
`;

export const StyledFilterFrameBody = styled.div`
  margin: 10px;
  background-color: #92a8d1;
  box-shadow: ${(props) => props.theme.effects.filterFrameShadow};
  border-radius: 16px;
  padding: 24px;
  width: 296px;
`;
