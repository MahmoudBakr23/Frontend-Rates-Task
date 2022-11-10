import styled from "styled-components";

const CalendarComponent = styled.div`
    padding: 8rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    width: 50%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
    cursor: pointer;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 1rem;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

export { CalendarComponent, Button, List, ListItem }