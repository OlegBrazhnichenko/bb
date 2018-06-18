import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';

import {SetBookingType} from 'data/Booking/actions';

import HomePageComponent from './components/Index';

@connect(() => ({}), (dispatch) => ({
  SetBookingType: bindActionCreators(SetBookingType, dispatch)
}))
class HomePage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    SetBookingType: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleBookingStart = this.handleBookingStart.bind(this);
  }

  handleBookingStart(bookingType) {
    this.props.SetBookingType(bookingType);
    this.context.router.push('/booking');
  }

  render() {
    return (
      <HomePageComponent onBookingStart = {this.handleBookingStart}/>
    );
  }
}

export default HomePage;
