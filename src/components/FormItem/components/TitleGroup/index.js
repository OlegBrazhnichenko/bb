import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div className="form-item-title-group">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
