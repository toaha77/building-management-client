import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // service_cunu1fd

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cunu1fd",
        "template_ejojix2",
        form.current,
        "s-uWxFr-CbcAIgoLL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="text-4xl text-center">For Any Queries Please Contact Us.</h2>
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className=" w-1/2">
          <h2 className="text-3xl text-center">Contact Us</h2>
            <div className=" mt-4">
        <form ref={form} onSubmit={sendEmail}>
         <div>
         <label>Your Name</label>
          <input
            type="text"
            className=" w-full input input-accent"
            placeholder="Your Name"
            name="user_name"
          />
         </div>
          <label>Your Email</label>
          <div>
          <input
            type="email"
            className="  w-full input input-accent"
            placeholder="Your Email"
            name="user_email"
          />
          </div>
        <div>
        <label>Message</label> <br />
          <textarea
            className="input input-accent p-1  rounded-sm   mt-2"
            name="message"
            id=""
            cols="44"
            placeholder="Your Message"
            rows="8"
          ></textarea>
        </div>
         <div className="flex items-center justify-center">
         <input type="submit" className="btn bg-green-500 text-white hover:bg-green-500 text-white" value="Send" />
         </div>
        </form>
      </div>
        </div>
        <div className=" w-1/2">
          <h3 className="text-3xl">Contact Details</h3>
         <p> Plot: 19 & 20, Road: 113/A, Gulshan-02, Dhaka-1212, Bangladesh. </p>
         <p> info@rents.com.bd </p>
         <p> 01618 xxx xxx </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
