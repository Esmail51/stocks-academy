import React from "react";
import Logo from "../assets/images/SS Capital Logo.png";



const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-2xl  shadow-gray-500 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-start">
          {/* Column 1 */}
          <div>
            <img src={Logo} alt="Logo" className="w-32 mb-4" />
            <p className="mt-4 text-sm">
              We are providing high-quality courses..
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-700">Fb.</a>
              <a href="#" className="text-gray-500 hover:text-blue-700">Ig.</a>
              <a href="#" className="text-gray-500 hover:text-blue-700">Tw.</a>
              <a href="#" className="text-gray-500 hover:text-blue-700">Be.</a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-black">Popular courses</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-700">Introduction to Technical Analysis and <br />Understanding the Stock Market</a></li>
              <li><a href="#" className="hover:text-blue-700">In-Depth Technical Analysis Training</a></li>
              <li><a href="#" className="hover:text-blue-700">3-Month Academy Package Inclusive of Both 1+2 (MOST POPULAR)</a></li>
              <li><a href="#" className="hover:text-blue-700">Options 101: An Introduction to Options Trading</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-black">Need help?</h3>
            <p className="mt-4 text-sm">Call us directly?</p>
            <p className="font-bold mt-2">+1 234 567 8910 </p>
            <p className="mt-4 text-sm">Need support?</p>
            <a href="mailto:help@domain.com" className="text-gray-500 hover:text-blue-700">
            ssacademy@strictlystocks.info
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 StrictlyStocks</p>
          <ul className="flex space-x-2 md:space-x-4 mt-4 md:mt-0 ">
            <li><p className="hover:text-blue-700 cursor-pointer" onClick={()=> window.open('/assecibilty', '_blank')}>Accessibility</p></li>
            <li><p className="hover:text-blue-700 cursor-pointer" onClick={()=> window.open('/terms', '_blank')}>Terms & Conditions</p></li>
            <li><a href="#" className="hover:text-blue-700">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-700">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-blue-700">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
