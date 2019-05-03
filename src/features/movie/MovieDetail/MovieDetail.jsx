import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ErrorService } from '../../../services/api.service';
import MovieService from '../../../services/movie.service';
import { swall } from '../../../commons/helper';
import LoadingOverlay from 'react-loading-overlay';

class MovieDetail extends Component {
  state = {
    movie: {},
    coverMovie: '',
    isLoading: true
  }

  async getMovie() {
    try {
      const { match: { params } } = this.props;
      const res = await MovieService.getBy(params.id);
      this.setState({
        movie: res,
        coverMovie: '/assets/images/' + res.title.toLowerCase().replace(/\s/g,'') + '.jpg',
        isLoading: false
      })
    } catch (e) {
      if (e instanceof ErrorService) {
        swall(e.errorType, e.message, () => {
          this.props.history.push('/')
        });
      }
    }
  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    const { movie, coverMovie, isLoading } = this.state;
    return (
      <div className="py-5">
        <Row>
          <Col xs="12" md="4">
            <img className="img-fluid mb-3" src={coverMovie} alt="Cover Movie" />
          </Col>
          <Col xs="12" md="8">
            <div>{movie.director}</div>
            <h1>{movie.title}</h1>
            <div className="list-inline mb-3">
              <div className="list-inline-item mr-3">
                <b className="text-white">Producer:</b> {movie.producer}
              </div>
              <div className="list-inline-item">
                <b className="text-white">Release Date:</b> {movie.release_date}
              </div>
            </div>
            <p>{movie.opening_crawl}</p>
          </Col>
          <LoadingOverlay active={isLoading} spinner text='Memuat halaman...'></LoadingOverlay>
        </Row>
      </div>
    )
  }
}

export default MovieDetail;