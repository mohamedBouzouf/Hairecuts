import React, { Component } from 'react';
import Blur from 'react-blur';
import { Link, BlockFooter } from 'framework7-react';
import { Header, Icon, Divider, Image, List, Card, Grid, Rating, Button, Segment } from 'semantic-ui-react';

import './user.css';


class UserBarberPage extends Component {

    componentDidMount() {
        // simulate img loading
    }



    render() {
        return (
            <div>


                <div className="layer1" >


                    <Blur className="blur" img={require('../../barbershop.jpg')} blurRadius={6} />
                    <div className='headercuts'></div>
                    <div className="layer2">
                        <div style={{
                            textAlign: "center"
                        }}>
                            <div></div>
                            {/* <Image src={require('../../Trafficlight.png')} avatar='h' /> */}
                            <h3>Lion Lockx</h3>
                            <Grid celled padded >
                                <Grid.Row centered columns='3'
                                >
                                    <Grid.Column textAlign="center" mobile={5} tablet={6} computer={5}><Card raised color='blue'
                                        header='2' meta="barbers" color="yellow" /></Grid.Column>
                                    <Grid.Column textAlign="center" mobile={5} tablet={6} computer={5}><Card raised color='blue'
                                        header='2' meta="Flex" color="orange" /></Grid.Column>
                                    <Grid.Column textAlign="center" mobile={5} tablet={6} computer={5}><Card meta="200K" raised color='blue'
                                        header='Likes' color="brown" /></Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns="2">
                                    <Grid.Column >
                                        <Button color='green'>
                                            Call
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column >
                                        <Button color='blue' >
                                            Appointment

                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </div>

                    </div>

                    <div className="headerPhotoRating">
                        <Image circular src={require('../../cuts.JPG')} size="tiny" centered />
                        <div style={
                            { padding: "8px", marginTop: " 5px" }
                        }>  <Rating icon="star" maxRating={5} size="tiny" />  </div>
                    </div>

                    <div className="layer3">



                    </div>







                </div>
            </div>

        )
    }
}

export default UserBarberPage