import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
        <div>
    <Navbar bg="primary" variant='dark' fixed='sticky'>
      <Container fluid>
        <Navbar.Brand href="#">Test-Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll><Nav.Item>
              <Nav.Link href='/show'>Show</Nav.Link>
             
            </Nav.Item>
            <Nav.Item>
               <Nav.Link href='/'>Add</Nav.Link>
            </Nav.Item></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header;
