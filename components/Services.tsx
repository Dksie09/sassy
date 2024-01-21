import React from 'react'
import { FeatureTitle } from './services/title'
import { FeatureCard, Service1, Service2, Service3, Service4, Service5 } from './services/card'

const features = [
    {
        title: " Chatbots",
        desc: "Enhance your Digital Presence with our tailor-made AI chatbots, designed for seamless integration across Telegram, WhatsApp, Discord, and more",
        id: "1",
        card: Service1
    },
    {
        title: "AI Pro",
        desc: "Transforming your vision into reality with bespoke AI solutions, uniquely crafted to meet your specific business needs.",
        id: "2",
        card: Service2
    },
    {
        title: "Websites",
        desc: "Expertly crafted full-stack websites, designed to boost your digital footprint and enhance user engagement, optimized for superior SEO performance.",
        id: "3",
        card: Service3
    },
     {
         title: "AR Solutions",
         desc: "Transform your brand's engagement with innovative AR experiences, crafted by our certified Snapchat Lens Developers",
         id: "4",
         card: Service4
     },
    // {
    //     title: "Lorem Ipsum 5",
    //     desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    //     id: "5",
    //     card: Service5
    // },
]

const Services = () => {
    return (
        <div className='w-full mx-auto min-h-screen px-20'>
            <div className='flex w-full gap-20 items-start'>
                <div className="absolute bottom-32 right-1/4 h-[180px] w-[240px] rounded-full bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#ff01f2] dark:opacity-40 z-[-1]"></div>
                <div className='w-full py-[50vh]'>
                    <ul>
                        {features.map((feature) =>
                            <li key={feature.id}>
                                <FeatureTitle title={feature.title} desc={feature.desc} id={feature.id} />
                            </li>
                        )}
                    </ul>
                </div>
                <div className='w-full sticky top-0 flex items-center min-h-screen justify-center'>
                    <div className="relative aspect-square rounded-2xl w-96 hidden md:flex [&:has(>_.active-card)]:bg-transparent">
                        {features.map((feature) =>
                            <feature.card id={feature.id} key={feature.id} />
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Services;



