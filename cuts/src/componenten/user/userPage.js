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
import firebase from '../../componenten/login/firebaseConfig';

class User extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            
            var profilePhoto = (user === null) ? 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg' : firebase.auth().currentUser.photoURL;
            var name = (user === null) ? 'No Name' : firebase.auth().currentUser.displayName;
            this.props.user.profilePhoto = profilePhoto;
            this.props.user.name = name;
            this.props.setUser(this.props.user);
        })
    }
    render() {
        const {
            profilePhoto,
            name
        } = this.props.user;
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
                        <Image src={profilePhoto} circle className="sizeImage" />
                            </Header>  <Divider />
                        <div style={
                            {
                                marginTop: '20px',
                                marginBottom: '20px',
                                textAlign: 'center'
                            }
                        } >
                            <List>
                                <List.Item > < h3 > {name} </h3></List.Item>
                                <List.Item > < h3 > Lid sinds 17 Januari 2018 </h3></List.Item>
                                <List.Item> Aantal keren aangemeld: 10 </List.Item>
                            </List> <Divider />
                                <h3>Recent visited Barbershops</h3>
                                <List>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > Luckas</h5> <h6> <Rating icon='star' defaultRating={3} maxRating={5}/></h6> </ListItem>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > KiingZ</h5> <h6> <Rating icon='star' defaultRating={2} maxRating={5}/></h6>  </ListItem>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > Royal </h5> <h6> <Rating icon='star' defaultRating={4} maxRating={5}/> </h6> </ListItem>
                                <ListItem link='#' className='listRecentBarberShop'> < h5 > Begring </h5><h6> <Rating icon='star' defaultRating={1} maxRating={5}/> </h6> </ListItem>
                                
                                </List>
                                
                            <BlockFooter >
                                <p>Berre</p> </BlockFooter >
                        </div> </div ></Page>

        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
});

export default connect(mapStateToProps,{getUser, setUser})(User);