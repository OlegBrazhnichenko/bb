import React from 'react';
import './styles.less';
import Title from './components/Title';
import TitleGroup from './components/TitleGroup';
import Content from './components/Content';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    offset: PropTypes.bool,
    visible: PropTypes.bool
  };

  render() {

    const classNames = classnames({
      'form-item': true,
      'none-offset': this.props.offset === false,
      'visible': this.props.visible === true,
      'non-visible': this.props.visible === false
    });

    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

FormItem.Title = Title;
FormItem.TitleGroup = TitleGroup;
FormItem.Content = Content;

export default FormItem;
