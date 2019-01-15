import React, {
    Component
} from 'react';
import {
    Link,
    BlockFooter, Page
} from 'framework7-react';
import {
    Header,
    Icon,
    Divider,
    List,
    Label
} from 'semantic-ui-react';

class User extends Component {

    componentDidMount() {
        // simulate img loading
    }
    render() {
        return (
            <Page>
                < div >

                    < Link panelOpen="left"
                        style={
                            {
                                margin: 0,
                                position: 'absolute'
                            }
                        } > <Label attached='top left'
                            icon='th list'
                            size='big'> </Label></Link >
                    <div style={
                        {
                            padding: "20px"
                        }
                    } >
                        <Header as='h2' icon textAlign='center' >
                            <Icon name='users' circular />
                            <Header.Content> User </Header.Content></Header>  <Divider />
                        <div style={
                            {
                                marginTop: '20px',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }
                        } >
                            <List>
                                <List.Item > < h3 > Berton <br /> Lutina Mulamba </h3></List.Item>
                                <List.Item > < h3 > Lid sinds 17 Januari 2018 </h3></List.Item>
                                <List.Item> Aantal keren aangemeld: 10 </List.Item></List> <Divider />
                            <BlockFooter >
                                <p>Berre</p> </BlockFooter >
                        </div> </div > </div></Page>

        )
    }
}

export default User