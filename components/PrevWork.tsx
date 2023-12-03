"use client";

import { motion, useTransform, useScroll, useViewportScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react"


const Prev = () => {
    return (
        <div className="my-32 overflow-hidden h-auto">
            <HorizontalScrollCarousel />
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
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
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
        title: "Title 1",
        id: 1,
    },
    {
        url: "app.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "car.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "3.jpg",
        title: "Title 4",
        id: 4,
    },

];