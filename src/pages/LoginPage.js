/**
 * Created by Administrator on 2017/7/21.
 */
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入login样式
import '../assets/styles/Login.less';
//引入logo
import LogoImg from '../assets/images/logo.jpg';
//引入axios
import axios from 'axios';
//输入框
import SmartLoginInput from '../components/SmartLoginInput';
//按钮组件
import SmartLoginBtn from '../components/SmartLoginBtn';
class Login extends Component {
  //设置初始值
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
  }
  //点击登录按钮时触发事件
  doLogin(){
    var self = this;
    // console.log('dologin',self)
    // console.log('username',this.state.username)
    // console.log('username',this.state.password)
  //  发送axios请求
    axios.get('../server/data.json', {
      params: {
        username: this.state.username,
        password:this.state.password
      }
    })
      .then(function (response) {
        if(response.data.success){
          alert(response.data.message);
          // console.log('this',self)
          self.context.router.push('/app/HomePage');
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //设置钩子函数
  handleParentState(name,newValue){
    // console.log('handleParentState',arguments);
    //创建新状态对象
    var newState={};
    //给新对象赋值
    newState[name]=newValue;
    //改变状态值
    this.setState(newState);
  }

  //声明周期防止再次渲染
  shouldComponentUpdate(){
    return false;
  }

  //注册按钮
  handleRegister(){
    this.context.router.push('/register')
  }
  //游客登录按钮
  handleVisiter (){
    this.context.router.push('/app/HomePage')
  }
  render() {
    return (
      //登录页面
      <div id='login-container'>
        {/*logo和文字*/}
        <section id='login-logo'className="login-logo">
          <img src={LogoImg} alt="公司logo" className="logo-img"/>
          <p className="logo-text">住这里</p>
        </section>
        {/*form表单*/}
        <section id='login-form' className="login-form">
          <SmartLoginInput name="username" icon="iconmoon-mobile" type="text"  parentState={(name,newValue)=>this.handleParentState(name,newValue)}/>
          <SmartLoginInput name="password" icon="iconmoon-lock" type="password"  parentState={(name,newValue)=>this.handleParentState(name,newValue)}/>
          <SmartLoginBtn btnclassname="loginBtn" name="登录" onClick={()=>this.doLogin()}/>
          <p className="loginTip">忘记密码？</p>
        </section>
        {/*按钮*/}
        <section className="login-btn">
          <SmartLoginBtn btnclassname="login-btn-left" name="用户注册" onClick={()=>this.handleRegister()}/>
          <SmartLoginBtn btnclassname="login-btn-right" name="游客登录" onClick={()=>this.handleVisiter()}/>
        </section>
      </div>
    )
  }
}
//页面添加路由
Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
Login.propTypes = {};
Login.defaultProps = {};

export default Login;
