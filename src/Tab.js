import React, { Component } from "react";
import { CurrentTabConsumer } from "./Tab.context";

export class Tab extends Component {
  render() {
    return (
      <CurrentTabConsumer>
        {({ name, active, change }) => (
          <button onClick={change} className={active ? "tak" : ""}>
            Klik
          </button>
        )}
      </CurrentTabConsumer>
    );
  }
}
