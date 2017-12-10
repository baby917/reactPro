import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';
//引入样式
import '../assets/styles/app.less';
//引入图标
import '../assets/fonts/aliiconfont/iconfont.css'
class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };
  render() {
    const {
      location,
      children,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          // transition={transition}
          // fade transition example
          transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <TabBar
          amStyle="info"
        >
          <TabBar.Item
            component={Link}
            selected icon=" iconfont icon-gouwu"
            selected title="购物"
             selected={router.isActive('/app/HomePage', true)}
            to="/app/HomePage"
            // onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon=" iconfont icon-fuwu"
            title="服务"
             selected={router.isActive('/app/ServicePage', true)}
            to="/app/ServicePage"
            onlyActiveOnIndex
          />
          <TabBar.Item
            // component={Link}
            icon=" iconfont icon-shejiao1"
            title="社交"
            // selected={router.isActive('/ServicePage', true)}
            // to="/ServicePage"
            // onlyActiveOnIndex
          />
          <TabBar.Item
            // component={Link}
            icon=" iconfont icon-wode1"
            title="我的"
            badge="404"
            // selected={router.isActive('/ServicePage', true)}
            // to="/ServicePage"
            // onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

// Pages
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ServicePage from './ServicePage';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={LoginPage}></Route>
    <Route path="/register" component={RegisterPage}></Route>
    <Route path="/app" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="HomePage" component={HomePage} />
      <Route path="ServicePage" component={ServicePage} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('app'));
});
