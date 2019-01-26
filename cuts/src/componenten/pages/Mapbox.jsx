import React from 'react';
import { stores } from '../../sweetgreen';
import Sidebar from './Sidebar.jsx';
import mapboxgl from 'mapbox-gl';
import '../../styles.css';
import {connect} from 'react-redux';
import {getBarber, 
  setBarber, Update} from '../../Actions/barberAction';
import { Button } from 'react-bootstrap';
// import firebase from 'firebase';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlqb25nIiwiYSI6ImNqOW93OXB0YzFnaHcyd240ZmlvMTc3eDYifQ.ZLuZbS7D2OcCUxT642-6xA';
var arr = [];
var key = [];

class Mapbox extends React.Component {
  constructor(props) {
    super(props);
    this.flyToStore = this.flyToStore.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
    this.generateListings = this.generateListings.bind(this);
    for(key in this.props.barber){
      arr.push(this.props.barber[key]);
    }
  }
  
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [4.351721, 50.850346],
      // initial zoom
      zoom: 14
    });

    
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true

  }));

  this.map.addControl(new mapboxgl.NavigationControl())

    this.map.on('load', () => {
      this.map.addSource('places', {
        type: 'geojson',
        data: stores
      });
      // console.log(this.map);
      const map = this.map;

      arr.forEach(function(marker) {
      // Create a div element for the marker
      const el = document.createElement('div');
      // Add a class called 'marker' to each div
      el.className = 'marker';
      // By default the image for your custom marker will be anchored
      // by its center. Adjust the position accordingly
      // Create the custom markers, set their position, and add to map
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.coordinates)
        .addTo(map);
      });
    });
  }

  

  componentWillUnmount() {
    this.map.remove();
    this.mapContainer.remove();
  }

  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.coordinates,
      zoom: 15
    });
  }

  generateListings() {
    let i = -1;
    let listing = arr.map((feature) => {
      i += 1;
      feature.clicked = i;
      
      return (
        <div className="item" key={feature.id} id={`listing-${feature.id}`}>
          <a
            href='#'
            className='title' 
            onClick={() => {
              this.flyToStore(feature);
              this.createPopUp(feature);
              var activeItem = document.getElementsByClassName('active');
              if (activeItem[0]) {
                activeItem[0].classList.remove('active');
              }
              
            }}>
            {feature.name}
          </a>
          <div className='details'>
            {feature.address} &middot; {feature.phoneFormatted}
            <Button bsStyle="primary" bsSize='small'  onClick={this.test.bind(this,feature.id)}> Visit
           </Button>
          </div>
        </div>
      )
    });
    return listing;
  }

  test(user){ 
    if(this.props.barber[0].id === user){
      this.props.barber[0].clicked = 1;
      this.props.barber[1].clickedd = 0;
      this.props.barber[2].clickedh = 0;
      console.log("a");
      this.props.setBarber(this.props.barber[0].clicked)
    }else if (this.props.barber[1].id === user){
      this.props.barber[0].clicked = 0;
      this.props.barber[1].clickedd = 1;
      this.props.barber[2].clickedh = 0;
      console.log("b");
      this.props.setBarber(this.props.barber[1].clickedd)
    }else if(this.props.barber[2].id === user){
      this.props.barber[0].clicked = 0;
      this.props.barber[1].clickedd = 0;
      this.props.barber[2].clickedh = 1;
      console.log("c");
      this.props.setBarber(this.props.barber[2].clickedh)
    }
   
    this.$f7router.navigate("/userbarberpage/");
  }

  createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();
   
  

    let popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.coordinates)
      .setHTML(`<h3> <img src="${currentFeature.photo}" height="32" width="32"> ${currentFeature.name} </h3> 
        <h4> ${currentFeature.address} ${currentFeature.name} + </h4>`)
      .addTo(this.map);
  }

  render() {
    return (
      <div className="mapContainer">
        <Sidebar flyToStore={this.flyToStore} createPopUp={this.createPopUp} generateListings={this.generateListings}/>
        <div className="map" ref={el => this.mapContainer = el} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  barber: state.barber
});

export default connect(mapStateToProps,{getBarber, setBarber, Update})(Mapbox);
