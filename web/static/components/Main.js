require('../styles/core.scss');

import React from 'react';
import ScheduleBoard from './ScheduleBoard/ScheduleBoard';

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      northStationSchedules: [],
      southStationSchedules: []
    };

  }

  render() {
    return (
      <div className="o-app">
        <h1>MBTA Train Schedule</h1>
        <ScheduleBoard schedules={this.state.northStationSchedules} title="North Station"/>
        <ScheduleBoard schedules={this.state.southStationSchedules} title="South Station"/>
      </div>
    );
  }

  componentDidMount () {
    this.makeScheduleGetRequest();
  }

  makeScheduleGetRequest () {
    const request = new Request('/schedules');

    fetch(request).then( (response) => {
      return response.text();
    }).then( (response) => {
      const json = this.csvToJson(response)

      // This can be optimized.
      const southStation = json.filter( (trainSchedule)=> {
        return trainSchedule.Origin == "South Station";
      });
      const northStation = json.filter( (trainSchedule)=> {
        return trainSchedule.Origin == "North Station";
      });

      this.setState({northStationSchedules: northStation, southStationSchedules: southStation});
    });
  }

  csvToJson(csv){
    csv = csv.trim(); // remove excess whitespace
    csv = csv.replace(/['"\r]/g, ''); // Remove quotation marks and carriage returns

    let result  = [];
    let lines   = csv.split("\n");
    let headers = lines[0].split(",");

    for(let i = 1; i < lines.length; i++){
      var obj = {};
      var currentline = lines[i].split(",");

      for(let j = 0; j < headers.length; j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }

    return result;
  }

}

export default AppComponent;
