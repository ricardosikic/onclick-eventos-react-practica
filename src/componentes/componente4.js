import React from "react";

export class ComponenteCuatro extends React.Component {
  constructor() {
    super();
    this.state = { click: true };
  }

  cambioColor(e) {
    this.setState({
      click: !this.state.click
    });
  }

  render() {
    return (
      <div id="cuadro" onClick={e => this.cambioColor(e)}>
        {this.state.click ? "cuadrote" : "cuadrito"}
      </div>
    );
  }
}
