import React from 'react';
import { stores } from '../../sweetgreen';
import Sidebar from './Sidebar.jsx';
import mapboxgl from 'mapbox-gl';
import '../../styles.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlqb25nIiwiYSI6ImNqOW93OXB0YzFnaHcyd240ZmlvMTc3eDYifQ.ZLuZbS7D2OcCUxT642-6xA';

class Mapbox extends React.Component {
  constructor(props) {
    super(props);
    this.flyToStore = this.flyToStore.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
    this.generateListings = this.generateListings.bind(this);
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

      stores.features.forEach(function(marker) {
      // Create a div element for the marker
      const el = document.createElement('div');
      // Add a class called 'marker' to each div
      el.className = 'marker';
      // By default the image for your custom marker will be anchored
      // by its center. Adjust the position accordingly
      // Create the custom markers, set their position, and add to map
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      });
    });
  }

  

  componentWillUnmount() {
    this.map.remove();
  }

  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  generateListings() {
    let i = -1;
    let listing = stores.features.map((feature) => {
      i += 1;
      return (
        <div className="item" key={i} id={`listing-${i}`}>
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
            {feature.properties.address}
          </a>
          <div className='details'>
            {feature.properties.city} &middot; {feature.properties.phoneFormatted}
          </div>
        </div>
      )
    });
    return listing;
  }

  createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    let popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Cuts</h3>' +
        '<h4>' + currentFeature.properties.address + currentFeature.properties.name + '</h4>')
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

export default Mapbox;
