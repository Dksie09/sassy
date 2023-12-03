"use client"

import { CustomTitleProps } from "@/types"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { useServiceStore } from "./store"
import { stat } from "fs"

export const FeatureTitle = ({ title, desc, id }: CustomTitleProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", });
    const setInViewService = useServiceStore(state => state.setInViewService);

    useEffect(() => {
        if (isInView) { setInViewService(id) };
    }, [isInView, id, setInViewService])


    const opacityClass = isInView ? 'opacity-100' : 'opacity-20';

    console.log(isInView, title)

    return (
        <p ref={ref} className={`p-16 text-4xl font-bold  transition-opacity ${opacityClass}`}>
            {title}<br /><span className='opacity-80 text-3xl font-thin'>{desc}</span>
        </p>
    )
}