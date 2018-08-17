import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <div>
        <List.Item>
          <Image src={attendee.photoURL} as="a" circular size="mini" />
        </List.Item>
      </div>
    );
  }
}

export default EventListAttendee;
