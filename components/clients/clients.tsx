import React from 'react';
import google from '../../public/prop1.png'; // Adjust the path accordingly
import slack from '../../public/prop1.png';
import atlassian from '../../public/prop1.png';
import dropbox from '../../public/prop1.png';
import shopify from '../../public/prop1.png';

const Clients: React.FC = () => (
  <div className="flex flex-wrap justify-center items-center p-4">
    {/* Text Element at the top */}
    <div className="w-full text-center text-5xl font-extrabold mb-5">
      Our Clients
    </div>

    {/* Clients Logo Section */}
    <div className="flex-1 max-w-[150px] min-w-[120px] m-4 justify-center items-center">
      <img src={google.src} alt="Google" />
    </div>
    <div className="flex-1 max-w-[150px] min-w-[120px] m-4 justify-center items-center">
      <img src={slack.src} alt="Slack" />
    </div>
    <div className="flex-1 max-w-[150px] min-w-[120px] m-4 justify-center items-center">
      <img src={atlassian.src} alt="Atlassian" />
    </div>
    <div className="flex-1 max-w-[150px] min-w-[120px] m-4 justify-center items-center">
      <img src={dropbox.src} alt="Dropbox" />
    </div>
    <div className="flex-1 max-w-[150px] min-w-[120px] m-4 justify-center items-center">
      <img src={shopify.src} alt="Shopify" />
    </div>
  </div>
);

export default Clients;
