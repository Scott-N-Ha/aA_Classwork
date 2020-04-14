import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class BenchMap extends React.Component {
  constructor(props){
    super(props);


  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render(){

    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        map
      </div>
    );
  }
}