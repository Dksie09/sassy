import React from 'react'
import { FeatureTitle } from './services/title'
import { FeatureCard, Service1, Service2, Service3, Service4, Service5 } from './services/card'

const features = [
    {
        title: "Lorem Ipsum 1",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        id: "1",
        card: Service1
    },
    {
        title: "Lorem Ipsum 2",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        id: "2",
        card: Service2
    },
    {
        title: "Lorem Ipsum 3",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        id: "3",
        card: Service3
    },
    // {
    //     title: "Lorem Ipsum 4",
    //     desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    //     id: "4",
    //     card: Service4
    // },
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



