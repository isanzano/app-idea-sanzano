import React from "react";
import Carrito from "./Carrito";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

function NavBar() {
  const MiPrimerNavBar = (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Veterinaria Independencia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Clinica</Nav.Link>
              <NavDropdown title="Más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Quienes Somos?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Otros Servicios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#carrito"> <Carrito/> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
  return (
    <>
      {MiPrimerNavBar}
    </>
  );
}

export default NavBar;








