import React, { Component } from 'react';
import MovieService from '../../../services/movie.service';
import { ErrorService } from '../../../services/api.service';
import { swall } from '../../../commons/helper';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  Form,
  InputGroup,
  Input,
  NavbarToggler,
  Button
} from 'reactstrap';

const emptyInput = {
  search: ''
}

class NavBar extends Component {
  state = {
    isOpen: false,
    input: emptyInput
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async findMovie(str) {
    try {
      const res = await MovieService.find(str);
      this.setState({
        movies: res
      });
      this.props.history.push({
        pathname: '/movie/1',
        state: { detail: res }
      });
      
    } catch (e) {
      if (e instanceof ErrorService) {
        swall(e.errorType, e.message);
      }
    }
  }

  onInputChange = (evt) => {
    const newInput = this.state.input;
    newInput[evt.target.name] = evt.target.value;
    this.setState({
      input: newInput
    });
  }

  searchSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      redirect: true
    })

    this.props.history.push('/movie')
  }

  render() {
    const input = this.state;
    console.log(input)
    return (
      <Navbar color="dark" dark expand="sm" fixed="top">
        <Container>
          <NavbarBrand href="/"><b>M</b>uvi</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form onSubmit={this.searchSubmit}>
                <InputGroup size="sm">
                  <Input className="form-control mr-2" name="search" onChange={this.onInputChange} value={input.search} placeholder="Search Movie" />
                  <Button size="sm" className="btn btn-danger">Search</Button>
                </InputGroup>
              </Form>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
        )
      }
    }
    
export default NavBar;