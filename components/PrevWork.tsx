"use client";

import { motion, useTransform, useScroll, useViewportScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react"

const Prev = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    // Slower rotation rate: Adjust the divisor to control the rotation speed more finely.
    const newRotation = (window.scrollY / 40); // Increased the divisor for a slower rotation
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mb-16 h-auto relative">
      {/* <img
        src='./heart.png'
        className="w-1/4 z-10 absolute -top-48 right-32" // Position a bit to the right initially
        style={{ transform: `rotate(${rotation}deg) translateX(50px)` }} // Added translateX(50px) for initial right offset
      /> */}
      <div className="z-0">
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};


const HorizontalScrollCarousel = () => {
  const cardWidth = 450; // width of each card
  const gap = 25; // gap between cards
  const totalWidth = cards.length * cardWidth + (cards.length - 1) * gap; // total width of all cards including gaps

  // State to store the viewport width
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Update the viewport width when the component mounts
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
    }
  }, []);

  const carouselContainerWidth = viewportWidth - 20; // Reduced width, 20px less than the viewport
  const endRange = `-${totalWidth - carouselContainerWidth - 100}px`;

  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endRange]);

  const carouselHeight = '450px'; // Match this with your card height

  return (
    <section className="relative" style={{ height: carouselHeight, width: `${carouselContainerWidth}px` }}>
      <div className="top-0 flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          initial={{ x: 0 }}
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};



const Card = ({ card }: { card: CardType }) => {

  return (
    <div
      key={card.id}
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
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Prev;

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
    url: "3.jpg",
    title: "WatchTower",
    id: 2,
  },
  {
    url: "app.png",
    title: "Isc Bot",
    id: 3,
  },
  {
    url: "3.jpg",
    title: "SolanaStables",
    id: 4,
  },
  {
    url: "app.png",
    title: "SolanaStable",
    id: 4,
  },
  {
    url: "car.png",
    title: "SolanaStables",
    id: 4,
  },];