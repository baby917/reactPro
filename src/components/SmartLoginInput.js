import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/SmartLoginInput.less';
class SmartLoginInput extends Component {
  //设置默认值
  constructor(){
    super();
    this.state={
      value:''
    }
  }
  handleChange(e){
    //获取新的值
    var newValue=e.target.value;

  //  状态改变时新值覆盖默认值
    this.setState({
      value : newValue
    });
    // console.log(this.props.name,newValue)
    this.props.parentState(this.props.name,newValue);
  }
  render() {
    // console.log('render',this.props.name,this.state.value)
    return (
      <div className="input-box">
        <label className="input-ico">
          <i className={this.props.icon}></i>
        </label>
        <input type={this.props.type} className="input-text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
      </div >
    );
  }
}
//组件约束类型
SmartLoginInput.propTypes = {
  icon:React.PropTypes.string,
  type:React.PropTypes.string
};
//默认props
SmartLoginInput.defaultProps = {};

export default SmartLoginInput;
