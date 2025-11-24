import { useEffect, useRef } from "react";
import useFlippingCardScroll from "./useFlippingCardScroll";

function FlippingCardScroll({ title, cards }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useFlippingCardScroll({
    sectionRef,
    headerRef,
    containerRef,
    cardRefs,
  });

  return (
    <section
      ref={sectionRef}
      className="sticky w-full h-svh p-8 bg-bg text-fg flex justify-center items-center max-[1000px]:h-max max-[1000px]:py-16 max-[1000px]:px-8 max-[1000px]:flex-col"
    >
      <div
        ref={headerRef}
        className="sticky-header absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0 max-[1000px]:translate-x-0 max-[1000px]:translate-y-0 max-[1000px]:mb-16"
      >
        <h1 className="relative text-center text-6xl font-medium leading-none will-change-transform translate-y-10 opacity-0 max-[1000px]:text-5xl max-[1000px]:opacity-100">
          {title}
        </h1>
      </div>

      <div
        ref={containerRef}
        className="card-container relative w-3/4 flex translate-y-10 max-lg:w-full max-lg:flex-col max-lg:gap-8"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            id={card.id}
            className={`card relative flex-1 aspect-5/7 origin-top ${card.roundedClass} max-lg:w-full max-lg:max-w-[400px] max-lg:mx-auto max-lg:rounded-[20px]! max-lg:transform-none!`}
          >
            <div className="card-front absolute inset-0 rounded-[inherit] overflow-hidden backface-hidden">
              <img
                src={card.frontImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`card-back absolute inset-0 rounded-[inherit] overflow-hidden backface-hidden flex justify-center items-center text-center transform-[rotateY(180deg)] p-8 ${card.backBgColor} ${card.backTextColor} max-lg:transform-none!`}
            >
              <span className="absolute top-8 left-8 opacity-40">
                ( {card.number} )
              </span>
              <p className="text-3xl font-medium leading-none">
                {card.backText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlippingCardScroll;
