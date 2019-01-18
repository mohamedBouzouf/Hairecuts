import React from 'react';
import { Page, Block, BlockHeader, BlockTitle, List, ListItem } from 'framework7-react';
import { Image } from 'react-bootstrap';
import Rating from 'react-rating';
import firebase from '../login/firebaseConfig'





export default () => (
  <Page >
    <Block strong style={{ margin: 0 }}>
      <BlockHeader>
        <BlockTitle>
          <Image circle src={require('../../assets/cuts-resizes/cuts-32_x_32.png')} /> <p></p>
          {/* <Divider /> */}
        </BlockTitle>
        {/* <Divider /> */}
      </BlockHeader>
    </Block>
    <BlockTitle><h3>User</h3></BlockTitle>
    <List as='p'>
      <ListItem link='/userbarberpage/userpage/' panelClose>Profile</ListItem>
      <ListItem link='/about/' panelClose>About Us</ListItem>
      <ListItem link='/userbarberpage/setting/' panelClose>Setting</ListItem>
      <ListItem link='/userbarberpage/' panelClose>Barber Page</ListItem>
      <ListItem link='/userbarberpage/map' panelClose>BarberMap</ListItem>
      <ListItem link='/home/' panelClose>Sign In</ListItem>
      <ListItem link='/home/' onClick={() => firebase.auth().signOut()} panelClose>Sign Out</ListItem>
    </List>
    <BlockTitle as='p'> </BlockTitle>
    <List>
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
      />
      {/* <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem> */}
    </List>
  </Page >
);



