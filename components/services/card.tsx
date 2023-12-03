"use client";
import { CustomCardProps } from "@/types"
import { CardProps } from "@/types"
import { useServiceStore } from "./store"

export const FeatureCard = ({ gradient, id, children }: CustomCardProps) => {
    const inViewService = useServiceStore((state) => state.inViewService)

    const opacityClass = inViewService == id ? 'opacity-100' : 'opacity-0';

    return (
        <div className={` absolute inset-0 bg-gradient-to-br rounded-2xl w-96 [&:has(>_.active-card)]:bg-transparent ${gradient} ${opacityClass} transition-opacity`}>
            {children}
        </div>
    )
}

export const Service1 = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]" >
            <img src="robo.png" className="" />
        </FeatureCard>
    );
};

export const Service2 = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">

        </FeatureCard>
    );
};

export const Service3 = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]" />
    );
};

export const Service4 = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]" />
    );
};

export const Service5 = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]" />
    );
};