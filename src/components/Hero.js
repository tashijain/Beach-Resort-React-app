import React from "react";

export default function Hero({ children, hero }) {
  return (
    // use hero as a prop which keep changin the className and so diff styling
    <header className={hero}>{children}</header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
