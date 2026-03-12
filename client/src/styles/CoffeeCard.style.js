import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 400px;
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
  padding: 12px;
`;

export const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
`;

export const CardButtonWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
