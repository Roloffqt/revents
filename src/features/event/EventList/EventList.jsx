import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>event list</h1>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    );
  }
}
export default EventList;
