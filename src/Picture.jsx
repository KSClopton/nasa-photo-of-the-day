import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components'


const PicOfDay = ({data}) => {
    return (
        <StyledPotd>
        
            <img src={data.hdurl} />
        
        </StyledPotd>
    )
}

const StyledPotd = styled.div`
    img {
      max-width: 100%;
      border-radius: 2px;
      
    }
`
export default PicOfDay;

