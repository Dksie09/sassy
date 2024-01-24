"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "car.png",
    title: "Airebot",
    id: 1,
  },
  {
    url: "app.png",
    title: "WatchTower",
    id: 2,
  },
  {
    url: "car.png",
    title: "Isc Bot",
    id: 3,
  },
  {
    url: "3.jpg",
    title: "SolanaStables",
    id: 4,
  },
  {
    url: "3.jpg",
    title: "SolanaStable",
    id: 5,
  },
  {
    url: "3.jpg",
    title: "SolanaStables",
    id: 6,
  },
];

const Prev = () => {
  return (
    <div className="my-32">
    <h2 className="text-center text-5xl font-extrabold mb-8">Our Projects</h2>
    <div className="overflow-hidden h-auto">
      <HorizontalScrollCarousel />
    </div>
  </div>
);
};

const HorizontalScrollCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="relative">
      <div className="absolute left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer hover:bg-gray-100 hover:bg-opacity-25"
           onClick={() => scroll('left')}>
        <LeftArrowSVG />
      </div>

      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>

      <div className="absolute right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer hover:bg-gray-100 hover:bg-opacity-25"
           onClick={() => scroll('right')}>
        <RightArrowSVG />
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="block">
      <div
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    </a>
  );
};

const LeftArrowSVG = () => (
    <div className="flex items-center justify-center bg-white rounded-full shadow-lg" style={{ width: '40px', height: '40px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div>
  );
  
  const RightArrowSVG = () => (
    <div className="flex items-center justify-center bg-white rounded-full shadow-lg" style={{ width: '40px', height: '40px' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );

export default Prev;
