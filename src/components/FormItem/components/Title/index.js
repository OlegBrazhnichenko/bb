import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.any
  };

  render() {
    return (
      <div className="form-item-title" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Title;
