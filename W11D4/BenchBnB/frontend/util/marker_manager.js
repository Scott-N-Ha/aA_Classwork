export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
  }

  updateMarkers(benches){
    console.log(this);

    if (Object.keys(benches).length < 1) return null;

    Object.keys(benches).forEach(id => {
      if (this.markers[id] === undefined){
        let newMarker =  new google.maps.Marker({
          position: new google.maps.LatLng(benches[id].lat, benches[id].lng),
          title: benches[id].description
        });
        newMarker.setMap(this.map);
  
        this.markers[id] = newMarker;
      }
    });
  }

  createMarkerFromBench(bench){
    if (this.markers[bench.id] === undefined){
      let newMarker =  new google.maps.Marker({
        position: new google.maps.LatLng(bench.lat, bench.lng),
        title: bench.description
      });
      newMarker.setMap(this.map);

      this.markers[bench.id] = newMarker;
    }
  }
}