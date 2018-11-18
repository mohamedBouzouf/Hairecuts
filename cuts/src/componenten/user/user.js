import React, { Component } from 'react';
import { Header, Icon, Form, Divider, List } from 'semantic-ui-react';
import { Carousel, WingBlank } from 'antd-mobile';

class User extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [{
                    photo: 'http://ianicsolutions.com/wp-content/uploads/2018/05/haircuts-for-black-men-particularly-dye-hair-wigs.jpg',
                    url: 'V_xncvgzDoo'
                },
                {
                    photo: 'http://www.diamondsindasky.com/static/img/content/50-fade-and-tapered-haircuts-for-black-men-part-2.jpg',
                    url: 'U5rMrSI7Pn4'
                }
                    ,
                {
                    photo: 'https://www.1hairstyles.com/wp-content/uploads/2018/09/patty_cuts-short-side-part-fade-haircuts-for-men-beard.jpg',
                    url: 'hnYMacpvKZY'
                }
                ],
            });
        }, 100);
    }
    render() {
        return (
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
                    <WingBlank>
                        <div style={{ boxShadow: '0 8px 6px -6px black' }}>
                            <Carousel
                                autoplay={false}
                                infinite
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}
                            >
                                {this.state.data.map(val => (
                                    <a
                                        key={val}
                                        href={`${val.url}`}
                                        style={{ display: 'inline-block', width: '50%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={`${val.photo}`}
                                            alt=""
                                            style={{ width: '50%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </a>
                                ))}
                            </Carousel>
                        </div>
                    </WingBlank>
                    <Divider />
                    <h3 style={{ textAlign: 'center' }}>My Cuts</h3>
                </div>
            </div>
        )
    }
}

export default User