import { HeaderTitle, HeaderWrapper } from "../styles/Header.style";

function Header({ title }) {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
