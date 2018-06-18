import React, {Component} from 'react';
// import {reduxForm}        from 'redux-form';
import {Button, Row, Col, Select} from 'antd';
import PropTypes          from 'prop-types';

import './styles.less';

// @reduxForm({
//   form: 'simple'
// })
export default class ServiceSelect extends Component {
  static propTypes = {
    selectedService: PropTypes.string,

    selectedCategory: PropTypes.object,

    onServiceSelect: PropTypes.func,
    onCategorySelect: PropTypes.func,
    onSwitchToNextStep: PropTypes.func,

    services: PropTypes.array,
    categories: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.handleServiceSelect = this.handleServiceSelect.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
  }

  handleCategorySelect(e) {
    this.props.onCategorySelect(e.target.dataset.category);
  }

  handleServiceSelect(service) {
    this.props.onServiceSelect(service);
  }

  handleSwitchToNextStep() {
    this.props.onSwitchToNextStep();
  }

  renderCategories() {
    return (
      <Row>
        <Col>
          <h1>
            Select category
          </h1>
        </Col>
        <Row className="categories" type="flex" justify="center">
          <Col className="category" sm={10} span={15}>
            <img data-category="stripper" src="assets/images/stripper.png" alt="" onClick={this.handleCategorySelect}/>
          </Col>
          <Col className="category" sm={10} span={15}>
            <img data-category="waitress" src="assets/images/waitress.png" alt="" onClick={this.handleCategorySelect}/>
          </Col>
        </Row>
      </Row>
    );
  }


  renderServices() {
    const services = this.props.services.filter((service)=>{
      return service.category_id === this.props.selectedCategory.id;
    });

    return (
      <Row className="services">
        <Col>
          <h1>
            Select service
          </h1>
        </Col>
        <Row type="flex" justify="center">
          <Col className="category" /*sm={15}*/ span={18}>
            <img data-category="stripper" src={"assets/images/"+this.props.selectedCategory.name+".png"} alt=""/>
          </Col>
          <Col className="services-list" /*sm={15}*/ span={18}>
            <Select
              style={{ width: "100%", color:"black" }}
              placeholder="Select service"
              onChange={this.handleServiceSelect}
            >
              {services.map((service, index)=>{
                return (<Select.Option key={index} value={service.type}>{service.type}</Select.Option>);
              })}
            </Select>
          </Col>
        </Row>
      </Row>
    );
  }

  render() {

    return (
      <Row className="service-select--component">
        {!this.props.selectedCategory && this.renderCategories() || this.renderServices()}
        {this.props.selectedCategory && this.props.selectedService && (
          <Row type="flex" justify="center">
            <Button onClick={this.handleSwitchToNextStep}>good</Button>
          </Row>
        )}
      </Row>
    );
  }
}
