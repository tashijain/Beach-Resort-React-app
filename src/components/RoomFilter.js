import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

// hook used to access ocntext within a functional component

// function that gets unique values for room type since there
// are manyy single, double rooms but show option only once
const getUnique = (items, value) => {
  // sets don't contain duplicate
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // get Unique types
  let types = getUnique(rooms, "type");
  // add all as a type too
  types = ["all", ...types];
  // map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search room" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {/* could hard-code it but data can change any time */}
            {/* <option value="single" >single</option> */}
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* guests*/}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {/* could hard-code it but data can change any time */}
            {/* <option value="single" >single</option> */}
            {people}
          </select>
        </div>
        {/* end of guests */}
      </form>
    </section>
  );
}
