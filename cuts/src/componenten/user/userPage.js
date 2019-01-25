import React, {
    Component
} from 'react';
import {
    Link,
    BlockFooter, Page
} from 'framework7-react';
import {
    Header,
    Icon,
    Divider,
    List,ListItem, Rating
} from 'semantic-ui-react';
import {Image, Glyphicon} from 'react-bootstrap';
import './user.css';
import {connect} from 'react-redux';
import {getUser,setUser} from '../../Actions/userAction';
import {getBarber} from '../../Actions/barberAction';
import firebase from '../../componenten/login/firebaseConfig';
import { Button } from 'react-bootstrap';

class User extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            
            var profilePhoto = (user === null) ? 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg' : firebase.auth().currentUser.photoURL;
            var name = (user === null) ? 'No Name' : firebase.auth().currentUser.displayName;
            var first = (user === null) ? 'nodata' : firebase.auth().currentUser.metadata.lastSignInTime
            this.props.user.profilePhoto = profilePhoto;
            this.props.user.name = name;
            this.props.user.firstTimeLoggedIn = first;
            this.props.setUser(this.props.user);
        })
    }
    render() {
        const {
            profilePhoto,
            name,
            firstTimeLoggedIn
        } = this.props.user;

        const {
            a,
            b,
            c
        } = this.props.barber;

        return (
            <Page style={{backgroundImage:"url(" + profilePhoto + ")" , 
            backgroundPosition: "center", 
            backgroundSize:'cover'}}>
                <div className="headerPhotoRating">
                            </div>
                            <div className="layer2">
                    <Link 
                        style={
                            {
                                margin: 0,
                                position: 'fixed',
                                top:'20px',
                                left:'20px',
                                color:'white'
                            }
                        } back><Glyphicon glyph="glyphicon glyphicon-menu-left	
                        "/></Link> 
                        <Header as='h2' icon textAlign='center'>
                <Image src={profilePhoto} circle className="sizeImage"/>
                            </Header>  
                            <Divider />
                        <div style={
                            {
                                marginTop: '20px',
                                marginBottom: '20px',
                                textAlign: 'center',
                              
                            }
                        } >
                            <List>
                                <List.Item > < h3 > {name} </h3></List.Item>
                                <List.Item > < h3 > Lid sinds {firstTimeLoggedIn} </h3></List.Item>
                                <List.Item> Aantal keren aangemeld: 10 </List.Item>
                            </List> <Divider />
                                <h4>Recent visited Barbershops...</h4>
                                <List>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > {a.name} </h5> <h6> <Rating icon='star' defaultRating={a.rating} maxRating={5}/></h6> </ListItem>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > {b.name} </h5> <h6> <Rating icon='star' defaultRating={b.rating} maxRating={5}/></h6>  </ListItem>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > {c.name}  </h5> <h6> <Rating icon='star' defaultRating={c.rating} maxRating={5}/> </h6> </ListItem>
                               
                                <ListItem><Button bsStyle="primary" bsSize="large" onClick={() => { 
                                    firebase.auth().signOut();
                                    this.$f7.router.navigate('/userbarberpage/');
                                } }>Sign Out</Button></ListItem>
                                </List>
                            </div>
                         </div>
                         </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    barber: state.barber
});

export default connect(mapStateToProps,{getUser,getBarber, setUser})(User);