import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const CardImage = styled.img`
  width: 40%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const CardTextContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
  }
  span {
    font-size: 20px;
    color: #888;
    margin: 10px 0;
  }
  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
  button {
    align-self: flex-start;
    justify-self: flex-end;
    margin: auto 0 0 0;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  }
`;
