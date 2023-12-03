import React from 'react';

const PlanBoard = () => {
    const borderStyle = {
        borderColor: '#ff01f2',
        borderWidth: '0.1px', // Thin border as requested
    };

    return (
        <div className='m-10 glowy-border rounded-3xl w-4/5 h-2/3 flex p-8' style={borderStyle}>
            {/* Partition 1: Standard Plan */}
            <div className=' px-8 flex flex-col w-1/3 p-4 border-r space-y-6' style={{ borderColor: '#ff01f2' }}>
                <h2 className='text-3xl font-bold'>Standard</h2>
                <p className='my-2'>One request at a time. Pause or cancel anytime.</p>
                <p className='text-5xl font-semibold py-10'>$4,995/m</p>
                <p>Pause or cancel anytime</p>
                <a
                    href="http://localhost:3000/"
                    className=" flex items-center justify-center mt-16 group rounded-lg border-neutral-700 border px-5 py-4 transition-colors hover:border-white  hover:dark:bg-neutral-800/30 text-neutral-400 hover:text-white"
                    rel="noopener noreferrer"
                >
                    <p className="m-0 max-w-[30ch] text-sm ">
                        Get started
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </p>
                </a>
                {/* ... rest of the content */}
            </div>

            {/* Partition 2: Pro Plan */}
            <div className='flex px-8 flex-col w-1/3 p-4 border-r space-y-6' style={{ borderColor: '#ff01f2' }}>
                <h2 className='text-3xl font-bold'>Pro</h2>
                <p className=''>Double the requests. Pause or cancel anytime.</p>
                <p className='text-5xl font-semibold py-10'>$7,995/m</p>
                <p>Pause or cancel anytime</p>
                <a
                    href="http://localhost:3000/"
                    className=" flex items-center justify-center mt-16 group rounded-lg border-neutral-700 border px-5 py-4 transition-colors hover:border-white  hover:dark:bg-neutral-800/30 text-neutral-400 hover:text-white"
                    rel="noopener noreferrer"
                >
                    <p className="m-0 max-w-[30ch] text-sm ">
                        Get started
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </p>
                </a>
                {/* ... rest of the content */}
            </div>

            {/* Partition 3: Additional Information */}
            <div className='flex px-8 flex-col  w-1/3 p-4 space-y-6'>
                {/* ... rest of the content */}
                <div className='w-full flex  items-center justify-center'>
                    <div>
                        <h2 className='text-2xl font-bold mb-5 top-0'>Book a call</h2>
                        Learn more about how <span className=' font-mono'>sassy</span> works and how it can help you.
                        <a
                            href="http://localhost:3000/"
                            className="flex items-center justify-center mt-8 group rounded-lg border-neutral-700 border px-2 py-4 transition-colors hover:border-white hover:dark:bg-neutral-800/30 text-neutral-400 hover:text-white w-32"
                            rel="noopener noreferrer"
                        >
                            <p className="m-0 text-xs">
                                Book a call
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

                                </span>
                            </p>
                        </a>

                    </div>

                    <img src='phone.png' className=' w-1/2' />

                </div>
                <div className="border-t w-full py-10 flex flex-col justify-center" style={{ borderColor: '#ff01f2' }}>
                    <h2 className='text-2xl font-bold mb-5 top-0'>Refer a friend</h2>
                    Earn 5% monthly recurring commissions for each referral.
                </div>
            </div>
        </div>
    );
};

export default PlanBoard;
