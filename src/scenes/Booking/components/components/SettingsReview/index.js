import React, {Component} from 'react';
import Checked from './components/Checked';
import {Row, Col, Button, Icon} from 'antd';
import PropTypes from 'prop-types';

import './styles.less';

export default class SettingsReview extends Component {

  static propTypes = {
    time:PropTypes.string,
    date:PropTypes.string,
    address: PropTypes.string,
    serviceName: PropTypes.string,
    categoryName: PropTypes.string,

    onSwitchToNextStep: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
  }

  handleSwitchToNextStep() {
    this.props.onSwitchToNextStep();
  }

  conditions = [
    "All party members over 18",
    "Event indoors in a private apartment / house",
    "Male Group Only",
    "Group size 3-15 Males",
    "Accept Terms and Conditions"
  ];


  render() {
    const {categoryName, serviceName, time, address} = this.props;
    return (
      <Row className="settings-review--component" type="flex" justify="center ">
        <Col>
          <Row>
            <Col>
              <h1 className="secondary">Your Booking</h1>
            </Col>
            <Col>
              <Checked>
               I want a {categoryName} {serviceName} for {time} at {address}
              </Checked>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <h1 className="secondary">Do you agree ?</h1>
            </Col>
            {this.conditions.map((condition, index)=>{
              return(
                <Col key={index}>
                  <Checked>
                    {condition}
                  </Checked>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={24}>
          <Row type="flex" justify="center">
            <Col>
              <Button onClick={this.handleSwitchToNextStep}>
                I agree, Continue <Icon type="check-circle" style={{color:"#42C6B6"}}/>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
