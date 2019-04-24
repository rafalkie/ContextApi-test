import React, { Component, createContext } from "react";

const CurrentTabContext = createContext();

export class CurrentTabProvider extends Component {
  state = {
    name: "aha",
    active: true
  };
  change = () => {
    const active2 = this.state.active;
    this.setState({
      active: !active2
    });
  };
  render() {
    const { children } = this.props;
    return (
      <CurrentTabContext.Provider
        value={{
          active: this.state.active,
          name: this.state.name,
          change: this.change
        }}
      >
        {children}
      </CurrentTabContext.Provider>
    );
  }
}

export const CurrentTabConsumer = CurrentTabContext.Consumer;
