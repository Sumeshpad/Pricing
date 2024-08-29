import React from "react";

const Pricing = () => {
  return (

    
    <div className="bg-white py-20 font-sans">
      
      <div className="max-w-6xl mx-auto text-center mb-10 ">
      <div className="flex justify-center mb-4">
    <div className="inline-block text-xs bg-zinc-100 rounded-full shadow-sm px-4 py-1">
      <p className="tracking-wider">PRICING</p>
    </div>
  </div>
        <h1 className="text-6xl font-normal">Choose a plan <br/>
        that fits your needs</h1>
        <p className="text-gray-400 mt-4">
          ToDesktop is your end-to-end Electron partner — offering effortless<br/>
          deployment, robust security, and seamless auto-updates.
        </p>
      </div>

      <div className="flex justify-center space-x-6">




        {/* Essential Plan */}
        <div className="bg-zinc-100 p-1 rounded-xl shadow-md w-80">
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8" >
          <h2 className="text-2xl font-normal">Essential</h2>

          <p className="text-gray-400 mt-4 pr-6 text-xs">
          For simple desktop apps and <br/>solo developers.
        </p>
          </div>

          <div className="px-5">
          <p className="text-4xl font-medium my-5">$100<span className="text-sm text-gray-400 font-normal"> / Month</span></p>

          <button className="bg-white font-medium shadow-md text-black py-2 px-8 text-sm rounded-full w-full">
            Get started with Essential
          </button>
          <ul className="text-gray-700 pt-14 space-y-4 mb-6">
            <li className="text-gray-400 text-gray-500 text-xs">ESSENTIAL PLAN INCLUDES:</li>
            <li className="text-gray-400" ><strong className="text-gray-500">35</strong> builds/month</li>
            <li className="text-gray-400"><strong className="text-gray-500">30</strong> day build retention</li>
            <li className="text-gray-400"><strong className="text-gray-500">5,000</strong> downloads/month</li>
            <li className="text-gray-400"> Windows, Mac & Linux build servers</li>
            <li className="text-gray-400">Code signing</li>
            <li className="text-gray-400">Auto updates</li>
            <li className="text-gray-400">Native app installers</li>
            <li className="text-gray-400">Native module rebuilding</li>
            <li className="text-gray-400">Build validation checks</li>
            <li className="text-gray-400">CDN-backed downloads/updates</li>
            <li className="text-gray-400">Download links on your domain</li>
          </ul>
          </div>
        </div>

 {/* Performance Plan */}
        <div className="bg-stone-900 text-white p-1  rounded-xl shadow-md w-80">
          
        <div className="bg-stone-800 p-6 rounded-xl shadow-md mb-8" >
          <h2 className="text-2xl font-normal">Performance</h2>

          <p className="text-gray-400 mt-4 pr-6 text-xs">
          For sophisticated desktop apps <br/> and small teams.
        </p>
          </div>

          <div className="px-5">
          <p className="text-4xl font-medium my-5">$300<span className="text-lg font-normal"> / Month</span></p>
          <button className="bg-blue-700 text-white py-2 px-8 rounded-full text-sm">
          Get started with Performance
          </button>
          <ul className="pt-14 space-y-4 mb-6">
            <li className="ext-gray-400 text-gray-500 text-xs">EVERYTHING IN ESSENTIAL PLUS:</li>
            <li className="text-gray-400" ><strong className="text-white">120</strong> builds/month</li>
            <li className="text-gray-400"><strong className="text-white">60</strong> day build retention</li>
            <li className="text-gray-400"><strong className="text-white">15,000</strong> downloads/month</li>
            <li className="text-gray-400"> Download analytics</li>
            <li className="text-gray-400">Build analytics</li>
            <li className="text-gray-400">Windows & Mac web installers</li>
            <li className="text-gray-400">Shared Slack-channel support</li>
            <li className="text-gray-400">MSI installers</li>
           
          </ul>
          </div>
        </div>

        {/* Scale Plan */}


        
        <div className="bg-zinc-100 p-1 rounded-xl shadow-md w-80">
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8" >
          <h2 className="text-2xl font-normal">Scale</h2>

          <p className="text-gray-400 mt-4 pr-6 text-xs">
          For advanced features and <br/>dedicated support.
        </p>
          </div>

          <div className="px-5">
          <p className="text-4xl font-medium my-5">$1200<span className="text-sm text-gray-400 font-normal"> / Month</span></p>

          <button className="bg-white font-medium shadow-md text-black py-2 px-8 text-sm rounded-full w-full">
            Get started with Scale
          </button>
          <ul className="text-gray-700 pt-14 space-y-4 mb-6">
            <li className="ext-gray-400 text-gray-500 text-xs">EVERYTHING IN ESSENTIAL PLUS:</li>
            <li className="text-gray-400" ><strong className="text-gray-500">1000</strong> builds/month</li>
            <li className="text-gray-400"><strong className="text-gray-500">90</strong> day build retention</li>
            <li className="text-gray-400"><strong className="text-gray-500">60,000</strong> downloads/month</li>
            <li className="text-gray-400"> Support for staggered rollouts</li>
            <li className="text-gray-400">Auto-update smoke testing</li>
            <li className="text-gray-400">Account manager</li>
            <li className="text-gray-400">Priority support & onboarding</li>
            <li className="text-gray-400">Integration assistance</li>
            
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;