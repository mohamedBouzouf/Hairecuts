import React from 'react';
import { Page, Block, BlockTitle, List, ListItem } from 'framework7-react';
import { Image, Header, Rating, Grid, GridColumn, Divider } from 'semantic-ui-react';


export default () => (
  <Page>
    <Block strong style={{ margin: 0 }}>
      <Header>
        <BlockTitle>
          <Grid columns={2} stretched>
            <GridColumn width={6}><Image circular src={require('../../assets/cuts-resizes/cuts-128_x_128.png')} /></GridColumn>
            <GridColumn verticalAlign="middle"> <h1>Patrick</h1></GridColumn>
          </Grid>
          <Divider />
        </BlockTitle>
        <Divider />
      </Header>
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
