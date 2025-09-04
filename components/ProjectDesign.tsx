"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { gridItemsDesign } from "@/data/index";

export const ProjectDesign = () => {
  const cards = gridItemsDesign.map((card, index) => (
    <Card
      key={card.img || card.title}
      card={{
        category: card.title,
        title: card.description,
        src: card.img || "https://via.placeholder.com/500", // Fallback image if none provided
        content: (
          <DummyContent
            img1={card.img1 || card.img}
            img2={card.img2 || card.spareImg}
            img3={card.img3}
            explanation={card.explanation}
          />
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore My Design Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = ({
  img1,
  img2,
  img3,
  explanation,
}: {
  img1?: string;
  img2?: string;
  img3?: string;
  explanation?: string;
}) => {
  const images = [img1, img2, img3].filter(Boolean); // Filter out undefined/null images
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {explanation ? "Project Highlight" : "Discover the Design"}
            </span>{" "}
            {explanation ||
              "This project showcases thoughtful design choices, from typography to color palettes, crafted to elevate the brand experience."}
          </p>
          {images[index] && (
            <img
              src={images[index]}
              alt={`Project image ${index + 1}`}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          )}
        </div>
      ))}
    </>
  );
};
