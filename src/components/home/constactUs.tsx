import React from "react";

const ContactUs =()=> {
  return (
    <section  className="  lg:pt-0 pt-5 w-full h-full  bg-gray-100">
      <div className="max-w-7xl lg:max-w-full w-full h-full mx-auto ">
          {/* Right Section: Map */}
          <div className="relative h-full">
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
    </section>
  );
};

export default ContactUs;
