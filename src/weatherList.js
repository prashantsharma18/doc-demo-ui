import React from 'react';

import axios from 'axios';
import API from './api';

export default class WeatherList extends React.Component {
  state = {
    weatherDetails: []
  }

  componentDidMount() {
    API.get(`weatherforecast`)
      .then(res => {
        const weatherDetails = res.data;
        this.setState({ weatherDetails });
      })
  }

  render() {
    return (
      <ul>
        { this.state.weatherDetails.map(weatherDetail => <li>{weatherDetail.summary}</li>)}
      </ul>
    )
  }
}