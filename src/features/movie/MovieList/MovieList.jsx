import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MovieListItem from './MovieListItem';
import MovieService from '../../../services/movie.service';
import { ErrorService } from '../../../services/api.service';
import { swall } from '../../../commons/helper';
import LoadingOverlay from 'react-loading-overlay';

class MovieList extends Component {
  state = {
    movies: [],
    isLoading: true
  }

  async getMovies() {
    try {
      const res = await MovieService.get();
      this.setState({
        movies: res,
        isLoading: false
      });
    } catch(e) {
      if (e instanceof ErrorService) {
        swall(e.errorType, e.message)
      }
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { movies, isLoading } = this.state;
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
          <LoadingOverlay active={isLoading} spinner text='Memuat halaman...'></LoadingOverlay>
        </Row>
      </div>
    )
  }
}

export default MovieList;