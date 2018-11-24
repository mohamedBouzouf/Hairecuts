import React, { Component } from 'react';
import Blur from 'react-blur';
import { Icon, Button } from 'antd';
import { Link, Navbar, Row, Col, Block, Page, Toolbar, NavRight, Cuts, NavTitle } from 'framework7-react';
import { Header, Label, Divider, Image, List, Card, Grid, Rating, Segment, Rail, Segm } from 'semantic-ui-react';


import './user.css';
const photo = 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg';


class UserBarberPage extends Component {

    state = {
        isBottom: false
    }
    componentDidMount() {
        // simulate img loading
    }




    render() {
        return (
            <Page hideToolbarOnScroll>
                <div>
                    <Navbar style={{ position: 'absolute', textAlign: 'center' }} colorTheme='black' backLink>
                        <NavTitle style={{ textAlign: 'center' }}>Cuts</NavTitle>
                        <NavRight >
                            <Icon type="search" style={{ paddingRight: '20px' }} />
                            <Icon type="info-circle" style={{ paddingRight: '20px' }} />
                        </NavRight>

                    </Navbar>

                    <Toolbar tabbar bottomMd={!this.state.isBottom} style={{ position: 'absolute' }} colorTheme='black'>
                        <Link tabLink="#tab-1" tabLinkActive><Icon type="user"> </Icon></Link>
                        <Link tabLink="#tab-2"><Icon type="camera"> </Icon></Link>
                        <Link tabLink="#tab-3"><Icon type="message"> </Icon></Link>
                        <Link tabLink="#tab-3"><Icon type="setting"> </Icon></Link>
                    </Toolbar>

                    <div className="layer1" >


                        <Blur className='headercuts' img={photo} blurRadius={8} />
                        <div className="headerPhotoRating">


                        </div>
                        <div className="layer2">
                            <div style={{
                                textAlign: "center"
                            }}>
                                <div></div>
                                {/* <Image src={require('../../Trafficlight.png')} avatar='h' /> */}
                                <Image circular src={photo} size="tiny" centered />
                                <h3 style={{ color: 'white' }}>Barber Shop</h3>
                                <Rating icon="star" maxRating={5} defaultRating={5} size="small" />
                                <Block>
                                    <Divider />
                                    <Row className='backgrid1' >
                                        <Col ><Card raised color='blue'
                                            header='2' meta="barbers" color="yellow" /></Col>
                                        <Col ><Card raised color='blue'
                                            header='2' meta="Flex" color="orange" /></Col>
                                        <Col ><Card meta="Likes" raised color='blue'
                                            header='200K' color="brown" /></Col>
                                    </Row>
                                    <Divider />
                                    <Row className='backgrid2' >
                                        <Col ><Button type='dashed' ghost>
                                            <Icon type="phone"> </Icon>
                                        </Button></Col>
                                        <Col ><Button type='dashed' ghost>
                                            <Icon type="calendar"> </Icon>
                                        </Button></Col>
                                    </Row>
                                    <Divider />

                                    <Divider />
                                </Block>
                            </div>
                        </div>


                    </div>
                </div>
            </Page>

        )
    }
}

export default UserBarberPage