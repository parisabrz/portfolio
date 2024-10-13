import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-20" id="">
      <h1 className="heading">
        Kind words from
        <span className="text-purple "> satisfied clients</span>
      </h1>
      <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Clients;
