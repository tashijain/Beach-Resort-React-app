import React, { Component } from "react";

// Context API: Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: "hello",
    name: "john",
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
