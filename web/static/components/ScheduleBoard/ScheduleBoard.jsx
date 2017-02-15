require('./ScheduleBoard.scss');

import React from 'react';
// TimeStamp,Origin,Trip,Destination,ScheduledTime,Lateness,Track,Status
class ScheduleBoardComponent extends React.Component {

  // Do something with this
  defaultProps = {
    schedules: [], // Expects a json representation of all schedules.
    title: 'Commuter Rail'
  }

  render() {
    return (
      <div className="c-schedule-board">
        <div className="c-schedule-board__header">
          <h2>{this.props.title}</h2>
          <div className='c-schedule-board__header-clock'>
            <p>Current Time</p>
            <p>{this.localTimeFromTimestamp(new Date())}</p>
          </div>

        </div>
        <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Destination</th>
            <th>Train #</th>
            <th>Track</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.schedules.map((schedule, index) =>{
            return (
              <tr key={index} className='c-schedule-board__row'>
                <td>{this.localTimeFromTimestamp(schedule.ScheduledTime * 1000)}</td>
                <td>{schedule.Destination}</td>
                <td>{schedule.Trip}</td>
                <td>{schedule.Track || 'TBD'}</td>
                <td className={this.displayClassForStatus(schedule.Status)}>{schedule.Status}</td>
              </tr>
            );
          })}
        </tbody>
        </table>

      </div>
    );
  }

  localTimeFromTimestamp(timestamp) {
    const time = new Date(timestamp);
    const h = time.getHours();
    const m = this.prependZeroIfNeeded(time.getMinutes());
    const timeString = h + ":" + m;

    return timeString;
  }

  prependZeroIfNeeded(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  displayClassForStatus(status) {
    let displayClass = "on-time";
    if (['Info to follow', 'TBD', 'Delayed', 'Late', 'Hold'].includes(status)) {
      displayClass = "delayed";
    }
    else if (['Cancelled'].includes(status)) {
      displayClass = 'cancelled';
    }

    return displayClass;
  }
}



export default ScheduleBoardComponent;
