import './App.css';
import NavBar from './components/NavBar';
import Estado from './components/Estado';
import { Button , Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Estado />
    </div>
  )
}

export default App;
