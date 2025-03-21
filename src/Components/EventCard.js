import { ArrowRight, Calendar, Clock, Star, Ticket } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  const navigate = useNavigate();
  const { details } = props;
  console.log(details, "DETAILS");
  const {
    title,
    time,
    date,
    subtitle,
    joinStatus,
    eventType,
    format,
    id,
    startDate,
    startTime,
    image,
  } = details;

  return (
    <div className="md:w-[25rem] sm:w-full m-4 p-4 shadow-lg rounded-2xl">
      <img
        alt="Sample"
        src={image}
        className="rounded-xl md:w-[350px] md:h-[300px] "
      />
      <p
        className={`w-fit p-2 text-sm mt-2 mb-2 rounded-xl font-semibold ${
          eventType === "Free"
            ? "bg-green-200 text-green-800"
            : "bg-red-300 text-red-800"
        }`}
      >
        {eventType.toUpperCase()}
      </p>

      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mb-2 text-muted" tag="h6">
          {subtitle}
        </p>
        <p className="d-flex  items-center gap-2">
          <Calendar size={18} className="gap-2 text-blue-800" />
          {startDate}
        </p>
        <p className="d-flex  items-center gap-2">
          <Clock size={18} className="gap-2 text-blue-800" /> {startTime}
        </p>
        <motion.button
          onClick={() => navigate(`/eventDetails/${id}`)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex mt-4 items-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
        >
          <span className="text-center"> Explore Events</span>
          <ArrowRight size={20} className="text-blue-500" />
        </motion.button>
        <p
          className={`flex items-center mt-2 ${
            joinStatus ? "text-green-700" : "text-purple-700"
          }`}
        >
          <span>
            {joinStatus ? (
              <Ticket className="text-green-600 bg-green-400 p-1 m-1 rounded-xl" />
            ) : (
              <Star className="text-yellow-600 bg-yellow-400 p-1 m-1 rounded-xl" />
            )}
          </span>
          {joinStatus ? "Registered for this Event!" : "Join this Event!"}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
