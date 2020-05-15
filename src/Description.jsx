import React from "react"
import styled from 'styled-components';

const Description = ({description}) => {
    
    return (
        
        <StyleDescription>
            <p>{description}</p>
        </StyleDescription>
    )
}
const StyleDescription = styled.p`
    max-width: 40%;
    padding: 5%;
    font-size: 10px;
`

export default Description;