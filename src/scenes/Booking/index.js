import React, {Component} from 'react';
import BookingComponent from './components/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {SetStep, SetLocation, SetCategory, SetService, SetAddress, SetDate, SetTime} from 'data/Booking/actions';
import {GetServices, GetCategories} from 'data/Booking/API';
import {getNextStep, getPreviousStep, STEPS} from 'services/Booking';

import moment from 'moment';
@connect((state)=>{
  return {
    services: state.Booking.services,
    categories: state.Booking.categories,
    bookingType: state.Booking.booking,
    selectedTime:state.Booking.time,
    selectedDate:state.Booking.date,
    selectedAddress:state.Booking.address,
    selectedService: state.Booking.service,
    selectedCategory: state.Booking.category,
    selectedLocation: state.Booking.selectedLocation,
    currentBookingStep: state.Booking.currentStep,
  };
},(dispatch)=>{
  return {

    setStep: bindActionCreators(SetStep, dispatch),
    setDate: bindActionCreators(SetDate, dispatch),
    setTime:bindActionCreators(SetTime, dispatch),
    setAddress:bindActionCreators(SetAddress, dispatch),
    setService: bindActionCreators(SetService, dispatch),
    setLocation: bindActionCreators(SetLocation, dispatch),
    setCategory: bindActionCreators(SetCategory, dispatch),

    getServices: bindActionCreators(GetServices, dispatch),
    getCategories: bindActionCreators(GetCategories, dispatch),
  };
})
export default class Booking extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
    selectedCategory: PropTypes.object,

    services: PropTypes.array,
    categories: PropTypes.array,

    selectedTime: PropTypes.any,
    selectedDate: PropTypes.any,
    selectedAddress: PropTypes.any,

    bookingType: PropTypes.string,
    selectedService: PropTypes.string,
    selectedLocation: PropTypes.string,

    currentBookingStep: PropTypes.string,

    setStep: PropTypes.func,
    setTime: PropTypes.func,
    setDate: PropTypes.func,
    setAddress: PropTypes.func,
    setService: PropTypes.func,
    setLocation: PropTypes.func,
    setCategory: PropTypes.func,

    getServices: PropTypes.func,
    getCategories: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleTimeSelect = this.handleTimeSelect.bind(this);
    this.handleAddressSelect = this.handleAddressSelect.bind(this);
    this.handleServiceSelect = this.handleServiceSelect.bind(this);
    this.handleLocationSelect = this.handleLocationSelect.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
    this.handleSwitchToPreviousStep = this.handleSwitchToPreviousStep.bind(this);
  }

  componentWillMount() {
    this.props.getServices(); // preload data
    this.props.getCategories();
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      this.props.setStep(STEPS.SUBURB_SELECT);
      this.props.setLocation(null);
    });
  }

  handleSwitchToNextStep() {
    this.props.setStep(getNextStep(this.props.currentBookingStep));
  }

  handleSwitchToPreviousStep() {
    this.props.setStep(getPreviousStep(this.props.currentBookingStep));
  }

  handleLocationSelect(location) {
    this.props.setLocation(location);
  }

  handleCategorySelect(category) {
    this.props.setCategory(
      this.props.categories.filter((obj) => {
        return obj.name === category;
      })[0]
    );
  }

  handleServiceSelect(service) {
    this.props.setService(service);
  }

  handleAddressSelect(address) {
    this.props.setAddress(address);
  }

  handleTimeSelect(time) {
    this.props.setTime(time);
  }

  handleDateSelect(date) {
    this.props.setDate(date);
  }

  render() {
    console.log(moment().format("HH"));
    return (
      <BookingComponent services={this.props.services}
                        categories={this.props.categories}
                        currentStep={this.props.currentBookingStep}
                        bookingType={this.props.bookingType}
                        selectedDate={this.props.selectedDate}
                        selectedTime={this.props.selectedTime}
                        selectedAddress={this.props.selectedAddress}
                        selectedService={this.props.selectedService}
                        selectedLocation={this.props.selectedLocation}
                        selectedCategory={this.props.selectedCategory}

                        onDateSelect={this.handleDateSelect}
                        onTimeSelect={this.handleTimeSelect}
                        onAddressSelect={this.handleAddressSelect}
                        onServiceSelect={this.handleServiceSelect}
                        onLocationSelect={this.handleLocationSelect}
                        onCategorySelect={this.handleCategorySelect}
                        onSwitchToNextStep={this.handleSwitchToNextStep}
                        onSwitchToPreviousStep={this.handleSwitchToPreviousStep}/>
    );
  }
}
