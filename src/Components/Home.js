import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />
      <motion.div
        className="flex flex-col items-center justify-center w-75% p-5 m-5 font-bold h-[auto] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dins17ov5/image/upload/v1742261261/community_1733043204589_agkypf.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "5px",
          border: "5px solid blue",
          borderRadius: "35px",
        }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Heading Animation */}
        <motion.h1
          className="text-center text-xl md:text-7xl bg-slate-200 p-5 m-2 rounded-3xl"
          initial={{ scale: 0.5, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Connect Communities
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-center text-lg md:text-4xl mt-2 bg-slate-200 p-3 rounded-3xl"
          initial={{ scale: 0.5, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Uniting people from diverse backgrounds, fostering meaningful
          conversations, and building bridges across cultures. With the power of
          technology and a spark of creativity, we bring communities together to
          share, learn, and grow in harmony.{" "}
        </motion.p>
      </motion.div>
      <div className="flex overflow-auto justify-center md:flex-row sm:flex-col md:justify-center md:items-center p-5">
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742261261/community_1733768353778_vb5gaq.jpg"
          alt="community"
          className="w-[auto] min-w-[180px] h-[480px] m-3 rounded-full sm:hidden lg:block"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1739271772/cld-sample.jpg"
          alt="smile"
          className="w-[auto] max-w-[180px] h-[480px] m-3 rounded-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742261261/community_1733769485354_fhmxns.jpg"
          alt="green"
          className="w-[auto] max-w-[180px] h-[480px] m-3 rounded-full sm:hidden lg:block"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1739271764/samples/balloons.jpg"
          alt="nature"
          className="w-auto max-w-[180px] h-[480px] m-3 rounded-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        />
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/moments-3.71fa7813105dddf86c48_bpht46.avif"
          alt="together"
          className="w-[auto] max-w-[180px] h-[480px] m-3 rounded-full sm:hidden lg:block"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        />
        <motion.img
          src="https://res.cloudinary.com/dins17ov5/image/upload/v1742275199/header-img-1.adf1de5fdab6ef84caff_h2yxxd.avif"
          alt="pair"
          className="w-[auto] max-w-[180px] h-[480px] m-3 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        />
      </div>

      <HeroSection />
    </>
  );
};

export default Home;
