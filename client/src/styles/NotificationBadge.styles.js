import styled from "styled-components";

export const NotificationBadge = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: -5px;
  right: -5px;
  z-index: 1000;
  background-color: #ff5252;
  font-size: 12px;

  display: flex;
  color: white;
  align-items: center;
  font-weight: bold;
  justify-content: center;
`;
