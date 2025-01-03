import React from "react";
import Logo from "../assets/images/SS Capital Logo.png";



const Footer = () => {
  return (
    <footer className=" text-gray-100   py-10 bg-white shadow-2xl shadow-gray-800" style={{
      
    }}>
      <div className=" lg:px-24 mx-auto px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-start">
          {/* Column 1 */}
          <div className="text-center">
  <img 
    src={Logo} 
    alt="Logo" 
    className="w-36 mb-4 "
    
  />
  <p className="mt-4 text-sm text-start text-gray-700">
    We are providing high-quality courses..
  </p>
  {/* <div className="flex mt-4 space-x-4 justify-center">
    <a href="#" className="hover:text-gray-400">Fb.</a>
    <a href="#" className="hover:text-gray-400">Ig.</a>
    <a href="#" className="hover:text-gray-400">Tw.</a>
    <a href="#" className="hover:text-gray-400">Be.</a>
  </div> */}
</div>


          {/* Column 2 */}
          <div className="text-black">
            <h3 className="text-lg font-semibold text-black">Popular courses</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/intro_to_technical_analysis_and_understanding" className="hover:text-googleBlue-500">Introduction to Technical Analysis and <br />Understanding the Stock Market</a></li>
              <li><a href="/in_depth_technical_analysis_training" className="hover:text-googleBlue-500">In-Depth Technical Analysis Training</a></li>
              {/* <li><a href="#" className="hover:text-gray-400">Membership</a></li> */}
              <li><a href="/an_introduction_to_options_trading" className="hover:text-googleBlue-500">Options 101: An Introduction to Options Trading</a></li>
            </ul>
          </div>

          {/* Column 3 */}


          <div className="w-fit text-black">
            <h3 className="text-lg font-semibold text-black">Membership</h3>
            <p className="mt-4 text-sm hover:text-googleBlue-500 cursor-pointer"><a href="/choose_plan">Semi Annual Membership</a></p>
            <p className="text-sm mt-2 hover:text-googleBlue-500 cursor-pointer"><a href="/choose_plan">Annual Membership</a></p>
         
          </div>



          {/* Column 4 */}
          <div className="text-black">
            <h3 className="text-lg font-semibold text-black">Need help?</h3>
            <p className="mt-4 text-sm">Call us directly?</p>
            <p className="font-bold mt-2">+1 234 567 8910 </p>
            <p className="mt-4 text-sm">Need support?</p>
            <a href="mailto:help@domain.com" className="text-black hover:text-googleBlue-500">
            ssacademy@strictlystocks.info
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t text-black border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Strictlystocks</p>
          <ul className="flex space-x-8 md:space-x-4 mt-4 md:mt-0 ">
            <li><p className="hover:text-googleBlue-500 cursor-pointer" onClick={()=> window.open('/assecibilty', '_blank')}>Accessibility</p></li>
            <li><p className="hover:text-googleBlue-500 cursor-pointer" onClick={()=> window.open('/terms', '_blank')}>Terms & Conditions</p></li>
            <li><a href="#" className="hover:text-googleBlue-500">Privacy Policy</a></li>
            {/* <li><a href="#" className="hover:text-gray-400">Shipping Policy</a></li> */}
            <li><a href="#" className="hover:text-googleBlue-500">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
