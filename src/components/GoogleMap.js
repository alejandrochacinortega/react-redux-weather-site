import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    console.log('thia ', this.props);
    return (
      <div ref="map" />
    )
  }
}

export default GoogleMap;