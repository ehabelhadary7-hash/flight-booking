import React from "react";
import Staly from './Contact.module.css'

const Contact = () => {
  return (
    <div className="w-full "   
    style={{
      backgroundImage:
      "url('/imge/images (1).jfif')",
    }}>
      {/* Top Background */}
      <div className="from-blue-900 to-blue-600 h-80"></div>

      {/* Contact Card */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 md:p-12 -mt-52">

          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Contact Us
          </h2>

          <form className="space-y-6">

            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-gray-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-700 text-white rounded-xl p-4 outline-none border border-transparent focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full bg-gray-700 text-white rounded-xl p-4 outline-none border border-transparent focus:border-blue-500"
                />
              </div>

            </div>

            {/* Subject */}

            <div>

              <label className="block text-gray-300 mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-700 text-white rounded-xl p-4 outline-none border border-transparent focus:border-blue-500"
              />

            </div>

            {/* Message */}

            <div>

              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full bg-gray-700 text-white rounded-xl p-4 outline-none border border-transparent focus:border-blue-500 resize-none"
              ></textarea>

            </div>

            {/* Button */}

            <div className="flex justify-center">

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-10 py-4 rounded-xl"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;