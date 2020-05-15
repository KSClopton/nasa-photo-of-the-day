import React from "react";
import styled from 'styled-components';

const Nav = () => {

    return (
        
        <StyledNav className='Nav-container'>
            <a href='#about'>About</a>
            <a href='#news'>News</a>
            <a href='#donate'>Donate</a>
            <a href='#contact'>Contact</a>
        </StyledNav>
        
    )
}

const StyledNav = styled.div`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    

    a {
        text-decoration: none;
        color: black;
        padding: 0 4%;
        border-left: solid lightgrey 1px;

        

        &:hover{
            background-color: lightgrey;
            
        }
    }
`
export {Nav};