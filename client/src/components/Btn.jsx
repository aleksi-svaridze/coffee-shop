import { StyledLink } from "../styles/Btn.style";

function Button({ title, url, action }) {
  return (
    <StyledLink to={url} onClick={action}>
      {title}
    </StyledLink>
  );
}

export default Button;
