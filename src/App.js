import './App.css';
import NavBar from './components/NavBar';
import Carrito from './components/Carrito';
import { Button , Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

function App() {
  return (
    <div>
      <NavBar />
      <Carrito />
    </div>
  )
}

export default App;
