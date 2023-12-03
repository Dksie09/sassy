import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white w-full  opacity-70">
            {/* <div className='px-20 pb-10 flex justify-between'>
                <div>
                    SASSY
                    <p className="text-gray-400 text-base">
                        See if SASSY is right for you. (It totally is.)
                    </p>
                </div>

                <div className="additional-info mt-5">
                    <p className="text-gray-400 text-base hover:text-white">Based in India</p>
                    <a href="/contact" className="text-gray-400 text-base hover:text-white">Contact Us</a>
                    <ul>
                        <li><a href="/link1" className="text-gray-400 text-base">Link 1</a></li>
                        <li><a href="/link2" className="text-gray-400 text-base">Link 2</a></li>
                        <li><a href="/link3" className="text-gray-400 text-base">Link 3</a></li>
                    </ul>
                </div>
            </div> */}
            <div className="py-6 px-4 bg-neutral-900 w-full">
                <p className="text-center text-gray-400 text-base">
                    &copy; {new Date().getFullYear()} Sassy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
