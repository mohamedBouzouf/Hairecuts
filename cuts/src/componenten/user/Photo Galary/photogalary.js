import React, {Component} from 'react';
import {Page,Swiper,SwiperSlide} from 'framework7-react';
import {Image, Divider} from 'semantic-ui-react';
import {Carousel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getBarber, setBarber} from '../../../Actions/barberAction';

import './photogalary.css';

class PhotoGalaryBarberShop extends Component {


    componentDidMount() {
        console.log(this.props.barber.b.photos.BestCuts);
    }

    render() {
        const {
            photos,
            photo
        } = this.props.barber.b;
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
                                                    { photos.OldCuts.map(photo => {
                               return <Carousel.Item>  <Image centered size='small' src={photo}/> </Carousel.Item>
                            } ) }          
                                            </Carousel>
                        <Divider horizontal inverted>Best Cuts</Divider>
                        <Carousel className="izeImageCarouselPhoto">                                           
                                                    { photos.BestCuts.map(photo => {
                               return <Carousel.Item>  <Image centered size='small' src={photo}/> </Carousel.Item>
                            } ) }          
                                            </Carousel>
                        <Divider horizontal inverted>Old Cuts</Divider>
                        <Carousel className="izeImageCarouselPhoto" >
                                                                                                
                                                    { photos.NewCuts.map(photo => {
                                                        return <Carousel.Item> <Image centered size='small' src={photo}/></Carousel.Item>
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