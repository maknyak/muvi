import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ErrorService } from '../../services/api.service';
import MovieService from '../../services/movie.service';


class MovieDetail extends Component {
  state = {
    movie: {},
    coverMovie: ''
  }

  async getMovie() {
    try {
      const { match: { params } } = this.props;
      const res = await MovieService.getBy(params.id);
      this.setState({
        movie: res,
        coverMovie: '/assets/images/' + res.title.toLowerCase().replace(/\s/g,'') + '.jpg'
      })
    } catch (e) {
      if (e instanceof ErrorService) {
        alert(e.errorCode, e.message, e.errorType)
      }
    }
  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    const { movie, coverMovie } = this.state;
    return (
      <Row className="my-5">
        <Col xs="12" md="4">
          <img className="img-fluid" src={coverMovie} alt="Cover Movie" />
        </Col>
        <Col xs="12" md="8">
          <div>{movie.director}</div>
          <h1>{movie.title}</h1>
          <div className="list-inline mb-3">
            <div className="list-inline-item">Producer: {movie.producer}</div>
            <div className="list-inline-item">Release Date: {movie.release_date}</div>
          </div>
          <p>{movie.opening_crawl}</p>
        </Col>
      </Row>
    )
  }
}

export default MovieDetail;