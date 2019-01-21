import React, { Component } from 'react';
import { Page, Swiper, SwiperSlide } from 'framework7-react';
import { Image, Divider } from 'semantic-ui-react';


import './photogalary.css';


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
                <div className="layer1" >
                    <div className="PhotoRating">
                    </div>
                    <div className="layer2">
                        <Divider horizontal inverted>New Cuts</Divider>
                        <Swiper className="photogallery">
                            <SwiperSlide><Image centered size='small' src='#' /></SwiperSlide>
                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>
                        <Divider horizontal inverted>Best Cuts</Divider>
                        <Swiper className="photogalleryblack">
                            <SwiperSlide><Image centered size='medium' src='#' /></SwiperSlide>

                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>
                        <Divider horizontal inverted>OR</Divider>
                        <Swiper className="photogallery">
                            <SwiperSlide><Image centered size='small' src='#'/>Old Cuts</SwiperSlide>
                            <SwiperSlide>Pieter</SwiperSlide>
                            <SwiperSlide>Tom</SwiperSlide>
                        </Swiper>
                    </div></div>
            </Page>
        )
    }
}

export default PhotoGalaryBarberShop 