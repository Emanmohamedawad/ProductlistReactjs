import React from 'react'
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Maincontent from './component/maincontent';

function App() {
  return (
    <div className="container">
      <Header/>
      <Maincontent />
      <Footer />
 
    </div>
  );
}

export default App;
