import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../components/header";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import ContactUs from "../components/home/constactUs";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full ">
      <div className="lg:px-24 px-5 mt-5 ">
      <h2 className="text-4xl font-medium text-gray-700 mb-10 lg:text-center text-start ">Contact</h2>


      <div className="flex lg:items-start items-center  lg:flex-row flex-col-reverse rounded-lg shadow-lg px-5 pb-5">

        {/* Left Section */}
        <div className="lg:w-1/2  my-auto">

          <ContactUs></ContactUs>

        </div>



        <div className=" lg:w-1/2  flex justify-center items-start">
          <div className="bg-white px-8  w-full max-w-4xl">
            <div className="">


              {/* Right Section */}
              <div className="w-full  lg:mx-auto px-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:px-16 text-start">
                  <div>
                    <label className="block text-gray-700">Name*</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full p-2 border ${errors.name ? "border-Red-500" : "border-gray-300"
                        } rounded`}
                    />
                    {errors.name && <p className="text-Red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Email Address*</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className={`w-full p-2 border ${errors.email ? "border-Red-500" : "border-gray-300"
                        } rounded`}
                    />
                    {errors.email && <p className="text-Red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone*</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className={`w-full p-2 border ${errors.phone ? "border-Red-500" : "border-gray-300"
                        } rounded`}
                    />
                    {errors.phone && <p className="text-Red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea
                      {...register("message")}
                      className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-googleBlue-500 text-white py-2 px-4 rounded hover:bg-purple-100 hover:text-black transition"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>


          </div>

        </div>

      </div>
     

      </div>

      <div className="w-full flex lg:justify-around bg-white p-8 mt-3 rounded-lg shadow-lg  mb-5 flex-wrap text-start">
              <div className="mb-4 flex items-center">
                <IoLocationOutline className="text-googleBlue-500 text-2xl mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold">Our Address</h3>
                  <p className="text-gray-600">1564 Goosetown Drive, Matthews, NC 28105</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <IoTimeOutline className="text-googleBlue-500 text-2xl mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold">Hours Of Operation</h3>
                  <p className="text-gray-600">Mon - Fri: 9.00am to 5.00pm</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <IoCallOutline className="text-googleBlue-500 text-2xl mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold">Contact</h3>
                  <p className="text-gray-600">+99-35895-4565</p>
                  <p className="text-gray-600">ssacademy@strictlystocks.info</p>
                </div>
              </div>
            </div>
      

    </div>
  );
};

export default ContactForm;


