import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/SmartLoginBtn.less'
class SmartLoginBtn extends Component {
  render() {
    return (
        <button className={this.props.btnclassname} type="button" onClick={this.props.onClick}>{this.props.name}</button>
    );
  }
}
//组件参数类型
SmartLoginBtn.propTypes = {
  btnclassname:React.PropTypes.string,
  name:React.PropTypes.string
};
SmartLoginBtn.defaultProps = {
};

export default SmartLoginBtn;
