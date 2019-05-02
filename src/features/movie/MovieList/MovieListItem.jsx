import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './MovieListItem.scss';


class MovieListItem extends Component {
  render() {
    const { movie } = this.props;
    const imgMovie = '/assets/images/' + movie.title.toLowerCase().replace(/\s/g,'') + '.jpg';
    return ( 
      <Col xs="6" sm="6" md="4" lg="3" className="px-2">
        <a className="moviebox" href="#1">
          <img src={imgMovie} alt="abc" className="moviebox-img" />
          <div className="moviebox-shadow">
            <div className="moviebox-meta">
              <h1 className="moviebox-title">{movie.title}</h1>
              <div className="moviebox-desc">{movie.director}</div>
            </div>
            <div className="moviebox-hover">
              <div className="moviebox-hover-meta">
                <button className="btn btn-outline-light">Preview</button>
              </div>
            </div>
          </div>
        </a>
      </Col>
    )
  }
}

export default MovieListItem