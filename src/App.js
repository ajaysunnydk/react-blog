import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <div className="main-ctn">
        <Header></Header>
        <div className="content-ctn">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <ContactUs></ContactUs>
      </div>
           
    </div>
  );
}

export default App;
