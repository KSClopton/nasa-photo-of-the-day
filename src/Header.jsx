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
    width: 100%;
    display: flex;

    div{
        width: 50%;
    }
`

export {Header};