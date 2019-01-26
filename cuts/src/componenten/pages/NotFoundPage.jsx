import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <Block strong>
    <h1>Page Not Found</h1>
    <h1>ERROR 404</h1>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
  </Page>
);
