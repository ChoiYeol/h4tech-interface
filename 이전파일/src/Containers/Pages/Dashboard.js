import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card , Button} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import {Player} from 'video-react';
import 'video-react/dist/video-react.css';

import './Common.css';

import {FOS, SoundChart, TempChart} from './Sensor';
import {
    RobotChart1,
    RobotChart2,
    RobotChart3,
    RobotChart4,
    RobotChart5,
    RobotChart6,
    SagnacChart
} from './RobotChart';
import {
    SagnacAvgChart, TempAvgChart, SoundAvgChart
} from './RobotAvgChart';

import './Robot1.css';
import { Joystick } from 'react-joystick-component';

            //조이스틱 컬러 파스텔 변경
const Dashboard = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dashboard contents">
                <Row gutter={[6, 6]}>
                    <Col span={8}>
                        <Card  bodyStyle={{height: 370}}>      <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}
                                        />
                                          <div style={{position:'absolute', color:'white',marginTop:  '-50%'}}  >[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bodyStyle={{height: 370}}>       <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}
                                        />
                                          <div style={{position:'absolute', color:'white',marginTop:  '-50%'}}  >[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bodyStyle={{height: 370 }}>
                            <div style={{ position:'absolute' ,marginTop:'7%' ,border:'5px solid #1890ff', background:'#e6f7ff', width:'90%', height:'60%'}}/>
                                <div style={{ position:'absolute' ,marginTop:'7%' ,width:'90%', height:'60%'}} ><h3>&nbsp;카메라 조정 (확대, 축소)</h3></div>
                                <div style={{ position:'absolute' , marginLeft:'15%', marginTop:'15%' ,width:'7%' }}><Button style={{border:'1px solid black'}} type="primary">▲</Button></div>
                                <div style={{ position:'absolute' , marginLeft:'6%', marginTop:'23%' ,width:'7%' }}><Button  style={{border:'1px solid black'}} type="primary">◀</Button></div>
                                <div style={{ position:'absolute' , marginLeft:'24%', marginTop:'23%' ,width:'7%' }}><Button style={{border:'1px solid black'}} type="primary">▶</Button></div>
                                <div style={{ position:'absolute' , marginLeft:'15%', marginTop:'31%' ,width:'7%' }}><Button style={{border:'1px solid black'}} type="primary">▼</Button></div>


                                <div style={{ position:'absolute' , marginLeft:'14.5%', marginTop:'22%' ,width:'7%', height:'10%' }}><Joystick size={50} baseColor="#1890ff" stickColor="black" ></Joystick></div>

                                <div className="card3-control-button" style={{position:'absolute', marginLeft:'37%',  marginTop:'10%' }}>
                                        <img style={{border:'1px solid black', height:'180px'}} src={ require('../../Image/scalebar.png') } />
                                </div>

                                <div className="card3-control-button" style={{position:'absolute', marginLeft:'50%' ,width:'18%'}}>
                                      <div style={{ marginTop:'70%'}}><Button type="primary" style={{border:'1px solid black'}}>자동순찰정지</Button></div>
                                      <div style={{ marginTop:'20%'}}><Button type="primary" style={{border:'1px solid black'}}>자동순찰전환</Button></div>
                                      <div style={{ marginTop:'20%'}}><Button type="primary" style={{border:'1px solid black'}}>설정 리셋</Button></div>
                                </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                height: 520
                            }}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                style={{marginBottom:'15px'}}
                                >
                                <div className="robot-img">
                                    <img
                                        src="/robotcamera.png"
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}/>
                                </div>
                                <div className="robot-info">
                                    <p>
                                        전압: 220V<br/>
                                        전류: 70A<br/>
                                        내부온도: 30도<br/>
                                        위치: 300m
                                    </p>
                                </div>
                            </Card>
                            <Card title="레일 로봇 상태 추이" size="small">
                                <SagnacChart/>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 36px',
                                height: 520
                            }}>
                            <Row>
                                <Col
                                    span={24}
                                    style={{
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                    }}>
                                    <div
                                        style={{
                                            float: 'left'
                                        }}>환경정보</div>
                                    <div
                                        style={{
                                            float: 'right'
                                        }}>Update every minutes</div>
                                </Col>
                                <Col span={8}><RobotChart1/></Col>
                                <Col span={8}><RobotChart2/></Col>
                                <Col span={8}><RobotChart3/></Col>
                                <Col span={8}><RobotChart4/></Col>
                                <Col span={8}><RobotChart5/></Col>
                                <Col span={8}><RobotChart6/></Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Dashboard;
