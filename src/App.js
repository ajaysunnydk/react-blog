import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ContactUs from './components/ContactUs';
import Practice from './components/Practice';

import blog_image from './components/images/blog_image.jpeg'
import cricket_image from './components/images/cricket.jpeg'
import corona_image from './components/images/corona.jpeg'
import default_image from './components/images/default.jpeg'

import { useState } from 'react';


function App() {

  let card = [
    {
      title: "Crypto",
      images: default_image
    },
    {
      title: "ChatGPT",
      images: blog_image
    },
    {
      title: "Corona",
      images: corona_image
    },
    {
      title: "Ind Vs Nz",
      images: cricket_image
    },
    {
      title: "Default",
      images: default_image
    },
  ];

  var a = "IND vs NZ";
  var [theme, setTheme] = useState("light")

  const change = () => {
    if (theme == "light")
      setTheme("dark");
    else
      setTheme("light");
  }

  var [score, setScore] = useState(0);
  var [wickets, setWickets] = useState(0);
  var [balls, setBalls] = useState(0);
  var [matchStatus, setMatchStatus] = useState("Match Started");

  const six = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setScore(score + 6);
    }
  }
  const four = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setScore(score + 4);
    }
  }
  const three = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setScore(score + 3);
    }
  }
  const two = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setScore(score + 2);
    }

  }
  const one = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setScore(score + 1);
    }

  }
  const out = () => {
    if (balls > 11) {
      setBalls(12);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else if (wickets > 9) {
      setWickets(10);
      setScore(score);
      setMatchStatus("Match Ended");
    }
    else {
      setBalls(balls + 1);
      setWickets(wickets + 1);
    }


  }

  return (
    <div className="App">
      <div className="main-ctn">
        <Header></Header>
        {/* <div className={theme}>
          <h1>{a}</h1>
          <h3>IND : {score}/{wickets}</h3>
          <h4>Balls : {balls}</h4>
          <div>
            <button onClick={six} >6</button>
            <button onClick={four} >4</button>
            <button onClick={three} >3</button>
            <button onClick={two} >2</button>
            <button onClick={one} >1</button>
          </div>
          <button onClick={out} >Out</button>
          <h6>{matchStatus}</h6>
        </div> */}
        <div className="content-ctn">
          {/* <Practice ite="veg"></Practice> */}
          {
            card.map(v => (
              <Card title={v.title} imageid={v.images}></Card>
            ))
          }
        </div>
        <ContactUs></ContactUs>
      </div>

    </div>
  );
}

export default App;
