"use client";
import React, { useRef, useEffect } from 'react';

type Logo = {
    src: string;
    alt: string;
};

const logos: Logo[] = [
    { src: './sass.svg', alt: 'Facebook' },
    { src: './sass.svg', alt: 'Disney' },
    { src: './sass.svg', alt: 'Airbnb' },
    { src: './sass.svg', alt: 'Apple' },
    { src: './sass.svg', alt: 'Spark' },
    { src: './sass.svg', alt: 'Samsung' },
    { src: './sass.svg', alt: 'Quora' },
    { src: './sass.svg', alt: 'Sass' },
];

const LogoCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            const ul = carouselRef.current;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            const nextSiblingElement = ul.nextSibling as HTMLElement; // Type assertion here
            if (nextSiblingElement) {
                nextSiblingElement.setAttribute('aria-hidden', 'true');
            }
        }
    }, []);


    return (
        <div className=" bg-black my-5 w-full flex justify-center items-center">

            <div className="w-full mx-auto px-4 md:px-6 py-5">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image-[linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul ref={carouselRef} className="flex items-center justify-center md:justify-start mx-4 animate-infinite-scroll">
                            {logos.concat(logos).map((logo, index) => (
                                <li key={index < logos.length ? index : `duplicate-${index}`} className="mx-16">
                                    <img src={logo.src} alt={logo.alt} className="max-w-none " />
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
