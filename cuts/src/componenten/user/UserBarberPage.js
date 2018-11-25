import React, { Component } from 'react';
import Blur from 'react-blur';
import { Icon, Button, Carousel } from 'antd';
import { Link, Navbar, Row, Col, Block, Page, Toolbar, Swiper, SwiperSlide, NavRight, NavLeft, NavTitle, Tabs, Tab, PageContent } from 'framework7-react';
import { Header, Label, Divider, Image, List, Card, Grid, Rating, Segment, Rail, Segm } from 'semantic-ui-react';


import './user.css';
import MessagebarberShop from './Message/message';
import SettingBarberShop from './Setting/setting';
const photo = 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg';


class UserBarberPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        isBottom: false,
        tab1: '#tab-1',
        tab2: '#tab-2',
        tab3: '#tab-3',
        tab4: '#tab-4'
    }
    componentDidMount() {
        // simulate img loading
    }




    render() {
        return (
            <Page pageContent={false}>

                <Toolbar tabbar bottomMd={!this.state.isBottom} style={{ position: 'absolute' }} colorTheme='black'>
                    <Link tabLink={this.state.tab1} tabLinkActive><Icon type="user"> </Icon></Link>
                    <Link tabLink={this.state.tab2}><Icon type="camera"> </Icon></Link>
                    <Link tabLink={this.state.tab3} routeTabId="tab-3" href="/messenger/"><Icon type="message"> </Icon></Link>
                    <Link tabLink={this.state.tab4}><Icon type="setting"> </Icon></Link>
                </Toolbar>
                <Navbar style={{ position: 'absolute', textAlign: 'center' }} colorTheme='black'>
                    <NavLeft><Link panelOpen="left"><Icon type="bars" /></Link></NavLeft>
                    <NavTitle>Cuts</NavTitle>
                    <NavRight >
                        <Link><Icon type="info-circle" style={{ paddingRight: '20px' }} /></Link>
                    </NavRight> </Navbar>
                <Blur className='headercuts' img={photo} blurRadius={8} />
                <Tabs>
                    <Tab id="tab-1" className="page-content" tabActive>
                        <div className="layer1" >
                            <Blur className='headercuts' img={photo} blurRadius={8} />
                            <div className="headerPhotoRating">
                            </div>
                            <div className="layer2">
                                <div style={{
                                    textAlign: "center"
                                }}>
                                    {/* <Image src={require('../../Trafficlight.png')} avatar='h' /> */}
                                    <Image circular src={photo} size="tiny" centered />
                                    <h3 style={{ color: 'white' }}>Barber Shop</h3>
                                    <Rating icon="star" maxRating={5} defaultRating={5} size="small" />
                                    <Block>
                                        <Divider />
                                        <Row className='backgrid1' >
                                            <Col ><Card raised color='blue'
                                                header='2' meta="barbers" color="blue" /></Col>
                                            <Col ><Card raised color='blue'
                                                header='2' meta="Flex" color="teal" /></Col>
                                            <Col ><Card meta="Likes" raised color='red'
                                                header='200K' color="brown" /></Col>
                                        </Row>
                                        <Divider />
                                        <Row className='backgrid2' >
                                            <Col ><Button type='default' ghost>
                                                <Icon type="phone"> </Icon>
                                            </Button></Col>
                                            <Col ><Button type='default' ghost>
                                                <Icon type="calendar"> </Icon>
                                            </Button></Col>
                                        </Row>
                                        <Divider />
                                        <Carousel autoplay>
                                            <div><h3> <Image src={photo} size="small" centered /></h3></div>
                                            <div><h3> <Image src={photo} size="small" centered /></h3></div>
                                            <div><h3> <Image src={photo} size="small" centered /></h3></div>
                                            <div><h3> <Image src={photo} size="small" centered /></h3></div>
                                            <div><h3> <Image src={photo} size="small" centered /></h3></div>
                                        </Carousel>

                                        <Divider />
                                    </Block>
                                </div>
                            </div>


                        </div>

                    </Tab>
                    <Tab id="tab-2" className="page-content">
                        <div className="layer1" >



                            <div className="headerPhotoRating">


                            </div>
                            <div className="layer2">

                            </div></div>
                    </Tab>
                    <Tab id="tab-3" className="page-content" h>
                        <PageContent>


                            <MessagebarberShop />
                            ²
                            
                        </PageContent>
                    </Tab>
                    <Tab id="tab-4" className="page-content">
                        <PageContent>
                            <SettingBarberShop />
                        </PageContent>
                    </Tab>
                </Tabs>



            </Page >

        )
    }
}

export default UserBarberPage