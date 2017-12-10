import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/headbar.less';
//引入组件
import {
  NavBar
} from 'amazeui-touch';
class Headbar extends Component {
  render() {
    //顶部导航
    // const clickHandler = (item, e) => {
    //   e.preventDefault();
    //   console.log(item);
    // };
    const dataAll = {
      title: this.props.title,
      leftNav: [{href: '#', icon: this.props.iconleft}],
      rightNav: [{href: this.props.url, icon: this.props.icon}]
      // onAction: clickHandler
    };
    return (
      <NavBar {...dataAll} amStyle="secondary" className="headbar"/>
    );
  }
}

Headbar.propTypes = {
  title:React.PropTypes.string,
  icon:React.PropTypes.string,
  url:React.PropTypes.string
};
Headbar.defaultProps = {};

export default Headbar;
