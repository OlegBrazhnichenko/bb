import React from 'react';
import FormItem from 'components/FormItem';
import {Form, Input, Icon} from 'antd';
import PropTypes from 'prop-types';
import {Field as FormField} from 'redux-form';

import "./styles.less";

export default class Field extends React.Component {

  static propTypes = {
    title: PropTypes.string
  };

  titledField({autoFocus = false, title, displayError = true, placeholder, rows, input, type, icon, meta: {touched, error, warning}}) {
    return (
      <Form.Item validateStatus={touched && displayError ? (error ? 'error' : warning ? 'warning' : '' ) : 'success'}
                 className="form-field"
                 help={touched && displayError ? (error || warning ? error || warning : '' ) : ''}>
        <FormItem>
          <FormItem.Title>
            { title }
          </FormItem.Title>
          <FormItem.Content>
            <Input autoFocus={autoFocus || null} {...input} rows={rows} type={type} placeholder={placeholder}
                   prefix={icon ? <Icon type={icon} className="form--field-icon"/> : null}/>
          </FormItem.Content>
        </FormItem>
      </Form.Item>
    );
  }

  simpleField({autoFocus = false, displayError = true, validateStatus = false, placeholder, rows, input, type, icon, meta: {touched, error, warning}}) {
    return (
      <Form.Item
        validateStatus={validateStatus || (touched && displayError ? (error ? 'error' : warning ? 'warning' : '' ) : 'success')}
        className="form-field"
        help={touched && displayError ? (error || warning ? error || warning : '' ) : ''}>
        <Input autoFocus={autoFocus || null} {...input} rows={rows} type={type} placeholder={placeholder}
               prefix={icon ? <Icon type={icon} className="form--field-icon"/> : null}/>
      </Form.Item>
    );
  }


  render() {
    const props = this.props;

    if (this.props.title) {
      return (
        <FormField {...props} component={this.titledField}/>
      );
    } else {
      return (
        <FormField {...props} component={this.simpleField}/>
      );
    }
  }
}
