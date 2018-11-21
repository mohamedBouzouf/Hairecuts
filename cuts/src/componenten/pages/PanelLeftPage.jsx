import React from 'react';
import { Page, Block, BlockTitle, List, ListItem } from 'framework7-react';
import { Image, Header, Rating, Grid, GridColumn, Divider } from 'semantic-ui-react';


export default () => (
  <Page>
    <Block strong style={{ margin: 0, backgroundColor: 'black' }}>

      <Header>

        <BlockTitle style={{ color: 'white' }}>
          <Grid columns={2} stretched>
            <GridColumn width={6}><Image circular src={require('../../cuts.JPG')} /></GridColumn>
            <GridColumn verticalAlign="middle"> <h1>Patrick</h1></GridColumn>
          </Grid>
          <Divider />
        </BlockTitle>
        <Divider />
      </Header>



    </Block>
    <BlockTitle><h3>User</h3></BlockTitle>
    <List as='p'>
      <ListItem>Profile</ListItem>
      <ListItem>About Us</ListItem>
      <ListItem>Profile</ListItem>
      <ListItem>Setting</ListItem>
      <ListItem></ListItem>
      {/* <ListItem link="/about/" title="About"></ListItem>
      <ListItem link="/form/" title="Form"></ListItem> */}
    </List>
    <BlockTitle as='p'> </BlockTitle>
    <List>
      <Rating icon='star' size='tiny' />
      {/* <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem> */}
    </List>
  </Page>
);
