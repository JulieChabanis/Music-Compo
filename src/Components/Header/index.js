import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({isLight, HandleToggleTheme}) {
  const location = useLocation();

  return (
    <Wrapper>
      <h1>MUSIC COMPO</h1>
      <nav>
        <Link to="/">
          <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
        </Link>
        <Link to="/about">
          <MenuEl isCurrentPage={location.pathname === "/about"}>About</MenuEl>
        </Link>
      </nav>
      <button onClick={HandleToggleTheme}>
        SWITCH TO {isLight ? "🌙" : "☀️"} THEME
        </button>
    </Wrapper>
  ) 
}; 

const Wrapper = styled.header`
  height: 80px; 
  display: flex; 
  justify-content: space-between; 
  padding: 0px 24px;
  align-items: center; 
  border-bottom: solid 1px; 
  & a {
    text-decoration: none; 
    color: inherit; 
  }
  & a:first-child{
    margin-right: 25px; 
  }
`;

const MenuEl = styled.p`
display: inline; 
&:hover {
  border-bottom: solid 1.5px;
}
`;
  