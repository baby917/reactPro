import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/RegisterForm.less';
class RegisterForm extends Component {
  render() {
    return (

        <div className="register-box">
          <span>{this.props.text}</span>
          <input type={this.props.type} placeholder={this.props.placeText}/>
          {/*<button>获取验证码</button>*/}
        </div>
    );
  }
}

RegisterForm.propTypes = {
  text:React.PropTypes.string,
  placeText:React.PropTypes.string,
  type:React.PropTypes.string
};
RegisterForm.defaultProps = {
  type:'text'
};

export default RegisterForm;
