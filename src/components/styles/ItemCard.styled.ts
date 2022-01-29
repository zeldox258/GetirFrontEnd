import styled from 'styled-components';

export const StyledItemCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 124px;
`;

export const StyledItemCardImageFrame = styled.div`
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.imageBorder};
  display: inline-block;
  background-color: lightblue;
  margin-bottom: 8px;


  & > img {
    width: 92px;
    height: 92px;
  }
`;

const StyledPriceText = styled.div`
  line-height: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledItemCardCurrency = styled(StyledPriceText)`
  font-weight: 400;
  margin-right: 4px;
`;

export const StyledItemCardPrice = styled(StyledPriceText)`
  font-weight: 700;
`;

export const StyledItemCardName = styled.div`
  line-height: 20px;
  color: ${(props) => props.theme.colors.itemName};
  margin-bottom: 8px;
  min-height: 40px;
`;

export const StyledItemCardButton = styled.div`
  padding: 1px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  line-height: 20px;
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
