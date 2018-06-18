import React from 'react';
import PropTypes from 'prop-types';
import {Layout as AntdLayout, Row}  from 'antd';

import Header from 'components/Header';

import './ant-overrides.less';
import './styles.less';

const Content = AntdLayout.Content;

export default class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {

    return (
      <AntdLayout>
        <Header/>
        <Content className="content--container">
          <Row className="content" type="flex" justify="center">
            {this.props.children}
          </Row>
        </Content>
      </AntdLayout>
    );
  }
}
