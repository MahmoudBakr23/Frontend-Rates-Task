import styled from "styled-components";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    padding: 2rem 4rem;
    position: absolute;
    right: 0;
`;

const Image = styled.img`
    width: 68px;
    height: 48px;
    margin: 0 4rem;
`
const Links = styled.a`
    border-radius: 50%;
    border: 1px solid black;
    padding: 2rem 1rem;
`

export { NavbarContainer, Image, Links }
