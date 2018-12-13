import React from 'react';
import { Page, Block, BlockHeader, BlockTitle, List, ListItem } from 'framework7-react';
import { Grid, Image, Col } from 'react-bootstrap';
import { Rating } from 'react-rating';


export default () => (

  <Page>
    <Block strong style={{ margin: 0 }}>
      <BlockHeader>
        <BlockTitle>
          <Grid>
            <Col xs={12} md={8}><Image circle src={require('../../assets/cuts-resizes/cuts-128_x_128.png')} /></Col>
            <Col vxs={12} md={8}> <h1>Patrick</h1></Col>
          </Grid>
          {/* <Divider /> */}
        </BlockTitle>
        {/* <Divider /> */}
      </BlockHeader>
    </Block>
    <BlockTitle><h3>User</h3></BlockTitle>
    <List as='p'>
      <ListItem link='/userbarbershop/userpage' >Profile</ListItem>
      <ListItem link='/about/' >About Us</ListItem>
      <ListItem link='/userbarberpage/setting/' >Setting</ListItem>
      <ListItem link='/userbarberpage/'>Barber Page</ListItem>
      <ListItem link='/userbarberpage/map'>BarberMap</ListItem>
      <ListItem link='/' >Sign In</ListItem>
      <ListItem link='/' >Sign Out</ListItem>
    </List>
    <BlockTitle as='p'> </BlockTitle>
    <List>
      <Rating icon='star' size='tiny' />
      {/* <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem> */}
    </List>
  </Page>
);

