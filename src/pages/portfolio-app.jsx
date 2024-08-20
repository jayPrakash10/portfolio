import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { portfolio } from "../assets/data/portfolio";
import { GlobeAltIcon } from "@heroicons/react/16/solid";
import Carousel from "react-grid-carousel";

const PortfolioApp = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const data = portfolio.find((port) => port.slug === params?.project);
    if (data) {
      setData(portfolio.find((port) => port.slug === params?.project));
    } else {
      console.log("Error");
    }
  }, [params]);

  return (
    <section className="container py-16 mx-auto">
      <h3 className="text-3xl font-semibold mb-2 underline">
        {data?.projectName}
      </h3>
      {data?.url && (
        <a
          className="flex items-center text-slate-600"
          href={data?.url}
          target="_blank"
          rel="noreferrer"
        >
          <GlobeAltIcon className="size-5" /> &nbsp; Website
        </a>
      )}

      <section className="py-10">
        <Carousel rows={1} cols={2}>
          {data?.images?.map((image, ind) => {
            return (
              <Carousel.Item>
                <div className="flex-1 flex justify-center min-w-fit">
                  <img className="max-h-80" src={image} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>

      <section>
        <section className="py-8">
          <div className="flex items-center gap-20">
            {data?.tech?.front && (
              <div>
                <strong>Frontend : </strong> <span>{data?.tech?.front}</span>
              </div>
            )}
            {data?.tech?.back && (
              <div>
                <strong>Backend : </strong> <span>{data?.tech?.back}</span>
              </div>
            )}
            {data?.tech?.style && (
              <div>
                <strong>Styling : </strong> <span>{data?.tech?.style}</span>
              </div>
            )}
          </div>
        </section>
        <div>{data?.description}</div>
      </section>
    </section>
  );
};

export default PortfolioApp;
