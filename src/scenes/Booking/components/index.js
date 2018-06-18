import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import {STEPS}            from 'services/Booking/index';
import LocationAndTime    from './components/LocationAndTime';
import Payment            from './components/Payment';
import SettingsReview     from './components/SettingsReview';
import SuburbSelect       from './components/SuburbSelect';
import ServiceSelect      from './components/ServiceSelect';
import {
  Steps,
  // Button,
  // message,
  Row,
  Col,
  // Input
} from 'antd';

import './styles.less';

const Step = Steps.Step;

export default class BookingComponent extends Component {
  static propTypes = {
    selectedTime: PropTypes.any,
    selectedDate: PropTypes.any,
    selectedAddress: PropTypes.any,

    currentStep: PropTypes.string,
    bookingType: PropTypes.string,
    selectedService: PropTypes.string,
    selectedLocation: PropTypes.string,

    onDateSelect: PropTypes.func,
    onTimeSelect: PropTypes.func,
    onAddressSelect: PropTypes.func,
    onServiceSelect: PropTypes.func,
    onLocationSelect: PropTypes.func,
    onCategorySelect: PropTypes.func,
    onSwitchToNextStep: PropTypes.func,
    onSwitchToPreviousStep: PropTypes.func,

    selectedCategory: PropTypes.object,

    services: PropTypes.array,
    categories: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
    this.handleSwitchToPreviousStep = this. handleSwitchToPreviousStep.bind(this);
  }

  steps = {
    [STEPS.SUBURB_SELECT]        : {
      title: "Suburb"
    },
    [STEPS.SERVICE_SELECT]       : {
      title: "Service"
    },
    [STEPS.LOCATION_TIME_SELECT] : {
      title: "Location"
    },
    [STEPS.SETTINGS_REVIEW]      : {
      title: "Review"
    },
    [STEPS.PAYMENT]              : {
      title: "Payment"
    },
  };



  handleSwitchToNextStep() {
    this.props.onSwitchToNextStep();
  }

  handleSwitchToPreviousStep() {
    this.props.onSwitchToPreviousStep();
  }

  render() {

    const steps = {...this.steps};

    const {currentStep} = this.props;

    const commonProps = {
      onSwitchToNextStep: this.handleSwitchToNextStep,
      onSwitchToPreviousStep: this.handleSwitchToPreviousStep,
    };

    const currentStepIndex = Object.keys(steps).indexOf(currentStep);

    return (
      <Row className="booking--component">
        <Col className="steps">
          <Steps current={currentStepIndex}>
            {Object.keys(steps).map(item => <Step key={steps[item].title} title={steps[item].title} />)}
          </Steps>
        </Col>
        <Col span={24}>
          <div className="steps-content">
            {{
              [STEPS.SUBURB_SELECT]: (
                <SuburbSelect {...commonProps}
                              onLocationSelect={this.props.onLocationSelect}

                              selectedLocation={this.props.selectedLocation} />
              ),
              [STEPS.SERVICE_SELECT]: (
                <ServiceSelect {...commonProps}
                               services={this.props.services}
                               categories={this.props.categories}
                               selectedService={this.props.selectedService}
                               selectedCategory={this.props.selectedCategory}

                               onServiceSelect={this.props.onServiceSelect}
                               onCategorySelect={this.props.onCategorySelect}/>
              ),
              [STEPS.LOCATION_TIME_SELECT]: (
                <LocationAndTime {...commonProps}
                                 bookingType={this.props.bookingType}
                                 dateSelected={!!this.props.selectedDate}
                                 timeSelected={!!this.props.selectedTime}
                                 addressSelected={!!this.props.selectedAddress}

                                 onDateSelect={this.props.onDateSelect}
                                 onTimeSelect={this.props.onTimeSelect}
                                 onAddressSelect={this.props.onAddressSelect}/>
              ),
              [STEPS.SETTINGS_REVIEW]: (
                <SettingsReview {...commonProps}
                                time={this.props.selectedTime}
                                address={this.props.selectedAddress}
                                serviceName={this.props.selectedService}
                                categoryName={this.props.selectedCategory && this.props.selectedCategory.name}/>
              ),
              [STEPS.PAYMENT]: (
                <Payment {...commonProps}/>
              )
            }[currentStep]}
          </div>
        </Col>
      </Row>

    );
  }
}
