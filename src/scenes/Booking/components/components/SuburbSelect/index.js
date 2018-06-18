import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';
import {Button, Row, Col} from 'antd';
import {Field,reduxForm} from 'redux-form';

import './styles.less';

@reduxForm({
  form: "testForm"
})
export default class SuburbSelect extends Component {

  static propTypes = {
    onSwitchToNextStep: PropTypes.func,
    onLocationSelect: PropTypes.func,
    selectedLocation: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.handleSwitchToNextStep = this.handleSwitchToNextStep.bind(this);
    this.renderAutocomplete = this.renderAutocomplete.bind(this);
  }

  handleSwitchToNextStep() {
    this.props.onSwitchToNextStep();
  }



  renderAutocomplete(field) {
    const handleLocationSelect = (input) => {
      this.props.onLocationSelect(input.formatted_address);
      field.input.onChange(input.formatted_address);
    };

    return (
      <Autocomplete
        {...field.input}
        className="ant-input autocomplete"
        placeholder = "select your suburb"
        onPlaceSelected={(input) => {handleLocationSelect(input);}}
        types={['(regions)']}
      />
    );
  }

  render() {

    return (
      <div className="suburb-select--component">
        <div className="suburb-select">
          <h1>Your suburb:</h1>
          <Field  name="suburb" component={this.renderAutocomplete}/>
        </div>

        {this.props.selectedLocation !== null && (
          <div>
            <Row className="girls" type="flex" justify="space-between">
              <Col span={24}>
                <h1><span className="secondary">3</span> girls found nearby! :)</h1>
              </Col>
              <Col className="girl" span={7}>
                <Row className="photo">
                  <img src="assets/images/girl.jpg" alt=""/>
                </Row>
                <Row className="name">
                  <span>Lisa</span>
                </Row>
              </Col>
              <Col className="girl online" span={7}>
                <Row className="photo">
                  <img src="assets/images/girl.jpg" alt=""/>
                </Row>
                <Row className="name">
                  <span>Ruby</span>
                </Row>
              </Col>
              <Col className="girl" span={7}>
                <Row className="photo">
                  <img src="assets/images/girl.jpg" alt=""/>
                </Row>
                <Row className="name">
                  <span>Candy</span>
                </Row>
              </Col>
            </Row>
            <Row type="flex" justify="center" >
              <Button className="btn-primary" type="primary" onClick={this.handleSwitchToNextStep}>Book A Baby!</Button>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
