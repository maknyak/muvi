import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './MovieListItem.scss';


class MovieListItem extends Component {
  render() {
    const { movie } = this.props;
    const imgMovie = '/assets/images/' + movie.title.toLowerCase().replace(/\s/g,'') + '.jpg';
    return ( 
      <Col xs="6" sm="6" md="4" lg="3" className="px-2">
        <div className="moviebox" href="#1">
          <img src={imgMovie} alt="abc" className="moviebox-img" />
          <div className="moviebox-shadow">
            <div className="moviebox-meta">
              <h1 className="moviebox-title">{movie.title}</h1>
              <div className="moviebox-desc">{movie.director}</div>
            </div>
            <div className="moviebox-hover">
              <div className="moviebox-hover-meta">
                <Link to={`/movie/${movie.episode_id}`} className="btn btn-outline-light">Preview</Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default MovieListItem