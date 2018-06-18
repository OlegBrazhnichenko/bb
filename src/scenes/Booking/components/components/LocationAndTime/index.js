import React, {Component} from 'react';
import {Row, Col, DatePicker, TimePicker, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';

import './styles.less';

export default class LocationAndTime extends Component {

  static propTypes = {
    bookingType: PropTypes.string,

    onTimeSelect: PropTypes.func,
    onDateSelect: PropTypes.func,
    onAddressSelect: PropTypes.func,
    onSwitchToNextStep: PropTypes.func,

    dateSelected: PropTypes.bool,
    timeSelected: PropTypes.bool,
    addressSelected: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleTimeSelect = this.handleTimeSelect.bind(this);
    this.handleAddressSelect = this.handleAddressSelect.bind(this);
    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
  }

  handleAddressSelect(e) {
    this.props.onAddressSelect(e.target.value);
  }

  handleTimeSelect(time) {
    this.props.onTimeSelect(moment(time).format("hh:mm"));
  }

  handleDateSelect(date) {
    this.props.onDateSelect(moment(date).format("MM.DD.YYYY"));
  }

  handleSwitchToNextStep() {
    this.props.onSwitchToNextStep();
  }

  render() {

    return (
      <Row className="location-time--container" type="flex" justify="center">
        <Col span={20}>
          <Row>
            <Col>
              <h1 className="secondary">Date</h1>
            </Col>
            <Col>
              <DatePicker onChange={this.handleDateSelect} {...this.props.bookingType==="soon"?{
                defaultValue: moment(),
                disabled: true,
              }:{}} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="secondary">Time</h1>
            </Col>
            <Col>
              <TimePicker onChange={this.handleTimeSelect}
                          defaultOpenValue={moment('00:00', 'HH:mm')}
                          format={"HH:mm"}
                          inputReadOnly
                          disabledHours={()=>{
                            return [23].concat(Array.apply(null, {length: moment().format("HH")}).map(Function.call, Number));}
                          }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="secondary">Location</h1>
            </Col>
            <Col>
              <Input onChange={this.handleAddressSelect} placeholder="Enter location"/>
            </Col>
          </Row>
          {this.props.addressSelected && this.props.dateSelected && this.props.timeSelected && (
            <Row>
              <Col>
                <Button onClick={this.handleSwitchToNextStep}>Review</Button>
              </Col>
            </Row>
          )}
        </Col>

      </Row>
    );
  }
}
