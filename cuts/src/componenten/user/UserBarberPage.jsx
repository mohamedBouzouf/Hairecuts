import React, { Component } from 'react';
// import Blur from 'react-blur';
import {
    Link, Row, Col,
    Block, Page,
    Toolbar,Tabs, Tab, PageContent, List, ListItem,Popover
} from 'framework7-react';
import { Image, Button, Carousel, Glyphicon } from 'react-bootstrap';
import './user.css';
import MessagebarberShop from './Message/message';
import SettingBarberShop from './Setting/setting';
import PhotoGalaryBarberShop from './Photo Galary/photogalary';
import firebase from '../../componenten/login/firebaseConfig'
import { Divider, Card, Label,Rating } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getBarber, 
    setBarber} from '../../Actions/barberAction';
import {getUserBarber, 
    SetUserBarberChanges} from '../../Actions/userBarberPageAction';



class UserBarberPage extends Component {
    
    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            
            // var photo = (user === null) ? 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg' : firebase.auth().currentUser.photoURL;
            // var name = (user === null) ? 'No Name' : firebase.auth().currentUser.displayName;
            // this.props.userBarber.photo = 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/17264402_1339727229399271_782552105993961646_n.jpg?_nc_cat=109&_nc_ht=scontent-bru2-1.xx&oh=0b5c5d417ccb9f114bb4321e974f341e&oe=5CBCC37C';
            // this.props.userBarber.name = 'Lionlockx Hair Studios' ;

            //this.props.SetUserImage(this.props.userBarber.photo);
            console.log(this.props);
            this.props.SetUserBarberChanges(this.props.userBarber);

        })
    }
    render() {
        const {
            isBottom,
            tab1,
            tab2,
            tab3,
            tab4,
            likes,
            dislikes, 
            IsFavorite,
            appointment,
            followers,
            sendermail,
            sender,
            receiver,
            id

        } = this.props.userBarber;

        const {
            instagram,
            rating,
            facebook,
            name,
            photos,
            photo
        } = this.props.barber;
        
        return (         
            <Page pageContent={false} style={{overflow:'hidden'}}>
                <Toolbar  tabbar bottomMd={!isBottom} style={{ position: 'absolute' }} colorTheme='black'>
                    <Link tabLink={tab1} tabLinkActive>  <i className="fa fa-cut iconIverse" style={{ fontSize: '24px' }} /></Link>
                    <Link tabLink={tab2}>  <i className="fa fa-image iconIverse" style={{ fontSize: '24px' }} /></Link>
                    <Link tabLink={tab3} routeTabId="tab-3" href="/messenger/">
                    <i className="fa fa-comments-o iconIverse" style={{ fontSize: '24px' }} /></Link>

                </Toolbar>
                <Tabs>
                    <Tab id="tab-1" className="page-content" style={{backgroundImage:"url(" + photo + ")" , 
                    backgroundPosition: "center", 
                    backgroundSize:'cover',overflowY:'scroll', boxSizing:'content-box', paddingRight:'12px', width:"100%", height:"100%" }} tabActive>
                        <div className="layer1" >
                        < Link panelOpen="left" style={{margin: '0',
                     position: 'absolute', top: '15px', left:'15px', color:'white'}}
                         ><h3><Glyphicon  glyph="glyphicon glyphicon-menu-hamburger" /></h3></Link >
                         {/* <Label size="large" > <Glyphicon glyph="glyphicon glyphicon-menu-hamburger" /></Label></Link > */}

                    < Link popoverOpen=".popover-menu" style={{margin: '0',
                     position: 'absolute', top: '15px', right:'15px', color:'white'}}
                         > <h3><Glyphicon glyph="glyphicon glyphicon-option-vertical"  /></h3></Link >
                            <div className="headerPhotoRating">
                            </div>
                            <div className="layer2">
                                <div style={{
                                    textAlign: "center"
                                }}>
                                    <Image src={photo} circle className="sizeImage" />
                                    <h5 style={{ color: 'white' }}>{name}</h5>
                                    <Rating icon='star' defaultRating={5} maxRating={5} />
                                    
                                    <Block>
                                    <Row className='backgrid2' >
                                            <Col ><Button bsStyle="primary" bsSize='lg' href="www.google.com" style={{color:'white'}}>
                                            <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} /> 
                                            </Button></Col>
                                            <Col ><Button bsStyle="warning" bsSize='lg' href={instagram} >
                                            <i className="fa fa-instagram iconIverse" style={{ fontSize: '17px' }} style={{color:'white'}} />
                                            </Button></Col>
                                        </Row>
                                        <Divider/>
                                        <Row className='backgrid1' >
                                            <Col ><Card
                                                header="2" color='orange' meta="barbers" /></Col>
                                            <Col ><Card
                                                header="2" color='blue' meta="Flex" /></Col>
                                            <Col ><Card header={followers+'k'} color='green' raised
                                                meta="Likes" /></Col>
                                        </Row>
                                        <Divider />
                                        <Row className='backgrid1' >
                                            <Col ><Button bsStyle="primary" bsSize='lg' >
                                                <Glyphicon glyph="glyphicon glyphicon-envelope" />
                                            </Button></Col>
                                            <Col ><Button bsStyle="success" bsSize='lg'>
                                                <Glyphicon glyph="glyphicon glyphicon-calendar" />
                                            </Button></Col>
                                        </Row>
                                        <Divider />
                                        <div className="CarousselContainer">
                                            <Carousel className="sizeImageCarousel" >
                                                <Carousel.Item>
                                                    <Image src={photo} />
                                                    <Carousel.Caption>
                                                        <h3>Waves</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={photo} />
                                                    <Carousel.Caption>
                                                        <h3>Dreads</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={photo} />
                                                    <Carousel.Caption>
                                                        <h3>Weaves</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={photo} />
                                                    <Carousel.Caption>
                                                        <h3>Fades</h3>
                                                        <p>the new flow</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={photo} />
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
                                            <Label.Detail>{likes}</Label.Detail>
                                            </Label>
                                            </Col>
                                            <Col >
                                            <Label size="large" color="red" > 
                                            < Link> 
                                                <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                            </Link>
                                            <Label.Detail>{dislikes}</Label.Detail>
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
                                            <Link panelOpen="left"> 
                                                <Glyphicon glyph="glyphicon glyphicon-star" />
                                            </Link >
                                            </Label>
                                            </Col>  
                                        </Row>
                                        <Divider/>
                                    </Block>
                                </div>
                            </div>
                            <Popover colorTheme='black' className="popover-menu">
      <List>
        <ListItem link="#" popoverClose title="No Need for the moment" />
        <ListItem link="#" popoverClose title="No Need for the moment" />
      </List>
    </Popover>
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
                </Tabs>
            </Page >
        )
    }
}

const mapStateToProps = (state) => ({
    userBarber : state.userBarber,
    barber: state.barber
  });

export default connect(mapStateToProps,{getUserBarber,SetUserBarberChanges, getBarber})(UserBarberPage);