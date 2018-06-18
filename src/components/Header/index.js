import React, {Component} from 'react';
import { Layout, Row, Col, Dropdown, Menu} from 'antd';


import './styles.less';

class Header extends Component {


  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuVisible: false,
    };
  }

  toggleMenu() {
    this.setState({menuVisible: !this.state.menuVisible});
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );

    return (

        <Layout.Header>
          <Row className="header-content" type="flex" justify="space-between" align="middle">
            <Col>
              <div className="logo">
                <img src="assets/images/logo.png" alt=""/>
              </div>
            </Col>
            <Col className="menu-burger">
              <Dropdown disabled overlay={menu} onVisibleChange={this.toggleMenu} trigger={['click']}>
                <div>
                  <input type="checkbox" id="hmt" className="hidden-menu-ticker" checked={this.state.menuVisible}/>
                  <label className="btn-menu" htmlFor="hmt">
                    <span/>
                    <span/>
                    <span/>
                  </label>
                </div>
              </Dropdown>
            </Col>
          </Row>
        </Layout.Header>

      );
  }
}

export default Header;
