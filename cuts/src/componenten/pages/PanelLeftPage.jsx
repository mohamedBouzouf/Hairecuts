import React from 'react';
import {Page, Block, BlockHeader, BlockTitle, List, ListItem} from 'framework7-react';
import {Image, Glyphicon} from 'react-bootstrap';
import firebase from '../login/firebaseConfig'
import '../user/user.css';

export default () => (
  <Page style={{backgroundImage:"url("+ require('../../assets/cuts-resizes/cuts-128_x_128.png')+")" , 
  backgroundPosition: "center"}}>
    <div className="navPL">
    <Block strong style={{ margin: 0 }}>
      <BlockHeader>
        <BlockTitle>
          <Image circle src={require('../../assets/cuts-resizes/cuts-24_x_24.png')}/> <p></p>
          {/* <Divider/> */}
        </BlockTitle>
        {/* <Divider/> */}
      </BlockHeader>
    </Block>
    <BlockTitle><h3 style={{color:'white'}}>User</h3></BlockTitle>
    <List as='a' mediaList inset>
      <ListItem link='/userbarberpage/userpage/' panelClose>
      <div className="item-content">
        <div className="item-media">
            <Glyphicon glyph='glyphicon glyphicon-user'/>
        </div>
        <div className="item-inner">
            <div className="item-title">
               Profile
            </div>
        </div>
   </div>
    </ListItem>
      <ListItem link='/userbarberpage/' panelClose>
      <div className="item-content">
        <div className="item-media">
        <Glyphicon glyph='glyphicon glyphicon-scissors'/>
        </div>
        <div className="item-inner">
            <div className="item-title">
            Barber Page
            </div>
        </div>
    </div>
      </ListItem>
      <ListItem link='/userbarberpage/map' panelClose>
      <div className="item-content">
        <div className="item-media">
        <Glyphicon glyph='glyphicon glyphicon-map-marker'/>
        </div>
        <div className="item-inner">
            <div className="item-title">
            BarberMap
            </div>
        </div>
    </div>
      </ListItem>
    </List>
    <List as='a' mediaList inset>
    <ListItem link='/userbarberpage/setting/'  panelClose>
    <div className="item-content">
        <div className="item-media">
        <Glyphicon glyph='glyphicon glyphicon-cog'/>
        </div>
        <div className="item-inner">
            <div className="item-title">
            Settings
            </div>
        </div>
    </div>
    </ListItem>
      <ListItem link='/home/' onClick={() => firebase.auth().signOut()} panelClose>
      <div className="item-content">
        <div className="item-media">
        <Glyphicon glyph='glyphicon glyphicon-log-out'/>
        </div>
        <div className="item-inner">
            <div className="item-title">
            Sign Out
            </div>
        </div>
    </div>
      </ListItem>
    </List>
    </div>
  </Page>
);



