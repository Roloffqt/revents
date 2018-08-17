import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List.item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/api/portaits/women/42.jps"
        />
      </List.item>
    );
  }
}

export default EventListAttendee;
