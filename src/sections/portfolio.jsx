import React from "react";
import Card from "../components/portfolio-card";

import { portfolio } from "../assets/data/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio" className="p-6 pt-8 lg:p-8 max-w-screen-xl mx-auto">
      <h2 className="border-transparent border-b-stone-800 border-4 py-2 font-semibold text-2xl lg:text-3xl lg:mb-4 heading-styled">
        Portfolio
      </h2>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {portfolio.map((p, ind) => (
          // <div className="cursor-pointer">
          <a href={"portfolio/"+p.slug} rel="noreferrer" key={"pf"+ind}>
            <Card name={p.projectName} image={p.images[0]} />
          </a>
          // </div>
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
