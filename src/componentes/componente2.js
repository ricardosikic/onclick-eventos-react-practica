import React from "react";

export class ComponenteDos extends React.Component {
  constructor() {
    super();
    this.state = { click: true };
  }

  cambioNombre(e) {
    this.setState({
      click: !this.state.click
    });
  }

  render() {
    return (
      <button onClick={e => this.cambioNombre(e)}>
        {this.state.click ? "Rap" : "Rock"}
      </button>
    );
  }
}
