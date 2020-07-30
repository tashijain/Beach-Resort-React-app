import React, { Component } from "react";
import items from "./data";

// Context API: Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    // to store all rooms
    rooms: [],
    // to store rooms sorted on criteria
    sortedRooms: [],
    // to store featured rooms
    featuredRooms: [],
    // not needed if data stored locally but needed
    // if get from server(externally) so we don't render
    // until loading is false
    loading: true,
  };

  //getData

  // lifecycle method
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      // now only image urls
      let images = item.fields.images.map((image) => image.fields.file.url);
      // spread operator to copy all properties from fields object
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    // why find and not filter
    // 1. filter returns array and find returns object
    // since we need only one item - the first one we use find
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
