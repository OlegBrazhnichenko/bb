import React, {Component} from 'react';

import {Row, Col, Input, notification} from 'antd';

import './styles.less';

export default class Payment extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      numberConfirmed: false,
      number: undefined,
    };
  }

  handleInputChange(input) {
    input.target.value = input.target.value.replace(/[^0-9]+/, "");

    if (input.target.value.length === 10) {
      if(this.state.number) {
        if(this.state.number === input.target.value) {
          this.setState({numberConfirmed: true});
          notification.success({
            message: 'confirmed',
          });
        } else {
          this.setState({
            number: undefined,
            numberConfirmed: false,
          });
          input.target.value = "";
          notification.warning({
            message: "Numbers doesn't match, please, try again",
          });
        }
      } else {
        this.setState({number: input.target.value});
        input.target.value = "";
        notification.info({
          message: 'Type your number again to confirm',
        });
      }
    }
  }

  render() {
    return (
      <Row className="payment-page--component">
        <Col>
          <Row>
            <Col>
              <h1 className="secondary">Number</h1>
            </Col>
            <Col>
              <Input name="phone_number" maxLength="10" prefix="+ 61" disabled={this.state.numberConfirmed} onChange={this.handleInputChange}/>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <h1 className="secondary">Email</h1>
            </Col>
            <Col>
              <Input name="email"/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
