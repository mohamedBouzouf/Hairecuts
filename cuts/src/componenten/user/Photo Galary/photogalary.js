import React, {Component} from 'react';
import {Page} from 'framework7-react';
import {Image, Divider} from 'semantic-ui-react';
import {Carousel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getBarber, setBarber} from '../../../Actions/barberAction';

import './photogalary.css';
var i = 0;
class PhotoGalaryBarberShop extends Component {


    componentDidMount() {
        
    }

    render() {
        if(this.props.barber[0].clicked === 1)
        {
            i = 0;
        }else if(this.props.barber[1].clickedd === 1)
        {
            i = 1;
        }else if(this.props.barber[2].clickedh === 1)
        {
            i = 2;
        }
        const {
            photos,
            photo
        } = this.props.barber[i];
        return (
            <Page style={{backgroundImage:"url(" + photo + ")" , 
            backgroundPosition: "center", 
            backgroundSize:'cover'}}>
                <div className="layer1" >
                    <div className="PhotoRating">
                    </div>
                    <div className="layer2">
                    <Divider/>
                        <Divider horizontal inverted>New Cuts</Divider>
                        <Carousel className="sizeImageCarouselPhoto">                                           
                                                    { photos.OldCuts.map((photo,i) => {
                               return <Carousel.Item  key={i}>  <Image centered size='small' src={photo}/> </Carousel.Item>
                            } ) }          
                                            </Carousel>
                        <Divider horizontal inverted>Best Cuts</Divider>
                        <Carousel className="izeImageCarouselPhoto">                                           
                                                    { photos.BestCuts.map((photo,i) => {
                               return <Carousel.Item key={i}>  <Image centered size='small' src={photo} /> </Carousel.Item>
                            } ) }          
                                            </Carousel>
                        <Divider horizontal inverted>Old Cuts</Divider>
                        <Carousel className="izeImageCarouselPhoto" >
                                                                                                
                                                    { photos.NewCuts.map((photo,i)=> {
                                                        return <Carousel.Item key={i}> <Image centered size='small' src={photo} /></Carousel.Item>
                                                    } ) }
                                                
                                            </Carousel>
                                            <Divider/>
                        
                    </div></div>
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    barber : state.barber
  });

export default connect(mapStateToProps,{getBarber,setBarber})(PhotoGalaryBarberShop);