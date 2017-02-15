require('../styles/core.scss');

import React from 'react';
import ScheduleBoard from './ScheduleBoard/ScheduleBoard';

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      schedules: [],
    };

  }

  render() {
    return (
      <div className="o-app">
        <h1>MBTA Train Schedule</h1>
        <ScheduleBoard schedules={this.state.schedules}/>
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
      this.setState({schedules: json});
    });
  }

  csvToJson(csv){
    csv = csv.trim()
    csv = csv.replace(/['"\r]/g, ''); // Remove quotation marks

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

  getSchedules() {
    return [
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2309,
     "Destination": "Lowell",
     "ScheduledTime": 1486933200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2157,
     "Destination": "Newburyport",
     "ScheduledTime": 1486935000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2109,
     "Destination": "Rockport",
     "ScheduledTime": 1486938600,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2409,
     "Destination": "Wachusett",
     "ScheduledTime": 1486939500,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2207,
     "Destination": "Haverhill",
     "ScheduledTime": 1486939800,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2311,
     "Destination": "Lowell",
     "ScheduledTime": 1486940400,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2159,
     "Destination": "Newburyport",
     "ScheduledTime": 1486944900,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2411,
     "Destination": "Wachusett",
     "ScheduledTime": 1486947300,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2313,
     "Destination": "Lowell",
     "ScheduledTime": 1486947600,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2111,
     "Destination": "Rockport",
     "ScheduledTime": 1486949400,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2209,
     "Destination": "Haverhill",
     "ScheduledTime": 1486950000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2161,
     "Destination": "Newburyport",
     "ScheduledTime": 1486956000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2113,
     "Destination": "Rockport",
     "ScheduledTime": 1486960200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2211,
     "Destination": "Haverhill",
     "ScheduledTime": 1486960200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2315,
     "Destination": "Lowell",
     "ScheduledTime": 1486960200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "North Station",
     "Trip": 2413,
     "Destination": "Wachusett",
     "ScheduledTime": 1486960200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2769,
     "Destination": "Readville",
     "ScheduledTime": 1486932600,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2037,
     "Destination": "Kingston",
     "ScheduledTime": 1486933800,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2511,
     "Destination": "Worcester / Union Station",
     "ScheduledTime": 1486934400,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2811,
     "Destination": "Providence",
     "ScheduledTime": 1486935300,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2771,
     "Destination": "Readville",
     "ScheduledTime": 1486936200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2081,
     "Destination": "Greenbush",
     "ScheduledTime": 1486937400,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2713,
     "Destination": "Forge Park / 495",
     "ScheduledTime": 1486938000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2055,
     "Destination": "Plymouth",
     "ScheduledTime": 1486938000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2011,
     "Destination": "Middleboro/Lakeville",
     "ScheduledTime": 1486939200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2773,
     "Destination": "Readville",
     "ScheduledTime": 1486939800,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2513,
     "Destination": "Worcester / Union Station",
     "ScheduledTime": 1486941600,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2813,
     "Destination": "Providence",
     "ScheduledTime": 1486943100,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2775,
     "Destination": "Readville",
     "ScheduledTime": 1486943400,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2715,
     "Destination": "Forge Park / 495",
     "ScheduledTime": 1486945200,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2777,
     "Destination": "Readville",
     "ScheduledTime": 1486947000,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   },
   {
     "TimeStamp": 1486931958,
     "Origin": "South Station",
     "Trip": 2083,
     "Destination": "Greenbush",
     "ScheduledTime": 1486947600,
     "Lateness": 0,
     "Track": "",
     "Status": "On Time"
   }
 ];
  }
}

export default AppComponent;
