import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './FooterNav.scss';

class FooterNav extends Component {

  render() {
    return (
      <Row>
        <Col xs="12">
          <div className="footernav">
            <div className="footernav-credit">2019 &copy; <b>M</b>uvi - All Right Reserved. </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default FooterNav;