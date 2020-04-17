import React,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';

function App() {
  const [data, setData]= useState ([]);
 useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response=>{
    setData(response.data);
    console.log(response.data);
  })
  .catch(error=>{
    console.log(error);
  });
 },[]) 
const BodyDiv= styled.div`
 height:100vh;
 background-color:#000000;
 background-image: linear-gradient(to top right, #ff00ff , #00ffff);
 color:#ffff00;
 text-shadow: 0px 0px 25px #ffff00;
`;
const ImgConfine= styled.img`
width:60%;
height:auto;
`;
const BoxBorder=styled.div`
border: 5px solid #ffff00;
box-shadow: inset 0px 0px 100px #ffff00
`

  return (
    <BodyDiv className="App">

      <p>
        Date: {data.date}
      </p>
      <p>
        {data.explanation}
      </p>
      <BoxBorder>
        <ImgConfine src={data.hdurl}/>
      </BoxBorder>
      <p>
        {`copyright: ${data.copyright}`}
      </p>
    </BodyDiv>
  );
}

export default App;
