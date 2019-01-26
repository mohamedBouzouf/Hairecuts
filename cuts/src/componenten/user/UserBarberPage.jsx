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
import firebase from 'firebase';
import PhotoGalaryBarberShop from './Photo Galary/photogalary';
import { Divider, Card, Label,Rating } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getBarber, setBarber, setUserNumber} from '../../Actions/barberAction';
import {getUserBarber, 
    SetUserBarberChanges} from '../../Actions/userBarberPageAction';

var i = 0;

class UserBarberPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            like: 0 ,
            dislikes: 0,
            followers: 0,
            isfavorite: false
    
        }
       
    
    }

    componentDidMount() {
    
    }

    Followers(){
        var user = firebase.auth().currentUser;
        if(user !== null){
  

        if(this.state.followers === 0){
            this.setState({followers : 1});
            firebase.database().ref().child("posts").child("followers").child(user.uid).remove();
            firebase.database().ref().child("posts").child("followers").child(user.uid).child("newfollower").set("1");
        }else if(this.state.followers === 1){
            this.setState({followers : 0});
            firebase.database().ref().child("posts").child("followers").child(user.uid).remove();
            firebase.database().ref().child("posts").child("followers").child(user.uid).child("unfollowed").set("1");
        }

    }}

    Likes(){
        var user = firebase.auth().currentUser;
         
        if(user !== null){
   

        if(this.state.like === 0){
            
            this.setState({like: 1,
            dislikes: 0});
            firebase.database().ref().child("posts").child("likes").child(user.uid).remove();
            firebase.database().ref().child("posts").child("likes").child(user.uid).child("geliked").set("1");
        }

    }}

    Dislikes(){
        var user = firebase.auth().currentUser;
         
        if(user !== null){
 

      if(this.state.dislikes === 0 ){
            
            this.setState({like: 0,
                dislikes: 1});
            firebase.database().ref().child("posts").child("likes").child(user.uid).remove();
            firebase.database().ref().child("posts").child("likes").child(user.uid).child("gedisliked").set("1");
        }

    }}

    Favorite(){
        var user = firebase.auth().currentUser;
        if(user !== null){
        if(this.state.isfavorite === false){
            this.setState({isfavorite : true});
            firebase.database().ref().child("posts").child("favorite").child(user.uid).remove();
            firebase.database().ref().child("posts").child("favorite").child(user.uid).child("isfavorite").set("true");
          }else{
            this.setState({isfavorite : false });
            firebase.database().ref().child("posts").child("favorite").child(user.uid).remove();
            firebase.database().ref().child("posts").child("favorite").child(user.uid).child("isfavorite").set("false");
          }
        }
    }


    
    render() {
       
        if(this.props.barber[0].clicked === 1)
        {
            i = 0;
        }else if(this.props.barber[1].clickedd === 1)
        {
            i = 1;
        }else if(this.props.barber[2].clickedh === 1)
        {
            i = 2;
        }
        const {
            isBottom,
            tab1,
            tab2,
            tab3,

        } = this.props.userBarber;
        
            const {
                instagram,
                rating,
                facebook,
                name,
                photos,
                barbers,
                phone,
                flex,
                photo
            } = this.props.barber[i];
          

          
            
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
                                                <Col > <Link external href={facebook} color='white'> <Button bsStyle="primary" bsSize='lg'  style={{color:'white'}}>
                                                <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} />
                                                </Button></Link></Col>
                                                <Col >
                                                <Link external href={instagram} color='white'><Button bsStyle="warning" bsSize='lg'>
                                                <i className="fa fa-instagram iconIverse" style={{ fontSize: '17px' }} style={{color:'white'}}/>
                                                </Button></Link></Col>
                                            </Row>
                                            <Divider/>
                                            <Row className='backgrid1' >
                                                <Col ><Card
                                                    header={barbers} color='orange' meta="barbers" /></Col>
                                                <Col ><Card
                                                    header={flex} color='blue' meta="Flex" /></Col>
                                                <Col ><Card header={this.state.like} color='green' raised
                                                    meta="Likes" /></Col>
                                            </Row>
                                            <Divider />
                                            <Row className='backgrid1' >
                                                <Col ><Button bsStyle="primary" bsSize='lg' >
                                                <Link external href={'tel:'+phone} color="white">
                                                    <Glyphicon glyph="glyphicon glyphicon-earphone" />
                                                    </Link>
                                                </Button></Col>
                                                <Col ><Button bsStyle="success" bsSize='lg' >
                                                {/* <Button bsStyle="success" bsSize='lg' onClick={() => this.$f7router.navigate('/agenda/')}></Button> */}
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
                                                <Label size="big" color='blue' image> 
                                                <Link onClick={this.Likes.bind(this)}> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                                            
                                                <Label.Detail>{this.state.like}</Label.Detail>
                                                </Link>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Label size="big" color="red" image> 
                                                <Link onClick={this.Dislikes.bind(this)}> 
                                                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                                                
                                                <Label.Detail>{this.state.dislikes}</Label.Detail>
                                                </Link>
                                                </Label>
                                                </Col>
                                                <Col>
                                                <Label size="big" color="black" image> 
                                                <Link onClick={this.Followers.bind(this)}> 
                                                    <Glyphicon glyph="user" />
                                               
                                                <Label.Detail>{this.state.followers}</Label.Detail>
                                                </Link>
                                                </Label>
                                                </Col>
                                                <Col >
                                                <Link  onClick={this.Favorite.bind(this)}> 
                                                { this.state.isfavorite ? 
                                                    (<Label size="big" color="orange">
                                                    <Glyphicon glyph="glyphicon glyphicon-star" /> 
                                                </Label>
                                                ) : (<Label size="big" color="grey">
                                                    <Glyphicon glyph="glyphicon glyphicon-star" />
                                                </Label>)}
                                                </Link>
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



const mapStateToProps = (state) => ({
    userBarber : state.userBarber,
    barber: state.barber
  });

export default connect(mapStateToProps,{getUserBarber,setBarber,SetUserBarberChanges, setUserNumber,getBarber})(UserBarberPage);