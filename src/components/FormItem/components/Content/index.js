import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    input: PropTypes.any,
    offset: PropTypes.string
  };

  render() {

    const classNames = classnames({
      'form-item-content': true,
      'input': !!this.props.input,
      ['offset-' + this.props.offset]: !!this.props.offset
    });

    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
