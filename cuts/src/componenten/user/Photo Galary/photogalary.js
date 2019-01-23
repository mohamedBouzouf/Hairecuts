import React, {Component} from 'react';
import {Page,Swiper,SwiperSlide} from 'framework7-react';
import {Image, Divider} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getBarber, setBarber} from '../../../Actions/barberAction';

import './photogalary.css';

class PhotoGalaryBarberShop extends Component {


    componentDidMount() {
        console.log(this.props.barber.photos.BestCuts);
    }

    render() {
        const {
            instagram,
            rating,
            facebook,
            photos,
            photo
        } = this.props.barber;
        return (
            <Page style={{backgroundImage:"url(" + photo + ")" , 
            backgroundPosition: "center", 
            backgroundSize:'cover'}}>
                <div className="layer1" >
                    <div className="PhotoRating">
                    </div>
                    <div className="layer2">
                        <Divider horizontal inverted>New Cuts</Divider>
                        <Swiper className="photogallery">
                            { photos.NewCuts.map(photo => {
                               return <SwiperSlide><Image centered size='small' src={photo}/></SwiperSlide>
                            } ) }
                        </Swiper>
                        <Divider horizontal inverted>Best Cuts</Divider>
                        <Swiper className="photogalleryblack">
                        { photos.BestCuts.map(photo => {
                               return <SwiperSlide><Image centered size='small' src={photo}/></SwiperSlide>
                            } ) }
                        </Swiper>
                        <Divider horizontal inverted>Old Cuts</Divider>
                        <Swiper className="photogallery">
                        { photos.OldCuts.map(photo => {
                               return <SwiperSlide><Image centered size='small' src={photo}/></SwiperSlide>
                            } ) }
                        </Swiper>
                    </div></div>
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    barber : state.barber
  });

export default connect(mapStateToProps,{getBarber,setBarber})(PhotoGalaryBarberShop);