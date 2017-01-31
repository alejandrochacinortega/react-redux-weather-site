import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';


class WeatherList extends React.Component {
  renderWeather(cityData) {
    console.log('city ', cityData);
    const name       = cityData.city.name;
    const temps      = cityData.list.map(weather => weather.main.temp);
    const pressures      = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    console.log('temps ', temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" unit="K"/>
        </td>
        <td>
          <Chart data={pressures} color="red" unit="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="black" unit="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);