import React, { Component } from 'react';
// import Blur from 'react-blur';
import {
    Link, Navbar, Row, Col,
    Block, Page,
    Toolbar,
    NavRight, NavLeft, NavTitle, Tabs, Tab, PageContent
} from 'framework7-react';
import { Image, Button, Carousel, Glyphicon } from 'react-bootstrap';
import './user.css';
import '../App.css';
import MessagebarberShop from './Message/message';
import SettingBarberShop from './Setting/setting';
import PhotoGalaryBarberShop from './Photo Galary/photogalary';
import firebase from '../../componenten/login/firebaseConfig'
import { Divider, Card, Rating } from 'semantic-ui-react';



class UserBarberPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isBottom: false,
            tab1: '#tab-1',
            tab2: '#tab-2',
            tab3: '#tab-3',
            tab4: '#tab-4',
            photo: '',
            name: '',
            id: ''

        }
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            var photo = (user === null) ? 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg' : firebase.auth().currentUser.photoURL;
            this.setState({ photo: photo });
        })


    }




    render() {
        return (
            <Page pageContent={false}>
                <Toolbar tabbar bottomMd={!this.state.isBottom} style={{ position: 'absolute' }} colorTheme='black'>
                    <Link tabLink={this.state.tab1} tabLinkActive> <Glyphicon glyph="user" /></Link>
                    <Link tabLink={this.state.tab2}> <Glyphicon glyph="glyphicon glyphicon-picture" /></Link>
                    <Link tabLink={this.state.tab3} routeTabId="tab-3" href="/messenger/">
                        <Glyphicon glyph="glyphicon glyphicon-send" /></Link>
                    <Link tabLink={this.state.tab4}> <Glyphicon glyph="glyphicon glyphicon-cog" /></Link>
                </Toolbar>
                <Navbar style={{ position: 'absolute', textAlign: 'center' }} colorTheme='black'>
                    <NavLeft><Link panelOpen="left"> <Glyphicon glyph="glyphicon glyphicon-menu-hamburger" /></Link></NavLeft>
                    <NavTitle>Cuts</NavTitle>
                    <NavRight >
                        <Link> <Glyphicon glyph="glyphicon glyphicon-th" /></Link>
                    </NavRight> </Navbar>
                <Tabs>
                    <Tab id="tab-1" className="page-content" tabActive>
                        <div className="layer1" >
                            <div className="headerPhotoRating">
                            </div>
                            <div className="layer2">
                                <div style={{
                                    textAlign: "center"
                                }}>
                                    <Image src={this.state.photo} circle className="sizeImage" />
                                    <h3 style={{ color: 'white' }}>Barber Shop</h3>
                                    <Rating icon='star' defaultRating={5} maxRating={5} />
                                    <Block>

                                        <Row className='backgrid1' >
                                            <Col ><Card
                                                header="2" meta="barbers" /></Col>
                                            <Col ><Card
                                                header="2" meta="Flex" /></Col>
                                            <Col ><Card header="Likes" raised
                                                meta="200K" /></Col>
                                        </Row>
                                        <Divider />
                                        <Row className='backgrid2' >
                                            <Col ><Button bsStyle="primary" >
                                                <Glyphicon glyph="glyphicon glyphicon-phone-alt" />
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

                                    </Block>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab id="tab-2" className="page-content">
                        <PhotoGalaryBarberShop />
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