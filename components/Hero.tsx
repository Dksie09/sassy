import React from 'react';
import Prev from './PrevWork';

const Hero = () => {
    return (
        <div className="flex flex-col mh-[90vh]">
            <img src='prop2.png' className='absolute left-10 bottom-32 hidden md:inline animate-float'></img>

            <img src='prop3.png' className='absolute right-10 top-10 hidden md:inline animate-float'></img>

            {/* Adjusted the min-h-screen to h-[90vh] to make it slightly smaller than the full screen */}
            <div className="relative flex flex-col items-center p-24 h-[90vh]">
                <span className="z-10 mt-5">SASSY</span>
                <p className="m-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    🚀 Launching Something New!
                </p>

                {/* Blur Spot 1 - New Blob on Left */}
                <div className="absolute top-10 left-1/4 h-[180px] w-[240px] rounded-full bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#ff01f2] dark:opacity-40 z-[-1]"></div>

                {/* Blur Spot 2 */}
                <div className="absolute bottom-32 right-1/4 h-[180px] w-[240px] rounded-full bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#ff01f2] dark:opacity-40 z-[-1]"></div>

                {/* Text Container */}
                <div className='z-10 flex flex-col justify-center items-center m-auto text-center'>

                    <h1 className='text-5xl font-extrabold mb-8'>AI, but with a Twist!</h1>
                    <span className='font-bold mb-1 text-lg'>Custom AI Solutions for Every Business Need - With a Dash of Sass!</span>

                    <a
                        href="http://localhost:3000/"
                        className="mb-6 flex items-center justify-center mt-16 group rounded-lg border-neutral-700 border px-5 py-4 transition-colors hover:border-white hover:dark:bg-neutral-800/30 text-neutral-400 hover:text-white"
                        rel="noopener noreferrer"
                    >
                        <p className="m-0 max-w-[30ch] text-sm ">
                            See Plans
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </p>
                    </a>
                    <h3 className='mb-4 text-sm font-extralight'>Tailor-made AI models that you'll 💗, guaranteed!</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero;
