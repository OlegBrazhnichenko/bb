import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import PropTypes from 'prop-types';

import './styles.less';

class HomePage extends Component {

  static propTypes = {
    onBookingStart: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleBookingStart = this.handleBookingStart.bind(this);
  }

  handleBookingStart(e) {
    this.props.onBookingStart(e.target.dataset.bookingType);
  }

  render() {
    return (
      <div className="home-page--container">
        <Row>
          <Col className="introduction">
            <span>
              Welcome to Topless BuckBabes,
              servicing melbourne since 2015 with
              the highest quality girls and
              management
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="booking">
            <h1>When is the booking?</h1>
            <Row type="flex" justify="space-around">
              <Col>
                <Button data-booking-type="soon" onClick={this.handleBookingStart} icon="exclamation-circle-o">Soon</Button>
              </Col>
              <Col>
                <Button data-booking-type="later" onClick={this.handleBookingStart} icon="clock-circle-o">Later</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="about-me">
            <h1>About me</h1>
            <Row type="flex" justify="space-between">
              <Col span={8}>
                <img src="assets/images/girl.jpg" alt=""/>
              </Col>
              <Col span={15}>
                <span className="secondary">
                  Hi! I'm a wee little lass from Scotland! I'm here to help you find someone fun for your event
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}

export default HomePage;
