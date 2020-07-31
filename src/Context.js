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
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //getData

  // lifecycle method
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
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

  handleChange = (event) => {
    const target = event.target;
    // since we also have the checkbox for which we handle change
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    // filter rooms is callback fn
    this.setState(
      {
        // don't use if else checks as hardcoding to prevent recoding and reploying this code if data changes
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// higher order functions since it returns other function
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
