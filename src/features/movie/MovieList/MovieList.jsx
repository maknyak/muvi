import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MovieListItem from './MovieListItem';
import MovieService from '../../../services/movie.service';
import { ErrorService } from '../../../services/api.service';


class MovieList extends Component {
  state = {
    movies: []
  }

  async getMovies() {
    try {
      const res = await MovieService.get();
      this.setState({
        movies: res
      });
    } catch(e) {
      if (e instanceof ErrorService) {
        alert(e.errorCode, e.message, e.errorType)
      }
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { movies } = this.state;
    return (  
      <div className="py-5">
        <Row>
          <Col>
            <div className="subheading">
              <h1 className="subheading-title">Star Wars Series</h1>
            </div>
            <Row noGutters={true} className="mx-n2">
              {movies.map((movie) => {
                return <MovieListItem key={movie.episode_id} movie={movie}/>
              })}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MovieList;