import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    // array of objects
    services: [
      {
        icons: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Treat yourself to our exquisitve cocktail collection. Our bartenders are bound to surprise you by out secret mixology talent.",
      },
      {
        icons: <FaHiking />,
        title: "endless hiking",
        info:
          "Treat yourself to our exquisitve cocktail collection. Our bartenders are bound to surprise you by out secret mixology talent.",
      },
      {
        icons: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Treat yourself to our exquisitve cocktail collection. Our bartenders are bound to surprise you by out secret mixology talent.",
      },
      {
        icons: <FaBeer />,
        title: "strongest beer",
        info:
          "Treat yourself to our exquisitve cocktail collection. Our bartenders are bound to surprise you by out secret mixology talent.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
