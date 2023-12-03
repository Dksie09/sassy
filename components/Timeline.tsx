import React from 'react';

const Timeline = () => {
    const steps = [
        "Subscribe to a plan & request your model",
        "Receive your model within a few business days",
        "We'll revise the model until you're 100% satisfied"
    ];

    return (
        <div className="flex justify-between items-start p-4 relative w-full my-14">

            <div className="absolute left-0 right-0 top-3 h-0.5 bg-neutral-500 mt-2"></div>
            <div className="absolute bottom-32 right-1/4 h-[180px] w-[240px] rounded-full bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#ff01f2] dark:opacity-40 z-[-1]"></div>
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative text-center">
                    <div className={`w-3 h-3 bg-pink-500 rounded-full z-10 shadow-glow`}></div>

                    {index !== steps.length - 1 && (
                        <div className="absolute left-full top-0 ml-2 w-4 h-4 border-t border-r border-gray-300 rotate-45"></div>
                    )}

                    <p className=" text-base mt-4 w-32">{step}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
