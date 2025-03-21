import React from "react";
// import { events } from "../Data/sampleData";
import EventCard from "./EventCard";
import Header from "./Header";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEvents(eventsArray);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  console.log(events, "RETRIVED INFORMATION");

  return (
    <div>
      <Header />
      <ul className="md:flex md:flex-wrap justify-center ">
        {events.map((event) => (
          <EventCard key={event.id} details={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
