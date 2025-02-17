import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToggleButton } from 'react-bootstrap';



function BasicExample(props) {


  

  return (
    <Navbar expand="lg"  className="bg-body-tertiary"  data-bs-theme="white" >
      <Container>
        <Navbar.Brand href="#home">AK Foundation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
          <i className={` mx-4  text-dark ${props.mode === `mode` ? `dark` : `white`}  ` }> Dark Mode </i>
          <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
          />
          </Form>
    </Navbar>
    
  );
}

export default BasicExample;