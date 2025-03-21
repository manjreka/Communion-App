import React from "react";
import EventForm from "./EventForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

const CreateEvents = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="m-5 pb-5 mb-5">
        <h1 className="md:text-5xl  text-4xl sm:text-center font-bold md:text-start">
          Create a New Event <br />
          <span className="text-slate-700 mt-3">
            ✦ Fill in the details to create your event
          </span>
        </h1>
        <div className="p-2 md:flex md:mt-5 text-xl mb-3">
          <p className="sm:text-center  mb-3 md:w-[60vw] md:text-start">
            Fill out the form below with the key details about your event,
            including date, location, and highlights. Make it engaging to
            attract your audience and ensure everything is set for a successful
            launch.
          </p>
          <div className="flex flex-col justify-center items-center md:w-[40vw]  ">
            <img
              src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275723/avatar-1.d05953acd9d246beba5b_mv4n2u.avif"
              alt="avatar"
              className="lg:w-24 w-[120px]"
            />
            <p>Trusted by Over 15k+ Individuals Worldwide</p>

            <motion.button
              onClick={() => navigate("/events")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex mt-4 items-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
            >
              <span className="text-center"> Explore Events</span>
              <ArrowRight size={20} className="text-blue-500" />
            </motion.button>
          </div>
        </div>
        <EventForm />
      </div>
    </div>
  );
};

export default CreateEvents;
