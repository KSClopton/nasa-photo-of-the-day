import React from "react";
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterStyle>
            <p>Want to see more? Sign up for daily pictures!</p>
            <button>Sign Up</button>
            <button>Log In</button>
        </FooterStyle>
    )
}

const FooterStyle = styled.p`
    button{
        padding: 0 15px;
        border-radius: 4px;

        &:hover{
        background-color:grey;
    }
}
`
export {Footer};