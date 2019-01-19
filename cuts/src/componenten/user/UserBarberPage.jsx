import React, { Component } from 'react';
// import Blur from 'react-blur';
import {
    Link, Row, Col,
    Block, Page,
    Toolbar,Tabs, Tab, PageContent
} from 'framework7-react';
import { Image, Button, Carousel, Glyphicon } from 'react-bootstrap';
import './user.css';
import MessagebarberShop from './Message/message';
import SettingBarberShop from './Setting/setting';
import PhotoGalaryBarberShop from './Photo Galary/photogalary';
import firebase from '../../componenten/login/firebaseConfig'
import { Divider, Card, Label,Rating } from 'semantic-ui-react';

class UserBarberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            var photo = (user === null) ? 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg' : firebase.auth().currentUser.photoURL;
            this.setState({ photo: photo });
            var name = (user === null) ? 'No Name' : firebase.auth().currentUser.displayName;
            this.setState({ name: name });
        })
    }
    render() {
        return (         
            <Page pageContent={false}>
                <Toolbar tabbar bottomMd={!this.state.isBottom} style={{ position: 'absolute' }} colorTheme='black'>
                    <Link tabLink={this.state.tab1} tabLinkActive> <Glyphicon glyph="glyphicon glyphicon-scissors" /></Link>
                    <Link tabLink={this.state.tab2}> <Glyphicon glyph="glyphicon glyphicon-picture" /></Link>
                    <Link tabLink={this.state.tab3} routeTabId="tab-3" href="/messenger/">
                        <Glyphicon glyph="glyphicon glyphicon-send" /></Link>
                    <Link tabLink={this.state.tab4}> <Glyphicon glyph="glyphicon glyphicon-cog" /></Link>
                </Toolbar>
                <Tabs>
                    <Tab id="tab-1" className="page-content" style={{backgroundImage:"url(" + this.state.photo + ")" , 
                    backgroundPosition: "center", 
                    backgroundSize:'cover'}} tabActive>
                        <div className="layer1" >
                        < Link panelOpen="left" style={{margin: '0',
                     position: 'absolute', top: '10px', left:'10px'}}
                         > <Label size="large" > <Glyphicon glyph="glyphicon glyphicon-menu-hamburger" /></Label></Link >

                    < Link panelOpen="left" style={{margin: '0',
                     position: 'absolute', top: '10px', right:'10px'}}
                         > <Label size="large" > <Glyphicon glyph="glyphicon glyphicon-option-vertical" /></Label></Link >
                            <div className="headerPhotoRating">
                            </div>
                            <div className="layer2">
                                <div style={{
                                    textAlign: "center"
                                }}>
                                    <Image src={this.state.photo} circle className="sizeImage" />
                                    <h5 style={{ color: 'white' }}>{this.state.name}</h5>
                                    <Rating icon='star' defaultRating={5} maxRating={5} />
                                    <Block>
                                        <Row className='backgrid1' >
                                            <Col ><Card
                                                header="2" color='orange' meta="barbers" /></Col>
                                            <Col ><Card
                                                header="2" color='blue' meta="Flex" /></Col>
                                            <Col ><Card header="200K" color='green' raised
                                                meta="Likes" /></Col>
                                        </Row>
                                        <Divider />
                                        <Row className='backgrid2' >
                                            <Col ><Button bsStyle="primary" >
                                                <Glyphicon glyph="glyphicon glyphicon-envelope" />
                                            </Button></Col>
                                            <Col ><Button bsStyle="success" >
                                                <Glyphicon glyph="glyphicon glyphicon-calendar" />
                                            </Button></Col>
                                        </Row>
                                        <Divider />
                                        <div className="CarousselContainer">
                                            <Carousel className="sizeImageCarousel" >
                                                <Carousel.Item>
                                                    <Image src={this.state.photo} />
                                                    <Carousel.Caption>
                                                        <h3>Waves</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={this.state.photo} />
                                                    <Carousel.Caption>
                                                        <h3>Dreads</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={this.state.photo} />
                                                    <Carousel.Caption>
                                                        <h3>Weaves</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={this.state.photo} />
                                                    <Carousel.Caption>
                                                        <h3>Fades</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={this.state.photo} />
                                                    <Carousel.Caption>
                                                        <h3>Specials</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <Divider/>
                                        <Row className='backgrid1' >
                                            <Col >
                                            <Label size="large" color='blue'> 
                                            < Link> 
                                                <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                                            </Link>
                                            <Label.Detail>0</Label.Detail>
                                            </Label>
                                            </Col>
                                            <Col >
                                            <Label size="large" color="red" > 
                                            < Link> 
                                                <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                            </Link>
                                            <Label.Detail>0</Label.Detail>
                                            </Label>
                                            </Col>
                                            <Col>
                                            <Label size="large" color="black"> 
                                            <Link> 
                                                <Glyphicon glyph="user" />
                                            </Link>
                                            <Label.Detail>11</Label.Detail>
                                            </Label>
                                            </Col>
                                            <Col >
                                            <Label size="large" color="orange">
                                            < Link panelOpen="left"> 
                                                <Glyphicon glyph="glyphicon glyphicon-star" />
                                            </Link >
                                            </Label>
                                            </Col>  
                                        </Row>
                                        <Divider/>
                                    </Block>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab id="tab-2" className="page-content">
                        <PhotoGalaryBarberShop  />
                    </Tab>
                    <Tab id="tab-3" className="page-content" h>
                        <PageContent>
                            <MessagebarberShop />
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