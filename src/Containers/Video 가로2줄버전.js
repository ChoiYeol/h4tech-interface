import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {LaptopOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Player} from 'video-react';
import 'video-react/dist/video-react.css';


const VideoList=({vList})=>{
  //  {vList==9? (<> <h1>로봇 카메라 </h1> <br/></>) :null}

  /*
  {vList==1 ?<><div >CCTV</div> </>:null}
  {vList==2 ?<><div >열화상</div> </>:null}


    {vList==9 ?<><br/><div >로봇 카메라</div> </>:null}
    {vList==10 ?<><br/><br/></>:null}


  */
  return(
    <>
      <Col span={vList< 3?10:6 }>
          {vList}
          <Player
              playsInline="playsInline"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              autoPlay={true}
              muted={true}/>
      </Col>
    </>
  )
}


const Video = (props) => {
    const vList =[ 1 , 2, 3, 4, 5 , 6, 7, 8 ,9 ,10 ];

    return (
        <Fragment>
            <div style={{
                    margin: '0 6px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                    <Breadcrumb.Item><VideoCameraOutlined/>&nbsp;Video</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                        marginTop: '20px'
                    }}>

                    <Row gutter={12}>

                        <Col span={12} style={{height:  '200px'}} >
                            <Card>
                            <div >부강터널 상행</div>
                            <Player playsInline="playsInline" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" autoPlay={true} muted={true}  />
                            </Card>
                        </Col>

                        <Col span={12}>
                              <Card>
                              <Row gutter={[8,0]}>
                                   {vList.map(vList =>(<VideoList  vList={vList} key={vList.id} ></VideoList>) )}
                              </Row>
                              </Card>

                        </Col>
                    </Row>


                      <Row gutter={12}>

                          <Col span={12} style={{height:  '200px'}} >
                              <Card>
                              <div >부강터널 하행</div>
                              <Player playsInline="playsInline" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" autoPlay={true} muted={true}  />
                              </Card>
                          </Col>

                          <Col span={12}>
                                <Card>
                                <Row gutter={[8,0]}>
                                     {vList.map(vList =>(<VideoList  vList={vList} key={vList.id} ></VideoList>) )}
                                </Row>
                                </Card>

                          </Col>
                      </Row>

                </div>
            </div>
        </Fragment>
    );
};

export default Video;
