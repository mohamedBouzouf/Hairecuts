import React from 'react';
import {
  Page,
  BlockFooter, Link
} from 'framework7-react';

import { Grid, Image, Divider } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';

export default (props) => (
  <Page>
    <div className="AppBackImage">
      <div className="loginContainer">
        <div className="Container">
          <Image circular src={props.image} alt='cuts' centered />
          <Grid centered>
            <Grid.Column width={16}  >
              <Divider />
            </Grid.Column>
            <Grid.Row>
              <Grid.Column mobile={6} >
                <Button className="colorbutton f" bsSize='large' onClick={props.signInWithFacebook} >
                  <i className="fa fa-facebook iconIverse" style={{ fontSize: '17px' }} />
                </Button>
              </Grid.Column>
              <Grid.Column mobile={6}>
                <Button className="colorbutton g" bsSize='large' onClick={props.signInWithGoogle}>
                  <i className="fa fa-google iconIverse" style={{ fontSize: '17px' }} />
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Column mobile={8}>
              <Divider horizontal inverted>OR</Divider></Grid.Column>
            <Grid.Column mobile={16} textAlign='center'>
              <Button className="colorbuttonLogin" bsSize='large' onClick={props.IsClick}  >
                Login with Email
                  </Button>
            </Grid.Column>
            <Grid.Column width={16} >
              <Divider />
            </Grid.Column>
            <div style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}>
              <BlockFooter style={{ color: 'white' }}>
                {`Don't have a account? `}
                <Link onClick={props.IsClickEm} > Register now.</Link>
              </BlockFooter>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  </Page >
);
