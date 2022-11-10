import styled from "styled-components";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    padding: 4rem 1rem;
    border-right: 1px solid black;
    margin: 0;
    position: absolute;
`;

const SidebarList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const SidebarListItem = styled.li`
    padding: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
`

const Logo = styled.h3`
    padding: 2rem 4rem;
`

export { SidebarContainer, SidebarList, SidebarListItem, Logo }