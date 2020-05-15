import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import PicOfDay from "./Picture";
import {Header} from "./Header";
import Description from "./Description";
import styled from 'styled-components';
import {Footer} from './Footer'




function App() {
  const [apiData, setData] = useState('')
  

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=UsCSPKYdVQXD70N0156ul2QOqavBiPPZKr0qff7Z`)
  .then(results => {
      setData(results.data)
  })
  .catch(err => {
    console.log('Something is not right with the API!')
  })
}, [])

  return (
    <StyledApp>
    
      
      <Header  />
      <MainHeading>
        <h2>NASA Picture of the Day!</h2>
        <h2 className='makeYellow'>|</h2>
        <h2>{apiData.date}</h2>
      </MainHeading>
      <MainBody>
        <PicOfDay  data={apiData}/>
        <Description  description={apiData.explanation} />
      </MainBody>
      <Footer />

    </StyledApp>
    // <Header />
  );
}

const StyledApp = styled.div`
    border: solid grey 2px;
    box-shadow: 0px 1px 6px 2px grey;
    border-radius: 8px;
    margin: 5px;
    padding: 2%;
    background-color: #DCDCDC;
    
    
`
export const MainHeading = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 3%;
  width: 50%;

    h2{
      padding: 0 1%;
      font-size: 20px;
    }
    .makeYellow{
      color: darkkhaki;
      font-weight: bolder;
    }

`
const MainBody = styled.div`
  display:flex;
  
`
export default App;
