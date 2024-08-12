import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

export const NavBar = ()=> {
  return (
  <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">bikeworld</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">BICI-MUNDO</Nav.Link>
            <Nav.Link as={NavLink} to="/category/mtb">MTB</Nav.Link>
            <Nav.Link as={NavLink} to="/category/ruta">Ruta</Nav.Link>
            <Nav.Link as={NavLink} to="/category/elec">Eléctrica</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  </>
  );
};