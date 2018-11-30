import React, { Component } from 'react';
import {
    Link,
    BlockFooter
} from 'framework7-react';
import { Header, Icon, Divider, List, Label } from 'semantic-ui-react';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: require('../../assets/cuts-resizes/cuts-128_x_128.jpg'),
            imagetiny: require('../../assets/cuts-resizes/cuts-64_x_64.jpg')
        };
    }

    componentDidMount() {
        // simulate img loading
    }
    render() {
        return (
            <div>
                <Link panelOpen="left" style={{ margin: 0, position: 'absolute' }}><Label attached='top left' icon='th list' size='big'></Label></Link>
                <div style={{ padding: "20px" }}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>User</Header.Content>
                    </Header>
                    <Divider />
                    <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'left' }}>
                        <List>
                            <List.Item><h3>Berton <br /> Lutina Mulamba</h3></List.Item>
                            <List.Item><h3>Lid sinds 17 Januari 2018</h3></List.Item>
                            <List.Item>Aantal keren aangemeld: 10</List.Item>
                        </List>
                        <Divider />
                        <BlockFooter>
                            <p>Berre</p>
                        </BlockFooter>

                    </div>
                </div>
            </div>
        )
    }
}

export default User