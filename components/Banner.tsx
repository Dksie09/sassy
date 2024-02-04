"use client";

import React from 'react'
import Timeline from './Timeline'
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react"


const Banner = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    return (
        <motion.div ref={ref} className='flex flex-col justify-center items-center mb-52 min-h-screen' style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            <h1 className='text-5xl font-extrabold mb-8'>Not your average AI company</h1>
            <span className=' text-2xl font-extralight '>This is how we work! </span>
            <Timeline />
        </motion.div>
    )
}

export default Banner