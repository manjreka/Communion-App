import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gradient-to-b from-slate-500 to-white text-white">
      <div className="p-2 md:flex md:mt-5 text-xl">
        <p className="sm:text-center  mb-3 md:w-[60vw] md:text-start">
          At Communion, we're committed to organizing events that foster
          connections, inspire personal and professional growth, and bring
          people together to share meaningful experiences. From workshops to
          conferences, every event is designed to leave a lasting impact on our
          attendees.
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
      <div className="flex flex-wrap justify-center sm:flex-col md:flex-row overflow-auto">
        <img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742278613/hero-1.e9ab6d260ce2077bcebe_bvqjjs.avif"
          alt="hero-1"
          className="w-full max-w-[300px] h-auto m-3 hidden lg:block rounded-lg"
        />
        <div className="flex flex-col">
          <img
            src="https://res.cloudinary.com/dins17ov5/image/upload/v1742278613/hero-2.1736b71541634509a875_uxlo0f.avif"
            alt="hero-2"
            className="w-full max-w-[300px] h-auto m-3 rounded-lg"
          />
          <img
            src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/hero-3.22dd2495b007dee69115_kouffc.avif"
            alt="hands"
            className="w-full max-w-[300px] h-auto m-3  lg:block rounded-lg"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/hero-4.e21fd57df23920c1d10b_jxgrly.avif"
          alt="holding"
          className="w-full max-w-[330px] h-auto m-3 hidden lg:block rounded-lg"
        />
        <div className="flex flex-col">
          <img
            src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/moments-6.85cf53958c243abba91e_h6rpjg.avif"
            alt="togetherness"
            className="w-full max-w-[300px] h-auto m-3 rounded-lg"
          />
          <img
            src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/hero-5.a3a92fc524360c0dc26e_yl9c2s.avif"
            alt="unity"
            className="w-full max-w-[300px] h-auto m-3 rounded-lg"
          />
        </div>
      </div>

      <div className="text-black text-lg gap-5 m-3">
        <p className="text-center">
          Helping You Connect, Learn, and Thrive ✦ 2x Impact
        </p>
        <div className="flex justify-center w-full m-4 gap-5">
          <h1 className="text-center text-sm">
            <span className="md:text-4xl font-bold">98%</span>
            <br />
            Opportunities Expanded
          </h1>
          <h1 className="text-center text-sm">
            <span className="md:text-4xl font-bold">89%</span> <br />
            Attendees Satisfaction
          </h1>
          <h1 className="text-center text-sm">
            <span className="md:text-4xl font-bold">15K+</span>
            <br />
            Engaged Participants
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
