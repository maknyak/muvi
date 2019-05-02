import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  Input,
  Button } from 'reactstrap';

class NavBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarBrand href="/"><b>M</b>ovi</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <InputGroup size="sm">
                <Input className="form-control mr-2" />
                <Button size="sm" className="btn btn-danger">Search</Button>
              </InputGroup>         
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;