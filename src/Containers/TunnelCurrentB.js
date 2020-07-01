import React, {Fragment ,useState, useEffect} from 'react';
import {Breadcrumb, Row, Col, Card } from 'antd';
import {DashboardOutlined,DatabaseOutlined , SmileTwoTone } from '@ant-design/icons';
import { Line , StackedArea} from '@ant-design/charts';
import { GraphsTemp , GraphsEvent , GraphsCotwo} from './Graphs';
import './TunnelCurrentB.css'

import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);



const TunnelList =({tList})=>{

  const animation = {
    bezier: {
      type: 'soft',
      vars: [
        { x: 500, y: 0 },
        { x: 600, y: 0 },
      ],
    },
    repeat: -1,
    yoyo: true,
    duration: 5000,
  };

  return(
    <>
    <Row justify="center"   style={{ marginBottom:'3px'}} >
          <Col span={5}     style={{  background: 'white'  , height:'370px' ,boxShadow:'5px 5px 5px 5px gray' }} >
              <h2>터널명: 부강 터널 [{tList==1?'상행':'하행'}]</h2>
              <ul style={{fontSize:'110%' , lineHeight:'250%'}}>
                  <li>경위도: 127.22.36 E, 36.31.46 N</li>
                  <li>로봇 카메라: 원활=<SmileTwoTone/>  </li>
                  <li>열화상 카메라: 이상=<SmileTwoTone twoToneColor="#eb2f96"/>  </li>
                  <li>일반 카메라: 원활=<SmileTwoTone /> </li>
                  <li>내부 혼잡도: 원활=<SmileTwoTone /> </li>
                  <li>Sagnac: 정상=<SmileTwoTone /> </li>
                  <li>FBG: 정상=<SmileTwoTone /></li>
              </ul>
          </Col>
          <Col  span={19}   style={{  background: 'white' ,height:'370px' ,boxShadow:'5px 5px 5px 5px gray' }} >


          <ul style={{position:'absolute',marginTop:'24%',fontSize:'110%' , border:'1px solid black', lineHeight:'130%'}}>
              <div style={{marginTop:'-19%'}}>범례</div>
              <li>내부 혼잡도: <SmileTwoTone twoToneColor="#eb2f96"/></li>
              <li>일반 카메라: <SmileTwoTone /> </li>
              <li>열화상 카메라: <SmileTwoTone twoToneColor="#00ff00" />  </li>
              <li>로봇 카메라: <SmileTwoTone twoToneColor="#3333cc"/> </li>
          </ul>

                <div style={{position:'absolute',marginLeft:'25%' , marginTop:'6%',width:'50%' ,border:'4px solid #3333cc'  }}></div>
                <TweenOne animation={animation} > <div style={{position:'absolute',marginLeft:'25%' , marginTop:'5%' , width:'3%', height:'35px',border:'4px solid #3333cc' , background:'#7070db', borderRadius:'20%' }}></div></TweenOne>

                <div style={{position:'absolute',marginLeft:'29%' , marginTop:'9%',width:'55%' ,border:'1px solid black'  }}></div>

                <div style={{position:'absolute',marginLeft:'28%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75', borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'46%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'64%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'82%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>

                <div style={{position:'absolute',marginLeft:'27%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue', borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'45%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'63%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'81%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>


                <div style={{position:'absolute',marginLeft:'15%' , marginTop:'24%',width:'12%', height:'10%', background:'#e6f7ff',textAlign:'center',border:'4px solid #1890ff'  }}><h1>내부혼잡도: 원활</h1> </div>
                <div style={{position:'absolute',marginLeft:'28%' , marginTop:'24%',width:'10%', height:'10%', background:'#e6f7ff' ,textAlign:'center',border:'4px solid #1890ff' }}><h1>FBG: 24/24</h1></div>
                <div style={{position:'absolute',marginLeft:'39%' , marginTop:'24%',width:'10%', height:'10%', background:'#e6f7ff',textAlign:'center' ,border:'4px solid #1890ff' }}><h1>Sagnac: 정상</h1></div>


              <div   style={{float:'left',marginLeft:'23%' ,marginTop:'6%' ,width:'55%'  ,border:'3px solid black' }}></div>
              <div style={{float:'left' ,marginLeft:'15%' ,  width:'15%', height:'200px' ,border:'5px solid black' , borderRadius:'100px 100px 0px 0px' }}></div>

              <div style={{marginLeft:'70%' , marginTop:'6%',width:'16%', height:'200px'   ,borderRight:'5px solid black' , borderRadius:'100px 100px 0px 0px' }}></div>
          </Col>
    </Row>
    </>
  );
}

export default class TunnelCurrentB extends React.Component {


//border:'solid 1px black'
refreshDiv =()=>{
  this.setState({});
}

  render(){
    const tList = [1, 2 ];
    {setTimeout(this.refreshDiv , 15000)}
    return (
        <Fragment>

            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>

                <div style={{marginTop:'5px'}}>.</div>


                <Card>
                <Row justify="center"  style={{ marginBottom:'3px'}} >
                    <Col span={5}  style={{background: '#F9F9F9'  , height:'60px',boxShadow:'5px 5px 5px 5px gray' }} >
                        <h1 style={{ textAlign:'left' , marginLeft:'12%', fontSize:'270%'}}>터널명</h1>
                      </Col>
                      <Col span={19}   style={{ background: '#F9F9F9' ,height:'60px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                          <h1 style={{ textAlign:'left' , marginLeft:'3%', fontSize:'270%'}}>터널 내부 현황</h1>
                      </Col>
                </Row>
                   {tList.map(tList =>(<TunnelList  tList={tList} key={tList.id} ></TunnelList>) )}
                </Card>

            </div>
        </Fragment>
    );
  }
};
//<GraphsTemp/>

/*

<div  style={{borderRight:'2px solid #F1F1F1' ,background: 'white'  ,width:'33%',height:'300px' , float:'left'}}>   <GraphsTemp/></div>
  <div  style={{borderRight:'2px solid #F1F1F1' , background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsEvent/></div>
  <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsCotwo/></div>

*/
