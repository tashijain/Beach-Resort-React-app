import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

// if we want to use RoomConsumer many times in our application best to use a higher order function
function RoomContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// using room consumer here without using a higher order function
// import { RoomConsumer } from "../Context";
// export default function RoomContainer() {
//   return (
//     // use of context in a functional component
//     <RoomConsumer>
//       {/* this is a function */}
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
