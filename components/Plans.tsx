"use client";

import React from 'react'
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react"
import PlanBoard from './PlanBoard';

const Plans = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    return (
        <motion.div ref={ref} className='flex flex-col justify-center items-center min-h-screen w-full m-20' style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            <h1 className='text-5xl font-extrabold mb-4'>Membership plans</h1>
            <span className=' text-2xl font-extralight '>Choose a plan that's right for you.</span>
            <PlanBoard />

        </motion.div>
    )
}

export default Plans