import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  // destructuring assignment from ECMAScript 6
  const { name, slug, images, price } = room;

  // setup a default image so that incase img doesn't load up some kind of image is shown
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="Single Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// typechecking on props
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
