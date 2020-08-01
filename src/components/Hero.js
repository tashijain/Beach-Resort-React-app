import React from "react";

// use hero as a prop which keep changin the className and so diff styling
export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// default if no prop specified for hero
Hero.defaultProps = {
  hero: "defaultHero",
};
