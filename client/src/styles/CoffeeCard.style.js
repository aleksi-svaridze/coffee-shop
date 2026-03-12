import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardImg = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
`;

export const CardTextContentDiv = styled.div`
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

export const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
`;

export const CardPriceWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const CardCurrency = styled.span`
  font-size: 12px;
`;
export const CardButtonWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  justify-content: space-between;
`;
