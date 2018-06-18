import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Icon} from 'antd';

import "./styles.less";

export default class Checked extends Component {
  static propTypes = {
    children : PropTypes.any,
  };

  render() {
    return(
      <Row className="checked--component">
        <Col span={2}>
          <Icon className="icon" type="check-square" />
        </Col>
        <Col span={22} className="text">
          <span>{this.props.children}</span>
        </Col>
      </Row>
    );
  }
}
