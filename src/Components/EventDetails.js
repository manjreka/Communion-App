import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/config";
import {
  Calendar,
  Clock,
  Locate,
  LocateFixedIcon,
  LocateIcon,
  MapIcon,
  Ticket,
} from "lucide-react";
import Header from "./Header";

const EventDetails = () => {
  const [details, setEvent] = useState(null);
  const { id } = useParams();

  console.log(id);

  const fetchEvent = async () => {
    try {
      const docRef = doc(db, "events", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center m-5">
        <img
          src={details?.image}
          alt="event"
          className="w-[55vw] h-[55vh] md:h-[80vh] m-3 rounded-xl"
        />
        <p className="text-start ">{details?.category}</p>
        <h1 className="text-center text-3xl font-bold">{details?.title}</h1>
        <div className="flex flex-col md:flex-row gap-5 m-5 bg-slate-100 p-5">
          <div className="flex items-center w-[85vw] md:w-[25vw] gap-4 border-2 border-blue-500 p-2 rounded-lg">
            <Clock className="text-blue-500" />

            <div className="flex flex-col">
              <p className="font-semibold">
                {details?.startDate}, {details?.startTime}
              </p>

              <button
                className="flex items-center gap-2 text-blue-600 hover:underline mt-1"
                onClick={() => window.open(details?.calendarLink, "_blank")}
              >
                <Calendar className="w-5 h-5" />
                Add to my calendar
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 border-2 border-blue-500 p-2 rounded-lg">
            <LocateFixedIcon size={45} className="text-blue-500" />

            <div className="flex flex-col">
              <p className="font-semibold">{details?.location.address}</p>

              <button
                className="flex items-center gap-2 text-blue-600 hover:underline mt-1"
                onClick={() => window.open(details?.calendarLink, "_blank")}
              >
                <MapIcon className="w-5 h-5" />
                See location on Map
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 border-2 border-blue-500 p-2 rounded-lg">
            <Ticket size={45} className="text-blue-500" />

            <div className="flex flex-col">
              <p className="font-semibold">
                {details?.eventType} Event, {details?.spots} Spots Availaible
                are {details?.capacity}, {details?.format} mode
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">About this Event</h2>
          <p className="text-slate-800 text-lg">{details?.description}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
