import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  background-color: #6f4e37;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #5a3e2b;
  }
  transition: background-color 0.3s ease;
`;
