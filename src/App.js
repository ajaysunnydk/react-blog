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


function App() {

  let card = [
    {
      title:"Crypto",
      images:blog_image
    },
    {
      title:"ChatGPT",
      images:default_image
    },
    {
      title:"Corona",
      images:corona_image
    },
    {
      title:"Ind Vs Nz",
      images:cricket_image
    },
    {
      title:"Default",
      images:blog_image
    },
  ];

  return (
    <div className="App">
      <div className="main-ctn">
        <Header></Header>
        <div className="content-ctn">
          <Practice ite="veg"></Practice>
          <Practice ite="nonVeg"></Practice>
          <Practice ite="nonVeg"></Practice>
          <Practice ite="veg"></Practice>
          <Practice ite="veg"></Practice>
          <Practice ite="nonVeg"></Practice>
          <Practice ite="nonVeg"></Practice>
          <Practice ite="veg"></Practice>
          <Practice ite="veg"></Practice>
          <Card title={card[0].title} imageid={card[0].images}></Card>
          <Card title={card[1].title} imageid={card[1].images}></Card>
          <Card title={card[2].title} imageid={card[2].images}></Card>
          <Card title={card[3].title} imageid={card[3].images}></Card>
          <Card title={card[3].title} imageid={card[3].images}></Card>
          <Card title={card[3].title} imageid={card[3].images}></Card>
        </div>
        <ContactUs></ContactUs>
      </div>
           
    </div>
  );
}

export default App;
