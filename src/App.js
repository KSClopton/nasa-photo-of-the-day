import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import PicOfDay from "./Picture";
import Header from "./Header";
import Description from "./Description"


function App() {
  const [apiData, setData] = useState('')
  const [logo, setLogo] = useState('')

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
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header />
      <h2>NASA Picture of the Day!</h2>
      <h2>{apiData.date}</h2>
      <PicOfDay data={apiData}/>
      <Description description={apiData.explanation} />
      

    </div>
    // <Header />
  );
}

export default App;
