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

        if(this.props.barber[0].clicked = 1){
            const {
                instagram,
                rating,
                facebook,
                name,
                photos,
                barbers,
                flex,
                photo
            } = this.props.barber[0];

            return (         
                <Page pageContent={false} style={{overflow:'hidden'}}>
                    <Toolbar  tabbar bottomMd={!isBottom}  colorTheme='black'>
                        <Link tabLink={tab1} tabLinkActive>  <i className="fa fa-cut iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab2}>  <i className="fa fa-image iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab3} routeTabId="tab-3" href="/messenger/">
                        <i className="fa fa-comments-o iconIverse" style={{ fontSize: '24px' }} /></Link>
                    </Toolbar>
                    <Tabs>
                        <Tab id="tab-1" className="page-content" style={{backgroundImage:"url(" + photo + ")" , 
                        backgroundPosition: "center", 
                        backgroundSize:'cover', width:'100%' }} tabActive>
                            <PageContent >
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
                                        <Rating icon='star' defaultRating={rating} maxRating={5}/>                                    
                                        <Block>
                                        <Row className='backgrid2' >
                                                <Col ><Button bsStyle="primary" bsSize='lg'  style={{color:'white'}}>
                                                <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} /> 
                                                <a href={facebook}/>
                                                </Button></Col>
                                                <Col ><Button bsStyle="warning" bsSize='lg'  >
                                                <i className="fa fa-instagram iconIverse" style={{ fontSize: '17px' }} style={{color:'white'}} />
                                                <a href={instagram}/>
                                                </Button></Col>
                                            </Row>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col ><Card
                                                    header={barbers} color='orange' meta="barbers" /></Col>
                                                <Col ><Card
                                                    header={flex} color='blue' meta="Flex" /></Col>
                                                <Col ><Card header={followers} color='green' raised
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
                                                        <Image src={photos.BestCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[1]} />
                                                        
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.OldCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[0]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.BestCuts[0]} />
                                                    
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col >
                                                <Label size="big" color='blue'> 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                                                </Link>
                                                <Label.Detail>{likes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="red" > 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                                </Link>
                                                <Label.Detail>{dislikes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col>
                                                <Label size="big" color="black"> 
                                                <Link> 
                                                    <Glyphicon glyph="user" />
                                                </Link>
                                                <Label.Detail>{followers}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="orange">
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
                                    </List>
                                </Popover>
                            </div>
                            </PageContent>
                        </Tab>
                        <Tab id="tab-2" className="page-content">
                        <PageContent>
                            <PhotoGalaryBarberShop  />
                            </PageContent>
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

        if(this.props.barbera.clicked = 1){
            const {
                instagram,
                rating,
                facebook,
                name,
                photos,
                barbers,
                flex,
                photo
            } = this.props.barbera;
            
            return (         
                <Page pageContent={false} style={{overflow:'hidden'}}>
                    <Toolbar  tabbar bottomMd={!isBottom}  colorTheme='black'>
                        <Link tabLink={tab1} tabLinkActive>  <i className="fa fa-cut iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab2}>  <i className="fa fa-image iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab3} routeTabId="tab-3" href="/messenger/">
                        <i className="fa fa-comments-o iconIverse" style={{ fontSize: '24px' }} /></Link>
                    </Toolbar>
                    <Tabs>
                        <Tab id="tab-1" className="page-content" style={{backgroundImage:"url(" + photo + ")" , 
                        backgroundPosition: "center", 
                        backgroundSize:'cover', width:'100%' }} tabActive>
                            <PageContent >
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
                                        <Rating icon='star' defaultRating={rating} maxRating={5}/>                                    
                                        <Block>
                                        <Row className='backgrid2' >
                                                <Col ><Button bsStyle="primary" bsSize='lg'  style={{color:'white'}}>
                                                <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} /> 
                                                <a href={facebook}/>
                                                </Button></Col>
                                                <Col ><Button bsStyle="warning" bsSize='lg'  >
                                                <i className="fa fa-instagram iconIverse" style={{ fontSize: '17px' }} style={{color:'white'}} />
                                                <a href={instagram}/>
                                                </Button></Col>
                                            </Row>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col ><Card
                                                    header={barbers} color='orange' meta="barbers" /></Col>
                                                <Col ><Card
                                                    header={flex} color='blue' meta="Flex" /></Col>
                                                <Col ><Card header={followers} color='green' raised
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
                                                        <Image src={photos.BestCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[1]} />
                                                        
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.OldCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[0]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.BestCuts[0]} />
                                                    
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col >
                                                <Label size="big" color='blue'> 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                                                </Link>
                                                <Label.Detail>{likes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="red" > 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                                </Link>
                                                <Label.Detail>{dislikes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col>
                                                <Label size="big" color="black"> 
                                                <Link> 
                                                    <Glyphicon glyph="user" />
                                                </Link>
                                                <Label.Detail>{followers}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="orange">
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
                                    </List>
                                </Popover>
                            </div>
                            </PageContent>
                        </Tab>
                        <Tab id="tab-2" className="page-content">
                        <PageContent>
                            <PhotoGalaryBarberShop  />
                            </PageContent>
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

        if(this.props.barbera.clicked = 1){
            const {
                instagram,
                rating,
                facebook,
                name,
                photos,
                barbers,
                flex,
                photo
            } = this.props.barbera;
            
            return (         
                <Page pageContent={false} style={{overflow:'hidden'}}>
                    <Toolbar  tabbar bottomMd={!isBottom}  colorTheme='black'>
                        <Link tabLink={tab1} tabLinkActive>  <i className="fa fa-cut iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab2}>  <i className="fa fa-image iconIverse" style={{ fontSize: '24px' }} /></Link>
                        <Link tabLink={tab3} routeTabId="tab-3" href="/messenger/">
                        <i className="fa fa-comments-o iconIverse" style={{ fontSize: '24px' }} /></Link>
                    </Toolbar>
                    <Tabs>
                        <Tab id="tab-1" className="page-content" style={{backgroundImage:"url(" + photo + ")" , 
                        backgroundPosition: "center", 
                        backgroundSize:'cover', width:'100%' }} tabActive>
                            <PageContent >
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
                                        <Rating icon='star' defaultRating={rating} maxRating={5}/>                                    
                                        <Block>
                                        <Row className='backgrid2' >
                                                <Col ><Button bsStyle="primary" bsSize='lg'  style={{color:'white'}}>
                                                <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} /> 
                                                <a href={facebook}/>
                                                </Button></Col>
                                                <Col ><Button bsStyle="warning" bsSize='lg'  >
                                                <i className="fa fa-instagram iconIverse" style={{ fontSize: '17px' }} style={{color:'white'}} />
                                                <a href={instagram}/>
                                                </Button></Col>
                                            </Row>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col ><Card
                                                    header={barbers} color='orange' meta="barbers" /></Col>
                                                <Col ><Card
                                                    header={flex} color='blue' meta="Flex" /></Col>
                                                <Col ><Card header={followers} color='green' raised
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
                                                        <Image src={photos.BestCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[1]} />
                                                        
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.OldCuts[1]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.NewCuts[0]} />
                                                       
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={photos.BestCuts[0]} />
                                                    
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col >
                                                <Label size="big" color='blue'> 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                                                </Link>
                                                <Label.Detail>{likes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="red" > 
                                                < Link> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                                </Link>
                                                <Label.Detail>{dislikes}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col>
                                                <Label size="big" color="black"> 
                                                <Link> 
                                                    <Glyphicon glyph="user" />
                                                </Link>
                                                <Label.Detail>{followers}</Label.Detail>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="orange">
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
                                    </List>
                                </Popover>
                            </div>
                            </PageContent>
                        </Tab>
                        <Tab id="tab-2" className="page-content">
                        <PageContent>
                            <PhotoGalaryBarberShop  />
                            </PageContent>
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
}

const mapStateToProps = (state) => ({
    userBarber : state.userBarber,
    barber: state.barber
  });

export default connect(mapStateToProps,{getUserBarber,SetUserBarberChanges, getBarber})(UserBarberPage);