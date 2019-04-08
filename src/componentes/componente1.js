import React from "react";

export class PrimerComponente extends React.Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };
  }

  cambioPalabra(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <button onClick={e => this.cambioPalabra(e)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
