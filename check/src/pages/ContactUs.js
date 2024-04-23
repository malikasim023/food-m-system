import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-lime-300 p-20">
        <div className="flex justify-center items-center h-screen ">
          <div className="border p-10 border-black shadow-2xl rounded-lg p-30">
            <h1 className="my-2 text-3xl text-center">Contact Us</h1>
            <p className="text-md">If you have any questions or feedback.</p>
            <form action="" className="mt-5 items-center">
              {/*Name*/}
              <label htmlFor="name" className="text-lg">
                Name:
              </label>
              <br />
              <input
                type="name"
                id="Name"
                name="Name"
                placeholder="Enter your Name"
                className="border border-black p-2 mb-3 w-full rounded-md"
                required
              />
              <br />
              {/*Email*/}
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Enter your Email"
                className="border border-black p-2 mb-3 w-full rounded-md"
                required
              />
              <br />
              {/*Phone*/}
              <label htmlFor="Phone" className="text-lg">
                Phone:
              </label>
              <br />
              <input
                type="tel"
                id="Phone"
                name="Phone"
                placeholder="Enter your Phone"
                className="border border-black p-2 mb-3 w-full rounded-md"
                required
              />
              <br />
              {/*subject*/}
              <label htmlFor="subject" className="text-lg">
                subject:
              </label>
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                className="border border-black p-2 mb-3 w-full rounded-md"
                required
              />
              <br />
              {/*Message*/}
              <label htmlFor="message" className="text-lg">
                Message:
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Enter your Message"
                className="border border-black p-2 mb-3 w-full rounded-md"
                required
              />
              <br />
              <button className="border border-black mt-5 bg-yellow-400 text-lg w-full p-2 rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
