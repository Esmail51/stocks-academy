import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-start">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start my-auto">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <i className="text-yellow-500 fas fa-phone-alt text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                  <p className="text-gray-600">1 (819) 425-9324</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <i className="text-yellow-500 fas fa-map-marker-alt text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                  <p className="text-gray-600">
                  500 Terry Francine St. <br />
                  San Francisco, CA 94158, <br />
                USA
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <i className="text-yellow-500 fas fa-envelope text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">E-mail</h3>
                  <p className="text-gray-600">ssacademy@strictlystocks.info</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <i className="text-yellow-500 fas fa-clock text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 8am – 8pm <br />
                    Sat: 9am – 7pm <br />
                    Sun: 9am – 9pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1635937636014!2d-122.41941508440138!3d37.77492977975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f9e03a53%3A0x1a5c9b9a6e6c6726!2s500%20Terry%20Francine%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2sin!4v1693095475728!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="border rounded-lg shadow-lg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
