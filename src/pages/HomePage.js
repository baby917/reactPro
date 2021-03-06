import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//引入样式
import '../assets/styles/home.less';
//引入组件
import Headbar from '../components/Headbar';
import {
  Container,
  Slider,
  Grid,
  Col,
  Group,
  List
} from 'amazeui-touch';
//引入图片
import Banner1 from '../assets/images/banner-1.png';
import Banner2 from '../assets/images/banner-2.png';
import Banner3 from '../assets/images/banner-3.png';

class HomePage extends Component {
  render() {
    //轮播
    const onAction = function(index, direction) {
      // console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
    };
    const sliderIntance = (
      <Slider
        onAction={onAction}
      >
        <Slider.Item>
          <img
            src="../assets/images/pic_r2_c1.png" /></Slider.Item>
        <Slider.Item>
          <img
            src="../assets/images/pic_r2_c1.png" /></Slider.Item>
      </Slider>
    );
    //8大特色
    const features=(
      <Grid avg={4} className="features-col">
        <Col>
          <img src="../assets/images/features-1.png"/>
          <p>周边</p>
        </Col>
        <Col><img src="../assets/images/features-2.png"/>
          <p>外卖</p></Col>
        <Col><img src="../assets/images/features-3.png"/>
          <p>生活超市</p></Col>
        <Col><img src="../assets/images/features-4.png"/>
          <p>团购</p></Col>
        <Col><img src="../assets/images/features-5.png"/>
          <p>商城</p></Col>
        <Col><img src="../assets/images/features-6.png"/>
          <p>热卖</p></Col>
        <Col><img src="../assets/images/features-7.png"/>
          <p>新店推荐</p></Col>
        <Col><img src="../assets/images/features-8.png"/>
          <p>活动</p></Col>
      </Grid>
    );
    //banner
    const banner=(
      <Grid className="banner">
        <Col cols={2}><img src={Banner1} alt=""/></Col>
        <Col cols={2}><img src={Banner2} alt=""/></Col>
        <Col cols={2}><img src={Banner3} alt=""/></Col>
      </Grid>
    );
    //猜你喜欢
    const img40 = <img width="48" src="../assets/images/logo.jpg" src="../assets/images/banner-1.png" />;
    const albums = [
      {
        title: '男装',
        subTitle: '精品男装',
        href: 'http://music.163.com/#/album?id=31308',
        desc: `
      她坦白了我们所虚伪的 她单纯了我们所复杂的
      五年以来…
      5年的等待，是个漫长也是耗损的过程。
      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
      是我们唯一相信且期待杨乃文的理由。`
      },
      {
        title: '女装',
        subTitle: '精品女装',
        href: 'http://music.163.com/#/album?id=31312',
        desc: `
        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。`
      },
      {
        title: '童装',
        subTitle: '精品童装',
        href: 'http://music.163.com/#/album?id=31319',
        desc: `所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量`
      }
    ];
    const guesslike=(
      <Group
        header="猜你喜欢"
        noPadded
        className="guesslike"
      >
        <List>
          {albums.map((album, i) => {
            return (
              <List.Item
                {...album}
                target="_blank"
                media={img40}
                desc={null}
                href={i === 0 ? null : album.href}
                key={i}
              />
            );
          })}
        </List>
      </Group>
    );
    return (
      <Container fill={true}>
        {/*顶部导航*/}
        <Headbar icon='search' title='购物'/>
        {/*主内容*/}
        <Container className='homemain' scrollable={true} style={{height:'2000px'}}>
          {sliderIntance}
          {features}
          {banner}
          {guesslike}
        </Container>
      </Container>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
