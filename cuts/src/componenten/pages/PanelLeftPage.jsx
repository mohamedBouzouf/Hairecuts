import React from 'react';
import { Page, Block, BlockTitle, List, ListItem } from 'framework7-react';
import { Image } from 'semantic-ui-react';

export default () => (
  <Page>
    <Block strong>
      <Image />
    </Block>
    <BlockTitle>Load page in panel</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"></ListItem>
      <ListItem link="/form/" title="Form"></ListItem>
    </List>
    <BlockTitle>Load page in main view</BlockTitle>
    <List>
      <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem>
    </List>
  </Page>
);
