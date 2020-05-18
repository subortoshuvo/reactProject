import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Users from './Component/Users/Users';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
       <Header></Header>
       <Users></Users>
       <Footer></Footer>
    </div>
  );
}

export default App;
