import React from "react";
import { Nav }from './Nav';
import styled from 'styled-components'



const Header = ({logo}) => {
    return (
        <StyledHeader>
            <div></div>
            <Nav />
        </StyledHeader>

    )
}
const StyledHeader = styled.div`
    border: solid lightgrey 2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export {Header};