import React from 'react';

// If you have repeating elements like images, consider creating a separate component
const ImageTile: React.FC<{ src: string }> = ({ src }) => (
    <img src={src} className="w-full h-full hover:scale-110 transition duration-500 ease-in-out" alt="" />
);

const Work: React.FC = () => {
    const images = ['./3.jpg', './3.jpg', './3.jpg', './3.jpg']; // Assuming dynamic image sources

    return (
        <div className='w-full flex flex-col items-center justify-center m-20 relative'>
            <div className="flex flex-col items-center justify-center min-h-screen  w-2/3">
                <h1 className="text-5xl font-extrabold mb-4 thread-line">Recent Work</h1>
                <span className="text-2xl font-extralight">Peek a look at what we've been cooking</span>
                <a
                    href="http://localhost:3000/"
                    className="mt-6 flex items-center hover:scale-105 duration-1000 ease-in-out  justify-center group rounded-lg border-neutral-700 border px-5 py-4 transition-colors hover:border-white hover:dark:bg-neutral-800/30 text-neutral-400 hover:text-white"
                    rel="noopener noreferrer"
                >
                    <p className="m-0 max-w-[30ch] text-sm">
                        View more
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </p>
                </a>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-2/3 m-20">
                    {images.map((src, index) => (
                        <ImageTile key={index} src={src} />
                    ))}
                </div>
                <img src="./bfly.png" className="absolute -top-96 opacity-40 z-[-1] left-0 hidden md:inline w-full"></img>
            </div>
        </div>
    );
};

export default Work;
