import { StyledLink } from "../styles/Btn.style";

function Button({ title, url }) {
  return <StyledLink to={url}>{title}</StyledLink>;
}

export default Button;
