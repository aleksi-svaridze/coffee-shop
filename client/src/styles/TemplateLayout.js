import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const TemplateLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const Nav = styled.nav`
  width: 250px;
  background-color: white;
  padding: 16px;
`;

export const LogoText = styled.h1`
  color: #6f4e37;
  font-weight: bolder;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const NavStyledLink = styled(NavLink)`
  position: relative;
  background-color: white;
  color: #e5b299;
  padding: 8px;
  text-decoration: none;
  display: block;
  border-radius: 6px;

  &:hover {
    background-color: #e5b299;
    color: white;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.active {
    background-color: #e5b299;
    color: white;
  }
`;

export const Main = styled.main`
  background-color: #f6f4f1;
  padding: 24px 24px 48px 24px;
  width: calc(100% - 250px);
`;
