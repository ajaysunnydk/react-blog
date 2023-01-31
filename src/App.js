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
import axios from 'axios'
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact/Contact';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

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


  // const [fullName, setFullName] = useState(' ');
  // for(let i=0;i<6;i++){
  //   axios.get('https://jsonplaceholder.typicode.com/posts/'+i)
  //   .then(res=>{
  //       // var first=res.data.results[0].name.first
  //       // var last =res.data.results[0].name.last
  //       // console.log(first+" "+last);

  //       setFullName(res.data.title);

  //       // document.getElementById("data").innerHTML=res.data.results;
  //   });
  // }
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

  let repeat = [1, 2, 3, 4, 5]
  let pagenation = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      {/* <div className="main-ctn"> */}
        {/* <Header></Header> */}
        {/* <h1>{fullName}</h1> */}
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
        {/* <div className="content-ctn">
          <Practice ite="veg"></Practice>
          {
            repeat.map(v => (
              <Card num={v} imageid={default_image}></Card>
            ))

          }

        </div> */}
        {/* <ContactUs></ContactUs> */}

      {/* </div> */}
        {/* <Home></Home> */}
        {/* <Contact></Contact> */}
        {/* <About></About> */}
        {/* <Blog></Blog> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>} ></Route>
            <Route path='/contact' element={<Contact></Contact>} ></Route>
            <Route path='/blog' element={<Blog></Blog>} ></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
