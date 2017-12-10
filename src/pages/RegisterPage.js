import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入组件
import '../assets/styles/Register.less';
import Headbar from '../components/Headbar';
import RegisterForm from '../components/RegisterForm';
//按钮组件
import SmartLoginBtn from '../components/SmartLoginBtn';
class RegisterPage extends Component {
  render() {
    return (
      //注册页面
      <div id="register-container">
        {/*头部组件*/}
        <Headbar iconleft="left-nav" title='注册'/>
        {/*<Header icon="fanhui" title='注册'/>*/}
        {/*注册表单*/}
        <section id="register-form" className="register-form">
          <RegisterForm text="片 区" placeText="泸州政法委"/>
          <RegisterForm text="手机号" placeText="请输入手机号"/>
          <RegisterForm text="密    码" placeText="请输入密码" type="password"/>
          <RegisterForm text="确认密码" placeText="请输入确认密码" type="password"/>
          {/*<RegisterForm text="验证码" placeText="请输入验证码"/>*/}
          <div className="register-box register-box-last">
            <span>验证码</span>
            <input type="text" placeholder="请输入验证码"/>
            <button>获取验证码</button>
          </div>
          {/*复选框*/}
          <p className="register-checkbox">
            <input type="checkbox"/>同意接受智慧社区life使用协议
          </p>
        </section>
        {/*按钮*/}
        <section id="registerBtn">
          <SmartLoginBtn btnclassname="loginBtn RegisterBtn" name="下一步"/>
        </section>
      </div>
    );
  }
}

RegisterPage.propTypes = {};
RegisterPage.defaultProps = {};

export default RegisterPage;
