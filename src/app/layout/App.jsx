import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';
import MovieList from '../../features/movie/MovieList/MovieList';
import MovieDetail from '../../features/movieDetail/MovieDetail';
import FooterNav from '../../features/nav/FooterNav/FooterNav';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar/>
          <Container>
            <Route exact path="/" component={MovieList} />
            <Route path="/movie/:id" component={MovieDetail} />
            <FooterNav/>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
