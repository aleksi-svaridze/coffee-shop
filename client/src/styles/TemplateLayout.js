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

export const Main = styled.main`
  background-color: #f6f4f1;
  padding: 24px 24px 48px 24px;
  width: calc(100% - 250px);
`;
