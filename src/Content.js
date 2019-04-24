import React, { Component } from "react";
import { CurrentTabConsumer } from "./Tab.context";

export class Content extends Component {
  render() {
    return <CurrentTabConsumer>{({ name, active }) => <div>{name}</div>}</CurrentTabConsumer>;
  }
}
