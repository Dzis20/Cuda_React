import React from 'react';
import './style.css';
import Header from './Header';
import Services from './Services';
import Team from './Team';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Aboutus from './Aboutus';
import Comment from './Comment';
import Footer from './Footer';
// import script from './script';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Team />
      <Skills />
      <Portfolio />
      <Aboutus />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
