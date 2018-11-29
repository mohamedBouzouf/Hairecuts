import React, { Component } from 'react';
import Blur from 'react-blur';
import { Page, Swiper, SwiperSlide } from 'framework7-react';
import { Image, Divider } from 'semantic-ui-react';


import './photogalary.css';

const photo = 'https://ae01.alicdn.com/kf/HTB1GM7_KpXXXXXJXpXXq6xXFXXXZ/Barbershop-Vinyl-Muurtattoo-Sticker-Scciors-KAPPER-Citaat-Art-Interieur-Mural-Muursticker-Decor-Haar-Winkel-Raamdecoratie.jpg_640x640.jpg';


class PhotoGalaryBarberShop extends Component {

    constructor(props) {
        super(props);

        this.state = {

            popupOpened: false
        }
    }



    componentDidMount() {
        // simulate img loading
    }




    render() {
        return (
            <Page>
                <Blur className='headercuts' img={photo} blurRadius={8} />

                <div className="layer1" >



                    <div className="headerPhotoRating">


                    </div>
                    <div className="layer2">

                        <Divider horizontal inverted>Waves</Divider>

                        <Swiper className="photogallery">
                            <SwiperSlide><Image centered size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /></SwiperSlide>

                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>
                        <Divider horizontal inverted>Waves</Divider>

                        <Swiper className="photogalleryblack">
                            <SwiperSlide><Image centered size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /></SwiperSlide>

                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>
                        <Divider horizontal inverted>Waves</Divider>
                        <Swiper className="photogallery">
                            <SwiperSlide><Image centered size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /></SwiperSlide>

                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>




                    </div></div>

            </Page>



        )
    }
}

export default PhotoGalaryBarberShop 