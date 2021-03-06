import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'antd/dist/antd.css';
import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Home1 from './Containers/Pages/Home_1';
import Dashboard from './Containers/Pages/Dashboard';
import Chart from './Containers/Pages/Chart';
import Video from './Containers/Pages/Video';
import EventManager from './Containers/Pages/EventManager';
import RobotControl from './Containers/Pages/RobotControl';
 import User from './Containers/Pages/User';
 import Device from './Containers/Pages/Device';
import Tunnel from './Containers/Pages/TunnelCurrentB';

import HeaderBox from './Layout/HeaderBox';
import FooterBox from './Layout/FooterBox';
import ContentBox from './Layout/ContentBox';

const {Content, Footer, Header} = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Layout>
                        <div class="container">
                            <HeaderBox/>
                            <Content
                                style={{
                                    padding: '10px 25px 20px 25px',
                                    minHeight: 'calc(100% - 70px)'
                                }}>
                                <ContentBox/>
                                <Switch>
                                    <Route path="/Home/Home1" component={Home1}/>
                                    <Route path="/Home/Dashboard" component={Dashboard}/>
                                    <Route path="/Home/Chart" component={Chart}/>
                                     {/*<Route path="/Home/Robot" component={Robot}/>
                                   <Route path="/Home/Sensor" component={Sensor}/>*/}
                                    <Route path="/Home/Video" component={Video}/>
                                    <Route path="/Home/EventManager" component={EventManager}/>
                                    <Route path="/Home/RobotControl" component={RobotControl}/>
                                    <Route path="/Home/User" component={User}/>
                                    <Route path="/Home/Device" component={Device}/>
                                    <Route path="/Home/TunnelCurrent" component={Tunnel}/>
                                </Switch>
                            </Content>
                            <FooterBox/>
                        </div>
                    </Layout>
                </Fragment>
            </Router>
        );
    }
}

export default App;