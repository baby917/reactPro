import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/service.less';
//引入组件
import {
  Container
  ,Group
  ,Grid
  ,Col
} from 'amazeui-touch';
//引入图片
import Serviceimg1 from '../assets/images/pic2_r2_1.png';
import Serviceimg2 from '../assets/images/pic2_r2_2.png';
import Serviceimg3 from '../assets/images/pic2_r2_3.png';
import Serviceimg4 from '../assets/images/pic2_r2_4.png';
import Serviceimg5 from '../assets/images/pic2_r2_5.png';
import Serviceimg6 from '../assets/images/pic2_r2_6.png';
import Serviceimg7 from '../assets/images/pic2_r2_7.png';

import Serviceimg11 from '../assets/images/pic2_r2_11.png';
import Serviceimg12 from '../assets/images/pic2_r2_12.png';
import Serviceimg13 from '../assets/images/pic2_r2_13.png';
import Serviceimg14 from '../assets/images/pic2_r2_14.png';
import Serviceimg15 from '../assets/images/pic2_r2_15.png';
import Serviceimg16 from '../assets/images/pic2_r2_16.png';
import Serviceimg17 from '../assets/images/pic2_r2_17.png';
import Serviceimg18 from '../assets/images/pic2_r2_18.png';
import Serviceimg19 from '../assets/images/pic2_r2_19.png';
import Serviceimg20 from '../assets/images/pic2_r2_20.png';

import Headbar from '../components/Headbar';
class ServicePage extends Component {
  render() {
    //政务服务
    const govermentservice=(
      <Group
        header="政务服务"
        className="govermentservice"
      >
        <Grid avg={4}>
          <Col>
            <img src={Serviceimg1} alt=""/>
            <p>政府公告</p>
          </Col>
          <Col>
            <img src={Serviceimg2} alt=""/>
            <p>政策宣传</p>
          </Col>
          <Col>
            <img src={Serviceimg3} alt=""/>
            <p>居民意见</p>
          </Col>
          <Col>
            <img src={Serviceimg4} alt=""/>
            <p>办事指南</p>
          </Col>
          <Col>
            <img src={Serviceimg5} alt=""/>
            <p>社区党建</p>
          </Col>
          <Col>
            <img src={Serviceimg6} alt=""/>
            <p>就业创业</p>
          </Col>
          <Col>
            <img src={Serviceimg7} alt=""/>
            <p>更多服务</p>
          </Col>
        </Grid>
      </Group>
    );
    //生活服务
    const lifeservice=(
      <Group
        header="生活服务"
        className="lifeservice"
      >
        <Grid avg={4}>
          <Col>
            <img src={Serviceimg11} alt=""/>
            <p>小区公告</p>
          </Col>
          <Col>
            <img src={Serviceimg12} alt=""/>
            <p>缴费管理</p>
          </Col>
          <Col>
            <img src={Serviceimg13} alt=""/>
            <p>家政服务</p>
          </Col>
          <Col>
            <img src={Serviceimg14} alt=""/>
            <p>物业服务</p>
          </Col>
          <Col>
            <img src={Serviceimg15} alt=""/>
            <p>快递服务</p>
          </Col>
          <Col>
            <img src={Serviceimg16} alt=""/>
            <p>房屋出租</p>
          </Col>
          <Col>
            <img src={Serviceimg17} alt=""/>
            <p>洗衣店</p>
          </Col>
          <Col>
            <img src={Serviceimg18} alt=""/>
            <p>便民电话</p>
          </Col>
          <Col>
            <img src={Serviceimg19} alt=""/>
            <p>二手物品</p>
          </Col>
          <Col>
            <img src={Serviceimg20} alt=""/>
            <p>店铺申请</p>
          </Col>
          <Col>
            <img src={Serviceimg7} alt=""/>
            <p>更多服务</p>
          </Col>
        </Grid>
      </Group>
    );
    return (
      <Container fill={true} className="servicemain">
        <Headbar title='服务'/>
        <Container scrollable={true}>
          {govermentservice}
          {lifeservice}
        </Container>
      </Container>
    );
  }
}

ServicePage.propTypes = {};
ServicePage.defaultProps = {};

export default ServicePage;
