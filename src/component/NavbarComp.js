import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar   className='N'>
      <Container fluid>
        <Navbar.Brand href="#" >logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            
            <Link to={"/"} className="btn btn-light" variant="outline-success">Acceuil</Link>
            <Link to={"/product"} className="btn btn-light" variant="outline-success">Produit</Link>
            <Link to={"/contact"} className="btn btn-light" variant="outline-success">Contact</Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;