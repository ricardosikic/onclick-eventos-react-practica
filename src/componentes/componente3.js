import React from "react";

export class ComponenteTres extends React.Component {
  constructor() {
    super();
    this.state = { click: true };
  }

  eventito(e) {
    this.setState({
      click: !this.state.click
    });
  }
  render() {
    return (
      <button onClick={e => this.eventito(e)}>
        {this.state.click ? Math.floor(Math.random() * 10 + 1) : "0"}
      </button>
    );
  }
}
