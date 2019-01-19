import React from 'react';
import './App.css';
import "semantic-ui-css/semantic.min.css";

import {Provider} from 'react-redux';
import store from '../store';


import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  Label,
  Input,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../routes';

export default function (props) {
  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto' // Automatic theme detection
    , routes
  };

  return (
    <Provider store={store}>
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />

      {/* Left Panel */}
      <Panel left cover>
        <View url="/panel-left/" linksView=".view-main" />
      </Panel>

      {/* Right Panel */}
      <Panel right reveal themeDark>
        <View url="/panel-right/" linksView=".view-main" />
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="ios-edges" />

      {/* Popup */}
      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
          </Page>
        </View>
      </Popup>

      {/* Login Screen */}
      <LoginScreen id="login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListItem>
                <Label>Username</Label>
                <Input name="username" placeholder="Username" type="text"></Input>
              </ListItem>
              <ListItem>
                <Label>Password</Label>
                <Input name="password" type="password" placeholder="Password"></Input>
              </ListItem>
            </List>
            <List>
              <ListButton title="Sign In" loginScreenClose></ListButton>
              <BlockFooter>
                <p>Click Sign In to close Login Screen</p>
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
    </Provider>
  );
};

